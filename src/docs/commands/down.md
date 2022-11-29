---
title: Command - Down
description: Description about 'down' command.
---

# Dockr down

Stop and removes the containers from `DockR`

Usage :

```
dockr down [type] [options]
```

Example :

```
dockr down
dockr down asset
dockr down all
dockr down all -f
```

Explanation :

- `dockr down`
    - This command will stop and removes the project container alone.
- `dockr down asset`
    - This will stop and removes the project container along with asset containers.
- `dockr down all`
    - This command will stop and removes all the containers including projects and assets started using `DockR`.
- `dockr down all -f`
    - This command will force remove all the containers including projects and assets without stopping them.

