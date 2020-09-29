import * as app1 from "./test";
import app2 = require("./test");
import { App } from "./test";

let c1: App.SomeClass = new App.SomeClass();
let c2: App.OtherClass = new App.OtherClass();

// console.log(a1.getName())
// console.log(a2.getName())
// console.log(b1.getName())
// console.log(b2.getName())
console.log(c1.getName());
console.log(c2.getName());
