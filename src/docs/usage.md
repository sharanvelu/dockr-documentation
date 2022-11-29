---
title: Usage
description: How to use DockR?
---

# Usage

## To Start the container
- Open any terminal of your preference.
- Navigate to the project root directory.
- Add necessary `.env` variables
- Run `dockr up`.

And now, You will be able to run your project with the site specified in `DOCKR_SITE`.

::: tip
This command will automatically start the Asset containers (if not yet started).
<br>Also checks for the database presence mentioned in the `DB_DATABASE` .env variable.
<br>If the DB is not present, then, DockR will create a DB inside the specified connection in `DB_CONNECTION` .env variable.
:::

## To Stop the container

- Open any terminal of your preference.
- Navigate to the project root directory.
- Run `dockr down`.

::: info Note :
`dockr stop` command will not stop the asset containers.
<br>If you want stop the asset containers, You have to manually stop the asset containers by `dockr asset down`.
:::
