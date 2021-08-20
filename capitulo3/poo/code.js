class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}. <br>`;
    }
    verInfo() {
        document.write(this.info)
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    // Modificar valor
    set setRaza(newName){
        this.raza = newName;
    }
    // Obtener valor
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro", 9 , "negro y blanco", "doberman");
const gato = new Animal("gato", 6 , "naranja");
const dragon = new Animal("dragon", 999 , "furia");

perro.setRaza = "tiranosaurio rex";
document.write(perro.getRaza);