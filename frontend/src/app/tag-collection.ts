import {
  FormArray,
  FormBuilder,
  AbstractControl,
  FormGroup
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  pluck,
  filter,
  map
} from 'rxjs/operators';
import { Tag, TagService } from './tag.service';

export class TagCollection {
  private _tags:  FormArray;
  private _tagsObject: Tag[] = [];
  private _builder: FormBuilder;
  private _tagService: TagService;
  public searching = false;
  public tagsForm: FormGroup;

  get tags(): Tag[] {
    return this._tagsObject;
  }

  get controls(): AbstractControl[] {
    return this._tags.controls;
  }

  constructor(
    tagsFormArray: FormArray,
    builder: FormBuilder,
    tagService: TagService
  ) {
    this._tags = tagsFormArray;
    this._builder = builder;
    this._tagService = tagService;

    this.tagsForm = this._builder.group({tag: ['']});

    this.tagsForm.valueChanges.pipe(
      pluck('tag'),
      filter((tag) => tag !== undefined)
    )
    .subscribe((tag) => this.add(tag));
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((term) => term.length > 2),
      tap(() => this.searching = true),
      switchMap((term: string) =>
        this._tagService.lookup(term).pipe(
          map((tags) => {
            return tags.filter((tag) => {
              return !this._tagsObject
              .map((t) => t.id)
              .includes(tag.id);
            });
          }),
          catchError(() => of([]))
        )
      ),
      tap(() => this.searching = false)
    )

  add(tag: Tag) {
    this._tags.push(
      this._builder.control(tag.id)
    );
    this._tagsObject.push(tag);
  }

  delete(index: number) {
    this._tags.removeAt(index);
    this._tagsObject.splice(index, 1);
  }
}
