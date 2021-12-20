## Connecting to Asset containers

### Mysql

### Within the Docker containers
In order to connect from within another container(.env), We will have to use the asset containers name instead of IP.
<br>
`Docker` will take care of `IP resolving` and connects to the asset containers.

For Mysql : `DB_PORT` will be `3306` and its `DB_HOST` will be `dockr_mysql`.
```
DB_PORT=3306
DB_HOST=dockr_mysql
```

For all the asset containers, The username and password will be
```
USERNAME=dockr
PASSWORD=password
```

Database .env :
```
DB_CONNECTION=mysql
DB_USERNAME=dockr
DB_PASSWORD=password
```

For `DB_DATABASE`, use any name you want.
During `dockr up`, Dockr will check for the specified DB. If none was found, DockR will create one for you with the DB name specified in `DB_DATABASE`.


### Outside the docker containers
To connect to Mysql from apps such as `TablePlus`, `Datagrip`, `PhpStorm`, `MySql Workbench`, or even `terminal`, use :
```
Host = 127.0.0.1 / localhost
Port = 3306
UserName = dockr
Password = password
Database = As mentioned in DB_DATABASE .env variable.
```

--- 

### Postgres

Connecting to Postgres is same as that of mysql.

### Within the Docker containers
In order to connect from within another container(.env), We will have to use the asset containers name instead of IP.
<br>
`Docker` will take care of `IP resolving` and connects to the asset containers.

For Mysql : `DB_PORT` will be `5432` and its `DB_HOST` will be `dockr_postgres`.
```
DB_PORT=5432
DB_HOST=dockr_postgres
```

For all the asset containers, The username and password will be
```
USERNAME=dockr
PASSWORD=password
```

Database .env :
```
DB_CONNECTION=pgsql
DB_USERNAME=dockr
DB_PASSWORD=password
```

For `DB_DATABASE`, use any name you want.
During `dockr up`, Dockr will check for the specified DB. If none was found, DockR will create one for you with the DB name specified in `DB_DATABASE`.


### Outside the docker containers
To connect to Postgres from apps such as `TablePlus`, `Datagrip`, `PhpStorm`, or even `terminal`, use :
```
Host = 127.0.0.1 / localhost
Port = 5432
UserName = dockr
Password = password
Database = As mentioned in DB_DATABASE .env variable.
```

---

### Redis

Use the following .env variables to connect in the containers.
```
REDIS_HOST=dockr_redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

