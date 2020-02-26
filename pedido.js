import Precio from "./precio.js"
export default class Pedido {
    /**
     * 
     * @param {date} fecha 
     * @param {number} hora 
     * @param {string} cliente 
     */
    constructor(fecha, hora, cliente){
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementopedido = Array()
    }
    agregarElemento
}