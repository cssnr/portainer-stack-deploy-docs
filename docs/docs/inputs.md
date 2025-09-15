---
title: Inputs Documentation
---

# Inputs

💡 Click on the **Input Name** for more [Details](#details).

<div class="table-inputs">

| Input&nbsp;Name                  | Default&nbsp;Input&nbsp;Value | Short&nbsp;Description&nbsp;of&nbsp;Input |
| :------------------------------- | :---------------------------- | :---------------------------------------- |
| [name](#name) **\*** <CB />      | -                             | Stack Name                                |
| [url](#url) **\*** <CB />        | -                             | Portainer URL                             |
| [token](#token) **\*** <CB />    | -                             | Portainer Token                           |
| [file](#file) <CB />             | `docker-compose.yaml`         | Compose File                              |
| [endpoint](#endpoint) <CB />     | `endpoints[0].Id`             | Portainer Endpoint                        |
| [ref](#ref) <CB />               | `current reference`           | Repository Ref                            |
| [repo](#repo) <CB />             | `current repository`          | Repository URL                            |
| [tlsskip](#tlsskip) <CB />       | `false`                       | Skip Repo TLS Verify                      |
| [prune](#prune) <CB />           | `true`                        | Prune Services                            |
| [pull](#pull) <CB />             | `true`                        | Pull Images                               |
| [type](#type) <CB />             | `repo`                        | Type [`repo`, `file`]                     |
| [standalone](#standalone) <CB /> | `false`                       | Deploy Standalone Stack                   |
| [env_json](#env_json) <CB />     | -                             | Dotenv JSON Data                          |
| [env_file](#env_file) <CB />     | -                             | Dotenv File Path                          |
| [merge_env](#merge_env) <CB />   | `false`                       | Merge Env Vars                            |
| [username](#username) <CB />     | -                             | Repository Username                       |
| [password](#password) <CB />     | -                             | Repository Password                       |
| [headers](#headers) <CB />       | `"{}"`                        | Custom Headers JSON                       |
| [fs_path](#fs_path) **¹** <CB /> | -                             | Relative Path (BE)                        |
| [summary](#summary) <CB />       | `true`                        | Add Summary to Job                        |

</div>

> **\* Required**  
> **¹ Business Edition**

For more details on inputs see the [Portainer CE API Documentation](https://app.swaggerhub.com/apis/portainer/portainer-ce/).

## Details

### name <CB /> <Badge type="warning" text="Requierd" />

Swarm sack name or Compose project name.

Example: `cool-stack`

### url <CB /> <Badge type="warning" text="Requierd" />

Portainer URL.

This is the base url to your Portainer instance.

Example: `https://portainer.example.com:9443`

### token <CB /> <Badge type="warning" text="Requierd" />

Portainer API token.

For Instructions to create an API token visit: https://docs.portainer.io/api/access

### file <CB />

The Docker compose file. This path is relative to your working directory.

If you check out your repository to the root, and the compose file is called `docker-compose.yaml`, and is in the `app` directory, set `file` to: `app/docker-compose.yaml`

Default: `docker-compose.yaml`

### endpoint <CB />

If endpoint is not provided the first endpoint returned by the API will be used.
If you only have one endpoint, this will work as expected, otherwise, you should provide an endpoint.

Example: `1`

Default: `${endpoints[0]}`

### ref <CB />

This defaults to the reference that triggered the workflow.

If deploying from a different repository than the current one, you may want to specify the `ref` of that repository to deploy from.

Example: `refs/heads/master`

Default: <span v-pre>`${{ github.ref }}`</span>

### repo <CB />

This defaults to the repository running the action.

If you want to deploy a different repository, put the full http URL to that repository.

Example: `https://github.com/cssnr/portainer-stack-deploy-action`

Default: <span v-pre>`${{ github.server_url }}/${{ github.repository }}`</span>

### tlsskip <CB />

Skips SSL verification when cloning the Git repository.
Set to `true` to enable.

Default: `false`

### prune <CB />

Prune services that are no longer referenced (only available for Swarm stacks).
Set to `false` to disable.

Default: `true`

### pull <CB />

Pull latest image before deploy. Set to `false` to disable.

Default: `true`

### type <CB />

Type of Deployment. Supports either `repo` or `file`.

Default: `repo`

### standalone <CB />

Deploy a **compose** stack instead of _swarm_.
Set to `true` to enable.

Default: `false`

### env_json <CB /> {#env_json}

Optional environment variables used when creating the stack.
File should be in dotenv format and JSON should be an object. Example: {"KEY": "Value"}

This can be used with [env_file](#env_file). Values in [env_file](#env_file) take precedence over these values.

::: details View JSON Input Examples

These examples are identical, just different ways of passing the input.

::: code-group

```yaml [Multi-Line JSON]
- uses: cssnr/portainer-stack-deploy-action@v1
  with:
    env_json: |
      {
        "KEY": "Value",
        "KEY_2": "Value 2"
      }
```

```yaml [Single Line JSON]
- uses: cssnr/portainer-stack-deploy-action@v1
  with:
    env_json: '{"KEY": "Value", "KEY_2": "Value 2"}'
```

Note: Additional [inputs](../docs/inputs.md) are excluded for brevity.

:::

::: warning
Inputs are NOT secure unless using secrets or secure output (masked).
Using `env_json` on a public repository will otherwise expose this data in the actions' logs.
For an example of an action that produces secure out for use with `env_json` see the [hashicorp/vault-action example](../guides/examples.md#multi-step).
To securely pass unmasked values, use the [env_file](#env_file) option.
:::

### env_file <CB /> {#env_file}

Environment File in [dotenv](https://www.npmjs.com/package/dotenv) format, parsed using [dotenv](https://www.npmjs.com/package/dotenv).

This can be used with [env_json](#env_json). Values in this file take precedence over [env_json](#env_json).

::: details View Environment File Input Example

::: code-group

```dotenv [.env]
KEY="Value"
KEY_2="Value 2"
```

```yaml [.github/workflow.yaml]
- uses: cssnr/portainer-stack-deploy-action@v1
  with:
    env_file: .env
```

Note: Additional [inputs](../docs/inputs.md) are excluded for brevity.

:::

### merge_env <CB /> {#merge_env}

Set this to `true` to merge the current environment variables from the existing stack
with any newly provided variables in the [env_json](#env_json) or [env_file](#env_file) inputs.

When not providing the [env_json](#env_json) or [env_file](#env_file) inputs the
current environment variables from the existing stack are always used.

When deploying a new stack, there are no current environment variables to merge, and this has no effect.

Default: `false`

### username <CB />

Username for private repository authentication when [type](#type) is set to `repo`.

This is **NOT** your Portainer username, see [token](#token) for Portainer authentication.

### password <CB />

Password for private repository authentication when [type](#type) is set to `repo`.

This is **NOT** your Portainer password, see [token](#token) for Portainer authentication.

### headers <CB />

Custom Headers in **JSON** format for services like Cloudflare Zero Trust.

The `headers` are parsed with JSON.parse and passed directly to axios:

```javascript
headers: { 'X-API-Key': token, ...JSON.parse(headers) }
```

::: details View Headers Input Example

```yaml
- uses: cssnr/portainer-stack-deploy-action@v1
  with:
    headers: |
      {
        "CF-Access-Client-Id": "${{ secrets.CF_CLIENT_ID }}",
        "CF-Access-Client-Secret": "${{ secrets.CF_CLIENT_SECRET }}"
      }
```

Note: Additional [inputs](../docs/inputs.md) are excluded for brevity.

:::

Default: `"{}"`

### fs_path <CB /> <Badge type="tip" text="Business Edition" /> {#fs_path}

Relative Path Support for Portainer BE.
Set this to enable relative path volumes support for volume mappings in your compose file.

_For more info see the [Portainer Documentation - Relative Path Support](https://docs.portainer.io/advanced/relative-paths)._

### summary <CB />

Write a Summary for the job. To disable this set to `false`.

For more information see [Job Summary](../guides/features.md#job-summary).

Default: `true`

<style>
.table-inputs td {
    padding: 8px 12px !important;
    white-space: nowrap;
}
</style>
