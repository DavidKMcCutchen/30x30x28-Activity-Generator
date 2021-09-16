import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { IdeasComponent } from './ideas/ideas.component';
import { LoginComponent, WildComponent } from "@activity-ideas-app/ui-login";
import { IdeaComponent } from './idea/idea.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'activity', component: IdeasComponent},
  {path: 'activity/:id', component: IdeaComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }