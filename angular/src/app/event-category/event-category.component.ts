import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SpeakerService } from '../shared/speaker.service';
import { Presentation } from '../shared/presentation/presentation';
import { Speaker } from '../shared/speaker/speaker';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { PresentationSpeakerService } from '../shared/presentation-speaker.service';
import { startWith, map } from 'rxjs/operators';
import { Category } from '../shared/category/category';
import { CategoryService } from '../shared/category.service';
import { EventCategoryService } from '../shared/event-category.service';
import { Event } from '../shared/event/event';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss']
})
export class EventCategoryComponent {
  @Input() event: Event;
  allCategories: Category[] = [];
  categoryForm = new FormControl();
  filteredCategories: Observable<Category[] | string[]>;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  /*fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];*/

  @ViewChild('categoryInput', { static: true }) categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;

  constructor(
    private categoryService: CategoryService,
    private eventCategoryService: EventCategoryService
  ) {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategories()
      .subscribe((categories) => {
        this.allCategories = categories;

        this.filteredCategories = this.categoryForm.valueChanges.pipe (
          startWith(null),
          map((value: string | null) => value ?
            this._filter(this.allCategories.filter((category) => !this.event.categories.some((cat) => cat.id === category.id)), value) :
            this.allCategories.filter((category) => !this.event.categories.some((cat) => cat.id === category.id)))
        );
      });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
/*      if ((value || '').trim()) {
        this.speakers.push(value);
      }*/

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.categoryForm.setValue(null);
    }
  }

  remove(category: Category): void {
      this.eventCategoryService.deleteEventCategory({
        event_id: this.event.id,
        category_id: category.id
      }).subscribe((eventCategory) => {
        const index = this.event.categories.indexOf(<Category>eventCategory.category_id);
        this.event.categories.splice(index, 1);
      });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.event.categories.push(event.option.value);
    this.categoryInput.nativeElement.value = '';
    this.categoryForm.setValue(null);
    this.eventCategoryService.createEventCategory({
      id: undefined,
      event_id: this.event.id,
      category_id: event.option.value.id
    }).subscribe( (eventCateory) => {
      // success
    });
  }

  private _filter(categories: Category[], value: any): Category[] {
    if (!value.toLowerCase) {
      return [value];
    }
    const filterValue = (<string>value).toLowerCase();
    return categories.filter(category => {
      return category.name.toLowerCase().includes(filterValue);
    });
  }

}
