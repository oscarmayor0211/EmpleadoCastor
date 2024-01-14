import { Cargo } from "./Cargo.model";

export class Empleado {
  idEmpleado!: string;
  cedula!: string;
  nombre!: string;
  fotoBase64?: string;
  fecha!: string;
  cargo!: Cargo;
}
