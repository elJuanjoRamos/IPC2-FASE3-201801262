"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var UsuarioController = /** @class */ (function() {
    function UsuarioController() {
        this.getAll = function(req, res) {
            var query = "\n   CALL SP_GetUsuarios()   \n  ";
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data[0]);
                }
            });
        };
        this.getAllAdmin = function(req, res) {
            var query = "\n            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.username,\n            TipoUsuario.nombre as 'tipo'\n            FROM DetalleUsuario\n            INNER JOIN Usuario ON DetalleUsuario.idUsuario = Usuario.idUsuario\n            INNER JOIN TipoUsuario ON DetalleUsuario.idTipoUsuario = TipoUsuario.idTipoUsuario\n            WHERE TipoUsuario.idTipoUsuario = 1;\n        ";
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.getAllAuxiliar = function(req, res) {
            var query = "\n            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.username,\n            TipoUsuario.nombre as 'tipo'\n            FROM DetalleUsuario\n            INNER JOIN Usuario ON DetalleUsuario.idUsuario = Usuario.idUsuario\n            INNER JOIN TipoUsuario ON DetalleUsuario.idTipoUsuario = TipoUsuario.idTipoUsuario\n            WHERE TipoUsuario.idTipoUsuario = 2;\n        ";
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.getAllEstudiante = function(req, res) {
            var id = req.params.id;
            var query = "select distinct Usuario.nombre, Usuario.apellido, Usuario.idUsuario FROM AsignacionEstudiante \n inner join usuario on AsignacionEstudiante.idUsuario = Usuario.idUsuario \n Inner Join AsignacionAuxiliar on AsignacionEstudiante.idAsignacionAuxiliar = AsignacionAuxiliar.idAsignacionAuxiliar \n where AsignacionAuxiliar.idUsuario = " + id;
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.getAllAuxiliares = function(req, res) {
            var id = req.params.id;
            var query = " select distinct Usuario.nombre, Usuario.apellido, Usuario.idUsuario FROM AsignacionAuxiliar \n inner join usuario on AsignacionAuxiliar.idUsuario = Usuario.idUsuario  \n Inner Join AsignacionEstudiante on AsignacionEstudiante.idAsignacionAuxiliar = AsignacionAuxiliar.idAsignacionAuxiliar \n where AsignacionEstudiante.idUsuario = " + id;
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };


        this.getSingle = function(req, res) {
            var query = "\n            CALL SP_GetUsuario(?);\n        ";
            var body = {
                idUsuario: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idUsuario, function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json(data[0]);
                }
            });
        };
        this.create = function(req, res) {
            var query = "\n            CALL SP_CreateUsuario(?, ?, ?, ?, ?, ?, ?);\n        ";
            var body = {
                carnet: req.body.carnet,
                dpi: req.body.dpi,
                username: req.body.username,
                password: req.body.password,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                idTipoUsuario: req.body.idTipoUsuario,
            };
            mysql_1.default.sendQuery(query, [body.carnet, body.dpi, body.username, body.password, body.nombre, body.apellido, body.idTipoUsuario], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    if (JSON.parse(JSON.stringify(data[0]))[0]._existe == 0) {
                        res.json({
                            ok: true,
                            status: 200
                        });
                    } else {
                        res.json({
                            ok: false,
                            error: "Ya existe un registro"
                        });
                    }
                }
            });
        };
        this.auth = function(req, res) {
            var query = "\n   CALL SP_Autenticar(?,?)\n        ";
            var body = {
                username: req.body.username,
                password: req.body.password
            };
            mysql_1.default.sendQuery(query, [body.username, body.password], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json(data[0]);
                }
            });
        };
        this.update = function(req, res) {
            var data = {
                id: req.params.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                username: req.body.username,
                password: req.body.password,
                dpi: req.body.dpi,
                carnet: req.body.carnet,
            };
            var query = "\n            UPDATE Usuario SET nombre = ?, apellido = ?, username = ?,\n                password = ?, dpi = ?, carnet = ?\n                WHERE idUsuario = ?;\n        ";
            mysql_1.default.sendQuery(query, [data.nombre, data.apellido, data.username, data.password, data.dpi, data.carnet, data.id], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };
        this.updatePassword = function(req, res) {
            var data = {
                username: req.body.username,
                password: req.body.password
            };
            var query = "call SP_RecuperarPassword(?,?)";
            mysql_1.default.sendQuery(query, [data.username, data.password], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };
        this.delete = function(req, res) {
            var id = req.params.id;
            var query = "\n            DELETE FROM Usuario WHERE idUsuario = ?;\n        ";
            mysql_1.default.sendQuery(query, id, function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200,
                    });
                }
            });
        };

        /////////////POST DE USUARIO   
        this.getAllPost = function(req, res) {
            var query = "SELECT idPost, concat(Usuario.nombre, ' ', Usuario.apellido ) as auxiliar, titulo, texto, imagen, video FROM Post \n INNER JOIN Usuario ON Post.idUsuario = Usuario.idUsuario ";
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.getMyPost = function(req, res) {
            var id = req.params.id;
            var query = "SELECT * FROM Post where idUsuario = " + id;
            mysql_1.default.getQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.createPost = function(req, res) {
            var query = "\n            CALL SP_CreatePost(?, ?, ?, ?, ?);\n        ";
            var body = {
                idUsuario: req.body.idUsuario,
                texto: req.body.texto,
                imagen: req.body.imagen,
                video: req.body.video,
                titulo: req.body.titulo
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.titulo, body.texto, body.imagen, body.video], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };
        this.getSinglePost = function(req, res) {
            var query = "\n  SELECT * FROM POST WHERE idPost =" + req.params.id + ";";

            mysql_1.default.sendQuery(query, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };
        this.getComentario = function(req, res) {
            var query = "\n CALL SP_getComentarios(?)";
            mysql_1.default.sendQuery(query, req.params.id, function(err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data[0]);
                }
            });
        };
        this.updatePost = function(req, res) {
            var data = {
                idUsuario: req.body.idUsuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                imagen: req.body.imagen,
                video: req.body.video
            };
            var query = "call SP_UpdatePost(?,?,?,?,?,?)";
            mysql_1.default.sendQuery(query, [data.idUsuario, data.titulo, data.texto, data.imagen, data.video, req.params.id], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };

        this.likePost = function(req, res) {
            var query = "\n            CALL SP_DarLike(?, ?);\n        ";
            var body = {
                idUsuario: req.body.idUsuario,
                idPost: req.body.idPost
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.idPost], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    if (JSON.parse(JSON.stringify(data[0]))[0]._nuevo == 0) {
                        res.json({
                            ok: true,
                            status: 200,
                            mensaje: 'Ya no te gusta este post'
                        });
                    } else if (JSON.parse(JSON.stringify(data[0]))[0]._nuevo == 1) {
                        res.json({
                            ok: true,
                            status: 200,
                            mensaje: 'Te gusta este post'
                        });
                    }
                }
            });
        };
        this.postPostComentario = function(req, res) {
            var query = "\n            CALL SP_Comentar(?, ?, ?);\n        ";
            var body = {
                idUsuario: req.body.idUsuario,
                texto: req.body.texto,
                idPost: req.body.idPost
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.idPost, body.texto], function(err, data) {
                if (err) {
                    res.json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };

    };

    UsuarioController.getInstance = function() {
        return this._instance || (this._instance = new this());
    };
    return UsuarioController;
}());
exports.default = UsuarioController;