import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'post/home', pathMatch: 'full'},
  { path: 'post', redirectTo: 'post/home', pathMatch: 'full'},
  { path: 'post/home', component: HomeComponent },
  { path: 'post/:postId/edit', component: EditComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
