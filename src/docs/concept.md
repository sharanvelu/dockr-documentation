---
title: Concept
description: Concept of DockR
---

# Why use DockR?

'DockR' is designed to simplify the development workflow using `Docker` and allow you to manage containers with ease.

No more spending 'hours and hours' to setting up project on your local machine is over.

When using `Laravel Sail`, each projects has its own containers for server and database.
Which is not preferable sometimes.
Here's why,
- Some Apps need to connect to same database.
- Consumes heavy memory if running multiple projects simultaneously.

The main and obvious reason to use `DockR` is,
- DockR uses common containers for `database` and `redis`.
- DockR uses global scripts for running containers for a project which eliminates the need to add files to your project repository.
- Adds multiple shortcuts for `artisan` and `composer` commands.
- Additional commands to maintain docker containers.

## How DockR Works?

`DockR` is just a bash script that shortens the hilariously large Docker commands.
<br>
`DockR` improves the developer experience using `Docker` without any compromise.

## Can I Use DockR on Production server?

We strongly recommend not to use DockR in production.
<br>
DockR is specifically designed to simplify the development workflow and using it in production might have performance issues.
