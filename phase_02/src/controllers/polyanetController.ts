import Bottleneck from "bottleneck";
import { PolyanetService } from "../services/polyanetService";
import { Polyanet } from "../models/Polyanet";

export class PolyanetController {
  polyanetService: PolyanetService;
  limiter = new Bottleneck({
    reservoir: 40, // initial value
    reservoirIncreaseAmount: 2,
    reservoirIncreaseInterval: 1000, // must be divisible by 250
    reservoirIncreaseMaximum: 40,
   
    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 5,
    minTime: 1000
  });
  
  constructor() {
    const candidateId = '58fb33cf-3aba-4793-b476-53ad9913bba4';
    this.polyanetService = new PolyanetService(candidateId);
  }

  async markDiagonals(matrix: string[][]) {
    const diagonals: Array<Polyanet> = [];

    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === "POLYANET") {
          diagonals.push(new Polyanet(
            '58fb33cf-3aba-4793-b476-53ad9913bba4',
            i,
            j
          ));
        }
      }
    }

    
    this.limiter.schedule(() => {
      const tasks =  diagonals.map(
        async (polyanet) => {
          await this.polyanetService.createPolyanet(
            polyanet
          );
        }
      )
      return Promise.all(tasks);
    });
    
    
    console.log(
      `${diagonals.length} diagonal polyanets created successfully!`
    );
  }

  async deleteAllPolyanets(matrix: string[][]) {
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
