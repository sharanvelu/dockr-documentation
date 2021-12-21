## Introduction

DockR is a package that interacts with `Docker` and `Laravel` to maintain the containers used for Local development of `Laravel App`.

DockR is able to create and maintain multiple number of projects at the same time with ease.

DockR is written using `Shell Script`.

## Reason for DockR
Developing a Laravel Site always remains simple with `Laravel Homestead` for Years.

But Apple had another plans.
When Apple Launched their MacBooks with `M1 chip (ARM based SOC)` an entirely different architecture in processor, Homestead is not supported for the Arm based M1 SOC.
This is due to different architecture in Arm based M1 SOC where the Virtual Machine providers failed to update their software to support M1 SOC. This Results in the support drop of Homestead.

To overcome this problem, We’ve searched for various alternatives to replace it in place of homestead which should work in both `Intel(x86 architecture)` and `M1(ARM architecture)`.
We planed to use `Docker` as the Virtual provider.

## Why Docker

- Docker is container based service provider. 
- Supports many architectures including `Intel(x86 architecture)` and `M1(ARM architecture)`.
- Docker can run multiple containers at once and consumes less memory.
- Docker Containers are lightweight and portable.
- A Docker container has same configuration even if transferred to various systems.

We can use docker as local development environment directly without use of any third party packages.
But it makes a bit of difficulty for developer run and use the container.

So we searched for various packages that integrates well into `Laravel` app and `Docker containers`.

## Other Apps?

**Qn :** Isn't there any other apps/package that could fix your problem?
<br>
**Ans :** Yes, There are many apps and packages that can be used as development environment. But none of them satisfied our needs.

**Laravel Sail**
1. Sail uses `Docker` for local Laravel development. 
2. Sail supports only `PHP 8.0` and `PHP 8.1`. Most of our Laravel applications are years old and are far beyond migrating them to the latest version.
3. Sail cannot connect multiple projects to single DB.

For this unfortunate reason, we didn't consider sail as an option.

We searched far beyond the limit, And we could find nothing. So we created one by ourselves, and we call it `DockR`.
