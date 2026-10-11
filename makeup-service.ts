
import { Injectable } from '@angular/core';
import { Makeup } from '../model/makeup.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  makeups: Makeup[];
  makeup!: Makeup;
  categories: Categorie[];

  constructor() {
    console.log("creation du service makeup !");

    this.categories = [
    { idCat: 1, nomCat: "Maquillage Lèvres" },
    { idCat: 2, nomCat: "Maquillage Yeux" },
    { idCat: 3, nomCat: "Soins Visage" }

  ];
    this.makeups = [
      {
        idMakeup: 1,
        nomMakeup: "Rouge à lèvres",
        prix: 25,
        dateCreation: new Date("01/14/2024"),
        categorie : {idCat: 1, nomCat: "Maquillage Yeux"}
      },
      {
        idMakeup: 2,
        nomMakeup: "Mascara",
        prix: 35,
        dateCreation: new Date("12/17/2023"),
        categorie : {idCat: 2, nomCat: "Maquillage Lèvres"}
      },
      {
        idMakeup: 3,
        nomMakeup: "Fond de teint",
        prix: 45,
        dateCreation: new Date("02/20/2024"),
        categorie : {idCat: 3, nomCat: "Soins Visage"}
      }
    ];
  }

  listeMakeup(): Makeup[] {
    return this.makeups;
  }

  ajouterMakeup(m: Makeup): void {
    this.makeups.push(m);
  }

  supprimerMakeup(m: Makeup): void {
    const index = this.makeups.indexOf(m);

    if (index > -1) {
      this.makeups.splice(index, 1);
    }
  }

  consulterMakeup(id: number): Makeup {
    this.makeup = this.makeups.find(m => m.idMakeup == id)!;
    return this.makeup;
  }

  updateMakeup(m: Makeup): void {
    const index = this.makeups.findIndex(
      cur => cur.idMakeup === m.idMakeup
    );

    if (index > -1) {
      this.makeups.splice(index, 1, m);
    }
  }
  listeCategories():Categorie[] {
    return this.categories;
}
  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
}
}
