import { DIRECTIONS } from "./Directions";

export class Cometh {
  candidateId: string;
  row: number;
  column: number;
  direction: DIRECTIONS;

  constructor(
    candidateId: string,
    row: number,
    column: number,
    cometh: string
  ) {
    this.candidateId = candidateId;
    this.row = row;
    this.column = column;
    this.direction = this.getPosition(
      cometh
    );
  }

  getPosition(
    cometh: string
  ): DIRECTIONS {
    return cometh
      .split("_")[0]
      .toLowerCase() as DIRECTIONS;
  }
}
