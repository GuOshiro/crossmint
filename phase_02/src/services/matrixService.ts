import { MatrixRepository } from "../repositories/matrixRepository";

export class MatrixService {
  matrixRepository: MatrixRepository
  constructor(matrixRepository: MatrixRepository) {
    this.matrixRepository = matrixRepository;
  }

  async getMatrix() {
    const matrix = await this.matrixRepository.getMatrix();

    return matrix;
  }
}

