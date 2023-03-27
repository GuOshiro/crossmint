"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloonsController = void 0;
const soloonsService_1 = require("../services/soloonsService");
const Soloons_1 = require("../models/Soloons");
const bottleneck_1 = __importDefault(require("bottleneck"));
class SoloonsController {
    soloonsService;
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
        this.soloonsService = new soloonsService_1.SoloonsService(candidateId);
    }
    async markDiagonals(matrix) {
        const diagonals = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].includes("SOLOON")) {
                    const tempSoloons = new Soloons_1.Soloons('58fb33cf-3aba-4793-b476-53ad9913bba4', i, j, matrix[i][j]);
                    diagonals.push(tempSoloons);
                }
            }
        }
        this.limiter.schedule(() => {
            const tasks = diagonals.map(async (soloon) => {
                await this.soloonsService.createSoloons(soloon);
            });
            return Promise.all(tasks);
        });
        console.log(`${diagonals.length} diagonal comeths created successfully!`);
    }
    async deleteAllSoloons(matrix) {
        const size = matrix.length;
        await Promise.all([
            ...Array(size).keys(),
        ].map(async (row) => {
            await Promise.all([
                ...Array(size).keys(),
            ].map(async (column) => {
                await this.soloonsService.deletesoloons(row, column);
            }));
        }));
        console.log(`All comeths deleted successfully!`);
    }
}
exports.SoloonsController = SoloonsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb29uc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvc29sb29uc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0RBQTREO0FBQzVELCtDQUE0QztBQUM1Qyw0REFBb0M7QUFFcEMsTUFBYSxpQkFBaUI7SUFDNUIsY0FBYyxDQUFpQjtJQUMvQixPQUFPLEdBQUcsSUFBSSxvQkFBVSxDQUFDO1FBQ3ZCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQix5QkFBeUIsRUFBRSxJQUFJO1FBQy9CLHdCQUF3QixFQUFFLEVBQUU7UUFFNUIsbURBQW1EO1FBQ25ELGFBQWEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFDO0lBQ0g7UUFDRSxNQUFNLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFrQjtRQUNwQyxNQUFNLFNBQVMsR0FBbUIsRUFBRSxDQUFBO1FBRXBDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksaUJBQU8sQ0FDN0Isc0NBQXNDLEVBQ3RDLENBQUMsRUFDRCxDQUFDLEVBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7b0JBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQ3ZCLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDZixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FDRixDQUFBO1lBQ0gsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTyxDQUFDLEdBQUcsQ0FDVCxHQUFHLFNBQVMsQ0FBQyxNQUFNLHlDQUF5QyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFrQjtRQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZjtZQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtTQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7WUFDaEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmO2dCQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTthQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQ3JDLEdBQUcsRUFDSCxNQUFNLENBQ1AsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDVCxtQ0FBbUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpFRCw4Q0F5RUMifQ==