import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {RouterLink} from '@angular/router';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';
import {NzSwitchComponent} from 'ng-zorro-antd/switch';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NzRowDirective,
    NzColDirective,
    NzAvatarComponent,
    RouterLink,
    NzTooltipDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSelectComponent,
    FormsModule,
    NzOptionComponent,
    NzSwitchComponent,
    NzIconDirective,
    NgForOf
  ]
})
export class GHeaderComponent implements OnInit {

  whiteTheme = false;
  languages = [
    {label: 'russian', value: 'ru'},
    {label: 'english', value: 'eng'},
    {label: 'spanish', value: 'sp'}
  ];
  language!: { label: string; value: string };

  constructor() { }

  ngOnInit(): void {
    this.language = this.languages[1];
  }
}
