# 21. Create a list of 5 favorite fruits. Print the 3rd fruit.
favorite_fruits = ["Cherry", "Mango", "Strawberry", "Date", "Banana"]
print(favorite_fruits[2])

# 22. Add a new fruit to the end. Print updated list.
fruits_add = ["Cherry", "Mango", "Strawberry", "Date", "Banana"]
fruits_add.append("Pineapple")
print(fruits_add)

# 23. Remove the 2nd item. Print the list.
list_remove = ["Cherry", "Mango", "Strawberry", "Date", "Banana"]
list_remove.pop(1)
print(list_remove)

# 24. Sort the list alphabetically and print it.
Sort_list = ["Cherry", "Mango", "Strawberry", "Date", "Banana"]
Sort_list.sort()
print(Sort_list)

# 25. Replace all even numbers in a list of 5 numbers with "Even" using a loop.
numbers = [1, 2, 3, 4, 5]
for i in range(len(numbers)):
    if numbers[i] % 3 == 0: # har element ke liye hum check karte hain ke ye divisible by 2 (% 2 == 0), yani ke ye even hai tu hum isko "Even" se replace karte hain.
        numbers[i] = "Even"
print(numbers)

# 26. Write a function that returns a new list with only unique elements.


# 27. Sort a list of words by word length (not alphabetically).
words = ["apple", "kiwi", "banana", "fig", "grapes"]
words.sort(key=len)
print(words)