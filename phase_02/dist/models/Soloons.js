"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soloons = void 0;
class Soloons {
    candidateId;
    row;
    column;
    color;
    constructor(candidateId, row, column, soloon) {
        this.candidateId = candidateId;
        this.row = row;
        this.column = column;
        this.color = this.getColor(soloon);
    }
    getColor(soloon) {
        return soloon
            .split("_")[0]
            .toLowerCase();
    }
}
exports.Soloons = Soloons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29sb29ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU29sb29ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLE9BQU87SUFDbEIsV0FBVyxDQUFTO0lBQ3BCLEdBQUcsQ0FBUztJQUNaLE1BQU0sQ0FBUztJQUNmLEtBQUssQ0FBUztJQUVkLFlBQ0UsV0FBbUIsRUFDbkIsR0FBVyxFQUNYLE1BQWMsRUFDZCxNQUFjO1FBRWQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLE9BQU8sTUFBTTthQUNWLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixXQUFXLEVBQVksQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF2QkQsMEJBdUJDIn0=