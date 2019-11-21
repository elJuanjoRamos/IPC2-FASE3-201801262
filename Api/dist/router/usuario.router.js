"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_controller_1 = __importDefault(require("./../controller/usuario.controller"));
var usuario = express_1.Router();
usuario.post('/auth', usuario_controller_1.default.getInstance().auth);
usuario.get('/usuario', usuario_controller_1.default.getInstance().getAll);
usuario.get('/usuario/admin', usuario_controller_1.default.getInstance().getAllAdmin);
usuario.get('/auxiliar', usuario_controller_1.default.getInstance().getAllAuxiliar);
//usuario.get('/usuario/estudiante/:id', usuario_controller_1.default.getInstance().getAllEstudiante);
usuario.get('/misauxiliares/:id', usuario_controller_1.default.getInstance().getAllAuxiliares);
usuario.get('/misestudiantes/:id', usuario_controller_1.default.getInstance().getAllEstudiante);
usuario.get('/usuario/:id', usuario_controller_1.default.getInstance().getSingle);
usuario.post('/usuario', usuario_controller_1.default.getInstance().create);
usuario.put('/usuario/:id', usuario_controller_1.default.getInstance().update);
usuario.put('/usuariopass/:id', usuario_controller_1.default.getInstance().updatePassword);
usuario.delete('/usuario/:id', usuario_controller_1.default.getInstance().delete);

usuario.get('/mypost/', usuario_controller_1.default.getInstance().getAllPost);
usuario.get('/mypost/:id', usuario_controller_1.default.getInstance().getMyPost);
usuario.get('/mypostsingle/:id', usuario_controller_1.default.getInstance().getSinglePost);
usuario.post('/mypost', usuario_controller_1.default.getInstance().createPost);
usuario.put('/mypost/:id', usuario_controller_1.default.getInstance().updatePost);

//LIKE Y COMENTARIO
usuario.get('/comments/:id', usuario_controller_1.default.getInstance().getComentario);
usuario.post('/likepost', usuario_controller_1.default.getInstance().likePost);
usuario.post('/comments', usuario_controller_1.default.getInstance().postPostComentario);


exports.default = usuario;