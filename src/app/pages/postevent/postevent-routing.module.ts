import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosteventPage } from './postevent.page';

const routes: Routes = [
  {
    path: '',
    component: PosteventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosteventPageRoutingModule {}
