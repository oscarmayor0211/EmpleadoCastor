
package com.castor.Service;

import com.castor.Dao.EmpleadoDao;
import com.castor.Model.Empleado;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoServiceImplement  implements EmpleadoService{
    @Autowired
    private EmpleadoDao tareaDao;
    
    @Override
    public List<Empleado> findAll()
    {
        return (List<Empleado>) tareaDao.findAll();
    }
    
    @Override
    public Empleado save(Empleado tarea)
    {
        String fotoBase64 = tarea.getFotoBase64();
        tarea.setFotoBase64(fotoBase64);

        return tareaDao.save(tarea);
    }
    
    @Override
    public Empleado findById(Integer id)
    {
        return tareaDao.findById(id);
    }
    
    @Override
    public void delete(Integer id)
    {
        tareaDao.delete(id);
    }
    
}
