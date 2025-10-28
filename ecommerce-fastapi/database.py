# database.py
from sqlmodel import SQLModel, create_engine, Session, select
from typing import Generator

DATABASE_URL = "sqlite:///./ecommerce.db"
engine = create_engine(DATABASE_URL, echo=False, connect_args={"check_same_thread": False})

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session
