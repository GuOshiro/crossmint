import fetch from 'cross-fetch';

export class PolyanetService {
  candidateId: string;
  url: string;
  constructor(candidateId: string) {
    this.candidateId = candidateId;
    this.url =
      "https://challenge.crossmint.io/api/polyanets";
  }

  async createPolyanet(
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
        `Error creating polyanet (${row}, ${column}): ${response.statusText}`
      );
    }

    console.log(
      `Polyanet (${row}, ${column}) created successfully!`
    );
  }

  async deletePolyanet(
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
        `Error deleting polyanet (${row}, ${column}): ${response.statusText}`
      );
    }

    console.log(
      `Polyanet (${row}, ${column}) deleted successfully!`
    );
  }
}
