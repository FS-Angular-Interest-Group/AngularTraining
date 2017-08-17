class student {
    readonly id: string;
    readonly name: string;
    constructor (id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
let newStudent = new student("10000001", "xiaoming");
console.log(newStudent.name);
newStudent.name = "chang name"; // error! name is readonly