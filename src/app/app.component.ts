import { Component } from "@angular/core";

import { FavoriteChangedEventArgs } from "./favorite/favorite.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses = [
    { id: 1, name: "Course1" },
    { id: 2, name: "Course2" },
    { id: 3, name: "Course3" }
  ];

  onAdd() {
    this.courses.push({ id: 4, name: "Course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
