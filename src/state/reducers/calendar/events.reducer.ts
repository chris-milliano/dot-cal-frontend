import { Action } from "@ngrx/store";
import { CalendarActions } from "../../../pages/calendar/calendar.actions";

import { Event } from "../../../models/event.model";

export type EventsState = Event[];

export const initialState: EventsState = [];

export function reducer (state: EventsState, action: Action): EventsState {
    switch (action.type) {


        default:
        return state;
    }
}
