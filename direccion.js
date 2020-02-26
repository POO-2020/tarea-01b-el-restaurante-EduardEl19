export default class Direccion {
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroexterior 
     * @param {number} numerointerior 
     * @param {string} colonia 
     * @param {number} codigop 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigop, ciudad, municipio){
        this.calle = calle
        this.numeroexterior = numeroExterior
        this.numerointerior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigop
        this.ciudad = ciudad
        this.municipio = municipio
    }
    getFormatoCorto(){
        return `${this.calle} ${this.numeroexterior}`
    }
    getFormatoLargo(){
        return `${this.calle} No. Exterior ${this.numeroexterior}, No. Interior ${this.numerointerior}, Colonia ${this.colonia}, C.P. ${this.codigoPostal}, ${this.ciudad}, ${this.municipio}`
    }
}