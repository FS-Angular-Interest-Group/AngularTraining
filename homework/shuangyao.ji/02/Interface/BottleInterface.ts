interface Bottle{
	brand:string;
	price:number;
	color?:string;
}

let swellBottle = {brand :"swell",price :200};

function botBrandAndPrice(bottleObj: Bottle){
	console.log(bottleObj.brand);
	console.log(bottleObj.price);
}

botBrandAndPrice(swellBottle);