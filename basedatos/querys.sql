CREATE TABLE `datawarehouse`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `usuario` VARCHAR(25) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `admin` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `datawarehouse`.`usuarios` (`nombre`, `apellido`, `usuario`, `email`, `password`, `telefono`, `direccion`, `admin`) VALUES ('luis', 'serna', 'luigi', 'luis@correo.com', '1234', '3137954623', 'calle 56', '1');
INSERT INTO `datawarehouse`.`usuarios` (`nombre`, `apellido`, `usuario`, `email`, `password`, `telefono`, `direccion`, `admin`) VALUES ('melisa', 'bernal', 'meli', 'meli@correo.com', '1234', '3197854896', 'carrera 57', '0');
INSERT INTO `datawarehouse`.`usuarios` (`nombre`, `apellido`, `usuario`, `email`, `password`, `telefono`, `direccion`, `admin`) VALUES ('samuel', 'serna', 'samy', 'samy@correo.com', '1234', '3197854896', 'carrera 27', '0');

---------------------------------------------------------------------------------------------


CREATE TABLE `datawarehouse`.`paises` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `region` VARCHAR(45) NOT NULL,
  `sub_region` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)

INSERT INTO datawarehouse.paises (nombre,region,sub_region) 
VALUES ("Argentina","America","Sur America"), 
('Australia', 'Oceania', 'Australia and New Zealand'), ('Ecuador', 'America', 'Sur America'),
('Germany', 'Europa', 'Western Europe'), ('Italy', 'Europa', 'Southern Europe'), ('Colombia', 'America', 'Sur America');
;

----------------------------------------------------------------------------------------------------

CREATE TABLE `datawarehouse`.`contactos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `region` VARCHAR(45) NOT NULL,
  `compania` VARCHAR(45) NOT NULL,
  `cargo` VARCHAR(45) NOT NULL,
  `canal_preferido` TEXT NOT NULL,
  PRIMARY KEY (`id`));


INSERT INTO `datawarehouse`.`contactos` (`nombre`, `apellido`, `email`, `telefono`, `pais`, `region`, `compania`, `cargo`, `canal_preferido`) VALUES ('luis', 'serna', 'luis@correo.com', '3137954623', 'Colombia', 'America', 'acamica', 'desarrollador full stack', 'whatsapp, email');
INSERT INTO `datawarehouse`.`contactos` (`nombre`, `apellido`, `email`, `telefono`, `pais`, `region`, `compania`, `cargo`, `canal_preferido`) VALUES ('samuel', 'mejia', 'samy@correo.com', '36954856', 'Argentina', 'America', 'avianca', 'piloto', 'telefono');
INSERT INTO `datawarehouse`.`contactos` (`nombre`, `apellido`, `email`, `telefono`, `pais`, `region`, `compania`, `cargo`, `canal_preferido`) VALUES ('melisa ', 'bernal', 'meli@correo.com', '3139785462', 'germany', 'Europa', 'zulma', 'trader', 'instagram');
