import { Routes } from '@angular/router';
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventRouterActivator,
    EventListComponent,
    EventListResolver
} from './events/index';
import { Error404Component } from './errors/404.component';

export const AppRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];
