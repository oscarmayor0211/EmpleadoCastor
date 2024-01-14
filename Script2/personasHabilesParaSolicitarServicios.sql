
IF NOT EXISTS(SELECT TOP 1 1 FROM sysobjects WHERE NAME='personasHabilesParaSolicitarServicios' AND TYPE='U')
BEGIN
	CREATE TABLE [dbo].[personasHabilesParaSolicitarServicios](
		[id]									[numeric](18, 0)	IDENTITY(1,1) NOT NULL,
		[Cedula]								[numeric](18, 0)	NOT NULL,
		[Nombres]								[varchar](50)		NOT NULL,
		[Apellidos]								[varchar](50)		NOT NULL,
		[NombreIntegrado]						[varchar](100)		NOT NULL,
	 CONSTRAINT [PK_personaSolicitante] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END