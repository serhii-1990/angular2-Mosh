import { Component } from "@angular/core";

import { FavoriteChangedEventArgs } from "./favorite/favorite.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses;

  getCourses() {
    this.courses = [
      { id: 1, name: "Course1" },
      { id: 2, name: "Course2" },
      { id: 3, name: "Course3" }
    ];
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }
}
