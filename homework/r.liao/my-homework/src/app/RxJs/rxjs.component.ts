import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'my-rxjs',
    template: `
        <h2>Trying RxJs</h2>
    `
})
export class RsJsComponent {
    constructor() {
        const observable = Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        });
        console.log('Just before sbuscribe');
        observable.subscribe({
            next: x => console.log('got value ' + x),
            error: err => console.error('sth wrong occurred: ' + err),
            complete: () => console.log('done')
        });
        console.log('Just after sbuscribe');
    }
}
