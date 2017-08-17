function f(shouldInitialize: boolean) {
 if (shouldInitialize) {
     let x = 10; 
  }
 return x; 
}
f(true); // returns '10' 
f(false); // returns 'undefined'