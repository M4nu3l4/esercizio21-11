// 1) Quali sono i tipi primitivi principali in TypeScript?
// Risposta: string, number, boolean, null, undefined, symbol, bigint, any, void

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const myName: string = "Mario";
const age: number = 25;
const isStudyingTypeScript: boolean = true;


// 3) Tipizza il parametro della seguente funzione:
const greet = (name: string): string => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calculatePriceWithVAT = (price: number): number => {
  return price * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concatenateAndLength = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

// 7) Cos'è un Type Union e come si scrive?
// Risposta: Un Type Union permette a una variabile di assumere più tipi. Si scrive usando l'operatore "|".
// Esempio:
let unionExample: string | number;
unionExample = "Hello";
unionExample = 42;

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let nullableNumber: number | null | undefined;
nullableNumber = 100;
nullableNumber = null;
nullableNumber = undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type WeekDays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers: number[] = [1, 2, 3];
const numbersAlternative: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tuple: [string, string, string, number, number] = ["one", "two", "three", 4, 5];

// 12) Qual è la differenza tra type e interface?
// Risposta: "type" è più flessibile e può rappresentare un'unione o intersezione di tipi, mentre "interface" è specifica per oggetti.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
  email: string;
  phone?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
  name: string;
  grade: number;
}
const students: Student[] = [
  { name: "Anna", grade: 90 },
  { name: "Luca", grade: 85 },
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Vehicle {
  brand: string;
  model: string;
}
interface Car extends Vehicle {
  doors: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  doors: 4,
};

// 18) Cosa sono i Generics in TypeScript?
// Risposta: I Generics permettono di creare componenti riutilizzabili che funzionano con tipi diversi.

// 19) È possibile avere più tipi generici in un'interfaccia?
// Risposta: Sì, si possono avere più tipi generici.
interface Pair<T, U> {
  first: T;
  second: U;
}

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResponse<T> {
  status: string;
  data: T;
}

const exampleApiResponse: ApiResponse<string[]> = {
  status: "success",
  data: ["item1", "item2"],
};
