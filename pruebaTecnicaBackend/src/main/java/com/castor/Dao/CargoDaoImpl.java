package com.castor.Dao;

import com.castor.Model.Cargo;
import com.castor.Repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CargoDaoImpl implements CargoDao{
        @Autowired
        CargoRepository cargoRepository;
        @Override
        public Cargo createCargo(Cargo cargo) {
            return cargoRepository.save(cargo);
        }

        @Override
        public List<Cargo> getAllCargos() {
            return cargoRepository.findAll();
        }
}
