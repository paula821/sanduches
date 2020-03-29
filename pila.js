class Pila {
    constructor() {
        this.cima = null;
    }

    push(ingrediente){
        if(this.cima == null){
            this.cima = new ContenedorIngrediente(ingrediente, null);
        } else {
            let nuevo = new ContenedorIngrediente(ingrediente, this.cima);
            this.cima = nuevo;
        }
    }

    pop(){
        if (this.cima == null) {
            return null
        } else
        {
            let aux = this.cima;
            this.cima = this.cima.siguiente;
            aux.siguiente = null;
            return aux;
        }
    }

    contar(){
        return 0;
    }
}