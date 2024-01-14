INSERT INTO tipoServicio(NroServicio,NombreServicio		)
VALUES					(1, 'Servicio de limpieza'		),
						(2, 'Servicio de abogados'		),
						(7, 'Servicio de información'	),
						(4, 'Servicio de liquidación'	)

INSERT INTO personasHabilesParaSolicitarServicios(cedula,Nombres,Apellidos,NombreIntegrado)
VALUES											 (3434344,'Oscar', 'Mayor', 'Oscar Mayor'	),
												 (4334534,'Juan', ' Ortiz'	, 'Juan  Ortiz'	),
												 (566565,'Andrea', 'Hernandez'	, 'Andrea Hernandez'					)


INSERT INTO solicitudesDeServicios(NroSolicitud,FechaSolicitud, IdentificaSolicitante, EstadoSolicitud, TipoServicio)
VALUES							  (101,'20221103',2,'A',7),
								  (122,'20221101',1,'I',2),
								  (1,'20220910',1,'I',4  )

SELECT * FROM tipoServicio
SELECT * FROM solicitudesDeServicios
SELECT * FROM personasHabilesParaSolicitarServicios