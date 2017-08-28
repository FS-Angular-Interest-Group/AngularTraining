interface StudentIntercase{
     info:string;
     name:string;
     age :number;
}

class GradeInfo {
    protected grade_no :number;
    constructor(grade_no:number){
        this.grade_no = grade_no
    }
}

class ClassInfo extends GradeInfo{
    private class_no :number;
    constructor(grade_no :number,class_no :number){
        super(grade_no);
        this.class_no = class_no;
    }
    public classinfo(){
        let info = " Grade :"+ this.grade_no + "  Class :" + this.class_no
        return info
    }
}


function printinfo (stu:StudentIntercase){
    console.log(stu.name + " "+ stu.age + " "+ stu.info);
}
let classinfo = new ClassInfo(3,4)
let info_1 = classinfo.classinfo()
let stu = {info:info_1 ,name: "张三",age :12}
printinfo(stu);