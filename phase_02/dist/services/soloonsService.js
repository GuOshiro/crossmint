"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoloonsService = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class SoloonsService {
    candidateId;
    url;
    constructor(candidateId) {
        this.candidateId = candidateId;
        this.url =
            "https://challenge.crossmint.io/api/soloons";
    }
    async createSoloons(soloon) {
        const payload = {
            candidateId: this.candidateId,
            row: soloon.row,
            column: soloon.column,
            color: soloon.color,
        };
        const response = await (0, cross_fetch_1.default)(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error creating soloons (${soloon.row}, ${soloon.column}): ${response.statusText}`);
        }
        console.log(`soloons (${soloon.row}, ${soloon.column}) created successfully!`);
    }
    async deletesoloons(row, column) {
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
            throw new Error(`Error deleting soloons (${row}, ${column}): ${response.statusText}`);
        }
        console.log(`soloons (${row}, ${column}) deleted successfully!`);
    }
}
exports.SoloonsService = SoloonsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb29uc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvc29sb29uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQWdDO0FBR2hDLE1BQWEsY0FBYztJQUN6QixXQUFXLENBQVM7SUFDcEIsR0FBRyxDQUFTO0lBQ1osWUFBWSxXQUFtQjtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRztZQUNOLDRDQUE0QyxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUNqQixNQUFlO1FBRWYsTUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztTQUNwQixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHFCQUFLLEVBQzFCLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDRSxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUNaLGtCQUFrQjthQUNyQjtTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMkJBQTJCLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLE1BQU0sTUFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQ25GLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQ1QsWUFBWSxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixDQUNsRSxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQ2pCLEdBQVcsRUFDWCxNQUFjO1FBRWQsTUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRztZQUNILE1BQU07U0FDUCxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHFCQUFLLEVBQzFCLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDRSxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFDWixrQkFBa0I7YUFDckI7U0FDRixDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDJCQUEyQixHQUFHLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FDckUsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxZQUFZLEdBQUcsS0FBSyxNQUFNLHlCQUF5QixDQUNwRCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBMUVELHdDQTBFQyJ9