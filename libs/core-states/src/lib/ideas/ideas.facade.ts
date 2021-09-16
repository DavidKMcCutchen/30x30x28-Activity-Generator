import { Injectable } from "@angular/core";
import { Idea } from "@activity-ideas-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as IdeaActions from './ideas.actions';
import * as IdeaSelectors from './ideas.selectors';
import * as fromIdeas from './ideas.reducer';


@Injectable({
    providedIn: 'root'
})

export class IdeaFacade {
    allIdeas$ = this.store.pipe(
        map((state) => IdeaSelectors.getAllIdeas(state)),
    )
    selectedIdeas$ = this.store.pipe(select(IdeaSelectors.getSelectedIdea));
    loaded$ = this.store.pipe(select(IdeaSelectors.getIdeasLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === IdeaActions.createIdea({} as any) .type ||
        action.type === IdeaActions.updateIdea({} as any) .type ||
        action.type === IdeaActions.deleteIdea({} as any) .type
        ))

        selectIdea(ideaId: string) {
            this.dispatch(IdeaActions.selectIdea({ ideaId }));
        };

        loadIdeas() {
            this.dispatch(IdeaActions.loadIdeas())
        };

        loadIdea(ideaId: string) {
            this.dispatch(IdeaActions.loadIdea({ ideaId }))
        };

        saveIdea(idea: Idea) {
            idea.key ? this.updateIdea(idea) : this.createIdea(idea)
        };

        createIdea(idea: Idea) {
            this.dispatch(IdeaActions.createIdea({ idea }))
        };

        updateIdea(idea: Idea) {
            this.dispatch(IdeaActions.updateIdea({ idea }))
        };

        deleteIdea(idea: Idea) {
            this.dispatch(IdeaActions.deleteIdea({ idea }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromIdeas.IdeaPartialState>,
            private actions$: ActionsSubject
        ) {}
}