import { Routes } from '@angular/router';
import {ListPage} from './_pages/list-page/list-page';
import {AddPage} from './_pages/add-page/add-page';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListPage },
  { path: 'add', component: AddPage },
];
