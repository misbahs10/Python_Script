# crud.py
from sqlmodel import Session, select
from models import User, Product, Category, CartItem, Order
from typing import List, Optional
import json

def get_user_by_email(session: Session, email: str) -> Optional[User]:
    statement = select(User).where(User.email == email)
    return session.exec(statement).first()

def create_user(session: Session, user: User) -> User:
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

def create_category(session: Session, category: Category) -> Category:
    session.add(category)
    session.commit()
    session.refresh(category)
    return category

def get_category(session: Session, category_id: int) -> Optional[Category]:
    return session.get(Category, category_id)

def create_product(session: Session, product: Product) -> Product:
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

def get_product(session: Session, product_id: int) -> Optional[Product]:
    return session.get(Product, product_id)

def list_products(session: Session, skip: int = 0, limit: int = 20, search: Optional[str]=None):
    stmt = select(Product).offset(skip).limit(limit)
    if search:
        stmt = select(Product).where(Product.title.contains(search) | Product.description.contains(search)).offset(skip).limit(limit)
    return session.exec(stmt).all()

def add_to_cart(session: Session, user_id: int, product_id: int, quantity: int = 1) -> CartItem:
    item = CartItem(user_id=user_id, product_id=product_id, quantity=quantity)
    session.add(item)
    session.commit()
    session.refresh(item)
    return item

def list_cart(session: Session, user_id: int):
    stmt = select(CartItem).where(CartItem.user_id == user_id)
    return session.exec(stmt).all()

def clear_cart_for_user(session: Session, user_id: int):
    stmt = select(CartItem).where(CartItem.user_id == user_id)
    items = session.exec(stmt).all()
    for i in items:
        session.delete(i)
    session.commit()

def create_order_from_cart(session: Session, user_id: int):
    cart_items = list_cart(session, user_id)
    if not cart_items:
        raise ValueError("Cart is empty")
    items = []
    total = 0.0
    for ci in cart_items:
        product = session.get(Product, ci.product_id)
        if not product:
            continue
        if product.inventory < ci.quantity:
            raise ValueError(f"Not enough inventory for product {product.title}")
        product.inventory -= ci.quantity
        items.append({"product_id": product.id, "price_at_purchase": product.price, "quantity": ci.quantity})
        total += product.price * ci.quantity
    import json
    order = Order(user_id=user_id, total=total, items_json=json.dumps(items))
    session.add(order)
    clear_cart_for_user(session, user_id)
    session.commit()
    session.refresh(order)
    return order
