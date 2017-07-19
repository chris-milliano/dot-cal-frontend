import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

import { CalendarActions } from "../../../pages/calendar/calendar.actions";
import { EventsService } from "../../../services/calendar/events.service";

@Injectable()
export class EventEffects {

    constructor(
        private actionStream: Actions,
        private actions: CalendarActions,
        private eventsService: EventsService
    ) {}


    @Effect()
    getEvents = this.actionStream
        .ofType(CalendarActions.GET_EVENTS)
        .switchMap( actions => {
            return this.eventsService.getEvents()
                .map( res => this.actions.getEventsSuccess(res) )
                .catch( err => Observable.of(this.actions.getEventsFailure(err)) )
        });
}
