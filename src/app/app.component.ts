import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {GFooterComponent} from './containers/core/footer/footer.component';
import {GHeaderComponent} from './containers/core/header/header.component';

@Component({
  selector: 'g-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, GFooterComponent, GHeaderComponent, NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent],
})
export class GAppComponent {
}
