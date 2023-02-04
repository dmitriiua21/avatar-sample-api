import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-tab',
  template: '',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() public tabName: string;

  @ContentChild('contentTemplate', { read: TemplateRef })
  public readonly templateRef: TemplateRef<any>;
}
