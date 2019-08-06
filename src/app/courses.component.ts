import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ text | summary: 10 }}
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSapn"></td>
      </tr>
    </table>
  `
})
export class Courses {
  imageUrl = "";
  text = "Lorem Ipsum is simply dummy text of the printing and typeset";
}
