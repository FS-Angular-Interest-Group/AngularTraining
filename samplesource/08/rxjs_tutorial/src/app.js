import Rx from 'rxjs/Rx';
import $ from 'jquery';

const message = $('#message');

// data stream from ui events start
// import app.bundle.js in index.html

const btn = $('#btn');

const btnStream = Rx.Observable.fromEvent(btn, 'click');

btnStream.subscribe(function(e) {
    console.log(e);
}, function(err) {
    console.log(err);
}, function() {
    console.log('finish');
});

const input = $('#input');
const inputStream = Rx.Observable.fromEvent(input, 'keyup');
inputStream.subscribe(function(e) {
    console.log(e.currentTarget.value);
    message.append(e.target.value);
});

const mouseStream = Rx.Observable.fromEvent(document, 'mousemove');
mouseStream.subscribe(function(e) {
    message.html('<h3>x:' + e.clientX + '</h3>');
});
// data stream from ui events end

//cold observable
// let stream$ = Rx.Observable.of(1, 2, 3);
// stream$.subscribe(
//     data => console.log(data),
//     err => console.log(err),
//     () => console.log('cold completed')
// )

// stream$.subscribe(data => console.log(data),
//     err => console.log(err),
//     () => console.log('cold completed')
// )


// from cold to hot observable, use publish and connect
// let publisher$ = Rx.Observable.interval(1000).take(5).publish();
// publisher$.subscribe(
//     data => console.log('subscriber from first minute', data), 
//     err => console.log(err), 
//     () => console.log('completed')
// );

// setTimeout(() => {
//     publisher$.subscribe(
//         data => console.log('subscriber from 2nd minute', data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 3000);

// publisher$.connect();

// 当调用connect后，不管有没有订阅，都会emit value，当订阅者订阅后，订阅的是当前的输出的值
// let stream$ = Rx.Observable.interval(1000).take(5).publish();
// stream$.connect();
// setTimeout(() => {
//     stream$.subscribe(
//         data => console.log(data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 3000);


// warm observable
// let stream$ = Rx.Observable.interval(1000).take(3).publish().refCount();

// setTimeout(() => {
//     stream$.subscribe(
//         data => console.log('sub1' + data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 1100);

// setTimeout(() => {
//     stream$.subscribe(
//         data => console.log('sub2' + data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 2300);



// let stream$ = Rx.Observable.create((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
// }).share();

// setTimeout(() => {
//     stream$.subscribe(
//         data => console.log('sub1 ->' + data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 1100);

// setTimeout(() => {
//     stream$.subscribe(
//         data => console.log('sub2 ->' + data), 
//         err => console.log(err), 
//         () => console.log('completed')
//     );
// }, 2300);