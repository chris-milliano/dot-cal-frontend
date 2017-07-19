import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/opperator/of";

import { Event } from "../../models/event.model";

@Injectable()
export class EventsService {

    // TODO: This needs to come from a DB
    // Create a fake static JSON object return
    events: Event[] = [

        {
            title: "Angie\'s birthday 1",
            startEpoch: 5,
            endEpoch: 7,
            multidayEvent: false,
            locationTitle: "hello place",
            mapsLink: "http:\/\/google.com"
        },{
            title: "Angie\'s birthday 2",
            startEpoch: 6,
            endEpoch: 8,
            multidayEvent: false,
            locationTitle: "hello other place",
            mapsLink: "http:\/\/google.com"
        },{
            title: "Angie\'s birthday 2",
            startEpoch: 10,
            endEpoch: 17,
            multidayEvent: false,
            locationTitle: "hello last place",
            mapsLink: "http:\/\/google.com"
        },{
            title: "Angie\'s birthday 0",
            startEpoch: 1,
            endEpoch: 3,
            multidayEvent: false,
            locationTitle: "hello first place",
            mapsLink: "http:\/\/google.com"
        }

    ]

    //
    getEvents(): Observable <Event[]> {
        return null
    }
}
