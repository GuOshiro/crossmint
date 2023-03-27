import { MatrixService } from "../services/matrixService";
import { MatrixRepository } from "../repositories/matrixRepository";

export class MatrixController {
  matrixService: MatrixService;
  matrixRepository: MatrixRepository;
  constructor() {
    this.matrixRepository = new MatrixRepository();
    this.matrixService = new MatrixService(
      this.matrixRepository
    );
  }

  async getMatrix() {
    const matrix = await this.matrixService.getMatrix();

    return matrix;
  }
}
