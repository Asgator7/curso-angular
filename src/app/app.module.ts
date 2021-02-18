import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver
} from './events/index'

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './commom/toastr.service';
import { AppRoutes } from './routes'
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouterActivator,
    EventListResolver,
    {
      provide: 'canDeactivateEvent',
      useValue: checkDirtyEvent
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyEvent(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not save this event, do you really want to cancel?')
  }
  return true
}
