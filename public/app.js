import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Legend", age: 25 });
// lets docTwo = addUID("hello")
console.log(docOne.age);
;
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "Legend" }
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "sugar"]
};
console.log(docThree, docFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the book" }
};
const docSix = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "Legend" }
};
console.log(docFive, docSix);
// Tuples
let tup = ["legend", 25, true];
tup[0] = "Ab";
tup[1] = 30;
// let student: [string, number];
// student = [123456, "Ben"];
// student = ["Ben", 123456];
