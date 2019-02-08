import {Injectable} from '@angular/core';
import {Patient} from "./patient";
import {PATIENTS} from "./patients-Mock";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() {
  }

  getPatientsMock(): Patient[] {
    return PATIENTS;
  }

  addPatient(patient: Patient) {
    patient.id = PATIENTS.length;
    PATIENTS.push(patient);
  }
}
