import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { EmpleadoListComponent } from './pages/empleado-list/empleado-list.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { CargoListComponent } from './pages/cargo-list/cargo-list.component';

@NgModule({
  declarations: [AppComponent, EmpleadoComponent, EmpleadoListComponent, CargoComponent, CargoListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
