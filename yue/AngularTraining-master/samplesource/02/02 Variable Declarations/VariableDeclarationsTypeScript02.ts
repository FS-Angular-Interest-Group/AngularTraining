let isDone: boolean = false;
let decLiteral: number = 6;
let name1: string = "bob";
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


let notSure: any = 4;
function warnUser(): void {
 alert("This is my warning message"); 
}
function error(message: string): never {
 throw new Error(message); 
}
