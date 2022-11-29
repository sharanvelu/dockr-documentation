---
title: Command - Up
description: Description about 'up' command.
---

# Dockr up

Starts the project containers along with asset containers(if asset containers not started).
<br>Then creates a database mentioned in `DB_DATABASE` .env variable if it doesn't exist within the mentioned Database
engine.

Asset containers are started based on the `configurations` and `DOCKR_OVERRIDE_ASSET_CONFIG` variable.

Example :

```
dockr up
```