import { MatrixController } from "./matrixController";
import { PolyanetService } from "../services/polyanetService";
import { Polyanet } from "../models/Polyanet";

export class PolyanetController {
  matrixService: MatrixController;
  polyanetService: PolyanetService;

  constructor() {
    this.matrixService = new MatrixController();
    this.polyanetService = new PolyanetService(
      '58fb33cf-3aba-4793-b476-53ad9913bba4'
    );
  }

  async markDiagonals() {
    const matrix = await this.matrixService.getMatrix();
    const diagonals = [];

    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === "POLYANET") {
          diagonals.push([i, j]);
        }
      }
    }

    
    await Promise.all(
      diagonals.map(
        async ([row, column]) => {
          const polyanet = new Polyanet(
            '58fb33cf-3aba-4793-b476-53ad9913bba4',
            row,
            column
          );
          await this.polyanetService.createPolyanet(
            polyanet.row,
            polyanet.column
          );
        }
      )
    );
    
    console.log(
      `${diagonals.length} diagonal polyanets created successfully!`
    );
  }

  async deleteAllPolyanets() {
    const matrix = await this.matrixService.getMatrix();
    const size = matrix.length;

    await Promise.all(
      [
        ...Array(size).keys(),
      ].map(async row => {
        await Promise.all(
          [
            ...Array(size).keys(),
          ].map(async column => {
            await this.polyanetService.deletePolyanet(
              row,
              column
            );
          })
        );
      })
    );

    console.log(
      `All polyanets deleted successfully!`
    );
  }
}
