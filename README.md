
<p align="center"><img width=60% src="assets/MediFlow.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Python](https://img.shields.io/badge/python-v3.8+-blue.svg)
![CSS](https://img.shields.io/badge/css-v3.0+-blue.svg)  
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

<p align="center">
  <a href="#project-overview">Project Overview</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#features">Features</a> •
  <a href="#external-resources">External Resources Utilized</a> •
  <a href="#conclusion">Conclusion</a>
</p>

---

# Medicine Tracker (Mediflow)

## Project Overview
The Medicine Tracker project is designed to streamline the management of medicine inventories by providing a comprehensive solution for tracking medicines. It aims to simplify the process of adding, updating, retrieving, and deleting medicine records, ensuring efficient inventory management for pharmacies and healthcare providers.
## Getting Started

### Project Structure
```
├── data.json
├── main.py
├── requirements.txt
├── index.html
├── inventory.html
├── inventory.js
├── script.js
└── styles
    ├── inventory.css
    └── style.css
```
### Prerequisites
Ensure that Git and Python are installed on your machine. Verify their versions using the following commands:

```sh
python --version
git --version
```
### Setup Instructions
1. **Clone the Repository:**
   ```sh
   git clone git@github.com:thein3rovert/MediFlow.git
   ```
2. **Navigate to the Project Directory:**
   ```sh
   cd MediFlow
   ```
3. **Set Up the Backend:**
   - Make the `start.sh` script executable:
     ```sh
     chmod +x start.sh
     ```
   - Execute the script to initialize the server:
     ```sh
     ./start.sh
     ```
4. **Test API Endpoints:**
   - Use Postman to test the following endpoints:
     - `GET /medicine` - Retrieve all medicines.
     - `GET /medicine/{name}` - Retrieve a specific medicine by name.
     - `POST /create` - Add a new medicine.
     - `POST /update` - Modify existing medicine details.
     - `DELETE /delete` - Remove a medicine.

5. **Frontend Verification:**
   - Open `index.html` in a web browser to verify the frontend functionality.
## Features
- **Data Management:**
  - Retrieve, add, update, and delete medicine records.
  - Real-time filtering and search functionality.
- **User Interface:**
  - User-friendly interface for seamless data input and management.
  - Dynamic data visualization with real-time insights.
- **Backend Functionality:**
  - API endpoints for CRUD operations.
  - Endpoint for calculating average medicine prices.
