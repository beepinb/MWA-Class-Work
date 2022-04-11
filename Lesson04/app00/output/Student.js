export class Student {
    id;
    name;
    #gpa;
    set gpa(gpa) {
        this.#gpa = gpa;
    }
    get gpa() { return this.#gpa; }
    getName() { return this.name; }
    setName(name) { this.name = name; }
    constructor(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.#gpa = gpa;
    }
}
// let jack:Student=new Student(1,"Jack",3.0);
// console.log(jack);
