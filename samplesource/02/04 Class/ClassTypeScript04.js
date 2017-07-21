var student = (function () {
    function student(id, name) {
        this.id = id;
        this.name = name;
    }
    return student;
}());
var newStudent = new student("10000001", "xiaoming");
console.log(newStudent.name);
newStudent.name = "chang name"; // error! name is readonly
