import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeComponent } from 'src/app/core/helpers/unsubscribe';
import { Character } from 'src/app/core/models';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent extends UnsubscribeComponent implements OnInit {
  public characters: Character[];
  public isLoaded = false;

  constructor(private readonly apiHttpService: ApiHttpService) {
    super();
  }

  ngOnInit(): void {
    this.apiHttpService.getCharacters$()
      .pipe(takeUntil(this.destroy$$))
      .subscribe((characters) => {
        this.characters = characters;
        this.isLoaded = true;
      })
  }
}
