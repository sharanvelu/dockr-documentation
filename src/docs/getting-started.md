---
title: Getting Started
description: Basics to get started with DockR
---

# Getting Started
To get started with DockR as your laravel local development, simply add some `env` variables in top of the `.env` of your project.

- DOCKR_SITE=test.site (The domain that is used to connect to the containers network)
- DOCKR_PHP_VERSION=8.0 (Your Project's PHP version)

#### Example

```ini
DOCKR_PHP_VERSION=7.5
DOCKR_SITE=dockr.test
```

## Explanation
- `DOCKR_SITE` \[REQUIRED] is used to specify the site that is to be proxied to the project container.
- `DOCKR_PHP_VERSION` \[OPTIONAL] is used to denote the PHP version to be used for the project.<br>When no value is specified, it will be defaulted to `latest` version.

::: info Note :
Docker will automatically assign a port for the container. `DockR` will fetch the port and use it to use with the proxy.
:::

## Supported PHP Versions
Here are the list of currently supported PHP versions.
- ***5.6*** : `5.6`
- ***7.0*** : `7.0`
- ***7.0*** : `7.1`, `7.1.3`
- ***7.2*** : `7.2`, `7.2.2`, `7.2.4`, `7.2.5`, `7.2.6`
- ***7.3*** : `7.3`, `7.3.2`, `7.3.3`, `7.3.6`
- ***7.4*** : `7.4`, `7.4.0`, `7.4.1`, `7.4.2`, `7.4.3`, `7.4.4`, `7.4.5`, `7.4.6`, `7.4.7`, `7.4.8`, `7.4.9`
- ***8.0*** : `8.0`, `8.0.0`, `8.0.1`, `8.0.2`, `8.0.3`, `8.0.5`, `8.0.6`, `8.0.7`, `8.0.8`, `8.0.9`
- ***8.1*** : `8.1`, `8.1.0`, `8.1.1`, `8.1.2`, `8.1.3`, `8.1.4`, `8.1.5`, `8.1.6`, `8.1.7`, `8.1.8`, `8.1.9`

::: tip
More versions with more features will be supported in the upcoming days.
:::

## DB_DATABASE (.env)
Also, update the `DB_DATABASE=<your_project_DB>`.
<br>
- `your_project_DB` is the Database you wish to use for your project.

This will create a Database automatically (if not exist) in `mysql` or `postgres` when you start your project.

The database specified in `DB_DATABASE` will be created in the database connection specified in `DB_CONNECTION`.
<br>If other than `mysql` or `postgres` is specified, Then the DB creation will not take place.
