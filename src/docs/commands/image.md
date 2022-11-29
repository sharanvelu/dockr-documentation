---
title: Command - Image
description: Description about 'image' command.
---

# Dockr image

This command is used to manage the images downloaded in the local storage.

Usage :

```
dockr image [COMMAND]
```

Example :

```
dockr image ls
dockr image prune
```

Explanation :

- dockr image ls
  - Will list the images downloaded by `DockR` to use with `DockR`.
- dockr image prune
  - Permanently delete all the downloaded images. This process will not be undone.
