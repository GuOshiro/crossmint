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
    async createPolyanet(row, column) {
        const payload = {
            candidateId: this.candidateId,
            row,
            column,
        };
        const response = await (0, cross_fetch_1.default)(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error creating polyanet (${row}, ${column}): ${response.statusText}`);
        }
        console.log(`Polyanet (${row}, ${column}) created successfully!`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWFuZXRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3BvbHlhbmV0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBZ0M7QUFFaEMsTUFBYSxlQUFlO0lBQzFCLFdBQVcsQ0FBUztJQUNwQixHQUFHLENBQVM7SUFDWixZQUFZLFdBQW1CO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHO1lBQ04sOENBQThDLENBQUM7SUFDbkQsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQ2xCLEdBQVcsRUFDWCxNQUFjO1FBRWQsTUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRztZQUNILE1BQU07U0FDUCxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHFCQUFLLEVBQzFCLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDRSxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUNaLGtCQUFrQjthQUNyQjtTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTRCLEdBQUcsS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUN0RSxDQUFDO1NBQ0g7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsR0FBRyxLQUFLLE1BQU0seUJBQXlCLENBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FDbEIsR0FBVyxFQUNYLE1BQWM7UUFFZCxNQUFNLE9BQU8sR0FBRztZQUNkLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixHQUFHO1lBQ0gsTUFBTTtTQUNQLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEscUJBQUssRUFDMUIsSUFBSSxDQUFDLEdBQUcsRUFDUjtZQUNFLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUNaLGtCQUFrQjthQUNyQjtTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTRCLEdBQUcsS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUN0RSxDQUFDO1NBQ0g7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsR0FBRyxLQUFLLE1BQU0seUJBQXlCLENBQ3JELENBQUM7SUFDSixDQUFDO0NBQ0Y7QUExRUQsMENBMEVDIn0=