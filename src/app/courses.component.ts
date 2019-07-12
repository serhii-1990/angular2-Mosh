import { Component } from "@angular/core";
import { CoursesService } from "./courses.servise";

@Component({
  selector: "courses",
  template: `
    {{ text | summary: 10 }}
  `
})
export class Courses {
  text = "Lorem Ipsum is simply dummy text of the printing and typeset";
}
