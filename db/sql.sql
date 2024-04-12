CREATE TABLE usuario (
	id serial,
    username varchar (4000),
    password varchar (4000),
    CONSTRAINT pk_usuario primary key (username, id)
);

insert into usuario 
(username , password)
values 
('Jhoiner', 12345);
('Kevin', 12345);

CREATE TABLE producto(
    id_producto serial,
    nombre varchar(4000),
    detalle varchar(4000),
    valor numeric,
    CONSTRAINT pk_id_producto primary key (id_producto)
);