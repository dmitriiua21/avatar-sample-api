import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IRawEpisode, IRawInfo, IRawCharacter } from '../types';
import { Info, Episode, Character } from '../models';

@Injectable()
export class ApiHttpService {

  public constructor(private readonly http: HttpClient) {}

  public getInfo$(): Observable<Info[]> {
    return this.http
      .get<IRawInfo[]>('https://api.sampleapis.com/avatar/info')
      .pipe(map((data) => data.map((infoItem) => Info.fromRawData(infoItem))))
  }

  public getEpisodes$(): Observable<Episode[]> {
    return this.http
      .get<IRawEpisode[]>('https://api.sampleapis.com/avatar/episodes')
      .pipe(map((data) => data.map((episode) => Episode.fromRawData(episode))));
  }

  public getCharacters$(): Observable<Character[]> {
    return this.http
      .get<IRawCharacter[]>('https://api.sampleapis.com/avatar/characters')
      .pipe(map((data) => data.map((character) => Character.fromRawData(character))));
  }
}
