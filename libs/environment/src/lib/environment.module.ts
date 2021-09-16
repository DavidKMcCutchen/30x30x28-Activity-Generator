import { NgModule, ModuleWithProviders } from '@angular/core';
import { IdeaEnvironment } from './ideas.model';
import { IDEA_ENVIRONMENT } from './ideas.token';


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: IdeaEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: IDEA_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
