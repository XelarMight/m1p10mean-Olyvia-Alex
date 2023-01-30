import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-depotvoiture-home',
  templateUrl: './depotvoiture-home.component.html',
  styleUrls: ['./depotvoiture-home.component.css']
})
export class DepotvoitureHomeComponent implements OnInit{
 
  constructor(private fb: FormBuilder) { }
  depotVoitureForm = this.fb.group({
    fabrication: ['', Validators.required],
    modele: [''],
    annee: [''],
    registration: [''], 
    type: [''],
  });
  ngOnInit(): void {
   

  }
  onSubmit() {
    // console.warn(this.depotVoitureForm.value);
    var fabrication = this.depotVoitureForm.controls['fabrication'].value;
    // var modele = this.depotVoitureForm.get('modele').value;
  }
  }
 