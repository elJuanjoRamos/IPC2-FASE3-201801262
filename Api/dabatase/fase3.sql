use dbFase2;

-- TABLAS FASE 3
-- CREATE TABLE RECUPERACION
CREATE TABLE Recuperacion(
    idRecuperacion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    passwodTemp VARCHAR(100),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
	ON UPDATE CASCADE
    ON DELETE CASCADE
);


 -- PROCEDURES FASE 3
 
 DELIMITER $$
CREATE PROCEDURE SP_RecuperarPassword
(IN _username VARCHAR(100), _password VARCHAR(100))
BEGIN
	DECLARE _existe INT;
    SET _existe = (SELECT idUsuario FROM Usuario WHERE username = _username);
    
    UPDATE Usuario set password = _password WHERE idUsuario = _existe;
    INSERT INTO Recuperacion(idUsuario, passwodTemp) VALUES(_existe, _password);
END;
$$

SELECT idUsuario from Usuario where username = "amigo1@fase3.com";
call  SP_RecuperarPassword("amigo1@fase3.com", "hola");


select * from asignacionauxiliar

select concat(Usuario.nombre, ' ' ,Usuario.apellido) as aux, DetalleCurso.horaIncio, DetalletaCursol.horaFin FROM AsignacionAuxiliar   
INNER JOIN Usuario on AsignacionAuxiliar.idUsuario = Usuario.idUsuario
INNER JOIN DetalleCurso on AsignacionAuxiliar.idDetalleCurson = DetalleCurso.idDetalleCurso


    select concat(Usuario.nombre, ' ' ,Usuario.apellido) as aux, Curso.nombre, Curso.codigo, Curso.estado, DetalleCurso.horaInicio, DetalleCurso.horaFin, Seccion.nombre as seccion FROM AsignacionAuxiliar   
    INNER JOIN Usuario ON AsignacionAuxiliar.idUsuario = Usuario.idUsuario 
    INNER JOIN DetalleCurso ON AsignacionAuxiliar.idDetalleCurso = DetalleCurso.idDetalleCurso 
    INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso 
    INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion 
    WHERE idAsignacionAuxiliar = 6         
