# Section F: Interview-Style String Challenges

# 59. Remove duplicate characters from string (no set).

def remove_duplicate(string):
    result = ""
    for char in string:
        if char not in result:
            result += char
    return result

text = "programming"
print(remove_duplicate(text))        

# 60. Find first non-repeated character in string.

def non_repeated(string):
    count = {}

    for character in string:
        count[character] = count.get(character, 0) + 1
    for character in string:
        if count[character] == 1:
            return character
    return None

print(non_repeated("swiss"))
print(non_repeated("repeated"))
print(non_repeated("hello world"))

# 61. Rotate string left  (`abc` → `bca`).

def rotate_string(s, n):

    if not s:
        return ""
    n = n % len(s)  # Handle cases where n is greater than string length
    return s[n:] + s[:n]

print(rotate_string("abc", 1))

# 62. Compress string (`aaabb` → `a3b2`). 

def compress_string(s):

    if not s:
        return ""
    result = []
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            result.append(s[i-1] + (str(count) if count > 1 else ''))
            count = 1
    result.append(s[-1] + (str(count) if count > 1 else ''))
    return ''.join(result)

print(compress_string("aaabb"))

# 63. Reverse words in sentence without slicing.

def reverse_words(sentence):
    result = ""
    word = ""
    for sent in sentence:
        if sent == " ":
            result = word + " " + result
            word = ""
        else:
            word += sent
    result = word + " " + result
    # .strip() method Python mein string ke start aur end se extra spaces ya specified characters remove karta hai.
    return result.strip()

print(reverse_words("I am learning python programming."))

# 64. Count uppercase vs lowercase letters.

def count_case(text):

    upper = 0
    lower = 0
    for char in text:
        if char.isupper():
            upper += 1
        if char.islower():
            lower += 1
    return upper, lower

string = "Hello World!"
upper_lower = count_case(string)
print(f"UpperCase: {upper_lower[0]} ")
print(f"LowerCase: {upper_lower[1]}")

# 65. Validate password (min 8 chars, at least 1 digit).

password = input("Enter your password: ")

if len(password) < 8:
    print("Invalid: Password must be at least 8 characters long")
# .isdigit() python main ye check karta hai ke string main koi digit hai ya nahi agar sirf string hai tu false return karega aur agar string main koi bhi digit hai tu true return karega.
elif not any(ch.isdigit() for ch in password):
    print("Invalid: Password must contain at least one digit")
else:
    print("Valid Password")

# 66. Find duplicate words in paragraph.

def duplicate_words(paragraph):

    words = paragraph.split()
    seen = set()
    duplicates = set()
    for word in words:
        if word in seen:
            duplicates.add(word)
        else:
            seen.add(word)
    return duplicates

print(duplicate_words("This is a test. This test is only a test."))

# 67. Count frequency of vowels.

def count_vowels(text):
    vowels = "aeiouAEIOU"
    freq = {}
    for char in text:
        if char in vowels:
        #  python main .get() dictionary method hai jo dictionary se key ki value ko nikalne ke liye use hota hai.
            freq[char] = freq.get(char, 0) + 1
    return freq

print(count_vowels("Guido van Rossum"))

# 68. Check if two strings are anagrams.

def are_anagrams(str1, str2):
    return sorted(str1.lower()) == sorted(str2.lower())

print(are_anagrams("listen", "silent"))
print(are_anagrams("hello", "world"))

# Interview Qs:

# 69. Difference between immutable (string, tuple) vs mutable (list, dict)?

# Immutable Objects (String and Tuple).
# Immutable objects jaise string aur tuple wo hote hain jo change nahi ho sakte Agar aap unhain modify karne ki koshish karein, to naya object banega instead of modifying the original.

# Mutable Objects (List and Dictionary).
# Mutable objects jaise list aur dictionary hote hain jo modify ho sakte hain without new object banaye. Hum unhain directly change kar sakte hain.

# Example of Immutable:
immutable_str = "hello"
new_str = immutable_str.replace("h", "j")
print(immutable_str)  # Output: hello (original string unchanged)
print(new_str)        # Output: jello (new string created)

# Example of Mutable:
mutable_list = [1, 2, 3]
mutable_list.append(4)
print(mutable_list)   # Output: [1, 2, 3, 4] (original list modified)

# 70. Why strings are immutable in Python?

# Strings python mein immutable is liye hain kyun ke ye performance aur security ke liye beneficial hota hai. Jab ek string immutable hoti hai, to uska data change nahi hota, jo bugs aur unexpected behavior se bachata hai. Saath hi, strings ko hashable banata hai, jo unhain dictionary keys ya sets mein use karne ki permission deta hai.