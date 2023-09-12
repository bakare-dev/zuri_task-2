# zuri_task-2
- hosted endpoints
- https://crud.bakare.tech/

# server health
- https://crud.bakare.tech/health
# documentation
- https://crud.bakare.tech/swagger/

# endpoints
- get all users ( https://crud.bakare.tech/api/users ) (get request)
- get users ( https://crud.bakare.tech/api/user ) (get request) (either by name or id)
- create user ( https://crud.bakare.tech/api/user ) (post request)
- update user ( https://crud.bakare.tech/api/user ) (put request)
- delete user ( https://crud.bakare.tech/api/user ) (delete request)

- To run locally, follow the steps below
# step 1
- create a .env file and it should have all this
    APPLICATION_PORT=9004
    DEV_DB=zuritask2
    DEV_USER=root
    DEV_PASSWORD=""
    DEV_HOST=localhost

# step 2
- run npm install

# step 3
- using MySQL, create database and name it "zuritask2"
# step 4
- run "npm start"

# To run test, run "npm run test"

# To view documentation, open http://localhost:9004/swagger

# UML Diagram: 
- https://drive.google.com/file/d/1hzb2CEEQdE5uRqVk1OKMYnf_w5NyZ1ZR/view?usp=drive_link

+--------------------------------+
|   API                          |
+--------------------------------+
|                                |
+--------------------------------+
        |
        |
        V

+--------------+                           +-------------+
|    Person    |   MySQL Database           |  Database   |
|              |<--------------------------|             |
| - id         |                           |             |
| - name       |                           |             |
| - age        |                           |             |
| - address    |                           |             |
|              |                           |             |
| +create()   |                           |             |
| +readById() |                           |             |
| +readByName()|                           |             |
| +update()   |                           |             |
| +delete()   |                           |             |
+--------------+                           +-------------+


# ER Diagram

+------------------+
|      User        |
+------------------+
|                  |
| - id (PK)        |
| - name           |
|                  |
+------------------+

- https://drive.google.com/file/d/1wJvs9jB4TlV4ZioWasqZ7uGPpE-GXZ_U/view?usp=sharing
