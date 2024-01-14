package com.castor.Controller;

import com.castor.Model.Cargo;
import com.castor.Service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/cargo")
public class CargoController {
    @Autowired
    CargoService cargoService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Cargo> getAllCargos() {
        return cargoService.getAllCargos();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Cargo> createCargo(@RequestBody Cargo cargo) {
        return ResponseEntity.ok().body(cargoService.createCargo(cargo));
    }
}
