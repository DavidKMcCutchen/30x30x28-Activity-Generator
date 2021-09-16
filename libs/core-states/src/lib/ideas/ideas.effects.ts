import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Idea } from "@activity-ideas-app/api-interfaces";
import { IdeasService } from "@activity-ideas-app/core-data";
import * as IdeaActions from './ideas.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class IdeaEffects{
    loadIdea$ = createEffect(() =>
        this.actions$.pipe(
            ofType(IdeaActions.loadIdea),
            fetch({
                run: (action) =>
                    this.ideasService
                        .getOne(action.ideaId)
                        .pipe(map((idea: Idea) => IdeaActions.loadIdeaSuccess({ idea }))),
                    onError: (action, error) => IdeaActions.loadIdeaFailed({ error })    
            })
        ));
    loadIdeas$ = createEffect(() =>
        this.actions$.pipe(
            ofType(IdeaActions.loadIdeas),
            fetch({
                run: () =>
                    this.ideasService
                    .getAll()
                    .pipe(
                        map((ideas: Idea[]) => IdeaActions.loadIdeasSuccess({ ideas }))
                    ),
                onError: (action, error) => IdeaActions.loadIdeasFailed({ error })    
            })
        ));
    //     createIdea$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(IdeaActions.createIdea),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.ideasService
    //                     .create(action.idea)
    //                     .pipe(map((idea: Idea) => IdeaActions.createIdeaSuccess({ idea }))),
    //                 onError: (action, error) => IdeaActions.createIdeaFailed({ error })    
    //         })
    // ));

    // updateIdea$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(IdeaActions.updateIdea),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.ideasService
    //                     .update(action.idea)
    //                     .pipe(map((idea: Idea) => IdeaActions.updateIdeaSuccess({ idea}))),
    //                 onError: (action, error) => IdeaActions.updateIdeaFailed({ error })    
    //         })
    // ));

    // deleteIdea$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(IdeaActions.deleteIdea),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.ideasService
    //                     .delete(action.idea)
    //                     .pipe(
    //                         map(() => IdeaActions.deleteIdeaSuccess({ idea: action.idea }))
    //                     ),
    //                 onError: (action, error) => IdeaActions.deleteIdeaFailed({ error })
    //         })
    //     ));


    constructor(
        private actions$: Actions,
        private ideasService: IdeasService
    ) {}
}