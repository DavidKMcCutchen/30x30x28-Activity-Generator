import { Idea, emptyIdea } from '@activity-ideas-app/api-interfaces';
import { IdeaFacade } from '@activity-ideas-app/core-states';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'activity-ideas-app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  allIdeas$: Observable<Idea[]> = this.ideaFacade.allIdeas$;
  selectedIdea$: Observable<Idea> = this.ideaFacade.selectedIdeas$;

  form: FormGroup;

  constructor(
    private ideaFacade: IdeaFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.ideaFacade.mutations$.subscribe((_) => this.resetIdea());
  }

  ngOnInit() {
    this.initForm();
    this.ideaFacade.loadIdeas();
    this.resetIdea()

    const ideaRouteId = this.route.snapshot.params['id'];

    if (ideaRouteId) {
      this.loadIdea((ideaRouteId))
    }
  }

  viewIdea(ideaId: string) {
    this.router.navigate(["ideas", ideaId])
  }

  loadIdea(ideaId: string) {
    this.ideaFacade.selectIdea(ideaId);
    this.ideaFacade.loadIdea(ideaId);
  }

  selectIdea(idea: Idea) {
    this.ideaFacade.selectIdea(idea.key)
    this.form.patchValue(idea);
  }

  saveIdea(idea: Idea) {
    this.ideaFacade.saveIdea(idea);
  }

  deleteIdea(idea: Idea) {
    this.ideaFacade.deleteIdea(idea);
  }

  resetIdea() {
    this.form.reset();
    this.selectIdea(emptyIdea)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      activity: [''],
      type: [''],
      participants: [''],
      price: [''],
      link: [''],
      key: [''],
      accessibility: ['']
    })
  }
}
