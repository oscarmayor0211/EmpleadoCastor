package com.castor.Dao;

import com.castor.Model.Cargo;

import java.util.List;

public interface CargoDao {
    Cargo createCargo(Cargo cargo);
    List<Cargo> getAllCargos();
}
