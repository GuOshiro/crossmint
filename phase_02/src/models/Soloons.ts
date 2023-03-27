import { COLORS } from "./Colors";

export class Soloons {
  candidateId: string;
  row: number;
  column: number;
  color: COLORS;

  constructor(
    candidateId: string,
    row: number,
    column: number,
    soloon: string
  ) {
    this.candidateId = candidateId;
    this.row = row;
    this.column = column;
    this.color = this.getColor(soloon);
  }

  getColor(soloon: string): COLORS {
    return soloon
      .split("_")[0]
      .toLowerCase() as COLORS;
  }
}
