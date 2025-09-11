# Section C: Nested Loops (Real-World + Interview Qs)

# 23. Print all seat numbers in cinema (Rows A–C, Seats 1–5 → A1, A2...).

rows = ["A", "B", "C"]
seats = [1, 2, 3, 4, 5]
for row in rows:
    for seat in seats:
        print(f"{row}{seat}")

# 24. Generate all shirt-pant combinations from 2 lists.

shirts = ["Olive Green", "Cream", "Black"]
pants = ["Brown", "Beige", "Gray"]
for shirt in shirts:
    for pant in pants:
        print(f"{shirt} shirt with {pant} pants")

# 25. Print every minute from 12:00 → 12:10.

for hour in range(12, 13):
    for minute in range(0, 11):
        # :02d.
        # ":" formatting start hoti hai.
        # "0" agar value chhoti hai zeros se fill ho gi.
        # "2" total width 2 characters hoti hai.
        # "d" value ko integer (decimal number) ki tarhan print ho gi.
        print(f"{hour}:{minute:02d}")

# 26. Nested loop to show timetable: Days 1-3, Slots Morning/Evening.

days = [1, 2, 3]
slots = ["Morning", "Evening"]
for day in days:
    for slot in slots:
        print(f"Day {day} - {slot} Slot")

# 27. Print seating chart for bus (Rows 1-3, Seats A-D).

bus_rows = [1, 2, 3]
bus_seats = ["A", "B", "C", "D"]
for bus_row in bus_rows:
    for bus_seat in bus_seats:
        print(f"Row {bus_row}, Seat {bus_seat}")

# 28. Print a Tic-Tac-Toe 3x3 board.

rows1 = 1
while rows1 <= 3:
    col1 = 1
    while col1 <= 3:
        print(f"({rows1}, {col1})", end=" ")
        col1 += 1
    print()  # Move to the next line after each row
    rows1 += 1

# 29. Print a star pyramid pattern.

n = int(input("Enter number of rows: "))
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for k in range(2 * i - 1):
        print("*", end="")
    print()

# 30. Nested loop to find all team pairs from player list.

players = ["Alice", "Bob", "Charlie"]
for i in range(len(players)):
    for j in range(i + 1, len(players)):
        print(f"Match: {players[i]} vs {players[j]}")

# 31. Generate full multiplication tables from 2—5.

for i in range(2, 6):
    for j in range(1, 11):
        print(f"{i} x {j} = {i * j}")
    print()

# 32. Print shopping categories and their products.

categories = {
    "Clothing": ["Shirt", "Pants", "Jacket"],
    "Footwear": ["Sneakers", "Boots", "Sandals"],
    "Accessories": ["Watch", "Belt", "Hat"]
}
for category, products in categories.items():
    print(f"Category: {category}")
    for product in products:
        print(f" - {product}")
    print()

# ------------------------- Interview Qs: ---------------------------

# 33. Time complexity of nested loops?

# Nested loops ka time complexity depend karta hai loops ke andar iterations ki count par.
# Agar ek loop n times chal raha hai aur uske andar ek aur loop m times chal raha hai, to overall time complexity O(n * m) hota hai.
# Agar dono loops ka iteration count same ho to complexity O(n^2) ban jati hai.
# Example:
# ye loop n times chalega
n = 4
for i in range(n):
# ye loop m times chalega
    m = 3
    for j in range(m):
        print(i, j)

# 34. When would you replace nested loops with list comprehensions?

# Jab humme concise aur readable code likhna ho, aur nested loops ka output ek list ya nested list ki form mein ho.
# List comprehensions fast hoti hain aur kam lines mein kaam kar leti hain.
# Example:
# Nested loop:
result = []
for i in range(3):
    for j in range(3):
        result.append((i, j))
print(result)

# List comprehension:
result = [(i, j) for i in range(3) for j in range(3)]
print(result)