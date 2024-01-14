package com.castor.Model;

import lombok.*;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="cargos")
public class Cargo extends Empleado {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="idCargo")
    private Long idCargo;
    private String nombre;



}
