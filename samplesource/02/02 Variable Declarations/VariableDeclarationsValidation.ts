interface LabelledValue {
 label: string;
 value: string;
 no: number;
}

function printLabel(labelledObj: LabelledValue) {
 console.log(labelledObj.label); 
} 
let myObj = {label : " myObj ", value: "10"};
printLabel(<LabelledValue> myObj);
