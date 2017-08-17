export var testNameSpace;
(function (testNameSpace) {
    function testD(param1) {
        return function (target, propertyKey, descriptor) {
            console.log(param1);
        };
    }
    testNameSpace.testD = testD;
})(testNameSpace || (testNameSpace = {}));
