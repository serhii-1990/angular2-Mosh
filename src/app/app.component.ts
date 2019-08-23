import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { FavoriteChangedEventArgs } from "./favorite/favorite.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tack = {
    name: "task1",
    assignee: {
      name: "Lorem"
    }
  };
}
