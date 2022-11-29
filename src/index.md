---
layout: home
title: DockR
description: Landing page for DockR

hero:
  name: DockR
  text: Integration for Laravel - Docker.
  image:
    src: /assets/half.png
    alt: DockR logo
  tagline: DockR lets your Laravel projects run with Docker seamlessly for Local development environment.
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/sharanvelu/dockr

features:
  - icon: ⚡️
    title: PHP Versions
    details: DockR supports almost every PHP Versions. Don't worry, other PHP versions weren't abandoned, they will be supported in the upcoming weeks.
  - icon: 🔥
    title: Proxy
    details: DockR provides an option to proxy the incoming request via a Domain name of your choice instead of using localhost:xxxx.
  - icon: 🎉
    title: Asset Containers
    details: DockR provides separate containers for assets such as MySQL, Postgres and Redis. Multiple projects can connect to the same Database if needed.
  - icon: 🎀
    title: Customization
    details: Our Docker Image contains most of the packages and extensions built-in. If you are not satisfied with them, you can create your own image and use it with your project.
  - icon: 🎀
    title: Worker
    details: DockR provides an easy way to work with Schedules and Queues. DockR will create a separate container and runs a Scheduler and two Queue Listeners for working with Worker tasks.
  - icon: 🎀
    title: Composer
    details: DockR provides an option to have use specific Composer version for different projects.
  - icon: 🎀
    title: Convenience
    details: All these above-mentioned features are available and accessed by just setting up an environment variable within the '.env' file.
---
