import { app } from "../../app.module";
import template from "./not-found.html";

class NotFoundController {
  title!: string;
  message!: string;
  icon!: string;

  $onInit(): void {
    if (!this.icon) this.icon = "bi-exclamation-circle";
    if (!this.title) this.title = "Not Found";
    if (!this.message)
      this.message = "The item you are looking for could not be found.";
  }
}

app.component("notFound", {
  bindings: {
    title: "@",
    message: "@",
    icon: "@",
  },
  transclude: true,
  template: template,
  controller: NotFoundController,
  controllerAs: "$ctrl",
});
