import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../commom/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './events-list.component.html'
})

export class EventListComponent implements OnInit{
    events: any;

    constructor(
        private eventService: EventsService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): any{
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName): any{
        this.toastr.success(eventName);
    }

}
