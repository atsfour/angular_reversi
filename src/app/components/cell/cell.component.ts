import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stone } from 'src/app/models/stone';
import { Pos } from 'src/app/models/position';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() stone: Stone;
  @Input() x: number;
  @Input() y: number;
  @Output() clicked = new EventEmitter<Pos>();

  constructor() {}

  ngOnInit() {}

  public emitClicked(x: number, y: number): void {
    this.clicked.emit({ x, y });
  }
}
