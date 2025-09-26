from pydantic import BaseModel
from typing import Optional, List

class Patient(BaseModel):
    id: int
    name: str
    age: int
    gender: str
    medical_history: Optional[List[str]] = None

    class Config:
        orm_mode = True