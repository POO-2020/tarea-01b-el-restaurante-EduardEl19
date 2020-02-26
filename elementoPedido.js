import Precio from "./precio.js"
export default class ElementoPedido {
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad, precio){
        this.producto = producto
        this.cantidad = cantidad
        this.precio = Precio
    }
    
    getDescripcion(){
        return `${this.producto} * ${this.cantidad} = ${this.precio*this.cantidad}`
    }
}