---
title: Command - Asset
description: Description about 'asset' command.
---

# Dockr asset

Commands for managing Asset Containers.

Usage :

```
dockr asset [action]
```

Example :

```
dockr asset up
dockr asset stop
dockr asset down
```

Explanation :

- `dockr asset up`
    - Starts the asset container with respect to the configuration ad project `OVERRIDE` variable.
- `dockr asset stop`
    - Stops the asset containers without removing those.
- `dockr asset down`
    - Stops and removes the Asset containers.
