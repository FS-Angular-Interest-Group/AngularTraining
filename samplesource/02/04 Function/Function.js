var MyMath = (function () {
    function MyMath() {
    }
    MyMath.prototype.add = function (x, y) {
        if (y === void 0) { y = 100; }
        return x + y;
    };
    return MyMath;
}());
var math = new MyMath();
document.body.innerHTML = math.add(1).toString();
