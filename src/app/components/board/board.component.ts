import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from 'src/app/models/board';
import { Pos } from 'src/app/models/position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board$: Observable<Board>;

  constructor() {}

  ngOnInit() {}

  public put(pos: Pos): void {
    this.board$.pipe(map(b => b.put(pos.x, pos.y))).subscribe();
  }
}
