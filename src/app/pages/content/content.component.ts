import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { newsI } from 'src/app/interfaces/news.interface';
import newsData from '../../mocks/fakenews.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  newsData: newsI = {};

  ngOnInit() {
    this.newsData =
      newsData[Number(this.activatedRoute.snapshot.paramMap.get('id')) - 1];
  }
}
