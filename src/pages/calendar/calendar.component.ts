import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { go } from "@ngrx/router-store";

import { AppState } from "../../state/reducers";
import { CalendarActions } from "./calendar.actions";

@Component ({
    templateUrl: "calendar.component.html",
    styleUrls: [ "calendar.component.scss" ]
})

export class CalendarComponent implements OnInit {

    constructor (private actions: CalendarActions, private store: Store<AppState>) {}

    ngOnInit() {
        console.log("Init calendar.component");
    }
}
