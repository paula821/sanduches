class Menu {
    constructor() {
        this.ingredientes = [];
    }

    poblar_ingredientes(){
        let nombre_ingredientes = ['jamon', 'queso', 'cebolla', 'tomate', 'mayonesa', 'mostaza', 'pepinillos',
                                   'pollo', 'atun', 'pavo'];
        for (let i = 0; i < nombre_ingredientes.length; ++i) {
            this.ingredientes.push(nombre_ingredientes[i]);
        }
    }

    crear_sandwich(){
    }

    mostrar_sandwich(){
    }
}