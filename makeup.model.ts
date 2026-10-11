import { Categorie } from "./categorie.model";

export class Makeup {
  idMakeup!: number;
  nomMakeup!: string;
  prix!: number;
  dateCreation!: Date;
  categorie?: Categorie;
}
