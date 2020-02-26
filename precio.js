export default class Precio {
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor
    }

    getPrecio(){
        return `$${Number(this.valor)}`
    }
}