import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './shared/events.service';
import { map } from 'rxjs/operators';


@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(
        private eventService: EventsService
    ) { }
    resolve(): any {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}
