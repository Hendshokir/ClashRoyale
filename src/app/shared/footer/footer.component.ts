import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  copyRight = 'Copyright © 2019 All Rights Reserved.';
   appStore = 'https://apps.apple.com/app/id1053012308?mat_click_id=d140496bbe9840c5880a174de4578fa2-20190830-1681&referrer=mat_click_id%3Dd140496bbe9840c5880a174de4578fa2-20190830-1681%26link_click_id%3D696016337805602155';
   appStoreImage = '../../../assets/images/en_apple.png';
   googlePlay = 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=en';
   googlePlayImage = '../../../assets/images/en_google.png';
   ngOnInit() {
  }


}
