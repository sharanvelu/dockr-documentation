## Usage

#### To Start the container
- Open any terminal of your preference.
- Navigate to the project root directory.
- Run `dockr up` or `dockr up`.

> Note : This command will start the Asset containers (if not yet started). Also checks for the database presence mentioned in the `DB_DATABASE` .env variable. If the DB is not present, then, DockR will create a DB inside the specified connection in `DB_CONNECTION` .env variable.

#### To Stop the container
- In your Project Directory, run `dockr down`.

> Note : `dockr stop` command will not stop the asset containers. If you want stop the asset containers, You have to manually stop the asset containers by `dockr asset down`.

## Available Commands

- `dockr up` - Starts the project containers along with asset containers(if asset containers not started). Then creates a database mentioned in `DB_DATABASE` .env variable if the database mentioned is not available.
- `dockr down` - Stop and removes the containers
    - `dockr down` - Stop and removes only the current project container.
    - `dockr down asset` - Stop and removes the current project containers along with the asset containers.
    - `dockr down all` - Stops and then removes all the containers started using `DockR`. This includes asset containers as well as project containers.
    - `dockr down all -f` - ***Force removes*** without *stopping* all the containers started using `DockR`. This includes asset containers as well as project containers.
- `dockr stop` - Stop the containers without removing them
    - `dockr stop` - Stop only the current project container.
    - `dockr stop asset` - Stop the current project containers along with the asset containers.
    - `dockr stop all` - Stops all the containers started using `DockR`. This includes asset containers as well as project containers.
- `dockr asset` - Commands for Asset Containers
    - `dockr asset up` - Starts only the asset containers.
    - `dockr asset stop` - Stop the asset container without removing them.
    - `dockr asset down` - Stop and removes the asset containers.
- `dockr composer` - Runs Composer commands.
    - `dockr composer <composer_commands>` - Runs any composer command within the project containers.
    - Example : `dockr composer install` - Install the project dependency using container's composer.
- `dockr art` or `dockr artisan` - Runs artisan command.
    - `dockr art <command>` -  Runs any artisan command within project container.
    - Note : `art` is a shorthand property for `artisan`.
    - Example : `dockr art key:generate`, `dockr artisan key:generate`, `dockr art env`, ...
- `dockr bin` - Runs binary commands.
    - `dockr bin phpunit <additional>` - Runs `vendor/bin/phpunit <additional>` command within the project containers.
- `dockr tinker` - Starts a tinker session.
- `dockr migrate` - Runs migration.
    - `dockr migrate` - Runs Migration within the project containers.
    - `dockr migrate fresh` - Runs `php artisan migrate:fresh` command.
    - `dockr migrate rollback` - Runs the migration rollback command (`php artisan migrate:rollback`).
- `dockr seed` - Runs Seeder.
    - `dockr seed` - Runs the default seeder.
    - `dockr seed <SeederClassName>` - Runs the specified seeder using `php artisan db:seed --class=<SeederClassName`.
- `dockr make <type> <name>` - Runs the make artisan command.
    - `dockr make model User` - Runs the `php artisan make:model User` command within the project container.
- `dockr queue` - Starts a queue listener / worker.
    - `dockr queue work` - Starts a queue worker(`php artisan queue:work`) in the web container.(This will not affect the worker container).
    - `dockr queue listen` - Starts a queue listener(`php artisan queue:work`) in the web container.(This will not affect the worker container).
- `dockr port` - Displays the current project port number (number that is set in `DOCKR_PORT` .env variable).
- `dockr shell` or `dockr bash` - Creates an `SSH` session with the project container.
- `dockr phpunit` - Runs the phpunit command.
    - `dockr phpunit <commands>` - Runs the `vendor/bin/phpunit <command>` within the project container.- `dockr status` - Displays the status of the containers. The list will be separated by `asset` and `project` containers.
- `dockr image` - Command for handling docker images.
  - `dockr image ls` - Displays the list of docker images downloaded for `DockR` separated by `asset` and `project` images.
  - `dockr image prune` - Deletes all the images downloaded by `DockR`.
- `dockr mysql` - Starts an `SSH` session with the ***MYSQL*** container.
- `dockr postgres` - Starts an `SSH` session with the ***POSTGRES*** container.
- `dockr redis` - Starts an `SSH` session with the ***REDIS*** container.
- `dockr help` - Displays the help.
    - `dockr help` - Display the list of commands available.
    - `dockr help up` - Displays the help for up command.








