---
prev:
  text: 'Get Help'
  link: '/support'
---

# Getting Started

<span class="search-keywords">Install and Setup Guide to Begin.</span>

To get started, create or update your [workflow file](#workflow) and review the [usage](#usage).

_You can also view the [features](features.md) and additional [examples](examples.md)._

## Workflow

Add the step to an existing workflow or create a new one.

_If creating a [new workflow](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows#about-workflows), place it in the `.github/workflows` directory._

::: code-group
<<< @/snippets/basic/step.yaml {4,5 yaml} [Existing Workflow ~vscode-icons:folder-type-github~]
<<< @/snippets/basic/workflow.yaml {17,18 yaml} [New Workflow ~vscode-icons:folder-type-github~]
:::

**Make sure to update the highlighted lines and add your [secrets](#secrets).**

The only 3 required inputs are [token](../docs/inputs.md#token), [url](../docs/inputs.md#url), and [name](../docs/inputs.md#name).

See the [Inputs Documentation](../docs/inputs.md) for additional options and default values.

## Usage

You only need to set the [name](../docs/inputs.md#name), [url](../docs/inputs.md#url), [token](../docs/inputs.md#token) and optionally the stack [file](../docs/inputs.md#file) to deploy a stack.

The compose [file](../docs/inputs.md#file) path is relative to your working directory.
If you check out your repository to the root and your compose file is in the `app` directory, set [file](../docs/inputs.md#file) to: `app/docker-compose.yaml`

You can provide environment variables from either a file or JSON.
If providing secrets via [env_json](../docs/inputs.md#env_json) they should come from secure input (masked).

See the [Inputs Documentation](../docs/inputs.md) for additional options and more details.

## Secrets

You should store your credentials in [GitHub Actions Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

You do not need to add all values as a secret. However, be aware that any inputs not added as a secret,
will be visible in the [GitHub Actions Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs).

Likewise, if you add your GitHub username as a secret,
these values will be replaced with `***`'s anywhere they appear in the logs, including repository names.

If working within an [GitHub Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations)
you can create these secrets in the organization and make them available to all your repositories.
_This is why I use the [cssnr](https://github.com/cssnr) organization._

## Native Docker

If you don't use Portainer, you can deploy directly to a native [Docker](https://docs.docker.com/) host.

For this you should use: [cssnr/stack-deploy-action](https://github.com/cssnr/stack-deploy-action)

- https://github.com/marketplace/actions/docker-stack-deploy

For more details visit the website: https://docker-deploy.cssnr.com/

&nbsp;

::: info Request a Feature
If you need more options, please [open a feature request](https://github.com/cssnr/portainer-stack-deploy-action/discussions/categories/feature-requests)
:::
