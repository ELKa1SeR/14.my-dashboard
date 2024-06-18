import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheat',
  standalone: true,
  imports: [
    CommonModule, MatListModule,
  ],
  templateUrl: './options-bottom-sheat.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheatComponent {

  openLink(event: MouseEvent){
    console.log('openLink', event);

  }
}
