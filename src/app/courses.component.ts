import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h1>{{ mainHeader }}</h1>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class Courses {
  mainHeader = "Angular courses";
  courses;

  constructor(servise: CoursesService) {
    this.courses = servise.getCourses();
  }
  getTitle() {
    return this.mainHeader;
  }
}
