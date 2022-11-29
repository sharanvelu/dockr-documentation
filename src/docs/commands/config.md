---
title: Command - Config
description: Description about 'config' command.
---

# Dockr config

Used to manage the configuration values for asset containers.

Usage :

```
dockr config enable <asset>
dockr config disable <asset>
dockr config get <asset>
dockr config list
```

- `dockr config enable <asset>` is used to enable the asset container.
- `dockr config disable <asset>` is used to disable the asset container. <br>
When the asset container is disabled, then the disabled container will be restricted to start during `dockr up` process. 
- `dockr config --get <asset>` is used to get the current status of the asset container.
- `dockr config list` is used to list the current configurations for all the asset containers.

Example :

```
dockr config enable mysql
dockr config disable postgres
dockr config get redis
dockr config list
```

::: info Note :
When no value is set, then it will be defaulted to `enable` state
:::
