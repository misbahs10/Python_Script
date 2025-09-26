from typing import List, Optional
from src.models.patient import Patient

# In-memory storage for patients
patients_db: List[Patient] = []

def add_patient(patient: Patient) -> Patient:
    patients_db.append(patient)
    return patient

def get_patient(patient_id: int) -> Optional[Patient]:
    for patient in patients_db:
        if patient.id == patient_id:
            return patient
    return None

def get_all_patients() -> List[Patient]:
    return patients_db

def update_patient(patient_id: int, updated_patient: Patient) -> Optional[Patient]:
    for index, patient in enumerate(patients_db):
        if patient.id == patient_id:
            patients_db[index] = updated_patient
            return updated_patient
    return None

def delete_patient(patient_id: int) -> bool:
    global patients_db
    old_length = len(patients_db)
    patients_db = [patient for patient in patients_db if patient.id != patient_id]
    return len(patients_db) < old_length
