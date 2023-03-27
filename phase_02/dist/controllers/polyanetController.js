"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyanetController = void 0;
const bottleneck_1 = __importDefault(require("bottleneck"));
const polyanetService_1 = require("../services/polyanetService");
const Polyanet_1 = require("../models/Polyanet");
class PolyanetController {
    polyanetService;
    limiter = new bottleneck_1.default({
        reservoir: 40,
        reservoirIncreaseAmount: 2,
        reservoirIncreaseInterval: 1000,
        reservoirIncreaseMaximum: 40,
        // also use maxConcurrent and/or minTime for safety
        maxConcurrent: 5,
        minTime: 1000
    });
    constructor() {
        const candidateId = '58fb33cf-3aba-4793-b476-53ad9913bba4';
        this.polyanetService = new polyanetService_1.PolyanetService(candidateId);
    }
    async markDiagonals(matrix) {
        const diagonals = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === "POLYANET") {
                    diagonals.push(new Polyanet_1.Polyanet('58fb33cf-3aba-4793-b476-53ad9913bba4', i, j));
                }
            }
        }
        this.limiter.schedule(() => {
            const tasks = diagonals.map(async (polyanet) => {
                await this.polyanetService.createPolyanet(polyanet);
            });
            return Promise.all(tasks);
        });
        console.log(`${diagonals.length} diagonal polyanets created successfully!`);
    }
    async deleteAllPolyanets(matrix) {
        const size = matrix.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWFuZXRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3BvbHlhbmV0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0REFBb0M7QUFDcEMsaUVBQThEO0FBQzlELGlEQUE4QztBQUU5QyxNQUFhLGtCQUFrQjtJQUM3QixlQUFlLENBQWtCO0lBQ2pDLE9BQU8sR0FBRyxJQUFJLG9CQUFVLENBQUM7UUFDdkIsU0FBUyxFQUFFLEVBQUU7UUFDYix1QkFBdUIsRUFBRSxDQUFDO1FBQzFCLHlCQUF5QixFQUFFLElBQUk7UUFDL0Isd0JBQXdCLEVBQUUsRUFBRTtRQUU1QixtREFBbUQ7UUFDbkQsYUFBYSxFQUFFLENBQUM7UUFDaEIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUM7SUFFSDtRQUNFLE1BQU0sV0FBVyxHQUFHLHNDQUFzQyxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWtCO1FBQ3BDLE1BQU0sU0FBUyxHQUFvQixFQUFFLENBQUM7UUFFdEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtvQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQ3pCLHNDQUFzQyxFQUN0QyxDQUFDLEVBQ0QsQ0FBQyxDQUNGLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7UUFHRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQUksU0FBUyxDQUFDLEdBQUcsQ0FDMUIsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUN2QyxRQUFRLENBQ1QsQ0FBQztZQUNKLENBQUMsQ0FDRixDQUFBO1lBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTyxDQUFDLEdBQUcsQ0FDVCxHQUFHLFNBQVMsQ0FBQyxNQUFNLDJDQUEyQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFrQjtRQUN6QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZjtZQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtTQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7WUFDaEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmO2dCQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTthQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQ3ZDLEdBQUcsRUFDSCxNQUFNLENBQ1AsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDVCxxQ0FBcUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTNFRCxnREEyRUMifQ==