import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { go } from "@ngrx/router-store";

import { AppState } from "../../state/reducers";
import { CalendarActions } from "./calendar.actions";



// TODO: This should be moved to an indipendant file
// Declare Event Model
export interface Event {

    // Basic info
    id: number;
    title: string;

    // Time info
    startTime: number;
    endTime: number;
    isAllDay: boolean;

    // Location info
    locationText: string;

    // Description info
    descriptionText: string;
    descriptionIsOpen: boolean;
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
            'id': 0,
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio",
            'descriptionText': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'descriptionIsOpen': false
        });
        this.eventsData.push({
            'id': 1,
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio",
            'descriptionText': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'descriptionIsOpen': false
        });
        this.eventsData.push({
            'id': 2,
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio",
            'descriptionText': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'descriptionIsOpen': false
        });
        this.eventsData.push({
            'id': 3,
            'title': "Brews of the Summer",
            'startTime': 1503964800000,
            'endTime': 1503979200000,
            'isAllDay': false,
            'locationText': "Schlafly Tap Room Patio",
            'descriptionText': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'descriptionIsOpen': false
        });
    }


}
