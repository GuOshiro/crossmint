"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MegaverseController = void 0;
const matrixController_1 = require("./matrixController");
const comethController_1 = require("../controllers/comethController");
const polyanetController_1 = require("../controllers/polyanetController");
const soloonsController_1 = require("../controllers/soloonsController");
class MegaverseController {
    matrixService;
    comethController;
    polyanetController;
    soloonsController;
    constructor() {
        this.matrixService = new matrixController_1.MatrixController();
        this.comethController = new comethController_1.ComethController();
        this.polyanetController = new polyanetController_1.PolyanetController();
        this.soloonsController = new soloonsController_1.SoloonsController();
    }
    async markDiagonals() {
        const matrix = await this.matrixService.getMatrix();
        const diagonals = [];
        // this.comethController.markDiagonals(matrix);
        this.polyanetController.markDiagonals(matrix);
        // this.soloonsController.markDiagonals(matrix);
        console.log(`${diagonals.length} diagonal polyanets created successfully!`);
    }
}
exports.MegaverseController = MegaverseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYXZlcnNlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tZWdhdmVyc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsMEVBQXVFO0FBQ3ZFLHdFQUFxRTtBQUVyRSxNQUFhLG1CQUFtQjtJQUM5QixhQUFhLENBQW1CO0lBQ2hDLGdCQUFnQixDQUFtQjtJQUNuQyxrQkFBa0IsQ0FBcUI7SUFDdkMsaUJBQWlCLENBQW9CO0lBRXJDO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFckIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsZ0RBQWdEO1FBRWhELE9BQU8sQ0FBQyxHQUFHLENBQ1QsR0FBRyxTQUFTLENBQUMsTUFBTSwyQ0FBMkMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpCRCxrREF5QkMifQ==