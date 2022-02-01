## Getting Started
To get started with DockR as your laravel local development, simply add some `env` variables in top of the `.env` of your project.

- APP_PORT=81<some_random_number>(Except 80)
- APP_PHP_VERSION=8.0<Your php version>

#### Example

```
APP_PORT=81
APP_PHP_VERSION=7.5
```

#### Explanation 
- `APP_PORT` must be unique across all projects. This is used to connect to the server from the web browser.
- `APP_PHP_VERSION` is used to mention the PHP version to be used in the container, the project is being hosted to.

#### Supported PHP Versions
Here are the list of currently supported PHP versions.
- ***5.6*** : `5.6`
- ***7.0*** : `7.0`
- ***7.0*** : `7.1`, `7.1.3`
- ***7.2*** : `7.2`, `7.2.2`, `7.2.4`, `7.2.5`, `7.2.6`
- ***7.3*** : `7.3`, `7.3.2`, `7.3.3`, `7.3.6`
- ***7.4*** : `7.4`, `7.4.2`, `7.4.6`
- ***8.0*** : `8.0`,`8.0.0`, `8.0.2`, `8.0.6`
- ***8.1*** : `8.1.0`

> More versions will be supported in the future versions.

#### DB_DATABASE (.env)
Also, update the `DB_DATABASE=<your_project_DB>`.
<br>
- `your_project_DB` is the Database you wish to use for your project.

This will create a Database automatically (if not exist) when you start your project containers.

## Available ENV variables

| Variable | Description | Example |
| --- | --- | --- |
| DOCKR_PORT | Defines PORT for the project. | DOCKR_HOST=81 |
| DOCKR_PHP_VERSION | Defines the PHP version to be used. | DOCKR_PHP_VERSION=8.1 |
| DOCKR_DOCKER_IMAGE | Defines a custom generated image to be used for the project instead of default image. | DOCKR_DOCKER_IMAGE="<image\>:<tag\>" |
| DOCKR_CUSTOM_COMPOSE_FILE | Defines a custom `docker-compose.yml` file in the project root dir to be used. | DOCKR_CUSTOM_COMPOSE_FILE="file.yml" |
| DOCKR_CONTAINER_NAME | Sets the custom Container Name. | DOCKR_CONTAINER_NAME=custom_name |
| DOCKR_SKIP_DB_CHECK | Used to skip the Database presence check while starting the project containers. | DOCKR_SKIP_DB_CHECK=1 |
| DOCKR_SKIP_ASSET | Used to skip starting the asset containers while starting project containers. | DOCKR_SKIP_ASSET=1 |
| DOCKR_WORKER | Used to start a separate container and runs a scheduler and 2 queue worker | DOCKR_WORKER=1 | 

> Note : 
> - .env variables `DOCKR_SKIP_DB_CHECK`, `DOCKR_SKIP_ASSET` and `DOCKR_WORKER` are not boolean. Whenever the variable is declared, The related action will be handled.
> Both `DOCKR_SKIP_DB_CHECK=1` and `DOCKR_SKIP_DB_CHECK=0` will work the same way.
> - Every .env variable used here will be prefixed by `DOCKR`.
