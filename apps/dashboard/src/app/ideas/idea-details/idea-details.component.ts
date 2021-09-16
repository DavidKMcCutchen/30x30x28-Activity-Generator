import { Idea } from '@activity-ideas-app/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'activity-ideas-app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.scss']
})
export class IdeaDetailsComponent {
  currentIdea: Idea;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set idea(value) {
    if (value) this.originalTitle = value.activity;
    this.currentIdea = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
