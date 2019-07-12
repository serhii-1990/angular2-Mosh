import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Courses } from "./courses.component";

import { CoursesService } from "./courses.servise";
import { NavHeaderComponent } from "./nav-header/nav-header.component";
@NgModule({
  declarations: [AppComponent, Courses, NavHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
