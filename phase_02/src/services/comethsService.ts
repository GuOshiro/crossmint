import fetch from "cross-fetch";
import { Cometh } from "../models/Cometh";

export class ComethService {
  candidateId: string;
  url: string;
  constructor(candidateId: string) {
    this.candidateId = candidateId;
    this.url =
      "https://challenge.crossmint.io/api/comeths";
  }

  async createCometh(cometh: Cometh) {
    const payload = {
      candidateId: this.candidateId,
      row: cometh.row,
      column: cometh.column,
      direction: cometh.direction,
    };

    try {
      const response = await fetch(
        this.url,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type":
            "application/json",
          },
        }
        );
        
      if (!response.ok) {
        throw new Error(
          `Error creating polyanet (${cometh.row}, ${cometh.column}): ${response.statusText}`
          );
      }
      console.log(`cometh (${cometh.row}, ${cometh.column}) created successfully!`);
    } catch(e){
      await setTimeout(() => this.createCometh(cometh), 2500)
    }
  }

  async deleteCometh(
    row: number,
    column: number
  ) {
    const payload = {
      candidateId: this.candidateId,
      row,
      column,
    };

    const response = await fetch(
      this.url,
      {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type":
            "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error deleting cometh (${row}, ${column}): ${response.statusText}`
      );
    }

    console.log(
      `cometh (${row}, ${column}) deleted successfully!`
    );
  }
}
