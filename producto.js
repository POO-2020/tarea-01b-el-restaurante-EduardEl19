import Precio from "./precio.js"
export default class Producto {
    /**
     * 
     * @param {string} nombre 
     * @param {number} precio 
     */
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = Precio
    }

    getDescripcion(){
        return ` ${this.nombre} ${this.precio.getPrecio()}`
    }
}