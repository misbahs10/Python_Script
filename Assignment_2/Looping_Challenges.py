# Section E: Real-World Looping Challenges.

# 47. Loop through employee salaries, print only above average.

salaries = [30000, 40000, 60000, 100000]

average_salary = sum(salaries) / len(salaries)
for salary in salaries:
    if salary > average_salary:
        print(f"Above average salary: {salary}")

# 48. Loop through list of student grades, print pass/fail.

grades = [85, 45, 90, 34, 69]

for grade in grades:
    if grade >= 50:
        print(f"Grade {grade}: Pass")
    else:
        print(f"Grade {grade}: Fail")

# 49. Remove duplicates from list manually (without set).

list = [1, 2, 2, 3, 4, 4, 5, 5, 5]
unique_list = []

for item in list:
    if item not in unique_list:
        unique_list.append(item)

print(unique_list)

# 50. Flatten a nested list using loop.

nested_list = [[1, 2, 3], [7, 8], [10]]
flat_list = []
for sublist in nested_list:
    for item in sublist:
        flat_list.append(item)

print(flat_list)

# 51. Loop to validate email addresses (must contain "@").

emails = ["alice@gmail.com", "bob123", "charlie@yahoo.com", "invalid.com"]

for email in emails:
    if "@" in email:
        print(f"Valid email: {email}")
    else:
        print(f"Invalid email: {email}")

# 52. Count number of urgent messages in chat logs.

chat_logs = ["Urgent: Server down", "Info: Update available", "Urgent: Disk space low", "Debug: Variable not found"]
urgent_count = 0

for log in chat_logs:
    if "Urgent" in log:
        urgent_count += 1

print(f"Number of urgent messages: {urgent_count}")

# 53. Loop to show only Pakistani contacts (+92).

contacts = ["+92-300-1234567", "+92-400-7654321", "+1-800-5555555", "+92-500-1112222"]
for contact in contacts:
    if contact.startswith("+92"):
        print(f"Pakistani contact: {contact}")

# 54. Simulate inventory reduction when order placed.

inventory = {"item1": 10, "item2": 5, "item3": 0}
order = {"item1": 2, "item2": 1}

for items, quantity in order.items():
    if items in inventory:
        inventory[items] -= quantity
print("Updated inventory:")

for item1, quantity in inventory.items():
    print(f"{item1}: {quantity}")

# 55. Loop through doctor profiles and print specialists only.
doctor = [
    {"name": "Dr. Smith", "specialty": "Cardiology"},
    {"name": "Dr. Jones", "specialty": "Neurology"},
    {"name": "Dr. Brown", "specialty": "Pediatrics"},
    {"name": "Dr. White", "specialty": "Orthopedics"}
]

for doc in doctor:
    if doc["specialty"] != "Neurology":
        print(f"Specialist: {doc['name']} - {doc['specialty']}")

# 56. Loop through dictionary of courses per student.

student_courses = {
    "Alice": ["Math", "Physics", "Chemistry"],
    "Bob": ["Biology", "Chemistry", "Physics"],
    "Charlie": ["Math", "Biology", "Chemistry"]
}

for name, courses in student_courses.items():
    print(f"Courses for {name}: {', '.join(courses)}")

# Interview Qs:

# 57. How do you iterate over both keys and values in dictionary?

# Agar hum dictionary ke keys and values dono ko iterate karna chahte hain to hum ".items()" method ka istamal karte hain.

my_dict = {"name": "Misbah", "age": 18, "city": "Karachi"}

# Iterate over both keys and values
for key, value in my_dict.items():
    print(key, ":", value)

# 58. How to break out of multiple nested loops in Python?

# Agar humein multiple nested loops se ek sath break karna ho to hum ek flag variable ka use karte hain.

# Example using flag:
found = False
for i in range(5):
    for j in range(5):
        if i == 2 and j == 3:
            found = True
            break
    if found:
        break

print("Exited nested loops")