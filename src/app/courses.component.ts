import { Component } from "@angular/core";
import { CoursesService } from "./courses.servise";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: "2.1-1" }} <br />
    {{ course.price | currency: "UAH":true:"3.2-2" }} <br />
    {{ course.releaseDate | date: "shortDate" }}
  `
})
export class Courses {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
}
