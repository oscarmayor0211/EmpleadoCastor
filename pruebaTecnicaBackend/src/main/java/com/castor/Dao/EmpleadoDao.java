
package com.castor.Dao;

import com.castor.Model.Empleado;

import java.util.List;

public interface EmpleadoDao {
    public List<Empleado> findAll();
    public Empleado save(Empleado tarea);
    public Empleado findById(Integer id);
    public void delete(Integer id);
    
}
