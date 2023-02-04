import { Component, OnInit } from '@angular/core';
import { combineLatest, takeUntil } from 'rxjs';
import { UnsubscribeComponent } from 'src/app/core/helpers/unsubscribe';
import { Episode, Info } from 'src/app/core/models';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends UnsubscribeComponent implements OnInit {
  public info: Info;
  public episodes: Episode[];
  public isLoaded = false;
  public seasones: Map<number, Episode[]> = new Map();

  public constructor(private readonly apiHttpService: ApiHttpService) {
    super();
  }

  public ngOnInit(): void {
    combineLatest([
      this.apiHttpService.getInfo$(),
      this.apiHttpService.getEpisodes$(),
    ])
      .pipe(takeUntil(this.destroy$$))
      .subscribe(([info, episodes]) => {
        this.info = info[0];
        this.episodes = episodes;
        this.isLoaded = true;

        this.parseEpisodes();
      });
  }

  private parseEpisodes(): void {
    this.episodes.forEach((episobe) => {
      if (!this.seasones.has(episobe.season)) {
        this.seasones.set(episobe.season, []);
      }

      this.seasones.get(episobe.season)?.push(episobe);
    });
  }
}
