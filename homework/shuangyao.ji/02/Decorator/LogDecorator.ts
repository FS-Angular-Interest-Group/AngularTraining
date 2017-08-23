class C {
    @log
    foo(n: number) {
        return n * 2;
    }
}

function log(target: function, key: string, value: any) {
    return {
        value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    };
}