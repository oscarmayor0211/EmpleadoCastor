import { Component } from "@angular/core";
import { Empleado } from "../model/Empleado.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmpleadoService } from "src/app/services/empleado.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Cargo } from "../model/Cargo.model";

@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.css"],
})
export class EmpleadoComponent {
  empleados: Empleado[] = [];
  cargos: Cargo[] = [];
  form!: FormGroup;
  state: boolean = true;
  empleado!: Empleado;
  constructor(
    private usuarioService: EmpleadoService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
    this.getAllEmpleado();
    this.getCargosAll();
  }
  createForm() {
    this.form = this.fb.group({
      idEmpleado: [],
      nombre: ["", Validators.required],
      fotoBase64: ["", Validators.required],
      fecha: ["", Validators.required],
      cargo: [null, Validators.required],
      cedula: [null, Validators.required],
    });
  }

  getAllEmpleado() {
    this.usuarioService.getEmpleadosAll().subscribe((empleados: any) => {
      this.empleados = empleados;
    });
  }

  getCargosAll() {
    this.usuarioService.getCargosAll().subscribe((cargos: any) => {
      console.log(cargos);

      this.cargos = cargos;
    });
  }
  createUsuario() {
    this.empleado = new Empleado();
    this.empleado.cargo = new Cargo();

    this.empleado.idEmpleado = this.form.value.idEmpleado;
    this.empleado.nombre = this.form.value.nombre;
    this.empleado.cedula = this.form.value.cedula;
    this.empleado.cargo.idCargo = parseInt(this.form.value.cargo);
    this.empleado.fotoBase64 = this.form.value.fotoBase64;
    this.empleado.fecha = this.form.value.fecha;
    console.log(this.empleado);

    if (this.form.value.idEmpleado === null) {
      this.usuarioService.saveEmpleado(this.empleado).subscribe((empleados: any) => {
        this.empleados = [...this.empleados, empleados];
        this.getAllEmpleado();
      });
      Swal.fire({
        title: "SE AGREGO EL EMPLEADO",
        text: "Empleado Agregado",
        icon: "success",
      });
      this.resetFormulario();
    } else {
      this.state = false;
      this.usuarioService.putEmpleado(this.empleado).subscribe((empleados: any) => {
        this.state = true;
        this.empleados = [...this.empleados, empleados];
        this.getAllEmpleado();
        Swal.fire("Empleado Editado");
        this.resetFormulario();
      });
    }
  }
  cancel() {
    this.router.navigateByUrl("/empleados");
  }
  resetFormulario() {
    this.form.reset({
      nombre: "",
      fotoBase64: "",
      fecha: "",
      id_cargo: null,
      cedula: "",
    });
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = target.files![0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;

      let base64;

      if (result) {
        base64 = (result as string).split(",")[1];
      }

      this.form.patchValue({
        fotoBase64: base64,
      });
    };
  }

  handleDeleteEmpleado(empleado: Empleado) {
    Swal.fire({
      title: "Desear Eliminar el Empleado?",
      text: "Eliminar el Empleado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
    }).then((borrar) => {
      if (borrar.value) {
        this.usuarioService.deleteEmpleado(empleado.idEmpleado).subscribe(() => {
          this.getAllEmpleado();
        });
      }
    });
  }

  handleEditEmpleado(empleado: Empleado) {
    this.state = false;
    this.form.setValue({
      idEmpleado: empleado.idEmpleado,
      nombre: empleado.nombre,
      cedula: empleado.cedula,
      fecha: empleado.fecha,
      cargo: empleado.cargo.idCargo,
      fotoBase64: empleado.fotoBase64,
    });
  }
}
