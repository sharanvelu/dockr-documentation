### dockr mysql

Used to manage `mysql` container and Databases in MySQL.

#### dockr mysql import

Used to import the specified dump file in the specified DB.

Usage :

```dockr
dockr mysql import <db_name> <path_to_dump_file>
```

Example :

```dockr
dockr mysql import test_db /usr/local/lib/dump.sql
```

> Note : No space(" ") should be present in the path_to_dump.file. 
> If there is a space in the file name, Kindly rename and try again.

---

#### dockr mysql db

Starts a MySQL session in the MySQL container.

Usage :

```dockr
dockr mysql <db_name>
```

Example :

```dockr
dockr mysql test_db
dockr mysql
```

> Note : When there is no DB specified, it will start a session without using any DB.
> <br>When using a DB, the specified DB will be used to start a session.

---

#### dockr mysql bash

If you want to start a bash SSH session within the mysql container, just run this command.

Example :

```dockr 
dockr mysql bash
dockr mysql shell
```

You can also use `shell` to start a bash session. `dockr shell` is an alias to the `dockr bash` command.

---

#### dockr mysql query

Runs the specified query within the comfort of your terminal without SSH into the container.

Usage :

```dockr
dockr mysql -q "query_statement"
```

Example :

```dockr
dockr mysql -q "show databases;"
dockr mysql -q "create database test;"
dockr mysql -q "drop database test;"
```

---

#### dockr mysql db query

Used to run the query command within the specified DB.

Usage :

```dockr
dockr mysql <db_name> -q "<query_statement>"
```

Example :

```dockr
dockr mysql test_db -q "select * from users;"
dockr mysql test_db -q "select id, name from customers;"
```

> Note : Kindly take a look at the double quotes(") at the query statements.
