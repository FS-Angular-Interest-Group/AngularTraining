import { Component, OnInit } from '@angular/core';
import { SIFService } from './sif.service';

@Component({
  selector: 'app-sif',
  templateUrl: './sif.component.html',
  styleUrls: ['./sif.component.css']
})
export class SIFComponent implements OnInit {

  persons: Array<any>;

  constructor(sifService: SIFService) {
    this.persons = sifService.getPersons();
  }

  ngOnInit() {
  }

}
