
package com.castor.Model;

import lombok.*;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="empleados")
public class Empleado {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idEmpleado")
    private Integer idEmpleado;
    
    @Column(name="cedula")
    private String cedula;
    
    @Column(name="nombre")
    private String nombre;
    
    @Column(name="fecha")
    private String fecha;

    @Lob
    private String fotoBase64;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "idCargo")
    private Cargo cargo;

}