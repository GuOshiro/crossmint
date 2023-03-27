"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComethController = void 0;
const bottleneck_1 = __importDefault(require("bottleneck"));
const comethsService_1 = require("../services/comethsService");
const Cometh_1 = require("../models/Cometh");
class ComethController {
    comethService;
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
        this.comethService = new comethsService_1.ComethService(candidateId);
    }
    async markDiagonals(matrix) {
        const diagonals = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].includes("COMETH")) {
                    const tempCometh = new Cometh_1.Cometh('58fb33cf-3aba-4793-b476-53ad9913bba4', i, j, matrix[i][j]);
                    diagonals.push(tempCometh);
                }
            }
        }
        this.limiter.schedule(() => {
            const tasks = diagonals.map(async (cometh) => {
                await this.comethService.createCometh(cometh);
            });
            return Promise.all(tasks);
        });
        console.log(`${diagonals.length} diagonal comeths created successfully!`);
    }
    async deleteAllComeths(matrix) {
        const size = matrix.length;
        await Promise.all([
            ...Array(size).keys(),
        ].map(async (row) => {
            await Promise.all([
                ...Array(size).keys(),
            ].map(async (column) => {
                await this.comethService.deleteCometh(row, column);
            }));
        }));
        console.log(`All comeths deleted successfully!`);
    }
}
exports.ComethController = ComethController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tZXRoQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9jb21ldGhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDREQUFvQztBQUNwQywrREFBMkQ7QUFDM0QsNkNBQTBDO0FBRzFDLE1BQWEsZ0JBQWdCO0lBQzNCLGFBQWEsQ0FBZ0I7SUFDN0IsT0FBTyxHQUFHLElBQUksb0JBQVUsQ0FBQztRQUN2QixTQUFTLEVBQUUsRUFBRTtRQUNiLHVCQUF1QixFQUFFLENBQUM7UUFDMUIseUJBQXlCLEVBQUUsSUFBSTtRQUMvQix3QkFBd0IsRUFBRSxFQUFFO1FBRTVCLG1EQUFtRDtRQUNuRCxhQUFhLEVBQUUsQ0FBQztRQUNoQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztJQUVIO1FBQ0UsTUFBTSxXQUFXLEdBQUcsc0NBQXNDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDhCQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBa0I7UUFDcEMsTUFBTSxTQUFTLEdBQWtCLEVBQUUsQ0FBQTtRQUVuQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGVBQU0sQ0FDM0Isc0NBQXNDLEVBQ3RDLENBQUMsRUFDRCxDQUFDLEVBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUM7b0JBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtTQUNGO1FBSUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sS0FBSyxHQUFJLFNBQVMsQ0FBQyxHQUFHLENBQzFCLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDZixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUNuQyxNQUFNLENBQ1AsQ0FBQztZQUNKLENBQUMsQ0FDRixDQUFBO1lBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FDVCxHQUFHLFNBQVMsQ0FBQyxNQUFNLHlDQUF5QyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFrQjtRQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZjtZQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtTQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7WUFDaEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmO2dCQUNFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTthQUN0QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQ25DLEdBQUcsRUFDSCxNQUFNLENBQ1AsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FDVCxtQ0FBbUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTdFRCw0Q0E2RUMifQ==