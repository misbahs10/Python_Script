# Section A: For Loop (Real-Life + Interview Qs)

# 1. Print all file names in a given list of files.

file_list = ["report.docx", "book.pdf", "notes.txt", "image.png"]
for files in file_list:
    print(files)

# 2. Print each student’s name from a list with roll numbers.

students = ["Ali", "Sara", "Ahmed", "Fatima"]
# By default "enumerate" index 0 se start hota hai, lekin yahan start=1 likha hai, is liye counting 1 se start ho gi.
for idx, name in enumerate(students, start = 1):
    print(f"Roll No. {idx}: {name}")

# 3. Loop through an email list and print only those ending with `@gmail.com`.

email_list = ["jimin@gmail.com", "teahyung@yahoo.com", "jhope@gmail.com", "RM@yahoo.com"]
for email in email_list:
    if email.endswith("@gmail.com"):
        print(email)

# 4. Display all product prices from a list with “PKR” appended.

product_prices = [1200, 3500, 499, 999]
for price in product_prices:
    print(f"{price} PKR")

# 5. Loop through contacts and mask their phone number except last 4 digits.

contacts = [
    {"name": "Ali", "phone": "03001234567"},
    {"name": "Sara", "phone": "03331239876"},
    {"name": "Ahmed", "phone": "03123456789"}
]

for c in contacts:
    phone = c["phone"]
    masked = "*" * (len(phone) - 4) + phone[-4:]
    print(f"{c['name']}: {masked}")

# 6. Loop through a list of transactions and print those above 50,000 PKR.

transactions = [25000, 60000, 45000, 80000, 12000, 75000]
for t in transactions:
    if t > 50000:
        print(f"Transaction: {t} PKR")
        
# 7. Print all words from a sentence in reverse order.

sentence = "Python developed by Guido van Rossum in 1991."
# .split() sentence ko spaces ke basis par tod kar list of words bana deta hai.
# Result: 
# sentence = ["Python", "developed", "by", "Guido", "van", "Rossum", "in", "1991."]
words = sentence.split()
for word in reversed(words):
    print(word)

# 8. Loop through a shopping cart and print “Out of stock” if quantity = 0.

shopping_cart = [
    {"item": "Cakes", "quantity": 2},
    {"item": "Eggs", "quantity": 0},
    {"item": "Bread", "quantity": 4},
    {"item": "Butter", "quantity": 0}
]

for product in shopping_cart:
    if product["quantity"] == 0:
        print(f"{product['item']}: Out of stock")
    else:
        print(f"{product['item']}: {product['quantity']} in stock")
        
# 9. Print all pending tasks from a to-do list.

todo_list = [
    {"task": "Submit assignment", "status": "done"},
    {"task": "Pay bills", "status": "pending"},
    {"task": "Call Ali", "status": "done"},
    {"task": "Buy groceries", "status": "pending"}
]

for task in todo_list:
    if task["status"] == "pending":
        print(f"Pending: {task['task']}")

# 10. Print first 5 notifications from a list.

notifications = [
    "New message from Ali",
    "bags are available on daraz.pk",
    "50% off on all items!",
    "New instagram follower: Sara Ali",
    "Get 3 months of spotify premium for free Rs 0",
    "Your order has been shipped",
    "Upcoming event reminder"
]

for i in range(5):
    print(notifications[i])
    

# ----------------- Interview Qs: -------------------

# 11. Explain difference between `for item in list:` and `for i in range(len(list)):`

# ans-11 for item in list:
# - direct values (element) print kar ta hai.
# - values direct variable se milegi.
# - is tab use kar te hain jab hume value chahiye ho.
# - Output is
# apple
# banana
# mango
# for i in range(len(list)):
# - ye index(position) + values print kar ta hai.
# - value index ke through mil ti hai (list[i]).
# - ye tab use hota hai jab hume index chahiye ho.
# - Output is
# (index) --> 0 (value) --> apple
# (index) --> 1 (value) --> banana
# (index) --> 2 (value) --> mango

# 12. How does Python handle iterators internally in for loops?

# for loop internally "iter()" se ek iterator banata hai.
# Har step me "next()" call kar ke next element leta hai.
# Jab elements khatam ho jate hain to "StopIteration" exception aata hai, aur for-loop khud hi break ho jata hai.

# Example: for x in [1, 2, 3]
# for x in iterable:
#     body

# python iterable ko iterator banata hai
#  1. _iter = iter(iterable)

# Loop start
# 2. while True:
#        try:
# iterator se next element lo
#            x = next(_iter)
# agar element khatam ho gaye to "StopIteration" exception aata hai
#        except StopIteration:
# Loop end
#            break
# loop ka ander wala code run karo
#        body