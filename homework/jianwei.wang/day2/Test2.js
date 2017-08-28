var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GradeInfo = (function () {
    function GradeInfo(grade_no) {
        this.grade_no = grade_no;
    }
    return GradeInfo;
}());
var ClassInfo = (function (_super) {
    __extends(ClassInfo, _super);
    function ClassInfo(grade_no, class_no) {
        var _this = _super.call(this, grade_no) || this;
        _this.class_no = class_no;
        return _this;
    }
    ClassInfo.prototype.classinfo = function () {
        var info = " Grade :" + this.grade_no + "  Class :" + this.class_no;
        return info;
    };
    return ClassInfo;
}(GradeInfo));
function printinfo(stu) {
    console.log(stu.name + " " + stu.age + " " + stu.info);
}
var classinfo = new ClassInfo(3, 4);
var info_1 = classinfo.classinfo();
var stu = { info: info_1, name: "张三", age: 12 };
printinfo(stu);
