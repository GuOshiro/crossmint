import { MatrixController } from "./matrixController";
import { ComethController } from "../controllers/comethController";
import { PolyanetController } from "../controllers/polyanetController";
import { SoloonsController } from "../controllers/soloonsController";

export class MegaverseController {
  matrixService: MatrixController;
  comethController: ComethController;
  polyanetController: PolyanetController;
  soloonsController: SoloonsController;

  constructor() {
    this.matrixService = new MatrixController();
    this.comethController = new ComethController();
    this.polyanetController = new PolyanetController();
    this.soloonsController = new SoloonsController();
  }

  async markDiagonals() {
    const matrix = await this.matrixService.getMatrix();
    const diagonals = [];

    this.comethController.markDiagonals(matrix);
    this.polyanetController.markDiagonals(matrix);
    this.soloonsController.markDiagonals(matrix);
    
    console.log(
      `${diagonals.length} diagonal polyanets created successfully!`
    );
  }
}
