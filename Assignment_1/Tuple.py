# 28. Create a tuple of 5 countries. Try changing the 2nd country and observe what happens.
countries = ("Pakistan", "China", "Japan", "South Korea ", "Singapore")
# countries[1] = "India"  # This will raise a TypeError because tuples are immutable.
print(countries)
# Python main Tuples change nahi hota, jis ka matlab hai kah ek bar jab woh ban jain to tuples ke element ko change nahi kiya ja sakta hai.
# TypeError: 'tuple' object does not support item assignment.

# 29. Print the last two countries using slicing.
countries = ("Pakistan", "China", "Japan", "South Korea", "Singapore")
last_two_countries = countries[-2:] # ---> ending index is not included in the slice, so it will return the last two elements.
print(last_two_countries)

# 30. Count how many times "Pakistan" appears in a tuple.
countries1 = ("Pakistan", "China", "Japan", "South Korea", "Singapore", "Pakistan", "Pakistan")
count_pakistan = countries.count("Pakistan")
print(count_pakistan, "times")

# 31. Given: 't = (1, 2, 3, 14, 51)'. Add 6 to the list inside the tuple and explain the result.
t = (1, 2, 3, 14, 51)
# Tuples are immutable, isliye hum tuple ke andar kisi bhi element ko change nahi kar sakte. Lekin agar tuple ke andar koi list hai, to hum us list ke elements ko change kar sakte hain.
Add_list = (1, [2, 3], 14, 51) # Adding a list inside the tuple.
Add_list[1].append(6)
print(Add_list)

# 32. Convert tuple `(1, 2, 3)` to string "1-2-3" using 'join()'.
tuple = (1, 2, 3)
# Tuples are immutable, isliye hum tuple ke andar kisi bhi element ko change nahi kar sakte. Lekin hum tuple ke elements ko string mein convert kar sakte hain.
tuple_str = '-'.join(map(str, tuple))  # Convert each element to string and join with '-'
print(tuple_str)