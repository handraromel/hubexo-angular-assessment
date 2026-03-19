import { app } from "../../../app.module";
import { IProject } from "../../../models/project.model";
import { ProjectService } from "../../../services/project.service";
import template from "./project-list.html";

class ProjectListController {
  static $inject = ["ProjectService", "$location"];

  projects: IProject[] = [];
  areas: string[] = [];
  companies: string[] = [];
  searchText = "";
  selectedArea = "";
  selectedCompany = "";

  constructor(
    private projectService: ProjectService,
    private $location: angular.ILocationService,
  ) {
    this.projects = this.projectService.getProjects();
    this.areas = this.projectService.getAreas();
    this.companies = this.projectService.getCompanies();
  }

  get filteredProjects(): IProject[] {
    const search = this.searchText.toLowerCase();
    return this.projects.filter((p) => {
      const matchesName =
        !search || p.project_name.toLowerCase().includes(search);
      const matchesArea = !this.selectedArea || p.area === this.selectedArea;
      const matchesCompany =
        !this.selectedCompany || p.company === this.selectedCompany;
      return matchesName && matchesArea && matchesCompany;
    });
  }

  clearFilters(): void {
    this.searchText = "";
    this.selectedArea = "";
    this.selectedCompany = "";
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

  onRowClick(id: string): void {
    this.$location.path("/projects/" + id);
  }
}

app.component("projectList", {
  template: template,
  controller: ProjectListController,
  controllerAs: "$ctrl",
});
