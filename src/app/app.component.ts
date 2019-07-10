import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Board } from './models/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-reversi';
  public initialBoard$ = of(Board.initialBoard());
}
