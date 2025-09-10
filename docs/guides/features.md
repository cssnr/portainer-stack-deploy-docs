# Features

Deploy or Update a Portainer Stack from a Repository or Compose File.
Supports both Swarm and Standalone Docker deployments for Portainer Community and Business Enterprise Edition.

- Deploy a new stack or update existing one.
- Deploy from a repository or a compose file, see [type](../docs/inputs.md#type).
- Deploy from a different [repo](../docs/inputs.md#repo) than the current one.
- Provide environment variables in [JSON](../docs/inputs.md#env_json) or [file](../docs/inputs.md#env_file) format.
- Automatically parse [Endpoint ID](../docs/inputs.md#endpoint) if only one endpoint.
- Supports Docker Swarm and Docker [Standalone](../docs/inputs.md#standalone).
- **To view all features see the [Inputs Documentation](../docs/inputs.md).**

You can [get started here](get-started.md) or view [workflow examples](examples.md).

::: info Request a Feature
If you need more options, please [open a feature request](https://github.com/cssnr/portainer-stack-deploy-action/discussions/categories/feature-requests)
:::

## Job Summary

Unless disabled, a Job Summary is generated to capture the command, output and errors.

::: info Example Job Summary

---

<!--@include: ./include/summary-success.md-->

:::

You can view an actual workflow run from the [Test job](https://github.com/cssnr/portainer-stack-deploy-action/actions/workflows/test.yaml) on GitHub _(requires login)_.

## Rolling Tags

The following rolling [tags](https://github.com/cssnr/portainer-stack-deploy-action/tags) are maintained to improve stability across updates.

| Version&nbsp;Tag                                                                                                                                                                                                                           | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/portainer-stack-deploy-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/portainer-stack-deploy-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/portainer-stack-deploy-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/portainer-stack-deploy-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/portainer-stack-deploy-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/portainer-stack-deploy-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/portainer-stack-deploy-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

## Action Comparison

The majority of other actions available have not been recently updated
and most of them are forks and clones of each other.

This action was built from the ground up with an easily extendable API to provide all the necessary [features](features.md) to deploy any Portainer stack from any GitHub Action.

To date all [issue](https://github.com/cssnr/portainer-stack-deploy-action/issues) have been fixed and all [feature requests](https://github.com/cssnr/portainer-stack-deploy-action/discussions/categories/feature-requests) added.

::: warning
None of these actions have been tested. This is an exhaustive list of published actions.
:::

<!-- Sort Order - 1: Stars - 2: Forks - 3: Updated -->

<StackTable
:repos="[
'cssnr/portainer-stack-deploy-action',
'carlrygart/portainer-stack-deploy',
'kgierke/portainer-stack-deployment',
'LGinC/portainer-stack-deploy',
'newarifrh/portainer-service-webhook',
'BramKelchtermans/portainer-deploy-action',
'wirgen/portainer-stack-redeploy-action',
'bots-house/portainer-deploy-stack-action',
'nvti/portainer-stack-deploy',
'rrennoir/portainer-stack',
'Hugollemos/deploy',
'sdjnmxd/portainer-stack-deploy',
'AlexPshkov/portainer-stack-deploy',
'Filaind/portainer-stack-deploy',
'spawnlab-dev/stack-deploy-action',
'nevcodia/portainer-stack-deployment',
'scod-br/portainer-stack-deploy',
'dann41/portainer-stack-deploy',
'ManicMade/portainer-git-stack-redeploy-action',
'fe5dds9/portainer-deploy-action',
'robin-moser/portainer-stack-deploy',
'SimonPrinz/portainer-deploy-action',
'KevinLamSeck/gh-action-portainer-stack-deploy',
'inova-notas/portainer-stack-deploy',
'Morgul/portainer-stack-deploy',
'mantichor/portainer-action',
]"
</StackTable>

> **Updated** - Link to Pulse (activity)  
> **Language** - Link to Dependants (users)

If there are any missing [features](../guides/features.md) you need,
please submit a [feature request](https://github.com/cssnr/portainer-stack-deploy-action/discussions/categories/feature-requests) and we will get them added...
