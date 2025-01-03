import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'g-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class GPlaceholderComponent {
  title = 'George';
}
