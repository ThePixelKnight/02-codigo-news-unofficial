import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticlesResponse } from '../interfaces/Articles';
import { map } from 'rxjs';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopArticles() {
    return this.http
      .get<ArticlesResponse>(`https://dev.to/api/articles?top=10`, {
        params: {
          apiKey: apiKey,
        },
      })
      .pipe(map((resp) => resp));
  }
}
