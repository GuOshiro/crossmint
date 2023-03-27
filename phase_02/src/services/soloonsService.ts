import fetch from "cross-fetch";
import { Soloons } from "../models/Soloons";

export class SoloonsService {
  candidateId: string;
  url: string;
  constructor(candidateId: string) {
    this.candidateId = candidateId;
    this.url =
      "https://challenge.crossmint.io/api/soloons";
  }

  async createSoloons(
    soloon: Soloons
  ) {
    const payload = {
      candidateId: this.candidateId,
      row: soloon.row,
      column: soloon.column,
      color: soloon.color,
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
          `Error creating polyanet (${soloon.row}, ${soloon.column}, ${soloon.color}): ${response.statusText}`
          );
      }
      console.log(`soloon (${soloon.row}, ${soloon.column}, ${soloon.color}) created successfully!`);
    } catch(e){
      await setTimeout(() => this.createSoloons(soloon), 2500)
    }
  }

  async deletesoloons(
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
        `Error deleting soloons (${row}, ${column}): ${response.statusText}`
      );
    }

    console.log(
      `soloons (${row}, ${column}) deleted successfully!`
    );
  }
}
