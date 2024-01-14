import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Empleado } from "../model/Empleado.model";

@Component({
  selector: "app-empleado-list",
  templateUrl: "./empleado-list.component.html",
  styleUrls: ["./empleado-list.component.css"],
})
export class EmpleadoListComponent implements OnInit {
  @Input() empleados!: Empleado[];
  @Output() editEmpleado = new EventEmitter<Empleado>();
  @Output() deletEmpleado = new EventEmitter<Empleado>();

  ngOnInit() {
    console.log(this.empleados);
  }

  llenarForm(empleado: Empleado) {
    console.log(empleado);

    this.editEmpleado.emit(empleado);
  }

  deleteEmpleado(empleado: Empleado) {
    this.deletEmpleado.emit(empleado);
  }

  handleImgError() {
    console.log("Ocurrió un error al cargar la imagen");
  }
}
