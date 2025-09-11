# Section B: While Loop (Real-Life + Interview Qs).

# 13. Keep asking user for password until it matches.

password = "Blood@Money09"
entered_password = ""
while entered_password != password:
    entered_password = input("Enter the password: ")
    if entered_password == password:
        print("Password accepted!")
    else:
        print("Incorrect password. Please try again.")

# 14. ATM PIN check with max 3 attempts.

pin = "1234"
attempts = 0
max_attempts = 3
while attempts < max_attempts:
    entered_pin = input(f"Enter your PIN (Attempt {attempts + 1}/{max_attempts}): ")
    if entered_pin == pin:
        print("PIN accepted.")
        break
    else:
        print("Incorrect PIN.")
        attempts += 1
else:
    print("Too many incorrect attempts. Your card is blocked.")

# 15. Simulate downloading progress `[###      ] 30%`.
 
progress = 0
max_progress = 100
while progress < max_progress:
    progress += 10

# progress // 10 --> ka matlab: progress ko 10 se divide karna aur integer mein result lena.
# Example:
# Agar progress = 20 --> (20 // 10 = 2)
# "##" banega.
# Is se hum bar ke liye "#" banate hain (jitna bhi progress hua hai).

    progress_bar = "#" * (progress // 10) 

# Full bar ki length 10 characters honi chahiye.
# Agar progress abhi kam hai to baaki jagah " " (spaces) fill kar  diye jaate hain.
# Example:
# progress_bar = "##" (length = 2)
# spaces = " " * (10 - 2) --> tu 8 spaces fill hon ge. 

    spaces = " " * (10 - len(progress_bar))
    print(f"[{progress_bar}{spaces}] {progress}%")
    if progress == max_progress:
        print("Download completed.")

# 16. While loop to collect student marks until "done" entered.

marks = []
while True:
    mark = input("Enter a student's mark (or 'done' to finish): ")
    if mark == "done":
        break
    mark = int(mark)
    marks.append(mark)

print("Student marks:", marks)

# 17. Keep looping until internet connection = True.

internet_connection = False
# Jab tak internet False hai, loop chalta rahe ga.
while not internet_connection:
    print("Checking for internet...")
    user_input = input("Internet mila? (yes/no): ")
    if user_input.lower() == "yes":
        internet_connection = True

print("Internet connected.")

# 18. While loop for chatbot (keep asking until user types "bye").

print("Chatbot: Hello! Type 'bye' to exit.")
# infinite loop break nahi hoga to ye condition chalti rahe gi.
while True:
    user_input = input("You: ")

    if user_input.lower() == "bye":
        print("Chatbot: Goodbye! Have a nice day.")
        break
    
    else:
        print(f"Chatbot: You said '{user_input}'")


# 19. While loop for traffic light simulation.

# hum "time" module ko delay/timing control karne ke liye use karte hain. 
import time

lights = ["🔴 Red", "🟢 Green", "🟡 Yellow"]
index = 0
# start with Red
cycle = 0
max_cycles = 2

while True:
    current_light = lights[index]
    print(f"Traffic Light: {current_light}")

    # Delay based on light
    if current_light == "🔴 Red":
        time.sleep(3)   # Red stays 3 sec
    elif current_light == "🟢 Green":
        time.sleep(3)   # Green stays 3 sec
    elif current_light == "🟡 Yellow":
        time.sleep(1)   # Yellow stays 1 sec

    # move to next light
    index = (index + 1) % len(lights)
    if index == 0:
        cycle += 1

    if cycle == max_cycles:
        print("Traffic cycle completed.")
        break

# 20. Simulate a taxi meter counting distance.

import time

distance = 0
rate_per_km = 50
max_distance = 5

print("Taxi meter started...")

while distance < max_distance:
    time.sleep(1)
    # har second me ek km add kar rahe hain (simulation)
    distance += 1 
    fare = distance * rate_per_km
    print(f"Distance: {distance} km - Fare: {fare} PKR")

print("Ride completed. Please pay your fare.")

# ---------------------- Interview Qs: ----------------------

# 21. Difference between while loop and do-while loop (Python alternative)?

# While loop.
# while loop pehle condition check kar ta hai
# agar condition false ho tu loop nahi chale ga.
# x = 5
# while x < 5:   # condition false hai
#     print("Hello") 
# output kuch bhi nahi aayega kyun ke condition false hai.

# Do-while loop.
# do-while loop python main directly nahi hota hai.
# ye loop pehle code ko run kar ta hai.
# phir condition check hoti hai, agar condition true hai to loop repeat hota hai, warna ruk jata hai.
# int x = 5;
# do {
#     printf("Hello");
#     x++;
# } while (x < 5);
# output main Hello print hoga chahe condition false ho.

# Python me Do-While ka alternative.
# Python me direct do-while nahi hota, lekin hum "while True + break" se bana sakte hain.
# x = 5
# while True:
#     print("Hello")
#     if not (x < 5):
#         break
# is condition main "Hello" print hoga, chahe condition false ho.

# 22. What happens if while loop condition is always True?

# if condition always true toh loop infinite loop chalega.
# while True:
    # print("Hello")
# is code se problem ye hoti hai ke program hang ho jayega kyun ke ye condition kabhi end nahi ho gi. just manually stop karna padta hai.
# x = 1
# while x < 5:
#     print(x)
#     x += 1
# Agar condition kabhi False ho jaye toh loop ruk jata hai.
# count = 0
# while True:
#     print("Hello")
#     count += 1
#     if count == 5:
#         break
# Hum "break" use kar ke infinite loop ko manually control karte hain.