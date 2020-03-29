class Menu {
    constructor() {
        this.ingredientes = [];
    }

    poblar_ingredientes(){
        let nombre_ingredientes = ['queso', 'cebolla', 'tomate', 'mayonesa', 'mostaza', 'pepinillos',
                                   'pollo', 'atun', 'pavo', 'jamon'];
        for (let i = 0; i < nombre_ingredientes.length; ++i) {
            this.ingredientes.push(new Ingrediente(nombre_ingredientes[i]));
        }
    }

    crear_sandwich(nombre_ingredientes){
        let sanduche = new Sandwich();
        sanduche.inicia_sandwich();
        // recorremos ingredientes
        this.ingredientes.forEach((ingrediente) => {
            if (nombre_ingredientes.includes(ingrediente.nombre)) {
                sanduche.adicionar_ingrediente(ingrediente);
            }
        });
        sanduche.termina_sandwich();
        return sanduche;
    }
}