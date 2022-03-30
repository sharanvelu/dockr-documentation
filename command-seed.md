### dockr seed

Used to run the Seeder(`php artisan db:seed`) command within the project container.

Usage :

```dockr
dockr seed [SEEDER_CLASS]
```

Example :

```dockr
dockr seed 
dockr seed UserSeeder
```

> Note : The \[SEEDER_CLASS] is optional, if nothing specified, then the DatabaseSeeder will be run. 
