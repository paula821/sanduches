class Main {
    static main = new Main();

    constructor(){
        this.menu = new Menu();
        this.cantidad_maxima_de_ingredientes = 7;
        this.menu.poblar_ingredientes();
    }

    mostrar_ingredientes(){
        let lista = document.querySelector("#lista_ingredientes");
        this.menu.ingredientes.forEach((ingrediente) => {
            let elemento = document.createElement("li");
            elemento.innerText = ingrediente.nombre;
            lista.appendChild(elemento);
        });
    }

    mostrar_ingredientes_check_box(){
        let contendor = document.querySelector("#ingredientes_a_escoger");
        this.menu.ingredientes.forEach((ingrediente) => {
            let field = document.createElement("span" );
            let elemento = document.createElement("input" );
            elemento.type = "checkbox"
            elemento.name = "ingredientes_escogidos[]";
            elemento.id = ingrediente.nombre;
            let label = document.createElement("label" );
            label.setAttribute("for", elemento.id);
            label.innerText = ingrediente.nombre;
            field.appendChild(elemento);
            field.appendChild(label);
            contendor.appendChild(field);
        });
    }

    armar_sanduche(){
        let ingredientes_escogidos = document.querySelectorAll('[name="ingredientes_escogidos[]"]:checked');
        if (ingredientes_escogidos.length == 0) {
            alert("No has escogido ningún ingrediente.");
        } else if (ingredientes_escogidos.length > 7) {
            alert("Escogiste " + ingredientes_escogidos.length + " ingredientes, sobrepasate el limite de " + this.cantidad_maxima_de_ingredientes +
                  " ingredientes.\nPor favor reduce la cantidad de ingredientes seleccionados.");
        } else {
            let nombre_ingredientes = Array.from(ingredientes_escogidos).map((ingrediente) => { return ingrediente.id});
            let sanduche = this.menu.crear_sandwich(nombre_ingredientes);
            this.mostrar_sanduche(sanduche);
        }
    }

    mostrar_sanduche(sanduche){
        let contendor = document.querySelector("#resultado_sanduche");
        contendor.innerHTML = "";
        //poner titulo
        let titulo = document.createElement("strong");
        titulo.innerText = "El sanduche resultante es:";
        contendor.append(titulo);
        //poner imagen
        let imagen = document.createElement("img");
        imagen.src = "sanduche.png";
        contendor.append(imagen);
        //mostrar sanduche
        let capa;
        while((capa = sanduche.quitar_capa()) != null) {
            let elemento = document.createElement("div");
            elemento.innerText = capa.ingrediente.nombre;
            contendor.append(elemento);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Main.main.mostrar_ingredientes();
    Main.main.mostrar_ingredientes_check_box();
});
