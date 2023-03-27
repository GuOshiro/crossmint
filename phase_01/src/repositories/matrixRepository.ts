import fetch from 'cross-fetch';
import { Goal } from "../models/Goal";

export class MatrixRepository {
  async getMatrix() {
    const response = await fetch(
      `https://challenge.crossmint.io/api/map/58fb33cf-3aba-4793-b476-53ad9913bba4/goal`
    );

    if (!response.ok) {
      throw new Error(
        "Network response was not ok."
      );
    }

    const data = (await response.json()) as Goal;

    return data.goal;
  }
}
