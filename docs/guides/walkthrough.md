# Walkthrough

[[toc]]

## Docker

### Install

If docker is not installed, install it.

- https://docs.docker.com/engine/install/

You can verify it's installed by running: `docker info`

### Access

If you use `sudo` or the `root` user to access docker, it is recommended you grant access to a user or service account.

Replace `username` with your actual username.

```shell [run ~vscode-icons:file-type-shell~]
sudo usermod -aG docker username
```

### Verify

To ensure the user can access docker, run the following command as that user.

```shell [run ~vscode-icons:file-type-shell~]
docker ps
```

Verify the command exits without error.

::: details View Error Message
An error message will look similar to the following.

---

permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.48/containers/json": dial unix /var/run/docker.sock: connect: permission denied
:::

## Workflow

Workflows must be located in the `.github/workflows` directory of your repository.

They can run automatically on events or manually via the `workflow_dispatch` trigger.

For more details read the [GitHub Actions Documentation](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows#about-workflows).
