import { Card } from 'src/app/models/card.model';
import { Component, OnInit, Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.scss'],

})
export class CardDesignComponent implements OnInit, OnChanges {

  @Input() card: Card = new Card();
  cardImageUrl: string = 'http://www.clashapi.xyz/images/cards/';
  cardItemUrl: string = '/card-item/';

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from card design', this.card);
  }

}
