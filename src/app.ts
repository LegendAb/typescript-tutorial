import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);

    list.render(doc, type.value, "end");
});

// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: "Legend", age: 25});
// lets docTwo = addUID("hello")
console.log(docOne.age);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
};

const docThree: Resource<object> = {
    uid: 1,
    resourceName: "person",
    data: {name: "Legend"}
};

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "sugar"]
};

console.log(docThree, docFour);

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resources<T> {
    uid: number,
    resourceType: ResourceType,
    data: T,
}

const docFive: Resources<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: "name of the book"}
}

const docSix: Resources<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: {name: "Legend"}
}

console.log(docFive, docSix);

// Tuples
let tup: [string, number, boolean] = ["legend", 25, true]
tup[0] = "Ab";
tup[1] = 30;

// let student: [string, number];
// student = [123456, "Ben"];
// student = ["Ben", 123456];
