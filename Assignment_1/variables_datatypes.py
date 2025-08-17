# 1. Create a variable "student_name" assign your name and print its type
student_name = "Misbah Sajjad"
print(type(student_name))

# 2. Store your age in a variable. Multiply it by 2 and print the result.
Age = 19
print(Age * 2)

# 3. Create three variables with an integer, a string, and a float. Print their types.
number_var = 10
name_var = "Hello"
decimal_var = 3.14
print(type(number_var))
print(type(name_var))
print(type(decimal_var))

# 4. Convert the integer '55' to a string and concatenate with " is a number".
integer = 55
string_conversion = str(integer) + " is a number"
print(string_conversion)

# 5. Input two numbers, print their sum and the type of the result.
num1 = float(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum_result = num1 + num2
print("Sum:", sum_result)

# 6. Assign 'a = "5"' (string) and 'b = 3'. Add them correctly and explain the result.
a = "5"
b = 3
# 'a' ek string hai, or 'b' ek integer hai. Jab hum in dono ko jodte hain, tu Python typeError dega because string ko integer mein convert nahi karega, isliye yeh concatenation karega.
# Iska matlab hai ke 'a' aur 'b' ko jod kar ek naya string banega. resulting in '53' as a string.
result = a + str(b)
print("Result of adding 'a' and 'b':", result)

# 7. Swap values of two variables without a third variable.
x = 5
y = 10
x, y = y, x
print("After swapping: x =", x, ", y =", y)

# 8. What is the type and output of: 'result = 3 + 4.0 + True'?
result = 3 + 4.0 + True
#  3 is an integer (int)
#  4.0 is a floating-point number (float)
#  True is a boolean, but in arithmetic operations, Python treats it as 1
# 3 + 4.0 = 7.0        # int + float results in a float
# 7.0 + True = 8.0     # float + bool (treated as 1) results in a float

print("Result of 3 + 4.0 + True:", result)
print("Type of result:", type(result))

# 9. Input a float number and print if it's an integer (without using int()').
float_input = float(input("Enter a float number: "))
if float_input.is_integer():
    print(f"{float_input} is an integer.")
else:
    print(float_input, " is not an integer.")
    
# 10. Use 'isinstance()' to check whether an input is float or integer.
def check_type(value):
    if isinstance(value, int): # Check if the value is an integer
        return "It's an integer." 
    elif isinstance(value, float): # Check if the value is a float
        return "It's a float."
    else:
        return "It's neither an integer nor a float."
