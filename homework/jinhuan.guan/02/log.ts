class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @mylog('testValue')
    greet(c:string) {
        return "Hello, " + this.greeting;
    }
}
function mylog(value) {
    return function(target:any){
        console.log(value)
    }
}
console.log(new Greeter('aaaaa').greet('ee'));
