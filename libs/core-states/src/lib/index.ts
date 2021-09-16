import { ActionReducerMap } from "@ngrx/store";
import * as fromIdeas from './ideas/ideas.reducer';

export interface AppState {
    [fromIdeas.IDEA_FEATURE_KEY]: fromIdeas.IdeaState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromIdeas.IDEA_FEATURE_KEY]: fromIdeas.ideaReducer
};