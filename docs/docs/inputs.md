---
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

| Input&nbsp;Name           | Default&nbsp;Input&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;Input |
| :------------------------ | :---------------------------- | :---------------------------------------- |
| [name](#name) **\***      | -                             | Stack Name                                |
| [url](#url) **\***        | -                             | Portainer URL                             |
| [token](#token) **\***    | -                             | Portainer Token                           |
| [file](#file)             | `docker-compose.yaml`         | Compose File                              |
| [endpoint](#endpoint)     | `endpoints[0].Id`             | Portainer Endpoint                        |
| [ref](#ref)               | `current reference`           | Repository Ref                            |
| [repo](#repo)             | `current repository`          | Repository URL                            |
| [tlsskip](#tlsskip)       | `false`                       | Skip Repo TLS Verify                      |
| [prune](#prune)           | `true`                        | Prune Services                            |
| [pull](#pull)             | `true`                        | Pull Images                               |
| [type](#type)             | `repo`                        | Type [`repo`, `file`]                     |
| [standalone](#standalone) | `false`                       | Deploy Standalone Stack                   |
| [env_json](#env_json)     | -                             | Dotenv JSON Data                          |
| [env_file](#env_file)     | -                             | Dotenv File Path                          |
| [merge_env](#merge_env)   | `false`                       | Merge Env Vars                            |
| [username](#username)     | -                             | Repository Username                       |
| [password](#password)     | -                             | Repository Password                       |
| [fs_path](#fs_path) **¹** | -                             | Relative Path (BE)                        |
| [summary](#summary)       | `true`                        | Add Summary to Job                        |

> **\* Required**  
> **¹ Business Edition Only**

For more details on inputs see the [Portainer CE API Documentation](https://app.swaggerhub.com/apis/portainer/portainer-ce/).

## Details

### name <Badge type="warning" text="Requierd" />

Swarm sack name or Compose project name.

Example: `cool-stack`

### url <Badge type="warning" text="Requierd" />

Portainer URL.

This is the base url to your Portainer instance.

Example: `https://portainer.example.com:9443`

### token <Badge type="warning" text="Requierd" />

Portainer API token.

For Instructions to create an API token visit: https://docs.portainer.io/api/access

### file

The Docker compose file. This path is relative to your working directory.

If you check out your repository to the root, and the compose file is called `docker-compose.yaml`, and is in the `app` directory, set `file` to: `app/docker-compose.yaml`

Default: `docker-compose.yaml`

### endpoint

If endpoint is not provided the first endpoint returned by the API will be used.
If you only have one endpoint, this will work as expected, otherwise, you should provide an endpoint.

Example: `1`

Default: `${endpoints[0]}`

### ref

This defaults to the reference that triggered the workflow.

If deploying from a different repository than the current one, you may want to specify the `ref` of that repository to deploy from.

Example: `refs/heads/master`

Default: <span v-pre>`${{ github.ref }}`</span>

### repo

This defaults to the repository running the action.

If you want to deploy a different repository, put the full http URL to that repository.

Example: `https://github.com/cssnr/portainer-stack-deploy-action`

Default: <span v-pre>`${{ github.server_url }}/${{ github.repository }}`</span>

### tlsskip

Skips SSL verification when cloning the Git repository.
Set to `true` to enable.

Default: `false`

### prune

Prune services that are no longer referenced (only available for Swarm stacks).
Set to `false` to disable.

Default: `true`

### pull

Pull latest image before deploy. Set to `false` to disable.

Default: `true`

### type

Type of Deployment. Supports either `repo` or `file`.

Default: `repo`

### standalone

Deploy a **compose** stack instead of _swarm_.
Set to `true` to enable.

Default: `false`

### env_json {#env_json}

Optional environment variables used when creating the stack.
File should be in dotenv format and JSON should be an object. Example: {"KEY": "Value"}

This can be used with [env_file](#env_file). Values in [env_file](#env_file) take precedence over these values.

::: warning
Inputs are NOT secure unless using secrets or secure output (masked).
Using `env_json` on a public repository will otherwise expose this data in the actions' logs.
For an example of an action that produces secure out for use with `env_json` see the [hashicorp/vault-action example](../guides/examples.md#multi-step).
To securely pass unmasked values, use the [env_file](#env_file) option.
:::

### env_file {#env_file}

Environment File in [dotenv](https://www.dotenv.org/docs/security/env) format, parsed using [dotenv](https://www.npmjs.com/package/dotenv).

This can be used with [env_json](#env_json). Values in this file take precedence over [env_json](#env_json).

### merge_env {#merge_env}

Set this to `true` to merge the current environment variables from the existing stack
with any newly provided variables in the [env_json](#env_json) or [env_file](#env_file) inputs.

When not providing the [env_json](#env_json) or [env_file](#env_file) inputs the
current environment variables from the existing stack are always used.

When deploying a new stack, there are no current environment variables to merge, and this has no effect.

Default: `false`

### username

Username for private repository authentication when [type](#type) is set to `repo`.

This is **NOT** your Portainer username, see [token](#token) for Portainer authentication.

### password

Password for private repository authentication when [type](#type) is set to `repo`.

This is **NOT** your Portainer password, see [token](#token) for Portainer authentication.

### fs_path <Badge type="tip" text="Business Edition Only" /> {#fs_path}

Relative Path Support for Portainer BE.
Set this to enable relative path volumes support for volume mappings in your compose file.

_For more info see the [Portainer Documentation - Relative Path Support](https://docs.portainer.io/advanced/relative-paths)._

### summary

Write a Summary for the job. To disable this set to `false`.

For more information see [Job Summary](../guides/features.md#job-summary).

Default: `true`
