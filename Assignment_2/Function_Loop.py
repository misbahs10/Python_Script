# Section D: Functions + Loops (Real-Life + Interview Qs)

# 35. Function to count how many '.pdf files are in a list.'
def count_pdf_files(file_list):

    count = 0
    for file in file_list:
        if file.endswith('.pdf'):
            count += 1
    return count

file_list = ["document.pdf", "image.png", "report.pdf", "notes.txt", "summary.pdf"]
print(count_pdf_files(file_list))

# 36. Function to check username availability.
def is_username_available(username, existing_users):

    if username.lower() in (user.lower() for user in existing_users):
        return False
    return True

users = ["misbah", "alice", "teahyung"]
print(is_username_available("bob", users))
print(is_username_available("Alice", users))

# 37. Function to return longest word in a sentence.
def longest_word(sentence):

    words = sentence.split()
    if not words:
        return ""
    longest_word = ""

    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

word = "Python developed by Guido van Rossum in 1991"
print(longest_word(word))
    
# 38. Function that checks if string is palindrome using loop.
def is_palindrome(string):

    string = string.lower()
    num_letter = len(string)

    for i in range(num_letter // 2):
        if string[i] != string[num_letter - 1 - i]:
            return False
    return True

print(is_palindrome("madam"))
print(is_palindrome("racecar"))
print(is_palindrome("python"))
   
# 39. Function that prints multiplication table.
def multiplication(number):

    for i in range(1, 11):
        print(f"{number} x {i} = {number * i}")

table = int(input("Enter a number to see its multiplication table: "))
multiplication(table)

# 40. Function to simulate dice roll until 6 appears.

import random

def roll_until_six():

    rolls = 0
    while True:
        rolls += 1
# .randint() --> Ye function Python ke random module me hota hai.
# Ek random integer generate karna between a and b (inclusive).
# a = starting number
# b = ending number
# Dono a aur b included hote hain
        num = random.randint(1, 6)
        print(f"Roll {rolls}: {num}")
        if num == 6:
            print(f"Got a 6 after {rolls} rolls!")
            break

roll_until_six()
    
# 41. Function to filter products under given price.

def filter_products_by_price(products, max_price):

    return [product for product in products if product['price'] < max_price]

products = [
    {"name": "Laptop", "price": 1200},
    {"name": "Mouse", "price": 25},
    {"name": "Keyboard", "price": 75},
    {"name": "Monitor", "price": 300}
]

input_price = float(input("Enter maximum price: "))
print(filter_products_by_price(products, input_price))

# 42. Function that masks all passwords in list.
def mask_passwords(passwords):

    for i in range(len(passwords)):
        passwords[i] = "*" * len(passwords[i])
    return passwords

matched_password = ["mypassword123", "securepass!", "admin"]
print(mask_passwords(matched_password))

# 43. Function to count frequency of words in sentence.
def word_frequency(sentence):

    words = sentence.split()
    frequency = {}
    for word in words:
        frequency[word] = frequency.get(word, 0) + 1
    return frequency

sample_text = "hello world hello"
print(word_frequency(sample_text))

# 44. Function to extract hashtags from social media post.
def extract_hashtags(post):

# Python me .split() ek string method hai jo ek string ko tod kar list me convert karta hai.
    words = post.split()
    hashtags = [word for word in words if word.startswith("#")]
    return hashtags

social_media_post = "Loving the new features! #excited #Python #coding"
print(extract_hashtags(social_media_post))

# Interview Qs:

# 45. Difference between 'return' and 'print' in functions?

# "return" 
# return statement function se value ko wapas karta hai.
# return statement se hum variable me store kar sakte hain.
# ye aage kisi aur function ya operation me use kiya ja sakta hai.
# typical use case logical operations ya calculations hote hain.

# "print"
# print statement sirf output ko display karta hai.
# print statement se hum variable me store nahi kar sakte.
# ye debugging ya information display karne ke liye use hota hai.

# 46. Can functions in Python return multiple values?

# Yes, Python functions can return multiple values using tuple packing & unpacking.
def get_student():
    name = "Alice"
    age = 20
    grade = "A"
    return name, age, grade

student_info = get_student()
print(student_info)
