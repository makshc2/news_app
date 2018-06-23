import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(
    public http: HttpClient
  ) { }

  getNewsByCountryAndCategory(country, category) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

  getSourcesByCountryAndCategory(country, category) {
    return this.http.get(`https://newsapi.org/v2/sources?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

  getNewsBySource(source) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`);
  }
}
