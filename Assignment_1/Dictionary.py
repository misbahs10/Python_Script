# 33. Create dictionary 'student' with keys: 'name', 'age', 'grade'. Print all key-value pairs.
student = {
    "name" : "Misbah",
    "age" : 19,
    "grade" : "B"
}
student.items()
print(student)

# 34. Add new key 'subject' to the dictionary. Print updated dictionary.
dict = {
    "name" : "Misbah",
    "age" : 19,
    "grade" : "B"
    }
dict["subject"] = "Math"
print(dict)

# 35. Search for a key. If found, print the value.
dict = {
    "name" : "Misbah",
    "age" : 19,
    "grade" : "B"
    }
print(dict["name"])

# 36. Create dictionary of 3 students and their marks. Calculate average.
students = {
    "Ali": 45,
    "Sara": 70,
    "Osama": 30
}
average = sum(students.values())
print("Average marks:", average)

# 37. Given items and prices in a dictionary, input a budget and list affordable items.
items = {
    "Pen": 20,
    "Notebook": 120,
    "Bag": 750,
    "Bottle": 180,
    "Chips": 50
}

budget = int(input("Enter your budget: "))
print("Affordable items:")
for item, price in items.items():
    if price <= budget:
        print(f"{item} - {price} Rs")

# 38. Given:
# marks = {"Ali": 45, "Sara": 70, "Osama": 30}
# Print students scoring 250.
# Count how many failed.
marks = {"Ali": 45, "Sara": 70, "Osama": 30}

# Print students who scored exactly 250
for name, score in marks.items():
    if score == 250:
        print(name)

# Count students who failed (assuming fail < 40)
fail_count = 0
for score in marks.values():
    if score < 40:
        fail_count += 1

print("Number of failed students:", fail_count)
print(marks[name])