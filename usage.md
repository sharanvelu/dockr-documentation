## Usage

#### To Start the container
- Open any terminal of your preference.
- Navigate to the project root directory.
- Run `dockr up` or `dockr up`.

> Note : This command will start the Asset containers (if not yet started). Also checks for the database presence mentioned in the `DB_DATABASE` .env variable. If the DB is not present, then, DockR will create a DB inside the specified connection in `DB_CONNECTION` .env variable.

#### To Stop the container
- In your Project Directory, run `dockr down`.

> Note : `dockr stop` command will not stop the asset containers. If you want stop the asset containers, You have to manually stop the asset containers by `dockr asset down`.
