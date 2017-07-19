import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalendarActions } from "./calendar.actions";
import { CalendarComponent } from "./calendar.component";
import { CalendarRoutes } from "./calendar.routes";

@NgModule({
    imports: [
        CommonModule,
        CalendarRoutes
    ],
    declarations: [ CalendarComponent ],
    exports: [ CalendarComponent ],
    providers: [ CalendarActions ]
})
export class CalendarModule {}
