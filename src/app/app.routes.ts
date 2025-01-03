import {Routes} from '@angular/router';
import {GEmptyComponent} from './containers/core/empty/empty.component';
import {GPageNotFoundComponent} from './containers/core/page-not-found/page-not-found.component';
import {GPlaceholderComponent} from './containers/placeholder/placeholder.component';

export const routes: Routes = [
  { path: 'movies', loadComponent: () => import('./containers/movies/movies.component').then(c => c.GMoviesComponent) },
  { path: 'gallery', component: GEmptyComponent },
  { path: 'author', component: GEmptyComponent, canActivate: [] },
  { path: 'login', component: GEmptyComponent },
  { path: 'welcome', component: GPlaceholderComponent },
  { path: '404', component: GPageNotFoundComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: GPageNotFoundComponent }
];
