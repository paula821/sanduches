class Sandwich {
    constructor() {
        this.ingredientes = new Pila();
    }

    inicia_sandwich(){
        this.ingredientes.push(new Pan());
    }

    termina_sandwich(){
        this.ingredientes.push(new Pan());
    }

    adicionar_ingrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    quitar_capa(){
        return this.ingredientes.pop();
    }
}