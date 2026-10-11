import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Makeup } from '../model/makeup.model';
import { Categorie } from '../model/categorie.model'; // تأكد من إسم ملف الموديل متاع الكاتيجوري
import { MakeupService } from '../services/makeup-service';

@Component({
  selector: 'app-add-makeup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-makeup.html'
})
export class AddMakeup implements OnInit {

  newMakeup = new Makeup();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  message: string = '';

  constructor(
    private makeupService: MakeupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.makeupService.listeCategories();
  }

  addMakeup() {
    this.newCategorie = this.makeupService.consulterCategorie(this.newIdCat);
    this.newMakeup.categorie = this.newCategorie;
    
    this.makeupService.ajouterMakeup(this.newMakeup);
    this.router.navigate(['makeup']);
  }
}