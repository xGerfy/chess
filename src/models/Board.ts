import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 9; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(j, i, Colors.BLACK, this, null)); // Черные ячейки
        } else {
          row.push(new Cell(j, i, Colors.WHITE, this, null)); // Белые ячейки
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {}
}
