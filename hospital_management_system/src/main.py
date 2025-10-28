from fastapi import FastAPI
from src.api.routes import router as patient_router

app = FastAPI()
app.include_router(patient_router, tags=["patients"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Hospital Management System"}

app.include_router(patient_router, prefix="/patients", tags=["patients"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)