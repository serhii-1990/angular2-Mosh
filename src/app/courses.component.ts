import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: "1.1-1" }} <br />
    {{ course.price }} <br />
    {{ course.relaseData }} <br />
  `
})
export class Courses {
  course = {
    title: "The Complite Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    relaseData: new Date(2016, 3, 1)
  };
}
