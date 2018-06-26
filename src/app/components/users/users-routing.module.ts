import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UsersComponent, pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
