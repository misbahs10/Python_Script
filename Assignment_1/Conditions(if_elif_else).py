# 11. Check if a number is positive, negative, or zero.
number = int(input("Enter a number +ive, -ive, zero: "))
if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")

# 12. Input marks; print "Passed" if 250, else "Failed".
marks = int(input("Enter your marks: "))
if marks >= 250:
    print("Passed")
else:
    print("Failed")

# 13. Find the largest of three numbers using if/elif/else.
number1 = int(input("Enter first number: "))
number2 = int(input("Enter second number: "))
number3 = int(input("Enter third number: "))
if number1 >= number2 and number1 >= number3:
    print("First largest number is:", number1)
elif number2 >= number1 and number2 >= number3:
    print("Second largest number is:", number2)
else:
    print("Third largest number is:", number3)

# 14. Input age. Print: Child (age < 13), Teen (13—19), Adult (20+).
age = int(input("Enter your age: "))
if age < 13:
    print("Child")
elif age <= 19:
    print("Teen")
else:
    print("Adult")

# 15. Check whether a number is even or odd using `%`.
number_check = int(input("Enter a number even or odd: "))
if number_check % 2 == 0:
    print("Even")
else:
    print("Odd")

# 16. Input two subjects' marks. Print: "Both Passed", "One Passed", or "None Passed".
subject1 = int(input("Enter marks for subject 1: "))
subject2 = int(input("Enter marks for subject 2: "))
if subject1 >= 40 and subject2 >= 40:
    print("Both Passed")
elif subject1 >= 40 or subject2 >= 40:
    print("One Passed")
else:
    print("None Passed")

# 17. Classify a triangle as Equilateral, Isosceles, or Scalene using its sides.
side_a = int(input("Enter first side of triangle: "))
side_b = int(input("Enter second side of triangle: "))
side_c = int(input("Enter third side of triangle: "))
if side_a == side_b == side_c:
    print("Equilateral Triangle")
elif side_a == side_b or side_b == side_c or side_a == side_c:
    print("Isosceles Triangle")
else:
    print("Scalene Triangle")

# 18. Input a number. Print "Fizz" if divisible by 3, "Buzz" if 5, "FizzBuzz" if both.
number_fizzbuzz = int(input("Enter a number for FizzBuzz: "))
if number_fizzbuzz % 3 == 0 and number_fizzbuzz % 5 == 0:
    print("FizzBuzz")
elif number_fizzbuzz % 3 == 0:
    print("Fizz")
elif number_fizzbuzz % 5 == 0:
    print("Buzz")
else:
    print("Neither Fizz nor Buzz")

# 19. Input temperature. Print: Freezing (<0), Cold (0—15), Moderate (16—30), Hot (>30).
temperature = int(input("Enter temperature: "))
if temperature < 0:
    print("Freezing")
elif 0 <= temperature <= 15:
    print("Cold")
elif 16 <= temperature <= 30:
    print("Moderate")
else:
    print("Hot")

# 20. Validate username and password: username 25 chars, Password has 1 digit and 1 special character.
username = str(input("Enter username (max 25 chars): "))
password = str(input("Enter password (1 digit, 1 special char): "))
if len(username) <= 25 and any(char.isdigit() for char in password) and any(not char.isalnum() for char in password):
    print("Validation successful!")
else:
    print("Invalid username or password")