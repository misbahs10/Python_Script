# routers/orders.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from database import get_session
from auth import get_current_active_user
from crud import create_order_from_cart
from models import OrderRead
import json

router = APIRouter(prefix="/orders", tags=["orders"])

@router.post("/create", response_model=OrderRead)
def create_order(session: Session = Depends(get_session), current_user = Depends(get_current_active_user)):
    try:
        order = create_order_from_cart(session, current_user.id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    # convert items_json to items list on response
    order_data = OrderRead(id=order.id, total=order.total, status=order.status, created_at=order.created_at, user_id=order.user_id, items=json.loads(order.items_json))
    return order_data

@router.get("/me", response_model=list[OrderRead])
def my_orders(session: Session = Depends(get_session), current_user = Depends(get_current_active_user)):
    stmt = session.exec.__self__.query  # wrong approach in snippet; we'll just do simple select
    from sqlmodel import select
    orders = session.exec(select(__import__("models").Order).where(__import__("models").Order.user_id == current_user.id)).all()
    res = []
    import json
    for o in orders:
        res.append(OrderRead(id=o.id, total=o.total, status=o.status, created_at=o.created_at, user_id=o.user_id, items=json.loads(o.items_json)))
    return res
