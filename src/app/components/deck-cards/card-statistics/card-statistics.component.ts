import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.scss']
})
export class CardStatisticsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() cardsList: Card[] = [];
  title: string = 'Statistics Information';
  sum: number;
  average: number;
  cycleCost: number[] = [];
  minCycle: number;

  //types
  typeSpell: number = 0;
  typeTroop: number = 0;
  typeBuilding: number = 0;

  //rarity
  rarityRare: number = 0;
  rarityCommon: number = 0;
  rarityEpic: number = 0;
  rarityLegendary: number = 0;

  ngOnInit() {
    console.log('from Statistical', this.cardsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log(this.cardsList);
    this.getStatistics();
  }

  getStatistics() {
    this.sum = 0;
    this.minCycle = 0;
    this.cycleCost = [];

    //reset types
    this.typeBuilding = 0;
    this.typeSpell = 0;
    this.typeTroop = 0;

    //reset rarity
    this.rarityCommon = 0;
    this.rarityEpic = 0;
    this.rarityLegendary = 0;
    this.rarityRare = 0;

    for ( let i = 0; i < this.cardsList.length; i++ ) {
      // calculate avg
      this.sum += this.cardsList[i].elixirCost;
      this.average = this.sum / this.cardsList.length;

      // get all costs in one array
      this.cycleCost.push(this.cardsList[i].elixirCost);

      //types
      if (this.cardsList[i].type === 'Troop') {
        this.typeTroop++;
      } else if (this.cardsList[i].type === 'Building') {
        this.typeBuilding++;
      } else if (this.cardsList[i].type === 'Spell') {
        this.typeSpell++;
      }

      // rarity
      if (this.cardsList[i].rarity === 'Common') {
        this.rarityCommon++;
      } else if (this.cardsList[i].rarity === 'Rare') {
        this.rarityRare++;
      } else if (this.cardsList[i].rarity === 'Epic') {
        this.rarityEpic++;
      } else if (this.cardsList[i].rarity === 'Legendary')  {
        this.rarityLegendary++;
      }
    }
    // sort and find first 4 minimum elements in card list;
    this.cycleCost.sort();
    this.cycleCost = this.cycleCost.slice(0, 4);

    // sum of the first 4 min. cost of cards
    for ( let i = 0; i < this.cycleCost.length; i++ ) {
      this.minCycle += this.cycleCost[i];
    }
  }
}
