## Project Overview

### Project Name: Medicine Tracker (Mediflow)

### Purpose
The Medicine Tracker project is designed to streamline the management of medicine inventories by providing a comprehensive solution for tracking medicines. It aims to simplify the process of adding, updating, retrieving, and deleting medicine records, ensuring efficient inventory management for pharmacies and healthcare providers.
### Approach and Strategy for Tackling the Challenge
To effectively address this challenge, I began by thoroughly reviewing the project README file. This step was crucial in ensuring a comprehensive understanding of the tasks at hand before proceeding with the implementation. It provided a solid foundation for the work ahead.

The README specified the need to set up Git and Python on our machines. As these tools were already installed on my system, I proceeded to verify their versions to confirm they were up-to-date. This was accomplished using the following commands:

```sh
python --version
git --version
```

These commands confirmed the installed versions on my machine.
Following the verification of these prerequisites, I developed a detailed to-do plan. This plan was instrumental in organising the tasks, ensuring that no steps were overlooked or omitted during the implementation process.

Subsequently, I cloned the project from GitHub as outlined in the project README. I then proceeded to review the project structure, carefully examining each package within the project directory. According to the README, it was necessary to determine the appropriate environment for running the server. Given that I am operating on a Linux system, I opted to utilize the provided Bash script designed for server execution on Linux.

I reviewed the Bash script, understanding that it contains the necessary commands to initialize dependencies and start the server.

Following this, I created a GitHub repository and linked it to the cloned project repository. This ensured that the initial project setup was committed to my remote repository before proceeding with any further implementation.

After committing the initial changes to Git with an appropriate commit message, I commenced the implementation phase by setting up the backend environment. This process involved making the `start.sh` script executable using the command `chmod +x start.sh`, followed by executing it with `./start.sh` to initialize the server. Once the backend was operational, I proceeded to test the API endpoints developed in Python using Postman.

The primary objective of this testing was to ensure that the server was running correctly and that the endpoints were functioning as intended. I prioritized gaining a thorough understanding of the existing endpoints in the `main.py` file, which included:

1. `/medicine` - Retrieve all medicines.
2. `/medicine/{name}` - Retrieve a specific medicine by name.
3. `/create` - Add a new medicine.
4. `/update` - Modify existing medicine details.
5. `/delete` - Remove a medicine.

By systematically working through these endpoints, I ensured a comprehensive understanding of the backend functionality before transitioning to the frontend development.

### Endpoint Testing
This section outlines the testing process for each API endpoint using Postman, along with screenshots to illustrate the results.

#### 1. Test: Retrieve All Medicines
To validate the `/medicine` endpoint, a GET request was executed using Postman. The request successfully returned a response with a status code of 200, along with a JSON body containing the details of all medicines.
![alt text](assets/3_all_medicine.png)
#### 2. Test: Frontend Verification
The frontend functionality was verified by opening the `index.html` file in a web browser. The user interface displayed a header titled "Medicine Tracker," confirming that the frontend was operational.
![alt text](assets/2.png)
#### 3. Test: Retrieve Medicine by Name
The `/medicine/{name}` endpoint was tested by sending a GET request for a specific medicine named `Tonicast`. The response returned a status code of 200 and included the requested medicine details.
To ensure consistent functionality, the endpoint was further tested with another medicine, `Cureallium`.
![alt text](assets/getmedbyname.png)
![alt text](assets/getmedbyname02.png)
#### 4. Test: Create a New Medicine
The `/create` endpoint was tested by sending a POST request via Postman, including the new medicine name and price in the form-data. The response confirmed successful creation with a status code of 200.
```json
{
  "message": "Medicine created successfully with name: Tetrasyclean"
}
```
The new medicine was successfully added to the database, as shown below.
![alt text](assets/createmed.png)
![alt text](assets/createmed2.png)

#### 5. Test: Update Medicine Details
A POST request was crafted to update the price of the medicine `Tetrasyclean`. The endpoint does not modify the name, as it serves as a unique identifier. The price was updated from `12.99` to `30.99`, and the response confirmed success with a status code of 200.
![alt text](assets/updatemed.png)
#### 6. Test: Delete a Medicine
The `/delete` endpoint was tested by sending a DELETE request. The response returned a message and a status code of 200, indicating successful execution of the request and confirming that the medicine was deleted correctly.

