# Form widget editor

This application is an editor that customizes form elements. The settings are persisted on a database and an HTML file is generated. In order not to block the main thread, a message is sent to a message broker, and a background job is triggered. 

The application has a list of all your widgets and a button where you can navigate and create a new widget. There is also the option to edit a widget. 

## Stack
- NextJS
- Zustand
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

**Note:** For ease of use the `.env` file was committed. Usually, in such a setting, you would have a `.env.example` that works as a guideline, so the user can create the actual file that is going to be used. The same applies to the environment variables that are being used within the `docker-compose.yml` file.

This will spin up a NextJS application, a NodeJS server connected to a Postgres database, and a Redis server listening to incoming messages. 

To view the application head to `localhost:3000`. When creating a widget an HTML file will be created within the `src/widgets` folder in the node app.
If you want to view the HTML of a specific widget head to `localhost:4000/preview/widgets/{widget-of-id}`

If you want to access the database in the terminal:
```
psql -h localhost -p 5432 -U johnraptis -d form_widget
```

## Author
John Rapits
