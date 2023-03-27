"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyanetService = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class PolyanetService {
    candidateId;
    url;
    constructor(candidateId) {
        this.candidateId = candidateId;
        this.url =
            "https://challenge.crossmint.io/api/polyanets";
    }
    async createPolyanet(polyanet) {
        const payload = {
            candidateId: this.candidateId,
            row: polyanet.row,
            column: polyanet.column,
        };
        const response = await (0, cross_fetch_1.default)(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error creating polyanet (${polyanet.row}, ${polyanet.column}): ${response.statusText}`);
        }
        console.log(`Polyanet (${polyanet.row}, ${polyanet.column}) created successfully!`);
    }
    async deletePolyanet(row, column) {
        const payload = {
            candidateId: this.candidateId,
            row,
            column,
        };
        const response = await (0, cross_fetch_1.default)(this.url, {
            method: "DELETE",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error deleting polyanet (${row}, ${column}): ${response.statusText}`);
        }
        console.log(`Polyanet (${row}, ${column}) deleted successfully!`);
    }
}
exports.PolyanetService = PolyanetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWFuZXRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3BvbHlhbmV0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBZ0M7QUFHaEMsTUFBYSxlQUFlO0lBQzFCLFdBQVcsQ0FBUztJQUNwQixHQUFHLENBQVM7SUFDWixZQUFZLFdBQW1CO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHO1lBQ04sOENBQThDLENBQUM7SUFDbkQsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQ2xCLFFBQWtCO1FBRWxCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRztZQUNqQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07U0FDeEIsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxxQkFBSyxFQUMxQixJQUFJLENBQUMsR0FBRyxFQUNSO1lBQ0UsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFDWixrQkFBa0I7YUFDckI7U0FDRixDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDRCQUE0QixRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUN4RixDQUFDO1NBQ0g7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsUUFBUSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsTUFBTSx5QkFBeUIsQ0FDdkUsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUNsQixHQUFXLEVBQ1gsTUFBYztRQUVkLE1BQU0sT0FBTyxHQUFHO1lBQ2QsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEdBQUc7WUFDSCxNQUFNO1NBQ1AsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxxQkFBSyxFQUMxQixJQUFJLENBQUMsR0FBRyxFQUNSO1lBQ0UsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzdCLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQ1osa0JBQWtCO2FBQ3JCO1NBQ0YsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYiw0QkFBNEIsR0FBRyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQ3RFLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQ1QsYUFBYSxHQUFHLEtBQUssTUFBTSx5QkFBeUIsQ0FDckQsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpFRCwwQ0F5RUMifQ==