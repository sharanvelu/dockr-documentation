---
title: Asset Connection
description: Instruction on connecting asset containers.
---

# Connecting to Asset containers

In order to connect from within another container(.env), You will have to use the asset containers name instead
of `localhost / IP`.
<br>
`Docker` will take care of `Host-name resolving` and makes connection between the containers.

If connecting from outside the container such as any other apps like `MySQL Workbench`, `Datagrip`, `TablePlus`, ...
<br>Then you will have to use `localhost / IP`.

For all the asset containers, The default username and password will be

```ini
USERNAME=dockr
PASSWORD=password
```

## Mysql

### Within the Docker containers

For Mysql : `DB_PORT` will be `3306` and its `DB_HOST` will be `dockr_mysql`.

```ini
DB_PORT=3306
DB_HOST=dockr_mysql
```

Database .env :

```ini
DB_CONNECTION=mysql
DB_USERNAME=dockr
DB_PASSWORD=password
DB_DATABASE=<test_db>
```

For `DB_DATABASE`, use any name you want to use for your project.

::: tip
When running `dockr up`, Dockr will check for the specified DB.
<br>If none was found, DockR will create one for you with the DB name specified in `DB_DATABASE`.
:::

### Outside the docker containers

To connect to Mysql from apps such as `TablePlus`, `Datagrip`, `PhpStorm`, `MySql Workbench`, or even `terminal`, use :

```apache
Host=127.0.0.1 / localhost
Port=3306
UserName=dockr
Password=password
Database=As mentioned in DB_DATABASE .env variable.
```

## Postgres

Connecting to Postgres is same as that of mysql.

### Within the Docker containers

For Postgres : `DB_PORT` will be `5432` and its `DB_HOST` will be `dockr_postgres`.

```ini
DB_PORT=5432
DB_HOST=dockr_postgres
```

Database .env :

```ini
DB_CONNECTION=pgsql
DB_USERNAME=dockr
DB_PASSWORD=password
DB_DATABASE=<test_db>
```

For `DB_DATABASE`, use any name you want to use for your project.

::: tip
When running `dockr up`, Dockr will check for the specified DB.
<br>If none was found, DockR will create one for you with the DB name specified in `DB_DATABASE`.
:::

### Outside the docker containers

To connect to Postgres from apps such as `TablePlus`, `Datagrip`, `PhpStorm`, or even `terminal`, use :

```apache
Host=127.0.0.1 / localhost
Port=5432
UserName=dockr
Password=password
Database=As mentioned in DB_DATABASE .env variable.
```

## Redis

Use the following .env variables to connect in the containers.

```ini
REDIS_HOST=dockr_redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

