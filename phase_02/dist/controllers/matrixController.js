"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixController = void 0;
const matrixService_1 = require("../services/matrixService");
const matrixRepository_1 = require("../repositories/matrixRepository");
class MatrixController {
    matrixService;
    matrixRepository;
    constructor() {
        this.matrixRepository = new matrixRepository_1.MatrixRepository();
        this.matrixService = new matrixService_1.MatrixService(this.matrixRepository);
    }
    async getMatrix() {
        const matrix = await this.matrixService.getMatrix();
        return matrix;
    }
}
exports.MatrixController = MatrixController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tYXRyaXhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFFcEUsTUFBYSxnQkFBZ0I7SUFDM0IsYUFBYSxDQUFnQjtJQUM3QixnQkFBZ0IsQ0FBbUI7SUFDbkM7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVM7UUFDYixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBZkQsNENBZUMifQ==