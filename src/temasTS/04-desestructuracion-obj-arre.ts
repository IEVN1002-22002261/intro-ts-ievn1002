// Objeto de ejemplo
const reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Let it be",
  detalles: {
    autor: "The Beatles",
    anio: 1970
  }
};


console.log ("El volumen actual es: ", reproductor.volumen)
console.log ("El volumen actual es: ", reproductor.segundo)
console.log("El volumen actual es: ", reproductor.cancion);
console.log("El autor es: ", reproductor.detalles.autor)
console.log("El anio es: ", reproductor.detalles.anio)
//destructuración de objetos
const{volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

console.log("El volumen actual es: ", volumen);
console.log("El segundo actual es: ", segundo);
console.log("La canción actual es: ", cancion);
console.log("El autor es: ", autor);
console.log("El año es: ", anio);
//destructuracuon de arreglos
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = dbz;
 
console.log("Personaje 1: ", p1);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);