---
title: Mac-OS Installation
description: Installation instruction for MacOS
---

# Installation for macOS

`DockR` can be installed on macOS through various methods. You could use `HomeBrew` or `Curl` to install the DockR on your Mac.

Before you begin, Make sure Docker is installed and up-to-date.

[//]: # (## Install using HomeBrew)
[//]: # (Run the HomeBrew install command on your terminal. You can run the command in any directory.)
[//]: # (```bash)
[//]: # (brew install sharanvelu/dockr/dockr)
[//]: # (```)
[//]: # (The above command will install `DockR` at the HomeBrew installation directory and the executable binary will be added automatically by Homebrew.)

## Install using Curl

If you don't have HomeBrew or don't want to install HomeBrew, you can simply install DockR using curl.

To install DockR using `curl`, run the following command in your terminal in any directory.

```bash
bash -c "$(curl -fsSL install.dockr.in)"
```

The above command will install the DockR at your `$HOME` directory and add the executable binary in a directory which is already added to your `environment path` variable.
<br>
The executable binary will be installed in `/usr/local/bin/` dir.

::: info Note :
Root permissions are required to install and to add binary to desired location.
:::
