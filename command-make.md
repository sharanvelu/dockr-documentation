### dockr make

Used to run `php artisan make:<something>` command within the project container.

Usage :

```dockr
dockr make [TYPE] [NAME] [OPTIONS]
```

Example :

```dockr
dockr make controller UserController
dockr make model User -mfs
dockr make migration create_users_table --create=users
```

> Note : You can run all the make commands using the same way.
