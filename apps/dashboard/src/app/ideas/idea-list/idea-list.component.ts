import { Idea } from '@activity-ideas-app/api-interfaces';
import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'activity-ideas-app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent {
  @Input() ideas: Idea[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() ideaViewed = new EventEmitter();
}
