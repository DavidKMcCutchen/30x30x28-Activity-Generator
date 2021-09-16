import { Idea } from "@activity-ideas-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as IdeaActions from './ideas.actions';

export const IDEA_FEATURE_KEY = 'ideas';

export interface IdeaState extends EntityState<Idea> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface IdeaPartialState {
    readonly [IDEA_FEATURE_KEY]: IdeaState
};

export const ideaAdapter: EntityAdapter<Idea> = createEntityAdapter<Idea>({ selectId: (i) => i.key});

export const initialIdeaState: IdeaState = ideaAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): IdeaState => ({ ...state, error});

const onDispatch = (state, action): IdeaState => ({
    ...state,
    loaded: false,
    error: null
});

const _ideaReducer = createReducer(
    initialIdeaState,
    on(
        IdeaActions.loadIdeaFailed,
        IdeaActions.loadIdeasFailed,
        IdeaActions.createIdeaFailed,
        IdeaActions.updateIdeaFailed,
        IdeaActions.deleteIdeaFailed,
        onFailed
    ),
    on(
        IdeaActions.loadIdea,
        IdeaActions.loadIdeas,
        IdeaActions.createIdea,
        IdeaActions.updateIdea,
        IdeaActions.deleteIdea,
        onDispatch
    ),
    on(
        IdeaActions.loadIdeaSuccess, (state, { idea }) =>
        ideaAdapter.upsertOne(idea, {...state, loaded: true})
    ),
    on(
        IdeaActions.selectIdea, (state, { ideaId }) => ({
            ...state,
            selectedId: ideaId
        })
    ),
    on(
        IdeaActions.loadIdeasSuccess, (state, { ideas }) =>
        ideaAdapter.setAll(ideas, {...state, loaded: true})
    ),
    on(
        IdeaActions.deleteIdeaSuccess, (state, { idea }) =>
        ideaAdapter.removeOne(idea.key, {...state, loaded: true})
    ),
    on(
        IdeaActions.updateIdeaSuccess, (state, { idea }) =>
        ideaAdapter.updateOne(
            {id: idea.key, changes: idea},
            {...state, loaded: true}
        )
    ),
    on(
        IdeaActions.createIdeaSuccess, (state, {idea }) =>
        ideaAdapter.addOne(idea, {...state, loaded: true})
    ),
)

export function ideaReducer(
    state: IdeaState | undefined,
    action: Action
) {
    return _ideaReducer(state, action)
}