import { Component, OnInit } from '@angular/core';
import { Card } from './../../../models/card.model';
import { ClashService } from './../../../services/clash.services';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
  providers: [ClashService]

})
export class SelectModeComponent implements OnInit {

  constructor(private clashService: ClashService) { }

  cardsList: Card[] = [];
  selectedCards: Card[] = [];
  noMaxCards: boolean = true;
  exceedText: string = 'You reach to Max. No. Cards, remove some cards if you want to add others.';

  rarity: string[] = ['Common', 'Rare', 'Epic', 'Legendary'];

  commonList: Card[] = [];
  rareList: Card[] = [];
  epicList: Card[] = [];
  legendaryList: Card[] = [];

  selectText: string = 'Tap to add cards to list /' + '\n' + ' Close rarity collection';
  noSelectedText: string = 'No Cards are selected!';
  toggleBtn: boolean = true;

  ngOnInit() {
    this.selectedCards = [];
    this.duckCardsList();
    console.log(this.selectedCards.length);
  }

  duckCardsList() {
    this.clashService.getCardsList().subscribe(res => {
        console.log(res);
        if (res != null &&  res !== undefined) {
          this.cardsList = res;

          this.assignRarity();

        } else {
          this.cardsList = [];
        }
      },
      err => {
        console.log('err', err);
      });
  }

  assignRarity() {
    for (let i = 0; i < this.cardsList.length; i++ ) {
      if (this.cardsList[i].rarity === 'Common') {
        this.commonList.push(this.cardsList[i]);
      } else if (this.cardsList[i].rarity === 'Rare') {
        this.rareList.push(this.cardsList[i]);
      } else if (this.cardsList[i].rarity === 'Epic') {
        this.epicList.push(this.cardsList[i]);
      } else if (this.cardsList[i].rarity === 'Legendary')  {
        this.legendaryList.push(this.cardsList[i]);
      }
    }
  }

  addToSelected(card: Card) {
    this.selectedCards.push(card);

    if (this.selectedCards.length === 8) {
      this.noMaxCards = false;
    }
  }

  removeFromSelected(index: number) {
    this.selectedCards.splice(index, 1);

    if (this.selectedCards.length < 8) {
      this.noMaxCards = true;
    }
  }

}
