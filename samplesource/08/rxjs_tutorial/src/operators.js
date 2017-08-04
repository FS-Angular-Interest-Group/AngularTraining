import Rx from 'rxjs/Rx';
import $ from 'jquery';

// interval
// Rx.Observable.interval(1000).subscribe(v => {
//     console.log(v);
// })

// Rx.Observable.interval(1000).take(5).subscribe(v => {
//     console.log(v);
// }, err => {
//     console.log(err);
// }, () => {
//     console.log('completed');
// });

// timer
// Rx.Observable.timer(5000, 1000).take(2).subscribe(v => {
//     console.log(v);
// });

// range
// Rx.Observable.range(5, 5).subscribe(v => {
//     console.log(v);
// });

// map
// Rx.Observable.from(['Java', 'Kotlin', 'Swfit'])
// .map(v => v.toUpperCase())
// .map(v => 'hi, ' + v)
// .subscribe(v => {
//     console.log(v);
// })

// pluck
// Rx.Observable.from([
//     {'bookName': 'Java', 'price': 20},
//     {'bookName': 'Kotlin', 'price': 30},
//     {'bookName': 'Swfit', 'price': 40}
// ]).pluck('bookName')
// .subscribe(v => {
//     console.log(v);
// });

// merge
// Rx.Observable.of('Hi')
// .merge(Rx.Observable.of('everyone'))
// .subscribe(v => {
//     console.log(v);
// });

// var obs1 = Rx.Observable.interval(1000).map(v => 'M1 ->' + v);
// var obs2 = Rx.Observable.interval(5000).map(v => 'M2 ->' + v);
// // take(5)
// Rx.Observable.merge(obs1, obs2).take(5).subscribe(v => {
//     console.log(v);
// })


// mergeMap
// Rx.Observable.of('Hello').subscribe(v => {
//     Rx.Observable.of(v + ', world')
//     .subscribe(x => console.log(x));
// })

// Rx.Observable.of('Hello').mergeMap(v => {
//     return Rx.Observable.of(v + ', world');
// }).subscribe(x => console.log(x));

// Rx.Observable.of('Hello').switchMap(v => {
//     return Rx.Observable.of(v + ', world');
// }).subscribe(x => console.log(x));

/**

 -----c-----c----------|
 switchMap(e => Rx.Observable.interval(500).take(3))
 ------0--1--0--1--2---|

 */
var source = Rx.Observable.fromEvent(document.body, 'click');
source.switchMap(e => Rx.Observable.interval(500).take(3))
.subscribe(v => console.log(v));