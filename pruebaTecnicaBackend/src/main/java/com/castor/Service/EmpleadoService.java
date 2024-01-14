
package com.castor.Service;

import com.castor.Model.Empleado;

import java.util.List;

public interface EmpleadoService {
    public List<Empleado> findAll();
    public Empleado save(Empleado tarea);
    public Empleado findById(Integer id);
    public void delete(Integer id);

}
