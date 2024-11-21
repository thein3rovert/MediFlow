## Disclaimer

> **Note:**  
> This document is a work in progress and serves as a brain dump for ideas and notes until the project is completed.  
> Please treat this as an informal reference during development.

In other to run the start.sh script on my linux, i had to first chmod the script usig the command: 
```sh
chmod +x start.sh
```
Then i run the script running the:
```sh
start.sh
```
Upon running the command, the initialisation of the script started , below is a screenshot.
---
Now that the backend is running what we are goihg to do, it try to test the endpoint uusing postman. 
Todo: Make sure to add what postman is and why it's been used.
To confirm the server is running you should see something like this on your console or terminal
```
INFO:     Started server process [29233]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```
So before I proceed to running postman, i need to check the `main.py` class and go throught he method endpoints once again to understand how the endpoints work.
Upon looking at the `main.py` i realised presently in the `endpoints`.
1. `/medicine` endpoints - for getting all the medicine 
2. `/medicine/{name}` - for getting a single medicine by the name
3. `/create` - for creating new medicine
4. `/update` - for updating for updating the neccessary fileds of the medicines
5. `/delete` for deleting any medicines