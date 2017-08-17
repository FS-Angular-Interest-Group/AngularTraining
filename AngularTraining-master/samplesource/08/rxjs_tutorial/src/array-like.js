import Rx from 'rxjs/Rx';
import $ from 'jquery';

// import array-like.bundle.js in index.html

const numberArray = [1, 2, 3, 4, 5, 6];
/**
 * list
 */
const numberArray$ = Rx.Observable.from(numberArray);
numberArray$.subscribe((number) => {
    console.log('list: ' + number);
}, err => {
    console.log(err);
}, () => {
    console.log('list: completed');
});

/**
 * json
 */
const json = [{
    title: 'Java', name: 'this is a book'
}, {
    title: 'Kotlin', name: 'this is a book'
}, {
    title:'Swfit', name: 'this is a book'
}];
const books = Rx.Observable.from(json);
books.subscribe(book => {
    $('#person').append('<li><h3>' + book.title + '</h3>' +
     '<p>' + book.name + '<p></li>');

});

/**
 * set
 */
const set = new Set(['hi', 30, {name: 'Mark'}]);
const set$ = Rx.Observable.from(set);
set$.subscribe((value) => {
    console.log('Set: ' + value);
}, err => {
    console.log(err);
}, () => {
    console.log('Set: ' + 'completed');
})