import { Component, OnInit } from '@angular/core';
import { Makeup } from '../model/makeup.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MakeupService } from '../services/makeup-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-makeup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-makeup.html',
  styles: ``
})
export class UpdateMakeup implements OnInit {
  currentMakeup = new Makeup();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private makeupService: MakeupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. جيب لستة الكاتيجوري أولا
    this.categories = this.makeupService.listeCategories();

    // 2. جيب الـ Makeup بالـ ID
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.currentMakeup = this.makeupService.consulterMakeup(id);
    
    // 3. حط الـ ID متاع الكاتيجوري الحالية باش تظهر مختارة
    if (this.currentMakeup && this.currentMakeup.categorie) {
      this.updatedCatId = Number(this.currentMakeup.categorie.idCat);
    }
  }

  updateMakeup(): void {
    this.currentMakeup.categorie = this.makeupService.consulterCategorie(this.updatedCatId);
    this.makeupService.updateMakeup(this.currentMakeup);
    this.router.navigate(['makeup']);
  }

  changerDate(date: string): void {
    if (date) {
      this.currentMakeup.dateCreation = new Date(date);
    }
  }
}