# Library Management System.

# Books ka data store karne ke liye dictionary use ho gi.

books = []
issued_books = set()  # ye ek set data structure hai jo issued books ke names ko store karega.

# Book ko add karne ka function. 
def add_book():
    title = input("Enter book title: ")
    author = input("Enter author name: ")
    year = input("Enter publication year: ")

    # Dictionary create ker ke book ko list me add karna.
    book = {"title": title, "author": author, "year": year}
    books.append(book)
  
    print(f"{title} added to library!")

# Book ko remove karne ka function.
def remove_book():
    title = input("Enter book title to remove: ")
  
    for book in books:
  
        if book["title"].lower() == title.lower():
            books.remove(book)
            issued_books.discard(title)  # if book issued hai to ye book ko issued_books ke set se hata deta hai, agar book issued  nahi hai to .discard(item) ka method error nahi dega.
  
            print(f"{title} removed from library!")
            return
    print("Book not found!")

# Book ko search karne ka function.
def search_book():
    title = input("Enter book title to search: ")
    for book in books:
        if book["title"].lower() == title.lower(): # .lower() method se case-insensitive comparison hota hai.

            print(f"Found: {book['title']} by {book['author']} ({book['year']})")

            status = "Issued" if book["title"] in issued_books else "Available"
            print(f"Status: {status}")
            return
    print("Book not found!")

# Available books ko show karne ka function.
def show_books():
    if not books:
        print("No books in library!")
    else:
        print("\nAvailable Books:") # \n ---> New line add karne ke liye taake output readable ho.

        for book in books:
            status = "Issued" if book["title"] in issued_books else "Available"
            
            print(f"- {book['title']} by {book['author']} ({book['year']}) --> {status}")

# Book ko issue karne ka function.
def issue_book():
    title = input("Enter book title to issue: ")
    for book in books:

        if book["title"].lower() == title.lower():

            if book["title"] in issued_books:
                print("Book is already issued!")

            else:
                issued_books.add(book["title"])
                print(f"{title} has been issued!")
            return
    print("Book not found!")

# Book ko return karne ka function.
def return_book():
    title = input("Enter book title to return: ")

    if title in issued_books:
        issued_books.remove(title)
        print(f"{title} has been returned!")
    else:
        print("This book was not issued!")

# while loop for the library menu.
while True:
    
    print("\n--- Library Menu ---")
    print("1. Add Book")
    print("2. Remove Book")
    print("3. Search Book")
    print("4. Show All Books")
    print("5. Issue Book")
    print("6. Return Book")
    print("7. Exit")

    choice = input("Choose an option (1-7): ")

# if-elif-else structure for menu options.
    if choice == "1":
        add_book()
    elif choice == "2":
        remove_book()
    elif choice == "3":
        search_book()
    elif choice == "4":
        show_books()
    elif choice == "5":
        issue_book()
    elif choice == "6":
        return_book()
    elif choice == "7":
        print("Exiting Library System...")
        break # break statement se loop khatam hota hai.
    else:
        print("Invalid choice! Please try again.")
