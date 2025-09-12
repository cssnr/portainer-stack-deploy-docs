# Deploy from GitHub

Instructions for creating a Docker image, pushing it to GitHub Container Registry (GHCR), and deploying to Portainer with registry authentication.

[[toc]]

## Build and Push an Image

You can build a single image from a `Dockerfile`, or multiple images from a `docker-compose.yaml` file.

### Dockerfile

This example uses [docker/build-push-action](https://github.com/docker/build-push-action)

::: details docker-compose.yaml

This is only an example compose file.
**You should use your compose file.**

```yaml
version: '3.8'

services:
  alpine:
    image: alpine
    command: tail -f /dev/null
```

:::

::: details .github/workflow.yaml <Badge type="warning" text="WIP" />

<<< @/snippets/guides/github/build-push.yaml [yaml]

:::

### Compose Bake

This example uses [docker/bake-action](https://github.com/docker/bake-action)

This is how I build and deploy all my multi-image stacks to Portainer, from the `docker-compose.yaml` file.

::: details .github/workflow.yaml <Badge type="warning" text="WIP" />

<<< @/snippets/guides/github/bake.yaml [yaml]

:::

The full example can be found here: https://github.com/cssnr/django5-boiler/

_Note: the build and push actions are abstracted out into composite workflows for reusability.
However, this means you have to look at 3 files to see the full workflow._

## Configure Image Visibility

Newly published packages (images) are set to private visibility by default.
Unless you intend to share this image with others you can leave it as [Private](#private).
Otherwise, see instructions for changing visibility to [Public](#public)

### Private

You will need to configure portainer to pull the private image from GitHub.

See [Add Private GitHub Registry](#add-private-github-registry).

### Public <Badge type="warning" text="WIP" />

To change the image visibility to public, go to GitHub.

## Add Private GitHub Registry

First [Create a PAT](#create-pat) on GitHub then [Add the Registry](#add-registry) to Portainer.

### Create PAT <Badge type="warning" text="WIP" />

**On GitHub**, create a Personal Access Token (PAT).

### Add Registry

**On Portainer**, go to Registries and click `+ Add registry`.

Choose Custom registry and enter the following:

| Key            | Value      | Description                             |
| -------------- | ---------- | --------------------------------------- |
| Name           | `ghcr.io`  | Arbitrary name displayed in the UI      |
| Registry URL   | `ghcr.io`  | Actual URL to match when authenticating |
| Authentication | `True`     | Toggle on to set Username/Password      |
| Username       | `username` | GitHub Username (associated with PAT)   |
| Password       | `PAT`      | GitHub Personal Access Token (PAT)      |

Save your changes.

Now Portainer will use these credentials for any images whose url matches the configured `Registry URL`.

## Deploy to Portainer <Badge type="warning" text="WIP" />

This is the easiest part...
