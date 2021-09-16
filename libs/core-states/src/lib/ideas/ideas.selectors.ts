import { emptyIdea } from "@activity-ideas-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ideaAdapter, IdeaState, IDEA_FEATURE_KEY } from "./ideas.reducer";

export const getIdeaState = createFeatureSelector<IdeaState>(IDEA_FEATURE_KEY);

const { selectAll, selectEntities } = ideaAdapter.getSelectors();

export const getIdeasLoaded = createSelector(
    getIdeaState,
    (state: IdeaState) => state.loaded
);

export const getIdeaError = createSelector(
    getIdeaState,
    (state: IdeaState) => state.error
);

export const getAllIdeas = createSelector(
    getIdeaState,
    (state: IdeaState) => selectAll(state)
);

export const getIdeaEntities = createSelector(
    getIdeaState,
    (state: IdeaState) => selectEntities(state)
);

export const getSelectedIdeaId = createSelector(
    getIdeaState,
    (state: IdeaState) => state.selectedId
);

export const getSelectedIdea = createSelector(
    getIdeaEntities,
    getSelectedIdeaId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyIdea
);