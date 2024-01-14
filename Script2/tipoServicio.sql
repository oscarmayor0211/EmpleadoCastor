
IF NOT EXISTS(SELECT TOP 1 1 FROM sysobjects WHERE NAME='tipoServicio' AND TYPE='U')
BEGIN
	CREATE TABLE [dbo].[tipoServicio](
		[id]									[numeric](18, 0)	IDENTITY(1,1) NOT NULL,
		[NroServicio]							[numeric](18, 0)	NOT NULL,
		[NombreServicio]						[varchar](100)		NOT NULL,
	 CONSTRAINT [PK_tipoServicio] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END