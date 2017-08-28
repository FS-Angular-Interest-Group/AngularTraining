
export class MyList {

    private list : String[] = [];

    constructor () {
        
        this.list.push('first member.');
        this.list.push('2nd member.');
        this.list.push('3rd member.');
        this.list.push('4th member.');
    }

    public getList() {
        return this.list;
    }
}