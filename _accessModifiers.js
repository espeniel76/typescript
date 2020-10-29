"use strict";
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Gool Morning ${this.employeeName}`);
    }
}
let empl1 = new Employee("Vishwas");
console.log(empl1.employeeName);
empl1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager dlegating tasks ${this.employeeName}`);
    }
}
let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
