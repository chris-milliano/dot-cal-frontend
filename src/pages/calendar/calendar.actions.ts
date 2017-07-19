import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { Event } from "../../models/event.model";

@Injectable()

export class CalendarActions {

    static GET_EVENTS: string = "GET_EVENTS";
    getEvents(): Action {
        return { type: CalendarActions.GET_EVENTS, payload: {} };
    }

    static GET_EVENTS_SUCCESS: string = "GET_EVENTS_SUCCESS";
    getEventsSuccess(calendarEvents: Event[]): Action {
        return { type: CalendarActions.GET_EVENTS_SUCCESS, payload: {calendarEvents} };
    }

    static GET_EVENTS_FAILURE: string = "GET_EVENTS_FAILURE";
    getEventsFailure(err: Error): Action {
        return { type: CalendarActions.GET_EVENTS_FAILURE, payload: {err} };
    }
}
