import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

type Grade = 'A'|'B'|'F';

@Component({
    standalone: true,
    templateUrl: './control-flow.component.html',
    styles: ``,
    imports: [CommonModule, TitleComponent]
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte','Qiwk', 'React'] );
  public frameworks2 = signal([] );



  public toggleContent(){
    this.showContent.update(value => !value )

  }
}
