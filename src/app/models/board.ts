import { Stone } from './stone';

const initialStoneLines: Stone[][] = [
  Array(8).fill(Stone.Empty),
  Array(8).fill(Stone.Empty),
  Array(8).fill(Stone.Empty),
  []
    .concat(Array(3).fill(Stone.Empty))
    .concat([Stone.Black, Stone.White])
    .concat(Array(3).fill(Stone.Empty)),
  []
    .concat(Array(3).fill(Stone.Empty))
    .concat([Stone.White, Stone.Black])
    .concat(Array(3).fill(Stone.Empty)),
  Array(8).fill(Stone.Empty),
  Array(8).fill(Stone.Empty),
  Array(8).fill(Stone.Empty),
];

/**
 * 左上に(0,0)があり、x軸が右向き、y軸が下向き
 */
export class Board {
  public static initialBoard(): Board {
    return new Board(initialStoneLines);
  }

  constructor(public stoneLines: Stone[][]) {}

  /**
   * sample (x, y)の位置を強制的に黒に変えるメソッド
   */
  public put(x: number, y: number): Board {
    this.stoneLines[y][x] = Stone.Black;
    return this;
  }
}
