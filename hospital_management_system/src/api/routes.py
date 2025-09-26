from fastapi import APIRouter, HTTPException
from src.models.patient import Patient
from src.services.patient_service import (
    add_patient,        
    get_patient,
    update_patient,
    delete_patient,
)

router = APIRouter()

@router.post("/patients/", response_model=Patient)
async def add_patient_route(patient: Patient):
    return add_patient(patient)

@router.get("/patients/{patient_id}", response_model=Patient)
async def read_patient(patient_id: int):
    patient = get_patient(patient_id)
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

@router.put("/patients/{patient_id}", response_model=Patient)
async def modify_patient(patient_id: int, patient: Patient):
    updated_patient = update_patient(patient_id, patient)
    if updated_patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return updated_patient

@router.delete("/patients/{patient_id}")
async def remove_patient(patient_id: int):
    success = delete_patient(patient_id)
    if not success:
        raise HTTPException(status_code=404, detail="Patient not found")
    return {"detail": "Patient deleted successfully"}