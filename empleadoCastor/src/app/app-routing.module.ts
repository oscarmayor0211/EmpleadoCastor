import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CargoComponent } from "./pages/cargo/cargo.component";
import { EmpleadoComponent } from "./pages/empleado/empleado.component";

const routes: Routes = [
  { path: "empleados", component: EmpleadoComponent },
  { path: "**", redirectTo: "empleados", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
