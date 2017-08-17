export namespace testNameSpace{
export function testD(param1:string){
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
            console.log(param1);
        }
    }
}
