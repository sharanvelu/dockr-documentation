---
title: Options
description: Various options available in DockR
---

# Options

There are several ways you can configure how DockR runs your project.

## Configuration

Whenever you start a project, Asset containers (`Proxy`, `MySQL`, `Postgres` and `Redis`) will run along with your
project container.
<br>
Many of you might not use `mysql`, `postgres` or `redis` in your `day-to-day workflow` (including me). And that consumes
your system memory.
<br>
You might also terminate the unnecessary containers after you start the project. But we don't want you to do that.
<br>
So, We have added an option to enable or disable any of them so that you don't have to run unnecessary containers. By
disabling the asset containers, they won't start when you run `dockr up` command to start your project.

Available configuration commands are :

```
dockr config enable <asset>     # Enable the specified Asst container
dockr config disable <asset>    # Disable the specified Asset container
dockr config get <asset>        # Get the status of the specified Asset container.
dockr config list               # List all the configurations values.
```

Example :

```
dockr config enable mysql
dockr config disable postgres
dockr config get redis
dockr config list
```

::: info Note :
Configurations are available for all asset containers except `Proxy`. That is you cannot disable the proxy container.<br>
You can add configurations to only `MySQL`, `Postgres` and `Redis`.

When no value is set for an asset, It will default to 'enable' state.
:::

## Available ENV variables

| Variable                    | Description                                                                            | Example                                         |
|-----------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------|
| DOCKR_SITE                  | The site that is to be proxied to the project container.                               | DOCKR_HOST=81                                   |
| DOCKR_PHP_VERSION           | Defines the PHP version to be used.                                                    | DOCKR_PHP_VERSION=8.1                           |
| DOCKR_DOCKER_IMAGE          | Defines a custom generated image to be used for the project instead of default image.  | DOCKR_DOCKER_IMAGE="<image\>:<tag\>"            |
| DOCKR_CONTAINER_NAME        | Sets the custom Container Name.                                                        | DOCKR_CONTAINER_NAME=custom_name                |
| DOCKR_SKIP_DB_CHECK         | Used to skip the Database presence check while starting the project containers.        | DOCKR_SKIP_DB_CHECK=1                           |
| DOCKR_SKIP_ASSET            | Used to skip starting the asset containers while starting project containers.          | DOCKR_SKIP_ASSET=1                              |
| DOCKR_WORKER                | Used to start a separate container and runs a scheduler and 2 queue worker.            | DOCKR_WORKER=1                                  | 
| DOCKR_COMPOSER_VERSION      | Used to specify the composer version to be used in the container for that project.     | DOCKR_COMPOSER_VERSION=1                        | 
| DOCKR_OVERRIDE_ASSET_CONFIG | Used to override the config value of the asset seperated by comma(,).                  | DOCKR_OVERRIDE_ASSET_CONFIG=mysql,redis         | 
| DOCKR_ADD_COMPOSE_FILE      | Used to add additional docker-compose-file.yml.                                        | DOCKR_ADD_COMPOSE_FILE=docker-compose-local.yml | 

::: info Note :
- Every .env variable used here will be prefixed by `DOCKR_`.
- .env variables `DOCKR_SKIP_DB_CHECK`, `DOCKR_SKIP_ASSET` and `DOCKR_WORKER` are not boolean. Whenever the variable is declared, The related action will be handled.
    <br>Both `DOCKR_SKIP_DB_CHECK=1` and `DOCKR_SKIP_DB_CHECK=0` will work the same way.
    <br>However this will be changed in the future, so we recommend you top use `DOCKR_SKIP_DB_CHECK=1` whenever possible.
:::

## Detailed Explanation

### DOCKR_SITE

This will be used to proxy the incoming request to the project container.
<br>
The proxy container redirects all the incoming traffic with the specified site to the project container.

This value is required. If it wasn't specified, `DockR` will throw an error and stops execution.

Example :

```ini
DOCKR_SITE=dockr.test
DOCKR_SITE=*.dockr.test
```

::: info Note :
- You should add your site in the `/etc/hosts` file of your host machine(local machine) in order for the request to handed over to the proxy container.
- You can also use wildcard(`*`) as your site. But you will have to manually add all the possible values in the `/etc/hosts` file individually.
:::

### DOCKR_PHP_VERSION

Specify the PHP Version that should be used for your project.
<br>
This variable is optional. If no value is specified for this variable, It will default to version `8.0`.

Example :

```ini
DOCKR_PHP_VERSION=8.0
DOCKR_PHP_VERSION=7.4
```

::: info Note :
Kindly use only the supported `PHP versions`.
:::

### DOCKR_DOCKER_IMAGE

You can choose which container to run for your project.
<br>For Example: You might need some extensions that may not be available in our `Docker Image`. In that case, you can
build an of your own choice and use them with DockR.

