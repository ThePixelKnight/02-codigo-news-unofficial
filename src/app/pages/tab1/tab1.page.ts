import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { sunnyOutline, moonOutline } from 'ionicons/icons';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class Tab1Page implements OnInit {

  constructor(private newsService: NewsService) {
    addIcons({
      moonOutline,
      sunnyOutline,
    });
  }

  ngOnInit() {
    this.newsService.getTopArticles().subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
