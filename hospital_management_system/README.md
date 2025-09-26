# Hospital Management System

This project is a hospital management system built using FastAPI. It provides a set of APIs to manage patient records, including creating, retrieving, updating, and deleting patient information.

## Project Structure

```
hospital-management-system
├── src
│   ├── main.py               # Entry point of the FastAPI application
│   ├── api
│   │   └── routes.py         # API routes for patient management
│   ├── models
│   │   └── patient.py         # Data model for patients
│   ├── services
│   │   └── patient_service.py  # Business logic for patient management
│   └── types
│       └── index.py           # Custom types and interfaces
├── requirements.txt           # Project dependencies
├── README.md                  # Project documentation
└── .gitignore                 # Files to ignore in version control
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hospital-management-system
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```

4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

To run the FastAPI application, execute the following command:

```
uvicorn src.main:app --reload
```

You can access the API documentation at `http://127.0.0.1:8000/docs`.

## Features

- Create, retrieve, update, and delete patient records.
- Validate patient data using Pydantic models.
- Modular structure for easy maintenance and scalability.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.