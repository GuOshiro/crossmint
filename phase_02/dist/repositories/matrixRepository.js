"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixRepository = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class MatrixRepository {
    async getMatrix() {
        const response = await (0, cross_fetch_1.default)(`https://challenge.crossmint.io/api/map/58fb33cf-3aba-4793-b476-53ad9913bba4/goal`);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = (await response.json());
        return data.goal;
    }
}
exports.MatrixRepository = MatrixRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4UmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvbWF0cml4UmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBZ0M7QUFHaEMsTUFBYSxnQkFBZ0I7SUFDM0IsS0FBSyxDQUFDLFNBQVM7UUFDYixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEscUJBQUssRUFDMUIsa0ZBQWtGLENBQ25GLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDhCQUE4QixDQUMvQixDQUFDO1NBQ0g7UUFFRCxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFTLENBQUM7UUFFN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQWhCRCw0Q0FnQkMifQ==