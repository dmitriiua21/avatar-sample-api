import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @ContentChildren(TabComponent)
  public readonly tabs: QueryList<TabComponent>;

  public active: number;
}
