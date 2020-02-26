export default class Cliente {
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.numerocel = telefono
    }

    getPerfil(){
        return `Mi nombre es ${this.nombre}, mi direccion es ${this.direccion} y mi numero de telefono ${this.numerocel}`
    }
}