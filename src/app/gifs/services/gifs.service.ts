import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = [];
  public currentTag: string = '';

  private _tagsHistory: string[] = [];
  private apiKey: string = 'cwxjAnGk8ZSnD1Ur4dpK1pLnKuZ1711h';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((_tag) => _tag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;

    this.organizeHistory(tag);
    this.currentTag = tag;

    // ? Esta es una forma de hacerlo con fetch
    // await fetch(
    //   'https://api.giphy.com/v1/gifs/search?q=Valorand&limit=10&api_key=cwxjAnGk8ZSnD1Ur4dpK1pLnKuZ1711h'
    // )
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));

    // ? Esta es una forma de hacerlo con HttpClient
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }
}
