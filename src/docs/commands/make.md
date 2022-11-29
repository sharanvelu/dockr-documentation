---
title: Command - Make
description: Description about 'make' command.
---

# Dockr make

Used to run `php artisan make:<something>` command within the project container.

Usage :

```
dockr make [TYPE] [NAME] [OPTIONS]
```

Example :

```
dockr make controller UserController
dockr make model User -mfs
dockr make migration create_users_table --create=users
```

::: tip
You can run all the make commands using the same way
:::
