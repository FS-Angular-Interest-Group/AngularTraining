import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpRequestService } from '../http.request/http.request.service';

@Component ({
    selector: 'http-request',
    template: `
        <h2>Text Repos</h2>
        <div *ngFor = "let text of texts">{{text.name}}</div>
        <h2>GitHub Repos</h2>
        <div *ngFor = "let gitHub of gitHubs">{{gitHub.name}}</div>
        <h2>Angular Repos</h2>
        <div *ngFor = "let re of res">{{re.name}}</div>
    `
})
export class HttpRequestComponent implements OnInit {
    res;
    texts;
    gitHubs;
    constructor(private httpService: HttpRequestService) {}

    ngOnInit() {
        this.getAngularRepos();
        this.getTextAndGitHubRepos();
    }

    getAngularRepos() {
        this.httpService.getReposForOrg('angular').subscribe(
            data => {this.res = data; },
            err => console.log(err),
            () => console.log('job done')
        );
    }

    getTextAndGitHubRepos() {
        this.httpService.getReposForOrgs(['Text', 'github']).subscribe(
            data => {
                this.texts = data[0];
                this.gitHubs = data[1];
            },
            err => console.log(err),
            () => console.log('job done - concurrency')
        );
    }
}
