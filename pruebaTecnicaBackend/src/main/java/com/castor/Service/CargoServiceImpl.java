package com.castor.Service;

import com.castor.Dao.CargoDao;
import com.castor.Model.Cargo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CargoServiceImpl implements CargoService{

    @Autowired
    CargoDao cargoDao;
    @Override
    public Cargo createCargo(Cargo cargo) {

        return cargoDao.createCargo(cargo);
    }

    @Override
    public List<Cargo> getAllCargos() {
        return cargoDao.getAllCargos();
    }
}
