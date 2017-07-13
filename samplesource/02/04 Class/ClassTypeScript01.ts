class MyMath {
  constructor () {}
  add(x: number, y: number = 100, z?: number): number {
    if (z == null) {
        return x + y;
    } else {
        return x + y + z;
    }
  }

  sum(x: number, y :number) {
    this.add(x, y);
  }
}
let math = new MyMath();
document.body.innerHTML = math.add(1).toString();