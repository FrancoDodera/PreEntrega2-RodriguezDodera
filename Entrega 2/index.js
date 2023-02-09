class accesorios {
  constructor(accesorio, marca, precio) {
    this.accesorio = accesorio;
    this.marca = marca;
    this.precio = precio;
  }
}

const Acc = [];

Acc.push(new accesorios("teclado", "Redragon", 17000));
Acc.push(new accesorios("teclado", "Logitech", 12000));
Acc.push(new accesorios("mouse", "Redragon", 10000));
Acc.push(new accesorios("mouse", "Zowi", 7500));
Acc.push(new accesorios("joystick ", "Redagon", 11000));
Acc.push(new accesorios("joystick ", "Sony", 17000));
Acc.push(new accesorios("mousepad", "Redagon", 3000));
Acc.push(new accesorios("mousepad", "Logitech", 2500));

let nuevoAccesorio = 0;
while (nuevoAccesorio < 1) {
  let agregar = new accesorios(
    prompt("Ingresa el Accesorio"),
    prompt("Ingresa la marca"),
    Number(prompt("Ingresa el precio"))
  );
  Acc.push(agregar);
  nuevoAccesorio++;
}

function filtrarPorPrecio(precio) {
  return Acc.filter((propiedad) => propiedad.precio <= Number(precio));
}
console.log("Productos con un precio menor a 8000:");
console.log(filtrarPorPrecio(8000));

const teclados = Acc.find((el) => el.accesorio === "teclado");
console.log(teclados);
