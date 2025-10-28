# routers/products.py
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
from sqlmodel import Session
from database import get_session
from models import Product, ProductCreate, ProductRead, Category, CategoryRead, CategoryBase
from crud import create_product, list_products, get_product, create_category, get_category

router = APIRouter(prefix="/products", tags=["products"])

@router.post("/categories", response_model=CategoryRead)
def create_category_endpoint(cat: CategoryBase, session: Session = Depends(get_session)):
    category = Category(name=cat.name, description=cat.description)
    return create_category(session, category)

@router.post("/", response_model=ProductRead)
def create_product_endpoint(p: ProductCreate, session: Session = Depends(get_session)):
    product = Product(title=p.title, description=p.description, price=p.price, inventory=p.inventory, category_id=p.category_id)
    return create_product(session, product)

@router.get("/", response_model=List[ProductRead])
def list_products_endpoint(skip: int = 0, limit: int = 20, search: Optional[str] = Query(None), session: Session = Depends(get_session)):
    return list_products(session, skip=skip, limit=limit, search=search)

@router.get("/{product_id}", response_model=ProductRead)
def get_product_endpoint(product_id: int, session: Session = Depends(get_session)):
    p = get_product(session, product_id)
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    return p
