# models.py
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
from pydantic import EmailStr
from datetime import datetime

# --- User / Auth ---
class UserBase(SQLModel):
    email: EmailStr
    full_name: Optional[str] = None
    is_active: bool = True
    is_superuser: bool = False

class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    hashed_password: str

    carts: List["CartItem"] = Relationship(back_populates="user")
    orders: List["Order"] = Relationship(back_populates="user")

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int

# --- Category ---
class CategoryBase(SQLModel):
    name: str
    description: Optional[str] = None

class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    products: List["Product"] = Relationship(back_populates="category")

class CategoryRead(CategoryBase):
    id: int

# --- Product ---
class ProductBase(SQLModel):
    title: str
    description: Optional[str] = None
    price: float
    inventory: int = 0

class Product(ProductBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    category: Optional[Category] = Relationship(back_populates="products")

class ProductCreate(ProductBase):
    category_id: Optional[int]

class ProductRead(ProductBase):
    id: int
    category: Optional[CategoryRead] = None

# --- Cart ---
class CartItemBase(SQLModel):
    quantity: int = 1

class CartItem(CartItemBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    product_id: Optional[int] = Field(default=None, foreign_key="product.id")

    user: Optional[User] = Relationship(back_populates="carts")
    product: Optional[Product] = Relationship()

class CartItemCreate(CartItemBase):
    product_id: int

class CartItemRead(CartItemBase):
    id: int
    product: ProductRead

# --- Order ---
class OrderItem(SQLModel):
    product_id: int
    price_at_purchase: float
    quantity: int

class OrderBase(SQLModel):
    total: float
    status: str = "created"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Order(OrderBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    items_json: str  # store JSON string of items for simplicity

    user: Optional[User] = Relationship(back_populates="orders")

class OrderCreate(SQLModel):
    items: List[OrderItem]

class OrderRead(OrderBase):
    id: int
    user_id: int
    items: List[OrderItem]
