# 39. What's the difference between mutable and immutable types? Give examples.

# Ans:39. mutable type create kar ne ke bad change kiya ja sakta hai, jab ke immutable type ko create kerne ke baad change nahi kiya ja sakta.
# Examples:
# - Mutable: Lists, Dictionaries, Sets
# - Immutable: Tuples, Strings, Integers

# 40. Explain the difference between 'is' and '==' in Python.

# Ans:40. 'is' checks for identity (whether two variables point to the same object in memory),
# while '==' checks for equality (whether the values of two variables are the same).
# 'is' ka istemal tab hota hai jab humein yeh dekhna ho ki two variables same object ko refer kar rahe hain ya nahi,
# jab ke '==' ka istemal tab hota hai jab humein yeh dekhna ho ki two variables ke values same hain ya nahi.
# Examples:
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  #(they have the same contents)
print(a is b)  #(they are different objects)

# 41. Can you change values in a tuple? Why or why not?

# Ans:41. python hum tuples ke values ko change nahi kar sakte because tuples are immutable.Tuples ko create kerne ke baad unke elements ko modify nahi kiya ja sakta.
# Example:
t = (1, 2, 3)
# t[0] = 10 TypeError because tuples are immutable.

# 42. Explain how 'elif works. Can it exist without 'if'?

# Ans:42. "elif" is a keyword in python that stands for "else_if". "if_else" multiple conditions ki statements ko check kerne ke liye use hota hai.
# Example:
z = 10
if z > 15:
    print("Greater than 15")
elif z > 5:
    print("Greater than 5")
else:
    print("5 or less")

# 43. What happens when accessing a non-existent dictionary key? How to avoid it?

# 44. Why are strings immutable in Python? What are the benefits?

# Ans:44. Strings are immutable in Python, means that string ko create kar ne ke baad change nahi kiya ja sakta.
# This immutability provides several benefits:
# 1. Performance: Immutable objects can be optimized by the interpreter, leading to better performance.
# 2. Safety: Since strings cannot be changed, they are inherently thread-safe, meaning they can be shared between threads without risk of modification.
# 3. Hashability: Immutable objects can be used as keys in dictionaries and elements in sets, as their hash value remains constant.
# Example:
# s = "Hello"
# s[0] = 'h'  # TypeError: 'str' object does not support item assignment


# 45. Difference between 'list.copy()' and using assignment? Show example.

# Ans:45. 'list.copy()' list ki shallow copy create karta hai meaning it creates a new list object with the same elements, while using assignment creates a reference to the same list object.
# Example:
original_list = [1, 2]
shallow_copy = original_list.copy()  # Creates a new list object with the same elements
assignment_copy = original_list  # Creates a reference to the same list object
original_list.append(6)  # Modifying the original list 
# will not affect the shallow copy
print(shallow_copy)

# 46. Can a tuple contain mutable items? Give a code example.

# Ans:46. Yes, tuple mein mutable items ho sakte hain like "List" and "Dictionaries". But the tuple itself remains immutable.
# Example:
tuple = (1, 2, [3, 4])  # Tuple main ek list create ki hai.
tuple[2].append(5)  # tuple ke under list ko modify kiya hai, which is allowed.
# will not raise an error.
print(tuple)

# 47. What is the difference between 'in' when used in a list vs a dictionary?

# Ans:47. "in" operator ka use list or dictionary dono mein hota hai, but "in" ka behavior different hota hai.
# Example:
my_list = [1, 2, 3] # In a list, 'in' checks if an element exists in the list.
my_dict = {'a': 1, 'b': 2} # In a dictionary, 'in' checks if a key exists in the dictionary. 
print(5 in my_list)  # False
print('a' in my_dict)  # True

# 48. Explain shallow copy vs deep copy with a list example.

# Ans:48. Shallow copy new object create karti hai but nested object ki copies create nahi karti, is ka matlab hai ke ye original objects copy karti hai.
# Deep copy new object create karti hai aur original object ke andar jitne bhi objects hain un sab ki copies create karti hai. or ek new object banati hai.
# Example:
import copy
original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)
original[0][0] = 10  
# will affect the shallow copy but not the deep copy.
print("Original: ", original)
print("Shallow: ", shallow)
print("Deep: ", deep)

# 49. What is the output of:
x = [1, 2, 3]
y = x
y.append(4)
print(x)
# Explain the result.

# Ans:49. "x" ek variable hai jo list [1, 2, 3] ko refer karta hai.
# "y" ko "x" ke saath assign kiya hai, "y" main "x" ki value store hogai hai. isliye "y" bhi "x" ko refer karta hai. 
# jab "y" mein hum ne 4 append kiya hai, to "x" bhi update ho gaya hai.
# The output will be [1, 2, 3, 4].