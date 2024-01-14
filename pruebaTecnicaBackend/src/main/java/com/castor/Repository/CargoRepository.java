package com.castor.Repository;

import com.castor.Model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoRepository  extends JpaRepository<Cargo,Long> {
}
