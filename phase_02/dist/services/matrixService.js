"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixService = void 0;
class MatrixService {
    matrixRepository;
    constructor(matrixRepository) {
        this.matrixRepository = matrixRepository;
    }
    async getMatrix() {
        const matrix = await this.matrixRepository.getMatrix();
        return matrix;
    }
}
exports.MatrixService = MatrixService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9tYXRyaXhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsYUFBYTtJQUN4QixnQkFBZ0IsQ0FBa0I7SUFDbEMsWUFBWSxnQkFBa0M7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzNDLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUztRQUNiLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXZELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQVhELHNDQVdDIn0=