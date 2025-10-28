# routers/cart.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from database import get_session
from auth import get_current_active_user
from crud import add_to_cart, list_cart
from models import CartItemCreate, CartItemRead, CartItem

router = APIRouter(prefix="/cart", tags=["cart"])

@router.post("/", response_model=CartItemRead)
def add_item_to_cart(item_in: CartItemCreate, session: Session = Depends(get_session), current_user = Depends(get_current_active_user)):
    # check product exists and inventory check (simple)
    from crud import get_product
    product = get_product(session, item_in.product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    if product.inventory < item_in.quantity:
        raise HTTPException(status_code=400, detail="Not enough inventory")
    ci = add_to_cart(session, current_user.id, item_in.product_id, item_in.quantity)
    return ci

@router.get("/", response_model=list[CartItemRead])
def list_cart_items(session: Session = Depends(get_session), current_user = Depends(get_current_active_user)):
    return list_cart(session, current_user.id)
