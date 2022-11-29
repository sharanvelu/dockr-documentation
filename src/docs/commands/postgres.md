---
title: Command - Postgres
description: Description about 'postgres' command.
---

# Dockr postgres

Used to manage `postgres` container and Databases in postgres.

## Dockr postgres import

Used to import the specified dump file in the specified DB.

Usage :

```
dockr postgres import <db_name> <path_to_dump_file>
```

Example :

```
dockr postgres import test_db /usr/local/lib/dump.sql
```

::: info Note :
No space(" ") should be present in the path_to_dump.file.
<br>
If there is a space in the file name, Kindly rename and try again.
:::

---

## Dockr postgres db

Starts a MySQL session in the MySQL container.

Usage :

```
dockr postgres <db_name>
```

Example :

```
dockr postgres test_db
dockr postgres
```

::: info Note :
When there is no DB specified, it will start a session without using any DB.
<br>
When using a DB, the specified DB will be used to start a session.
:::

---

## Dockr postgres bash

If you want to start a bash SSH session within the postgres container, just run this command.

Example :

``` 
dockr postgres bash
dockr postgres shell
```

You can also use `shell` to start a bash session. `dockr shell` is an alias to the `dockr bash` command.

---

## Dockr postgres query

Runs the specified query within the comfort of your terminal without SSH into the container.

Usage :

```
dockr postgres -q "query_statement"
```

Example :

```
dockr postgres -q "show databases;"
dockr postgres -q "create database test;"
dockr postgres -q "drop database test;"
```

---

## Dockr postgres db query

Used to run the query command within the specified DB.

Usage :

```
dockr postgres <db_name> -q "<query_statement>"
```

Example :

```
dockr postgres test_db -q "select * from users;"
dockr postgres test_db -q "select id, name from customers;"
```

::: info Note :
Kindly take a look at the double quotes(") at the query statements.
:::
