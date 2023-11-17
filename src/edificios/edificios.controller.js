import { request, response } from "express";
import { StatusCodes } from "http-status-codes";

import ServiceEdificios from "./edificios.service.js";

const serviceEdificios = new ServiceEdificios()

export default class ControladorEdificios {
  async obtenerEdificios(req = request, res = response){
    try {
      const nEmpleado = req.query.nEmpleado
      
      const resultado = await serviceEdificios.obtenerEdificios(nEmpleado)

      res
      .status(resultado.codigoEstado)
      .json({
        mensaje: resultado?.mensaje,
        data: resultado.entidad
      })
    } catch(err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Server error: ${err}`);
    }
  }
}