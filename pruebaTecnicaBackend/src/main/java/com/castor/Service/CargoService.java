package com.castor.Service;

import com.castor.Model.Cargo;

import java.util.List;

public interface CargoService {
    Cargo createCargo(Cargo cargo);
    List<Cargo> getAllCargos();
}
