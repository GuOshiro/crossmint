"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyanetController = void 0;
const matrixController_1 = require("./matrixController");
const polyanetService_1 = require("../services/polyanetService");
const Polyanet_1 = require("../models/Polyanet");
class PolyanetController {
    matrixService;
    polyanetService;
    constructor() {
        this.matrixService = new matrixController_1.MatrixController();
        this.polyanetService = new polyanetService_1.PolyanetService(process.env.CANDIDATE_ID);
    }
    async markDiagonals() {
        const matrix = await this.matrixService.getMatrix();
        const diagonals = [];
        const size = matrix.length;
        for (let i = 0; i < size; i++) {
            diagonals.push([i, i]);
            diagonals.push([i, size - i - 1]);
        }
        await Promise.all(diagonals.map(async ([row, column]) => {
            const polyanet = new Polyanet_1.Polyanet(process.env.CANDIDATE_ID, row, column);
            await this.polyanetService.createPolyanet(polyanet.row, polyanet.column);
        }));
        console.log(`${diagonals.length} diagonal polyanets created successfully!`);
    }
    async deleteAllPolyanets() {
        const matrix = await this.matrixService.getMatrix();
        const size = matrix.length;
        // delete all the polyanets in the matrix
        await Promise.all([
            ...Array(size).keys(),
        ].map(async (row) => {
            await Promise.all([
                ...Array(size).keys(),
            ].map(async (column) => {
                await this.polyanetService.deletePolyanet(row, column);
            }));
        }));
        console.log(`All polyanets deleted successfully!`);
    }
}
exports.PolyanetController = PolyanetController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWFuZXRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3BvbHlhbmV0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBc0Q7QUFDdEQsaUVBQThEO0FBQzlELGlEQUE4QztBQUU5QyxNQUFhLGtCQUFrQjtJQUM3QixhQUFhLENBQW1CO0lBQ2hDLGVBQWUsQ0FBa0I7SUFFakM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FDeEMsc0NBQXNDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWE7UUFDakIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmLFNBQVMsQ0FBQyxHQUFHLENBQ1gsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUMzQixzQ0FBc0MsRUFDdEMsR0FBRyxFQUNILE1BQU0sQ0FDUCxDQUFDO1lBQ0YsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDdkMsUUFBUSxDQUFDLEdBQUcsRUFDWixRQUFRLENBQUMsTUFBTSxDQUNoQixDQUFDO1FBQ0osQ0FBQyxDQUNGLENBQ0YsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsR0FBRyxTQUFTLENBQUMsTUFBTSwyQ0FBMkMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNCLHlDQUF5QztRQUN6QyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2Y7WUFDRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FDdEIsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ2hCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZjtnQkFDRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDdEIsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUN2QyxHQUFHLEVBQ0gsTUFBTSxDQUNQLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQ1QscUNBQXFDLENBQ3RDLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFwRUQsZ0RBb0VDIn0=