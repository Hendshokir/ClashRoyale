import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Card } from './../../../models/card.model';
import { ClashService } from './../../../services/clash.services';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  providers: [ClashService]
})
export class CardItemComponent implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private clashService: ClashService) { }

  cardItem: Card = new Card();
  cardImageUrl: string = 'http://www.clashapi.xyz/images/cards/';
  cardUrl: string = 'http://www.clashapi.xyz/api/cards/';


  ngOnInit() {

    this.route.params.subscribe(params => {
      const idName = params['idName'];

      this.getCardDetails(idName);
    });
  }

  getCardDetails(idName: string) {
    this.clashService.getCardDetails(idName).subscribe(res => {
        console.log(res);
        if (res != null &&  res !== undefined) {
          this.cardItem = res;
          console.log(this.cardItem);

        } else {
          this.cardItem = new Card();
        }
      },
      err => {
        console.log('err', err);
      });
  }


}
