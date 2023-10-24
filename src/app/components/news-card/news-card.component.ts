import { Component } from '@angular/core';

import newsData from '../../mocks/fakenews.json';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent {
  newsData: any[] = newsData;
  resumeDescription(description: string) {
    const sliceStep = description.slice(0, 155);
    const splitStep = sliceStep.split(' ');
    splitStep.pop();
    const finalString = splitStep.join(' ') + '...';
    return finalString;
  }
}
