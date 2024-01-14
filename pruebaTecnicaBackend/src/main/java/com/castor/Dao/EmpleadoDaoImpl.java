package com.castor.Dao;

import com.castor.Model.Empleado;
import com.castor.Repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@Service
public class EmpleadoDaoImpl implements EmpleadoDao{

    @Autowired
    EmpleadoRepository empleadoRepository;
    @Override
    public List<Empleado> findAll()
    {
        return (List<Empleado>) empleadoRepository.findAll();
    }

    @Override
    public Empleado save(Empleado tarea)  {


        return empleadoRepository.save(tarea);
    }

    @Override
    public Empleado findById(Integer id)
    {
        return empleadoRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Integer id)
    {
        empleadoRepository.deleteById(id);
    }
}
