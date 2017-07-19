import { NgModule } from "@angular/core";

import { SampleModule } from "./sample/sample.module";
import { HomeModule } from "./home/home.module";
import { CalendarModule } from "./calendar/calendar.module";


@NgModule({
    imports: [
        SampleModule,
        HomeModule,
        CalendarModule
    ]
})
export class PagesModule {}
