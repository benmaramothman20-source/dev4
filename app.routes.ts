
import { Routes } from '@angular/router';
import { MakeupComponent } from './makeup/makeup';
import { AddMakeup } from './add-makeup/add-makeup';
import { UpdateMakeup } from './update-makeup/update-makeup';

export const routes: Routes = [
  { path: 'makeup', component: MakeupComponent },
  { path: 'add-makeup', component: AddMakeup },
  { path: 'updateMakeup/:id', component: UpdateMakeup },
  { path: '', redirectTo: 'makeup', pathMatch: 'full' }
];