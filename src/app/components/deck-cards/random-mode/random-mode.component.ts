import { Card } from './../../../models/card.model';
import { ClashService } from './../../../services/clash.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-mode',
  templateUrl: './random-mode.component.html',
  styleUrls: ['./random-mode.component.scss'],
  providers: [ClashService]
})

export class RandomModeComponent implements OnInit {

  constructor(private clashService: ClashService) { }

  cardsList: Card[] = [];
  randomCards: Card[] = [];
  generateText: string = 'Generate Random Cards!';

  ngOnInit() {
    this.duckCardsList();
  }

  duckCardsList() {
    this.clashService.getCardsList().subscribe(res => {
        //console.log(res);
        if (res != null &&  res !== undefined) {
          this.cardsList = res;
          this.generateRandom();

        } else {
          this.cardsList = [];
        }
      },
      err => {
        console.log('err', err);
      });
  }

  generateRandom() {
    this.randomCards = [];

    for (let i = 0; i < this.cardsList.length; i++ ) {
      let item = this.cardsList[Math.floor(Math.random() * this.cardsList.length)];

      // check if item doesn't included in random list push it
      if (!this.randomCards.includes(this.cardsList[i])) {
        this.randomCards.push(item);
      }

      // check if random list size equal 8 card so exit
      if (this.randomCards.length === 8) {
        return;
      }

      window.scroll({
        top: 0, behavior: 'smooth'
      });
    }
  }
}
