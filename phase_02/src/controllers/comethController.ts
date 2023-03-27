import Bottleneck from "bottleneck";
import { ComethService } from "../services/comethsService";
import { Cometh } from "../models/Cometh";


export class ComethController {
  comethService: ComethService;
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
    this.comethService = new ComethService(candidateId);
  }

  async markDiagonals(matrix: string[][]) {
    const diagonals: Array<Cometh> = []
    
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j].includes("COMETH")) {
          const tempCometh = new Cometh(
            '58fb33cf-3aba-4793-b476-53ad9913bba4',
            i,
            j,
            matrix[i][j]
          );
          diagonals.push(tempCometh);
        }
      }
    }

    

    this.limiter.schedule(() => {
      const tasks =  diagonals.map(
        async (cometh) => {
          await this.comethService.createCometh(
            cometh
          );
        }
      )
      return Promise.all(tasks);
    });
    
    console.log(
      `${diagonals.length} diagonal comeths created successfully!`
    );
  }

  async deleteAllComeths(matrix: string[][]) {
    const size = matrix.length;

    await Promise.all(
      [
        ...Array(size).keys(),
      ].map(async row => {
        await Promise.all(
          [
            ...Array(size).keys(),
          ].map(async column => {
            await this.comethService.deleteCometh(
              row,
              column
            );
          })
        );
      })
    );

    console.log(
      `All comeths deleted successfully!`
    );
  }
}
