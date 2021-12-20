## Why DockR?

When using `Laravel Sail`, each projects has its own containers for server and database.
Which is not preferable sometimes.
Here's why,
- Some Apps need to connect to same database.
- Consumes heavy memory if running multiple projects simultaneously.

The main and obvious reason to use `DockR` is,
- DockR uses common containers for `database` and `redis`.
- DockR uses global scripts for running containers for a project which eliminates the need to add files to your project repository.
- Adds multiple shortcuts for `artisan` and `composer` commands.
- Additional commands to maintain docker containers.