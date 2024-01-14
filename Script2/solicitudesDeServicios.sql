
IF NOT EXISTS(SELECT TOP 1 1 FROM sysobjects WHERE NAME='solicitudesDeServicios' AND TYPE='U')
BEGIN

	CREATE TABLE [dbo].[solicitudesDeServicios](
		[id]									[numeric](18, 0)	IDENTITY(1,1) NOT NULL,
		[NroSolicitud]							[numeric](18, 0)	NOT NULL,
		[FechaSolicitud]						DateTime			NOT NULL,
		[IdentificaSolicitante]					[numeric](18, 0)	NOT NULL,
		[EstadoSolicitud]						[Char]	 (1)		NOT NULL,
		[TipoServicio]							[numeric](18, 0)	NOT NULL,
	 CONSTRAINT [PK_solicitudDeServicio] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE [dbo].[solicitudesDeServicios] WITH CHECK ADD CONSTRAINT [FK_solicitudDeServicio_persona] FOREIGN KEY([IdentificaSolicitante])
	REFERENCES  [dbo].[personasHabilesParaSolicitarServicios] ([id])

	ALTER TABLE [dbo].[solicitudesDeServicios] WITH CHECK ADD CONSTRAINT [FK_solicitudDeServicio_tipoServicio] FOREIGN KEY([IdentificaSolicitante])
	REFERENCES  [dbo].[personasHabilesParaSolicitarServicios] ([id])
END