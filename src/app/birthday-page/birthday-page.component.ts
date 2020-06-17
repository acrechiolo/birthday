import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BirthdayService } from '../birthday.service';
import { Babyfact } from '../interfaces/babyfact';

@Component({
  selector: 'app-birthday-page',
  templateUrl: './birthday-page.component.html',
  styleUrls: ['./birthday-page.component.css']
})
export class BirthdayPageComponent implements OnInit {
  babyFacts: Babyfact[] = [];
  babyFact: any;
  mayorFacts: any[] = [];
  hieroFacts: any[] = [];
  chumbyFacts: any[] = [];
  constructor(private service: BirthdayService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.babyFacts = this.service.getBabyFacts();
    console.log(this.babyFacts);
    this.mayorFacts = this.service.getMayorFacts();
    this.hieroFacts = this.service.getHieroFacts();
    this.chumbyFacts = this.service.getChumbyFacts();
  }
  getRandomBabyFact(): any {
    let babyFact: any = this.babyFacts[Math.floor(Math.random() * this.babyFacts.length)];
    document.getElementById("random-fact").innerHTML = babyFact.fact;
  }
  getRandomMayorFact(): any {
    let mayorFact: any = this.mayorFacts[Math.floor(Math.random() * this.mayorFacts.length)];
    document.getElementById("random-fact-mayor").innerHTML = mayorFact.fact;
  }
  getRandomHieroFact(): any {
    let hieroFact: any = this.hieroFacts[Math.floor(Math.random() * this.hieroFacts.length)];
    document.getElementById("random-fact-hiero").innerHTML = hieroFact.fact;
  }
  getRandomChumbyFact(): any {
    let chumbyFact: any = this.chumbyFacts[Math.floor(Math.random() * this.chumbyFacts.length)];
    document.getElementById("random-fact-chumby").innerHTML = chumbyFact.fact;
  }
}

