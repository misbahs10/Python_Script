# # Section G: Lambda Functions (Real-Life + Interview Qs)

# 71. Lambda to check even/odd.

even_odd = lambda x: "Even" if x % 2 == 0 else "Odd"

user = float(input("Enter a even or odd number: "))

print(even_odd(user))

# 72. Lambda with map() double numbers.

numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))

print(doubled)

# 73. Lambda with filter() select emails ending with '.edu'.

emails = ["alice@collage.com", "bob@school.edu", "charlie@university.edu"]

edu_emails = list(filter(lambda email: email.endswith('.edu'), emails))

print(edu_emails)

# 74. Lambda with reduce() product of list.

# Python main reduce() ek functools module ka function hai jo ek sequence (list, tuple) ke elements par repeatedly ek function apply karke ek single value return karta hai.
from functools import reduce

numbers = [2, 3, 4, 5]

product = reduce(lambda x, y: x * y, numbers)

print(product)

# 75. Lambda to extract first character of each word.

word  = ["python", "language", "lambda"]

first_char = list(map(lambda x: x[0], word))

print(first_char)

# 76. Lambda to sort employees by salary.

employees = [
    {"name": "Ali", "salary": 50000},
    {"name": "Sara", "salary": 75000},
    {"name": "Ahmed", "salary": 60000},
]

sorted_employees = sorted(employees, key = lambda x: x["salary"], reverse=True)

print(sorted_employees)
 
# 77. Lambda to filter only premium users.

users = [
    {"name": "Ali", "type": "premium"},
    {"name": "Sara", "type": "free"},
    {"name": "Ahmed", "type": "premium"},
    {"name": "Zara", "type": "free"},
]

premium_users = list(filter(lambda u: u["type"] == "premium", users))

print(premium_users)


# 78. Lambda with sorted() sort by last name.

names = ["Ali Khan", "Sara Ahmed", "Bilal Zafar", "Zara Noor"]

sorted_names = sorted(names, key=lambda name: name.split()[-1])

print(sorted_names)

# 79. Lambda to format phone numbers.

phone_numbers = ["1234567890", "9876543210", "5556667777"]

formatted_numbers = list(map(lambda x: f"+92-{x}", phone_numbers))

print(formatted_numbers)

# 80. Lambda to filter all '.jpg' files.

files = ["image.jpg", "document.pdf", "resume.docx"]

jpg_files = list(filter(lambda f: f.endswith('.jpg'), files))

print(jpg_files)

# Interview Qs:

# 81. Difference between lambda and def function?

# Lambda ek anonymous (nameless) function hota hai jo ek hi line ka hota hai aur ek expression ko evaluate karta hai. Def function ek named function hota hai jo multiple lines ka ho sakta hai aur complex logic handle kar sakta hai.

# Example of lambda:
add = lambda x, y: x + y
print(add(2, 3))

# Example of def:
def add_def(x, y):
    return x + y
print(add_def(2, 3))

# 82. Limitations of lambda functions?

# 1. Lambda functions sirf ek hi expression ko handle kar sakta hai, multiple statements nahi likhe ja sakte.
# 2. Lambda functions ka naam nahi hota, is liye unhein reuse karna difficult hota hai.
# 3. Lambda functions debugging ke liye mushkil hota hai kyun ke unka naam nahi hota aur code readability kam hoti hai.
# 4. Lambda functions complex logic ya error handling ke liye suitable nahi hota.