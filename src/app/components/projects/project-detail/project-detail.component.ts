import { app } from "../../../app.module";
import { IProject } from "../../../models/project.model";
import { ProjectService } from "../../../services/project.service";
import template from "./project-detail.html";

class ProjectDetailController {
  static $inject = ["ProjectService", "$routeParams"];

  project: IProject | undefined;
  notFound = false;

  constructor(
    projectService: ProjectService,
    $routeParams: angular.route.IRouteParamsService,
  ) {
    const id = $routeParams["id"];
    this.project = projectService.getProjectById(id);
    this.notFound = !this.project;
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  formatValue(value: number): string {
    return "£" + value.toLocaleString("en-GB");
  }
}

app.component("projectDetail", {
  template: template,
  controller: ProjectDetailController,
  controllerAs: "$ctrl",
});
