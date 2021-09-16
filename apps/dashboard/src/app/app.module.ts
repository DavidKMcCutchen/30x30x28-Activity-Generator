import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailsComponent } from './ideas/idea-details/idea-details.component';
import { IdeaListComponent } from './ideas/idea-list/idea-list.component';
import { MaterialModule } from "@activity-ideas-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@activity-ideas-app/core-data";
import { CoreStateModule } from "@activity-ideas-app/core-states";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@activity-ideas-app/environment';
import { UiLoginModule } from '@activity-ideas-app/ui-login';
import { IdeaComponent } from './idea/idea.component';
import { IdeaInfoComponent } from './idea/idea-info/idea-info.component';

@NgModule({
  declarations: [AppComponent, IdeasComponent, IdeaDetailsComponent, IdeaListComponent, IdeaInfoComponent, IdeaComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}