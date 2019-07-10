import { Board } from './board';
import { Stone } from './stone';

describe('board', () => {
  describe('put', () => {
    // sample
    it('その座標の石を強制的に黒に変える', () => {
      const board = Board.initialBoard();
      board.put(0, 0);
      expect(board.stoneLines[0][0]).toEqual(Stone.Black);
    });
  });
});
