from typing import List, Optional
from pydantic import BaseModel

class PatientBase(BaseModel):
    name: str
    age: int
    gender: str
    medical_history: Optional[str] = None

class PatientCreate(PatientBase):
    pass

class PatientUpdate(PatientBase):
    pass

class Patient(PatientBase):
    id: int

class PatientResponse(Patient):
    pass

class PatientListResponse(BaseModel):
    patients: List[PatientResponse]