Example :

```ini
DOCKR_DOCKER_IMAGE=dockr-project:testing
```

You can use both images from local and images from remote repository. This will be handled as per the Docker image
search feature.

::: info Note :
While using `DOCKR_DOCKER_IMAGE`(Custom Docker Image), `DOCKR_PHP_VERSION` will be omitted.
:::

### DOCKR_CONTAINER_NAME

Used to specify a custom name for the container used for the project.
<br>By default, Project's directory name will be used as the container name.

You can also use your own custom name for the container.

Example :

```ini
DOCKR_CONTAINER_NAME=dockr_container
```

### DOCKR_SKIP_DB_CHECK

Whenever you start your project, `DockR` Starts the Asset containers(`Proxy`, '`MySQL`, `Postgres` and `Redis`) based on
your configuration, and then checks for the database existence in the respective Database Connection.

If you don't want `DockR` to check and create a DB (if it doesn't exist), then You will have to specify this variable.
This will prevent the DockR to check and create the Database.

Example :

```ini
DOCKR_SKIP_DB_CHECK=0
DOCKR_SKIP_DB_CHECK=1
```

::: info Note :
The value `0` and `1` behaves the `same`. If the variable is set, then the DockR will not check and create the database.
<br>This behaviour will change in the future. So, we recommend to use `1` from now on.
:::

### DOCKR_SKIP_ASSET

During the `up` command, DockR will check and starts the Asset containers such as `Proxy`, `MySQL`, `Postgres`
and `Redis`.
<br>
There might be projects where you don't need to start any of the asset containers. In that case, You simply use this
variable to `disable` the starting of the asset containers.

When you are skipping the `Asset` containers, then there will be no containers to check and create Database.
<br>
So, when you are using `DOCKR_SKIP_ASSET`, `DOCKR_SKIP_DB_CHECK` will also be set automatically.

Example :

```ini
DOCKR_SKIP_ASSET=0
DOCKR_SKIP_ASSET=1
```

::: info Note :
- `Proxy` Container will not be taken into account as we think `proxy` is necessary to run the project. This might change in the future.
- The value `0` and `1` behaves the `same`. If the variable is set, then the DockR will not check and start the asset containers.
<br>This behaviour will change in the future. So, we recommend to use `1` from now on.
:::

### DOCKR_WORKER

If you are working with `Queues`, `Schedules` and `Jobs`, then you might need a `worker` to test the changes on the go.

So, we have added a worker to the project. When using `DOCKR_WORKER`, DockR will create another container (worker)
within the same group as the project container.

The Worker container will run the following commands with a typical worker configurations.

```shell
php artisan schedule:run
```

```shell
php artisan queue:listen
```

Example :

```ini
DOCKR_WORKER=0
DOCKR_WORKER=1
```

::: info Note :
`DOCKR_WORKER` variable is also same as the previous one, It behaves the same if you provide any value to it.
:::

### DOCKR_COMPOSER_VERSION

There may always be a situation where we may work on old projects, Old projects might use different Composer version
which may break when used with the latest composer version.

To overcome this, We have added an option to use composer with older versions.

When the value isn't set, then `2.2.0` will be used. When used with 1 as the value, Composer with version `1.8.6` will
be used.
<br>Only these versions are available currently.

Example :

```ini
DOCKR_COMPOSER_VERSION=1
DOCKR_COMPOSER_VERSION=2
```

### DOCKR_OVERRIDE_ASSET_CONFIG

We have given an option to set the default behaviour of the asset containers whether to start or not to at the time of
project starting-up.
<br>When you have set `postgres` to `disabled` state and one project has to run the same, you can simply override the
asset config values set.

Or, you may need to start multiple asset containers which aren't set to start in config, In that case, you will just
need to provide all the asset containers that are need to be started with the project seperated by comma(`,`).

Example :

```ini
DOCKR_OVERRIDE_ASSET_CONFIG=postgres
DOCKR_OVERRIDE_ASSET_CONFIG=mysql,postgres,redis
```

### DOCKR_ADD_COMPOSE_FILE

We have provided an option to combine additional `dockr-compose` file with the default one.<br>

::: warning 
When using this option, be careful to play with the value as changing some default values will break the working of `DockR` properly.
<br>Configurations such as `container-name`, `network`, `build`, `command`,`entrypoint`, ... will break the `DockR` functionality.
:::

Example :

```yaml
version: "3.7"
services:
  web:
    volumes:
      - ~/Downloads/dockr-test:/var/www/test
    environment:
      - TEST_VARIABLE_1=test_value_1
      - TEST_VARIABLE_2=test_value_2
    labels:
      - TESTING=true
      - PRODUCTION=false
```



