# E-Commerce Backend (FastAPI) - Quick Start

1. Create virtual env & install:
   python -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   pip install -r requirements.txt

2. Run the server:
   uvicorn main:app --reload

3. API docs:
   Open http://127.0.0.1:8000/docs for Swagger UI (interactive)

4. Example flows:
   - Register: POST /users/register { "email", "password", "full_name" }
   - Login: POST /users/token  (use form data: username=email, password)
     -> returns access_token (Bearer)
   - Create Category: POST /products/categories (admin or any user in this example)
   - Create Product: POST /products/  (requires product body)
   - Add to cart: POST /cart/ (Bearer token required)
   - Create Order from cart: POST /orders/create (Bearer token required)

Notes:
- SECRET_KEY in auth.py should be set to an env var for production.
- Use PostgreSQL/MySQL for production; SQLite is for dev/testing.
- Add input validation, better error handling, and background workers as next steps.
