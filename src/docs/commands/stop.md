---
title: Command - Stop
description: Description about 'stop' command.
---

# Dockr stop

Stop the container from `DockR` without removing them.

Usage :

```
dockr stop [type] [options]
```

Example :

```
dockr stop
dockr stop asset
dockr stop all
```

Explanation :

- `dockr stop`
    - This command will stop the project container alone without removing the container.
- `dockr stop asset`
    - This will stop the project container along with asset containers without removing the containers.
- `dockr stop all`
    - This command will stop all the containers including projects and assets started using `DockR` without removing the
      containers.
