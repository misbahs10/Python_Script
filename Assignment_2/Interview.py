# Section I: Hard Interview Questions.

# 95. Implement your own `range()` using generator.

# Ans.95- range() normally numbers lazily generate karta hai. Matlab ek saath memory me sari list nahi banata, balkay ek ek value deta hai. Is ko hum generator se achieve karte hain. Generator memory efficient hota hai aur large sequences ke liye best hai.
# range(start, stop, step). start --> starting number (inclusive), stop --> ending number (exclusive), step --> increment/decrement. (step range main addition/subtraction ke liye use hota hai).
# Agar stop na mile to start 0 hoga.
# step 0 nahi ho sakta.
# Positive step me ascending loop chalega, negative step me descending.
# Ye implementation exactly built-in range ki tarah memory efficient hai kyun ke yield use kar raha hai, list banakar memory waste nahi karta hai.

# 96. Write your own `enumerate()` logic with loop.

# Ans.96- enumerate() function iterable (jaise list, tuple, string) ko index ke sath iterate karta hai. Har item ke sath uska index bhi return karta hai. Iska syntax hai: enumerate(iterable, start=0). Yahan start optional hai jo index ka starting point define karta hai. Default 0 hota hai.

# "yield".
# Python me yield ek keyword hai jo function ko generator bana deta hai. Normally function return se value deta hai aur function khatam ho jata hai. Lekin agar hum yield use karen, to function ruk jata hai us point par, aur next call hone par wahi se continue karta hai.
# Yani yield ek pause button ki tarah kaam karta hai.
def my_enumerate(iterable):
    index = 0
    for item in iterable:
        yield index, item
        index += 1

print(list(my_enumerate([1, 2, 3, 4])))

# 97. Reverse dictionary {key: value} → {value: key}.
def reverse_dict(d):
    return {v: k for k, v in d.items()}

intro = {
    "name": "Misbah",
    "surname": "Sajjad",
    "age": 19,
    "city": "Karachi"
}
print(reverse_dict(intro))

# 98. Find all unique pairs in list that sum to target.
def unique_pairs(nums, target):
    seen = set()
    pairs = set()
    
    for num in nums:
        diff = target - num
        if diff in seen:
            pairs.add(tuple(sorted((num, diff))))
        seen.add(num)
    
    return pairs

print(unique_pairs([1, 2, 3, 4, 5, 6], 7))

# 99. Check balanced parentheses using loop.
def is_balanced_all(s: str):

    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif ch in ')]}':
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        # agar koi aur character ho to ignore kar sakte hain
    return len(stack) == 0

print(is_balanced_all("({[]})"))
print(is_balanced_all("([)]"))
print(is_balanced_all("((a+b)*[c])"))

# 100. Implement a basic menu-driven system (1=Add, 2=Delete, 3=Exit).
def menu_system():
    items = []
    while True:
        print("\nMenu:")
        print("1. Add item")
        print("2. Delete item")
        print("3. Exit")
        
        choice = input("Enter your choice (1-3): ")
        
        if choice == '1':
            item = input("Enter item to add: ")
            items.append(item)
            print(f"'{item}' added.")

        elif choice == '2':
            item = input("Enter item to delete: ")
            if item in items:
                items.remove(item)
                print(f"'{item}' deleted.")

            else:
                print(f"'{item}' not found.")

        elif choice == '3':
            print("Exiting...")
            break

        else:
            print("Invalid choice. Please try again.")

menu_system()

# 101. Print JSON-like dictionary with nested loop.
def JSON(data, indent=0):

    for key, value in data.items():
        print(' ' * indent + str(key) + ': ', end='')
        if isinstance(value, dict):
            print()
            JSON(value, indent + 2)
        else:
            print(str(value))

data = {
    "name": "Misbah",
    "age": 19,
    "address": {
        "street": "123 Main St",
        "city": "Karachi",
        "country": {
            "name": "Pakistan",
            "code": "PK"
        }
    },
    "hobbies": ["painting", "gaming", "coding"]
}

JSON(data)

# 102. Simulate login with dictionary {username: password}.
def login_system(users):

    while True:
        username = input("Enter username: ")
        password = input("Enter password: ")
        
        if username in users and users[username] == password:
            print("Login successful!")
            break
        else:
            print("Invalid credentials. Please try again.")

users = {
    "Misbah": "pass1",
    "Alice": "pass2",
    "admin": "admin123"
}

login_system(users)

# 103. Implement word frequency counter without using collections.
def word_frequency(text):

    words = text.split()
    freq = {}
    
    for word in words:
        word = word.lower().strip('.,!?;"\'()[]{}')  # Normalize the word
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1
    
    return freq

text = "Hello world! This is a test. Hello again, world."
print(word_frequency(text))

# 104. Implement pagination (show 5 records per page).
def paginate(records, page_size=5):
    total_pages = (len(records) + page_size - 1) // page_size
    
    current_page = 1
    while True:
        start = (current_page - 1) * page_size
        end = start + page_size
        page_records = records[start:end]

        print(f"\n--- Page {current_page}/{total_pages} ---")
        for record in page_records:
            print(record)

        if current_page >= total_pages:
            print("\nEnd of records.")
            break

        choice = input("\nNext page? (y/n): ")
        if choice.lower() == "y":
            current_page += 1
        else:
            break

records = [f"Record {i}" for i in range(1, 21)]
paginate(records)
    
# 105. Simulate restaurant order system with while + dict.
def restaurant_order_system():
    menu = {
        "burger": 250,
        "pizza": 600,
        "fries": 150,
        "drink": 100
    }

    print("Welcome to Misbah's Restaurant")
    print("Menu:")

    for item, price in menu.items():
        print(f"{item} - Rs.{price}")

    orders = {}

    while True:
        item = input("\nEnter item to order (or type 'done' to finish): ").lower()

        if item == "done":
            break
        elif item not in menu:
            print("Item not available, please choose from the menu.")
            continue

        qty = input(f"Enter quantity of {item}: ")
        if not qty.isdigit():
            print("Please enter a valid number.")
            continue

        qty = int(qty)
        if item in orders:
            orders[item] += qty
        else:
            orders[item] = qty

        print(f"{qty} {item}(s) added to your order.")

    print("\n ---- Your Bill ---- ")
    total = 0
    for item, qty in orders.items():
        price = menu[item] * qty
        print(f"{item} x {qty} = Rs.{price}")
        total += price

    print("-------------------")
    print(f"Total: Rs.{total}")
    print("Thank you for ordering!")

restaurant_order_system()
