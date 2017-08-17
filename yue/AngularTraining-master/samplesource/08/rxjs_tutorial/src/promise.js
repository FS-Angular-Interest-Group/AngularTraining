
import Rx from 'rxjs/Rx';
import $ from 'jquery';

// 0
const promise = new Promise((resolve, reject) => {
    console.log('create promise');
    setTimeout(function() {
        resolve('Hi, promise');
    }, 2000);
});

// 
// promise.then(v => {
//     console.log(v);
// });

const promise$ = Rx.Observable.fromPromise(promise);

promise$.subscribe(v => {
    console.log(v);
});


// 1
var getGithubName = function(name) {
    return $.ajax({
        url: 'https://api.github.com/users/' + name,
        dataType: 'json'
    }).promise();
};

// Rx.Observable.fromPromise(getGithubName('zzpmaster'))
// .subscribe(data => {
//     console.log(data);
//     $('#name').html(data.name);
//     $('#image').attr('src', data.avatar_url);
// });

// 2
Rx.Observable.fromEvent($('#input'), 'keyup').subscribe(e => {
    Rx.Observable.fromPromise(getGithubName(e.target.value))
    .subscribe(data => {
        console.log(data);
        $('#name').html(data.name);
        $('#repos').html(data.repos);
        // $('#image').attr('src', data.avatar_url);
    });
});