![alt text](assets/deletemed.png)
### Did you utilize any external resources?

Yes, I utilized Postman extensively to test the API endpoints, i also utilised some python documentation for like ( make sure to list some python documentation on creating endpoints), This tool was invaluable for sending requests and verifying responses, ensuring that each endpoint behaved as expected. Additionally, I referred to various online tutorials and documentation to better understand best practices for API testing and error handling.

## Objectives - Innovative Solutions

### Streamlining Data Flow: Fetching and Displaying Backend Data in a User-Friendly Frontend
- **Tools**: Axios for data fetching.
- **Steps**:
    1. **Data Retrieval**:
        - On DOM load, `fetchMedicines()` retrieves data from `http://localhost:8000/medicines`.
        - Medicines are stored in `allMedicines` for local use.
    2. **Display**
        - `displayAllMedicines()` handles initial rendering.
        - Each medicine is shown with its name, formatted price, and management options.
    3. **Create Operation**:
        - User submits form; `FormData` is created.
        - POST to `http://localhost:8000/create`.
        - On success: show message, reset form, refresh list.
    4. **Search/Filter**:
        - Real-time filtering via `filterMedicines()` based on user input.
    5. **Update Operation**:
        - User updates price; `FormData` is sent via POST to `http://localhost:8000/update`.
        - On success: show message, refresh list.
    6. **Delete Operation**:
        - User deletes medicine; DELETE request to `http://localhost:8000/delete`.
        - On success: show message, refresh list.

#### Ensuring Frontend Resilience: Handling Missing and Invalid API Data Gracefully
To ensure the fronted handles missing or invalid API data without crashing, I implemented asynchronous functions for smooth data fetching. This allows the app to remain responsive even if data retrieval is delayed.

I added error handling to catch network issues, displaying user-friendly messages instead of technical errors. For missing data, I used placeholder content to maintain a consistent UI and clearly indicated any gaps in information.

By validating API responses, I quickly address discrepancies, ensuring a seamless user experience despite backend data issues. These strategies keep the frontend user-friendly.
#### Designing a User-Friendly Interface for Seamless Data Input and Backend Integration

Building on my experience with a hospital management system in Java and JavaFX, I applied similar principles to this project, focusing on the pharmacy component. Although I hadn't previously worked on pharmacy features, I learned the importance of effective CRUD implementation.
For this project, I aimed to create a user-friendly interface for seamless data input and backend communication. By using modular design, I separated the homepage from inventory management, enhancing both maintainability and user experience.
Switching to a different programming language and integrating API endpoints expanded my skills and helped me design an intuitive, efficient system. The modular approach allows users to easily navigate and manage data, making the interface straightforward and accessible.

Overall, my past experience helped me create a solution that balances functionality with user experience, ensuring efficient data handling and a user-friendly interface.
#### Developing a Backend Function for Quarterly Medicine Price Averaging
Despite initial concerns due to limited Python experience, my Java background made it easier to develop the function. I created an endpoint, `@app.get("/average-price")`, to calculate and return the average price of all medicines.

I utilized this endpoint in the frontend to display the average price on a card, providing users with real-time insights.

This solution efficiently supports the quarterly report requirement and enhances the user interface with dynamic data visualization.


### Challenges Encountered

One significant issue I encountered was that the `DELETE` and `UPDATE` requests did not reflect changes in the `data.json` file when tested with postman , despite returning a successful response. This required further investigation to ensure data persistence across operations.

Additionally, I faced challenges with the frontend's medicine addition functionality, which I am currently working to resolve, the most challenging thing for me was designing the frontend of the appilcation.  
### Evaluation
Overall, the challenge was a rewarding experience. While some parts, like setting up the backend and testing endpoints, went smoothly, others, such as ensuring data persistence and frontend functionality, proved more challenging. Additionally, working with a different language was initially difficult for me, but as I progressed through the challenge, I was able to adapt quickly. I feel proud of my willingness to learn and my curiosity to explore other libraries.

If I were to do this again, I would approach the task with a calmer mindset. I would research certain libraries that could make the application more user-friendly and efficient. Additionally, I would focus on finding better ways to secure the data coming from the backend by implementing more robust authentication mechanisms. I would also ensure that I keep scalability in mind, as it's important to maintain the same mindset regardless of whether the next project is big or small. This approach will help in building solutions that can grow and adapt to future needs.
