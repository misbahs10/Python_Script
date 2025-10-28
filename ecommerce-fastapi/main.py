# main.py
from fastapi import FastAPI
from database import create_db_and_tables
from routers import users, products, cart, orders
import uvicorn

app = FastAPI(title="E-Commerce API (FastAPI)")

app.include_router(users.router)
app.include_router(products.router)
app.include_router(cart.router)
app.include_router(orders.router)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
