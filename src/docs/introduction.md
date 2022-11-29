---
title: Introduction
description: Introduction to DockR
---

# Introduction

DockR is a package that interacts with `Docker` and `Laravel` to maintain the containers used for Local development of `Laravel App`.

DockR is able to create and maintain multiple number of projects at the same time with ease.

DockR is written using `Bash Script`.

## Reason for DockR
Developing a Laravel Site always remains simple with `Laravel Homestead` for Years.

But Apple had another plans.
When Apple Launched their Macs with `M1 chip (ARM based SOC)` an entirely different architecture in processor, Homestead is not supported for the Arm based M1 SOC.
This is due to different architecture`(ARM)` in M1 SOC where the Virtual Machine providers failed to update their software to support M1 chip. This Results in the support drop of Homestead.

To overcome this problem, We’ve searched for various alternatives to replace it in place of homestead which should work in both `Intel(x86 architecture)` and `M1(ARM architecture)`.
Finally, We planned to use `Docker` as the Virtual machine provider.

### Why Docker

- Docker is container based service provider. 
- Supports many architectures including `Intel(x86 architecture)` and `M1(ARM architecture)`.
- Docker can run multiple containers at once and consumes less memory.
- Docker Containers are lightweight and portable.
- A Docker container has same configuration even if transferred to various systems.

We can use docker as local development environment directly without use of any third party packages.
But it makes a bit of difficulty for developer run and use the container.

So we searched for various packages that integrates well into `Laravel` app and `Docker containers`.
