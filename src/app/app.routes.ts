import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'admin', component: AdminComponent },
];
