# Section H: List Comprehension (Real-Life + Interview Qs)

# 83. Generate roll numbers BSE-2, ..., BSE-50]'.

roll_nums = [f"BSE-{i}" for i in range(2, 51)]
print(roll_nums)

# 84. Extract vowels from string.

text = "Hello python programming"
vowels = [char for char in text if char.lower() in "aeiou"]
print(vowels)

# 85. Get only words starting with "S" from list.

words = ["Sun", "Moon", "Stars", "Sky"]
s_words = [word for word in words if word.startswith("S")]
print(s_words)

# 86. Flatten nested list using comprehension.

nested = [[1, 2], [3, 4], [5, 6]]
flat = [num for sublist in nested for num in sublist]
print(flat)

# 87. Create dictionary {word: length} from list of words

words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
print(word_lengths)


# 88. Extract domain names from emails.

emails = ["ali@gmail.com", "sara@yahoo.com", "ahmed@outlook.com"]
unique_domains = set(email.split("@")[1] for email in emails)
print(unique_domains)

# 89. Create list of even numbers from 1—100.

even_numbers = [x for x in range(1, 101) if x % 2 == 0]
print(even_numbers)

# 90. Filter transactions above 100,000 PKR.

transactions = [50000, 120000, 75000, 200000, 95000, 150000]
high_value_transactions = [t for t in transactions if t > 100000]
print(high_value_transactions)

# 91. Extract hashtags from tweets.

tweet = "Learning Python is fun! #coding #python #AI #programming #FastAPI"
hashtags = [word for word in tweet.split() if word.startswith("#")]
print(hashtags)

# 92. List comprehension for seat numbers A1—C5.

seats = [row + str(col) for row in "ABC" for col in range(1, 6)]
print(seats)

# Interview Qs:

# 93. When to prefer list comprehension over loops?

# Jab concise aur readable code likhna ho, aur ek new list ya collection ko 
# transform ya filter karna ho, tab list comprehension use karni chahiye. 
# Yeh fast hota hai aur kam lines mein kaam kar leta hai, lekin agar logic 
# complex ho ya multiple conditions ho, to traditional loops zyada behtar hote hain.

# 94. Can list comprehensions replace map/filter?

# yes, list comprehensions map aur filter ko replace kar sakta hai, 
# lekin yeh readability aur preference par depend karta hai. 
# List comprehension zyada pythonic aur readable hota hai, 
# jabke map aur filter functional programming ke concepts ko follow karte hain.