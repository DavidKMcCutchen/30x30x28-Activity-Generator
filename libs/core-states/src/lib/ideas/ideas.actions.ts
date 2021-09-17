import { createAction, props } from "@ngrx/store";
import {  Idea } from "@activity-ideas-app/api-interfaces";

// Select Entity

export const selectIdea = createAction(
    '[IDEA] Select Idea',
    props<{ ideaId: string }>()
);

// Load all Entities

export const loadIdeas = createAction(
    '[IDEA] Load Ideas'
);

export const loadIdeasSuccess = createAction(
    '[IDEA] Load Ideas Success',
    props<{ idea: Idea}>()
);

export const loadIdeasFailed = createAction(
    '[IDEA] Load Ideas Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadIdea = createAction(
    '[IDEA] Load Idea',
    props<{ ideaId: string}>()
);

export const loadIdeaSuccess = createAction(
    '[IDEA] Load Idea Success',
    props<{ idea: Idea}>()
);

export const loadIdeaFailed = createAction(
    '[IDEA] Load Idea Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createIdea = createAction(
    '[IDEA] Create Idea',
    props<{ idea: Idea}>()
);

export const createIdeaSuccess = createAction(
    '[IDEA] Create Idea Success',
    props<{ idea: Idea}>()
);

export const createIdeaFailed = createAction(
    '[IDEA] Create Idea Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateIdea = createAction(
    '[IDEA] Update Idea',
    props<{ idea: Idea}>()
);

export const updateIdeaSuccess = createAction(
    '[IDEA] Update Idea Success',
    props<{ idea: Idea}>()
);

export const updateIdeaFailed = createAction(
    '[IDEA] Create Idea Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteIdea = createAction(
    '[IDEA] Delete Idea',
    props<{ idea: Idea}>()
);

export const deleteIdeaSuccess = createAction(
    '[IDEA] Delete Idea Success',
    props<{ idea: Idea}>()
);

export const deleteIdeaFailed = createAction(
    '[IDEA] Create Idea Failed',
    props<{ error: any}>()
);