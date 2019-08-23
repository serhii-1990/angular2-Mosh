import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Courses } from "./courses.component";
import { FormsModule } from "@angular/forms";
import { CoursesService } from "./courses.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { InputFormatDirective } from "./input-format.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
@NgModule({
  declarations: [
    AppComponent,
    Courses,
    FavoriteComponent,
    BootstrapPanelComponent,
    NavbarComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
