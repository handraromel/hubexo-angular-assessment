import { app } from "../app.module";
import projectData from "../data/projects.json";
import { IProject } from "../models/project.model";

export class ProjectService {
  private projects: IProject[] = projectData;

  getProjects(): IProject[] {
    return [...this.projects].sort((a, b) => {
      if (b.project_value !== a.project_value) {
        return b.project_value - a.project_value;
      }
      return a.project_name.localeCompare(b.project_name);
    });
  }

  getProjectById(id: string): IProject | undefined {
    return this.projects.find((p) => p.id === id);
  }

  getAreas(): string[] {
    return [...new Set(this.projects.map((p) => p.area))].sort();
  }

  getCompanies(): string[] {
    return [...new Set(this.projects.map((p) => p.company))].sort();
  }
}

app.service("ProjectService", ProjectService);
