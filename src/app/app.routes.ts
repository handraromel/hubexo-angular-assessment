import { app } from "./app.module";

app.config([
  "$routeProvider",
  function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
      .when("/projects", {
        template: "<project-list></project-list>",
      })
      .when("/projects/:id", {
        template: "<project-detail></project-detail>",
      })
      .otherwise({
        redirectTo: "/projects",
      });
  },
]);
