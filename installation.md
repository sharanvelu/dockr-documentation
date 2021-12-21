## Requirements

DockR supports `Mac`, `Linux` and `Windows(WSL)`. Native Windows support are on its way.

Before we begin, make sure you have `Docker` and `curl` installed on your local machine.

Make sure Docker is `up to date`.

## Installation

Installing DockR is the same for all `Operating System's`. However, installing and configuring `Docker` and `DockR` is quite different for `OS's`.

#### Installing DockR on *MAC*

Installing `DockR` on your `MAC` is very simple as running the following command in your terminal.

```shell
sudo bash -c "$(curl -fsSL install.dockr.in)"
```

And that's it, DockR will take care of everything else.

This command will create a `Dockr` directory in your home directory and copies the necessary files to the location.

This command also adds a symlink for executable file `dockr` in `/usr/local/bin` directory. This enables you to run `dockr` commands anywhere from your terminal.
