# Form widget editor

This application is an editor that customizes form elements. The settings are persisted on a database and an HTML file is generated. In order not to block the main thread, a message is sent to a message broker, and a background job is triggered. 

The application has a list of all your widgets and a button where you can navigate and create a new widget. There is also the option to edit a widget. 

## Stack
- NextJS
- ChakraUI
- NodeJS
- Redis
- BullMQ
- Postgres


## Instructions and setup

The project is bootstrapped with Docker.

```
git clone form-widget-editor
cd ../form-widget-editor
```

In your root folder:
```
docker-compose up --build
```

**Note:** For ease of use the `.env` file was committed. Usually, in such a setting, you would have a `.env.example` that works as a guideline, so the user can create the actual file that is going to be used.

This will spin up a NextJS application, a NodeJS server connected to a Postgres database, and a Redis server listening to incoming messages. 

To view the application head to `localhost:3000`. 
If you want to view the HTML of a specific widget head to `localhost:4000/preview/widgets/{widget-of-id}`

If you want to access the database in the terminal:
```
psql -h localhost -p 5432 -U johnraptis -d form_widget
```

## Future features
- Implement Socketio in order to have an indicator of 'processing' in each widget so the user knows that the HTML file is being generated. Right now you have to manualy refresh.


## Test
This application has no tests written due to time limitations.

## Author
John Rapits
