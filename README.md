# Glenigan Projects — AngularJS Frontend

A construction project browser built with AngularJS 1.8.3 and TypeScript.

## How to Run

### npm

```bash
git clone https://github.com/handraromel/hubexo-angular-assessment.git
cd hubexo-angular-assessment
npm install
npm run dev
```

Open http://localhost:4200

### Docker

```bash
docker-compose up --build
```

Open http://localhost:4200

### Production Build

```bash
npm run build
```

Outputs to `dist/`.

---

## Project Structure

```
src/
├── main.ts                          # Entry point
├── index.html                       # Main html wrapper
├── declarations.d.ts                # TypeScript module declarations
├── styles/app.css                   # Custom CSS
└── app/
    ├── app.module.ts                # Main AngularJS module
    ├── app.routes.ts                # ngRoute configuration
    ├── models/project.model.ts      # IProject TypeScript interface
    ├── data/projects.json           # Mock dataset
    ├── services/project.service.ts  # ProjectService
    └── components/
        ├── not-found/               # Reusable empty state component
        │   ├── not-found.component.ts
        │   └── not-found.html
        └── projects/
            ├── project-list/        # List page
            │   ├── project-list.component.ts
            │   └── project-list.html
            └── project-detail/      # Detail page
                ├── project-detail.component.ts
                └── project-detail.html
```

### Key Modules

- **`app.module.ts`** — Declares the root `app` module with `ngRoute` dependency.
- **`app.routes.ts`** — Maps `/projects` to the list component, `/projects/:id` to the detail component, and redirects unknown routes to `/projects`.
- **`ProjectService`** — Loads mock data from `projects.json`, provides `getProjects()`, `getProjectById()`, `getAreas()`, and `getCompanies()`.
- **`projectList`** component — Displays a table with search (by project name), area dropdown filter, and company dropdown filter.
- **`projectDetail`** component — Shows full project details (name, company, area, dates, value, description), will fallback to not found if project id mismatch.

---

## Tradeoffs & Limitations

- No unit tests included.
- No pagination — for larger datasets, pagination or virtual scrolling would be needed.
