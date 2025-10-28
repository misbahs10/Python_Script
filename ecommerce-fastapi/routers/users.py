# routers/users.py
from fastapi import APIRouter, Depends, HTTPException, status, Form
from sqlmodel import Session
from auth import get_password_hash, create_access_token
from database import get_session
from models import UserCreate, UserRead, User
from crud import get_user_by_email, create_user
import importlib

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/register", response_model=UserRead)
def register(user_in: UserCreate, session: Session = Depends(get_session)):
    existing = get_user_by_email(session, user_in.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    user = User(email=user_in.email, full_name=user_in.full_name or "", hashed_password=get_password_hash(user_in.password))
    created = create_user(session, user)
    return created

from fastapi.security import OAuth2PasswordRequestForm

@router.post("/token")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_session)):
    user = get_user_by_email(session, form_data.username)
    from auth import verify_password
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    access_token = create_access_token({"sub": str(user.id)})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=UserRead)
def read_me(current_user = Depends(importlib.import_module("auth").get_current_active_user)):
    return current_user
