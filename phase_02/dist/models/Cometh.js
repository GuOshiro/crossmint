"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cometh = void 0;
class Cometh {
    candidateId;
    row;
    column;
    direction;
    constructor(candidateId, row, column, cometh) {
        this.candidateId = candidateId;
        this.row = row;
        this.column = column;
        this.direction = this.getPosition(cometh);
    }
    getPosition(cometh) {
        return cometh
            .split("_")[0]
            .toLowerCase();
    }
}
exports.Cometh = Cometh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tZXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9Db21ldGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxNQUFNO0lBQ2pCLFdBQVcsQ0FBUztJQUNwQixHQUFHLENBQVM7SUFDWixNQUFNLENBQVM7SUFDZixTQUFTLENBQWE7SUFFdEIsWUFDRSxXQUFtQixFQUNuQixHQUFXLEVBQ1gsTUFBYyxFQUNkLE1BQWM7UUFFZCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FDL0IsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUNULE1BQWM7UUFFZCxPQUFPLE1BQU07YUFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsV0FBVyxFQUFnQixDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQTNCRCx3QkEyQkMifQ==