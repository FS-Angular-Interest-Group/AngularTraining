class Bottle {
    private _brand :string;
    private _purchasePrice :number;
    private _salePrice:number;

    constructor(brand :string ,purchasePrice :number ,salePrice:number){
        this._brand = brand;
        this._purchasePrice = purchasePrice;
        this._salePrice = salePrice;
    }

    get brand(){
        return this.brand;
    }
    //calculate the bottle profit
    @writable(false)
    profit(){
        return this._salePrice-this._purchasePrice;
    }
    //console.log(profit);
}

function writable(ifWritable :boolean){
    return function(target:any ,propertyKey:string ,descriptor:PropertyDescriptor){
        descriptor.writable = ifWritable;
        console.log(descriptor);
    }
}


