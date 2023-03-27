"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComethService = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class ComethService {
    candidateId;
    url;
    constructor(candidateId) {
        this.candidateId = candidateId;
        this.url =
            "https://challenge.crossmint.io/api/comeths";
    }
    async createCometh(cometh) {
        const payload = {
            candidateId: this.candidateId,
            row: cometh.row,
            column: cometh.column,
            direction: cometh.direction,
        };
        const response = await (0, cross_fetch_1.default)(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error creating Cometh (${cometh.row}, ${cometh.column}): ${response.statusText}`);
        }
        console.log(`Cometh (${cometh.row}, ${cometh.column}) created successfully!`);
    }
    async deleteCometh(row, column) {
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
            throw new Error(`Error deleting cometh (${row}, ${column}): ${response.statusText}`);
        }
        console.log(`cometh (${row}, ${column}) deleted successfully!`);
    }
}
exports.ComethService = ComethService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tZXRoc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvY29tZXRoc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQWdDO0FBR2hDLE1BQWEsYUFBYTtJQUN4QixXQUFXLENBQVM7SUFDcEIsR0FBRyxDQUFTO0lBQ1osWUFBWSxXQUFtQjtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRztZQUNOLDRDQUE0QyxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQWM7UUFDL0IsTUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHFCQUFLLEVBQzFCLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDRSxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUNaLGtCQUFrQjthQUNyQjtTQUNGLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMEJBQTBCLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLE1BQU0sTUFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQ2xGLENBQUM7U0FDSDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQ1QsV0FBVyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixDQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQ2hCLEdBQVcsRUFDWCxNQUFjO1FBRWQsTUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRztZQUNILE1BQU07U0FDUCxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHFCQUFLLEVBQzFCLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDRSxNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFDWixrQkFBa0I7YUFDckI7U0FDRixDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDBCQUEwQixHQUFHLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FDcEUsQ0FBQztTQUNIO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxXQUFXLEdBQUcsS0FBSyxNQUFNLHlCQUF5QixDQUNuRCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBeEVELHNDQXdFQyJ9