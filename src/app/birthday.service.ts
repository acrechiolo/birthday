import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Babyfact } from './interfaces/babyfact';


@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
  babyFacts: Babyfact[] = [
    { fact: "your ass is fiiiiiiiiine boiii!" },
    { fact: "you are a major babe!" },
    { fact: "I cannot imagine my life without you" },
    { fact: "you are the funniest person I know!" },
    { fact: "I cannot wait to marry you!!" },
    { fact: "you are the BEST thing to ever happen to me" },
    { fact: "you are an amazing dog dad" },
    { fact: "you are so creative and talented" },
    { fact: "WATCH OUT FOR HER SPINE" },
    { fact: "you are an amazing cat dad" },
    { fact: "I can't wait to spend forever with you" },
    { fact: "I only let you honk my boobs because I love you so much" },
    { fact: "you never cease to me amaze me" },
    { fact: "I LOVE YOU SO FUCKING MUCH" },
    { fact: "I LOVE YOU SO FUCKING MUCH THAT IT HURTS" }


  ]
  mayorFacts: any[] = [
    { fact: "bork bork bork" },
    { fact: "bork" },
    { fact: "bork bork" },
    { fact: "*chog screams*" },
    { fact: "*lick lick lick lick*" },
    { fact: "*bite*" },
    { fact: "bork bork bork bork bork bork bork bork bork" },
    { fact: "*not listening*" },
    { fact: "*burp*" },
    { fact: "*puppy kisses*" },
    { fact: "*birthday love*" }
  ];
  hieroFacts: any[] = [
    { fact: "mrooOOwooow" },
    { fact: "broooowwwnnnn" },
    { fact: "*lick lick lick lick lick*" },
    { fact: "*glands*" },
    { fact: "eh eh eh eh eh" },
    { fact: "*lays on legs, limiting your mobility*" },
    { fact: "*doesn't give a fuck if it's too hot to cuddle*" },
    { fact: "*birthday love*" },
    { fact: "PLEASE DON'T BREAK MY SPINE" },
    { fact: "*has an incredibly fragile spine*" },
  ];
  chumbyFacts: any[] = [
    { fact: "*pukes*" },
    { fact: "*pukes again*" },
    { fact: "*pukes for the umpteenth time*" },
    { fact: "*pukes*" },
    { fact: "*pukes*" },
    { fact: "*night calls*" },
    { fact: "*gives obnoxious bubby love*" },
    { fact: "*birthday love*" },
    { fact: "*chirpy purrs*" },
    { fact: "*screams from basement*" },
  ];
  constructor(private http: HttpClient) { }

  getBabyFacts(): any {
    return this.babyFacts;
  }
  getMayorFacts(): any {
    return this.mayorFacts;
  }
  getHieroFacts(): any {
    return this.hieroFacts;
  }
  getChumbyFacts(): any {
    return this.chumbyFacts;
  }
}
