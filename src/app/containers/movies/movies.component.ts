import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'g-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class GMoviesComponent {

}
