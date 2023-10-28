# Form widget editor

This application is an editor that customizes form elements. The settings are persisted on a database and a HTML file is being generates. In order not to block the main thread, a message is being send to a message broker and a background job is triggered. 

The application has a list of all your widget and a button where you can navigate and create a new widget. There is also the option ot edit a widget. 

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

**Note:** For ease of use the `.env` file was commited. Usually in such a settings you would have an `.env.example`, letting the user fill them.

This will spin up a NextJS application, a NodeJS server connected to a Postgres database and a Redis server listening to incoming messages. 

To view the application head to `localhost:3000`. 
If you want to view the HTML of a specific widget head to `localhost:4000/preview/widgets/{widget-of-id}`

If you want to access the database in the terminal:
```
psql -h localhost -p 5432 -U johnraptis -d form_widget
```

## Future features
- Implement Socketio in order to have an indicator of 'processing' in each widget so the user knows that the HTML file is being generated. Right now you have to manualy refresh.


## Test
This application has no tests written due to time limitation.

## Author
John Rapits