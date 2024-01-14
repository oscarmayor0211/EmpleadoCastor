import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_SERVICE } from "../config/config";
import { Empleado } from "../pages/model/Empleado.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}
  getEmpleadosAll() {
    let Url = URL_SERVICE + "/empleados";
    return this.http.get(Url);
  }

  saveEmpleado(empleado: Empleado): Observable<any> {
    let url = URL_SERVICE + "/empleados";

    return this.http.post(url, empleado);
  }

  putEmpleado(empleado: Empleado) {
    console.log(empleado);

    let url = URL_SERVICE + "/empleados/" + empleado.idEmpleado;
    return this.http.put(url, empleado);
  }

  getCargosAll() {
    let Url = URL_SERVICE + "/cargo";
    return this.http.get(Url);
  }

  deleteEmpleado(id: string) {
    let url = URL_SERVICE + "/empleados/" + id;
    return this.http.delete(url);
  }
}
