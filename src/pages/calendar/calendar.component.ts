import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { go } from "@ngrx/router-store";

import { AppState } from "../../state/reducers";
import { CalendarActions } from "./calendar.actions";



// TODO: This should be moved to an indipendant file
// Declare Event Model
export interface Event {

    // Basic info
    title: string;

    // Time info
    startTime: number;
    endTime: number;
    isAllDay: boolean;

    // Location info
    locationText: string;
}



@Component ({
    templateUrl: "calendar.component.html",
    styleUrls: [ "calendar.component.scss" ]
})

export class CalendarComponent implements OnInit {

    // Store API returned data to use in HTML
    eventsData: Array<Event> = [];

    constructor (
        private actions: CalendarActions,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        console.log("Init calendar.component");

        // TODO: This needs to come from the store or at least a service API
        // Set eventsData
        this.eventsData.push({
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio"
        });
        this.eventsData.push({
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio"
        });
        this.eventsData.push({
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio"
        });
        this.eventsData.push({
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio"
        });


    }
}
