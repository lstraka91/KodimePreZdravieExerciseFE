import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../patient.service";
import {Patient} from "../../patient";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients: Patient[];
  public patient: Patient;
  public newPatient: Patient;
  createPatientForm: FormGroup;
  public submitted = false;
  public saved = false;

  constructor(private patientService: PatientService, private formBuilder: FormBuilder) {
    this.patients = [];
  }

  ngOnInit() {
    this.createPatientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      title: [''],
      identificationNum: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.newPatient = new Patient();
    this.patients = this.patientService.getPatientsMock();
  }

  get form() {
    return this.createPatientForm.controls;
  }

  showDetail(patient) {
    this.patient = patient;
  }

  create() {
    this.submitted = true;
    console.log('creating')
    if (this.createPatientForm.invalid) return;
    this.saved = true;

    this.patientService.addPatient(this.createPatientForm.value);
    setTimeout(() => this.saved = false, 5000);
    document.getElementById("closeModal").click();

    this.createPatientForm.reset();
    this.submitted = false;

  }

}
