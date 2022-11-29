---
title: Command - Seed
description: Description about 'seed' command.
---

# Dockr seed

Used to run the Seeder(`php artisan db:seed`) command within the project container.

Usage :

```
dockr seed <SEEDER_CLASS>
```

Example :

```
dockr seed 
dockr seed UserSeeder
```

::: info Note :
The <SEEDER_CLASS> is optional, if nothing specified, then the DatabaseSeeder will be run.
:::
