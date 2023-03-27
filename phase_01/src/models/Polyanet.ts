export class Polyanet {
  candidateId: string;
  row: number;
  column: number;

  constructor(
    candidateId: string,
    row: number,
    column: number
  ) {
    this.candidateId = candidateId;
    this.row = row;
    this.column = column;
  }
}
