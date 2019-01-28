# SMS Management Application API
```SMS Management Application API``` is an API that manages sending and receiving of SMS messages. With this API you can manage contacts, send SMS, receive SMS, view an SMS message and SMS status.




## Dependencies
The functionality of this web app being a node.js app depends on the following technologies.

[**Express.js**](https://expressjs.com/): A Fast, opinionated, minimalist web framework for node which was used in routing this application.

[**BodyParser**](https://babeljs.io/): This module was used to collect search data sent from the client side to the routing page.

[**Sequelize**](https://www.sequelizejs.com): Sequelize is a promise-based Node.js ORM for Postgres Server which is the database server for the app. It features solid transaction support, relations, read replication and more.

[**Postgresql**](https://www.postgresql.org/): PostgreSQL is a powerful, open source object-relational database system.


## Installation

1. Install nodejs, postgresql, sequelize-cli if not installed.
2. Navigate to the directory you want it installed to. cd your folder
3. Clone the repository ``` https://github.com/Annettesunday/SMS-Management-Application-API.git```.
4. Create a database(test and development) with PostgreSQL.
5. Open the SMS-Management-Application folder.
6. Create a .env file using the .env.example as a guide.
7. ``` npm install ``` to install all dependencies.
8. ``` npm run dev ``` to start the app in development mode.
9. ``` npm start ``` starts the app.
10. ``` npm test ``` runs all the tests.
11. The app runs on port 8000


## Features of SMS Application API
* Users can create contact
* Users can get all contacts
* Users can get a single contact
* Users can update a contact
* Users can delete a contact
* Users can create a message
* Users can get all messages
* Users can get messages sent by a contact
* Users can get messages received by a contact
* Users can delete a message

## API DOCUMENTATION
### POST A CONTACT (/contact)
* name, phoneNumber
#### Request
```
{
  "name": "Collo",
  "phoneNumber": "0700000001",
}
```
#### Response
```
{
    "message": "Contact created",
    "response": [
        {
            "id": 11,
            "name": "Collo",
            "phoneNumber": "0708525299",
            "updatedAt": "2019-01-28T07:11:46.985Z",
            "createdAt": "2019-01-28T07:11:46.985Z"
        },
        true
    ]
}
```

### GET CONTACTS (/contacts)
#### Response
```
{
    "message": "Contacts retrieved successfully",
    "response": [
        {
            "id": 11,
            "name": "Collo",
            "phoneNumber": "0700000001",
            "createdAt": "2019-01-28T12:12:15.229Z",
            "updatedAt": "2019-01-28T12:12:15.229Z",
            "sentMessages": [
                {
                    "id": 3,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Hey there beautiful",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:13:43.097Z",
                    "updatedAt": "2019-01-28T12:13:43.097Z"
                },
                {
                    "id": 4,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Meet me at the Mall",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:19.037Z",
                    "updatedAt": "2019-01-28T12:14:19.037Z"
                },
                {
                    "id": 5,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Call me",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:33.239Z",
                    "updatedAt": "2019-01-28T12:14:33.239Z"
                }
            ],
            "receivedMessages": [
                {
                    "id": 6,
                    "senderId": 12,
                    "receiverId": 11,
                    "message": "I wont be available",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:53.079Z",
                    "updatedAt": "2019-01-28T12:14:53.079Z"
                }
            ]
        },
        {
            "id": 12,
            "name": "Annette",
            "phoneNumber": "0700000002",
            "createdAt": "2019-01-28T12:12:32.006Z",
            "updatedAt": "2019-01-28T12:12:32.006Z",
            "sentMessages": [
                {
                    "id": 6,
                    "senderId": 12,
                    "receiverId": 11,
                    "message": "I wont be available",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:53.079Z",
                    "updatedAt": "2019-01-28T12:14:53.079Z"
                }
            ],
            "receivedMessages": [
                {
                    "id": 5,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Call me",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:33.239Z",
                    "updatedAt": "2019-01-28T12:14:33.239Z"
                },
                {
                    "id": 4,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Meet me at the Mall",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:19.037Z",
                    "updatedAt": "2019-01-28T12:14:19.037Z"
                },
                {
                    "id": 3,
                    "senderId": 11,
                    "receiverId": 12,
                    "message": "Hey there beautiful",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:13:43.097Z",
                    "updatedAt": "2019-01-28T12:13:43.097Z"
                }
            ]
        }
    ]
}
```

### GET A SINGLE CONTACT (/contact/:contactId)
* where contactId = 11
#### Response
```
{
    "message": "Contact retrieved successfully",
    "response": {
        "id": 11,
        "name": "Collo",
        "phoneNumber": "0700000001",
        "createdAt": "2019-01-28T12:12:15.229Z",
        "updatedAt": "2019-01-28T12:12:15.229Z",
        "sentMessages": [
            {
                "id": 3,
                "senderId": 11,
                "receiverId": 12,
                "message": "Hey there beautiful",
                "status": "sent",
                "createdAt": "2019-01-28T12:13:43.097Z",
                "updatedAt": "2019-01-28T12:13:43.097Z"
            },
            {
                "id": 4,
                "senderId": 11,
                "receiverId": 12,
                "message": "Meet me at the Mall",
                "status": "sent",
                "createdAt": "2019-01-28T12:14:19.037Z",
                "updatedAt": "2019-01-28T12:14:19.037Z"
            },
            {
                "id": 5,
                "senderId": 11,
                "receiverId": 12,
                "message": "Call me",
                "status": "sent",
                "createdAt": "2019-01-28T12:14:33.239Z",
                "updatedAt": "2019-01-28T12:14:33.239Z"
            }
        ],
        "receivedMessages": [
            {
                "id": 6,
                "senderId": 12,
                "receiverId": 11,
                "message": "I wont be available",
                "status": "sent",
                "createdAt": "2019-01-28T12:14:53.079Z",
                "updatedAt": "2019-01-28T12:14:53.079Z"
            }
        ]
    }
}
```

### UPDATE A CONTACT (/contact/:contactId)
* name, phoneNumber
#### Request
```
  {
	"name": "Dummy",
	"phoneNumber": "0700000008"
}
```
#### Response
```
 {
    "message": "Contact updated successfully"
}
```

### DELETE A CONTACT (/contact/:contactId)
* where contactId = 11
#### Response
```
{
    "message": "Contact deleted successfully"
}
```

### POST A MESSAGE (/message)
* sender, receiver, message
#### Request
```
{
	"sender": "0700000001",
	"receiver": "0700000002",
	"message": "Are you at the office?"
}
```


#### Response
```
{
    "message": "Message has been successfully sent",
    "response": {
        "id": 7,
        "senderId": 11,
        "receiverId": 12,
        "message": "Are you at the office?",
        "status": "sent",
        "updatedAt": "2019-01-28T12:37:19.909Z",
        "createdAt": "2019-01-28T12:37:19.909Z"
    }
}
```

### GET MESSAGES (/messages)
#### Response
```
{
    "message": "All messages retrieved successfully",
    "response": [
        {
            "id": 3,
            "senderId": 11,
            "receiverId": 12,
            "message": "Hey there beautiful",
            "status": "sent",
            "createdAt": "2019-01-28T12:13:43.097Z",
            "updatedAt": "2019-01-28T12:13:43.097Z"
        },
        {
            "id": 4,
            "senderId": 11,
            "receiverId": 12,
            "message": "Meet me at the Mall",
            "status": "sent",
            "createdAt": "2019-01-28T12:14:19.037Z",
            "updatedAt": "2019-01-28T12:14:19.037Z"
        },
        {
            "id": 5,
            "senderId": 11,
            "receiverId": 12,
            "message": "Call me",
            "status": "sent",
            "createdAt": "2019-01-28T12:14:33.239Z",
            "updatedAt": "2019-01-28T12:14:33.239Z"
        },
        {
            "id": 6,
            "senderId": 12,
            "receiverId": 11,
            "message": "I wont be available",
            "status": "sent",
            "createdAt": "2019-01-28T12:14:53.079Z",
            "updatedAt": "2019-01-28T12:14:53.079Z"
        },
        {
            "id": 7,
            "senderId": 11,
            "receiverId": 12,
            "message": "Are you at the office?",
            "status": "sent",
            "createdAt": "2019-01-28T12:37:19.909Z",
            "updatedAt": "2019-01-28T12:37:19.909Z"
        }
    ]
}
```
### GET MESSAGES SENT BY A CONTACT (/message/sentMessages/:phoneNumber)
* where phoneNumber = 0700000002
#### Response
```
{
    "response": [
        {
            "id": 12,
            "name": "Annette",
            "phoneNumber": "0700000002",
            "createdAt": "2019-01-28T12:12:32.006Z",
            "updatedAt": "2019-01-28T12:12:32.006Z",
            "sentMessages": [
                {
                    "id": 6,
                    "senderId": 12,
                    "receiverId": 11,
                    "message": "I wont be available",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:53.079Z",
                    "updatedAt": "2019-01-28T12:14:53.079Z"
                }
            ]
        }
    ]
}
```

### GET MESSAGES RECEIVED BY A CONTACT (/message/receivedMessages/:phoneNumber)
* where phoneNumber = 0700000001
#### Response
```
{
    "response": [
        {
            "id": 11,
            "name": "Collo",
            "phoneNumber": "0700000001",
            "createdAt": "2019-01-28T12:12:15.229Z",
            "updatedAt": "2019-01-28T12:12:15.229Z",
            "receivedMessages": [
                {
                    "id": 6,
                    "senderId": 12,
                    "receiverId": 11,
                    "message": "I wont be available",
                    "status": "sent",
                    "createdAt": "2019-01-28T12:14:53.079Z",
                    "updatedAt": "2019-01-28T12:14:53.079Z"
                }
            ]
        }
    ]
}
```

### DELETE A MESSAGE (/api/v1/message/:messageId)
* where messageId = 6
#### Response
```
{
    "message": "Message successfully deleted"
}
```




## Test
Tests are written with ``` Mocha ``` and ``` supertest ```.


 #### Contributing
---

1. Fork this repository to your account.
2. Clone your repository: git clone https://github.com/Annettesunday/Population-Management-System.git.
3. Commit your changes: git commit -m "did something".
4. Push to the remote branch: git push origin new-feature.
5. Open a pull request against develop branch

#### Licence
---

ISC

Copyright (c) 2019 Annette Sunday
