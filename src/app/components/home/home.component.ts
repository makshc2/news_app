import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../../services/news-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList = [];
  currentCategory = 'general';
  currentCountry = 'ua';
  currentSource;
  categoryList = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];
  countryList = [
    'ua',
    'au',
    'us',
    'it',
    'in'
  ];
  sourceList = [];

  constructor(
    public news: NewsApiService
  ) { }

  ngOnInit() {
    // Get all news and sources by current country and category
    this.onChange();
  }

  onChange() {
    // Get all news by current country and category
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });

    // get news sources by current country and category
    this.news.getSourcesByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(sources => {
      if (sources['sources'].length) {
        this.sourceList = sources['sources'];

        this.currentSource = this.sourceList[0];
      }
    });
  }

  onChangeSource() {
    this.news.getNewsBySource(this.currentSource).subscribe(news => {
      this.newsList = news['articles'];
    });
  }
}
