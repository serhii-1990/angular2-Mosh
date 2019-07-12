import { Component } from "@angular/core";
import { CoursesService } from "./courses.servise";

@Component({
  selector: "courses",
  template: `
    <h1>
      {{ mainHeader }}
    </h1>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class Courses {
  mainHeader = "Angular courses";
  imageUrl = "https://picsum.photos/200/300";
  courses;
  isActive = true;
  email = "me@example.com";
  constructor(servise: CoursesService) {
    this.courses = servise.getCourses();
  }
  getTitle() {
    return this.mainHeader;
  }
  onKeyUp() {
    console.log(this.email);
  }
}
