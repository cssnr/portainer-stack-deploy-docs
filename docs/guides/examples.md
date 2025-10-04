---
pageClass: examples-page
---

# Examples

[[toc]]

💡 _Click on the heading to expand/collapse the item._

## Steps

<details open><summary>Deploy from the repository</summary>

<<< @/snippets/examples/steps/repo.yaml [yaml]

</details>
<details><summary>Deploy from a compose file</summary>

<<< @/snippets/examples/steps/file.yaml [yaml]

</details>
<details><summary>Deploy from a different repository</summary>

<<< @/snippets/examples/steps/other-repo.yaml [yaml]

</details>
<details><summary>Specify environment variables</summary>

<<< @/snippets/examples/steps/env.yaml [yaml]

</details>
<details><summary>Merging existing environment variables</summary>

<<< @/snippets/examples/steps/merge-env.yaml [yaml]

</details>
<details><summary>Multiline JSON data input</summary>

<<< @/snippets/examples/steps/json.yaml [yaml]

</details>
<details><summary>Only run on release events</summary>

This is done by setting: <span v-pre>`if: ${{ github.event_name == 'release' }}`</span>

<<< @/snippets/examples/steps/release.yaml [yaml]

</details>
<details><summary>Add Cloudflare Zero Trust service token headers </summary>

<<< @/snippets/examples/steps/cloudflare.yaml [yaml]

</details>
<details><summary>Deploy with relative path volumes <Badge type="tip" text="Business Edition" /></summary>

<<< @/snippets/examples/steps/path.yaml [yaml]

</details>
<details><summary>Trigger a Portainer Webhook Service <Badge type="tip" text="Webhook" /></summary>

<<< @/snippets/examples/steps/webhook.yaml [yaml]

This uses: [cssnr/web-request-action](https://github.com/cssnr/web-request-action)

</details>

## Multi-Step

<details><summary>Use Output with toJSON - hashicorp/vault-action</summary>

<<< @/snippets/examples/multi/tojson.yaml [yaml]

</details>

## Workflows

<details><summary>Workflow Run and Dispatch Trigger</summary>

This uses the `workflow_run` trigger and an `if:` condition to only run after the job named `Build` is successful,
while also allowing you to manually deploy any version you choose.

<<< @/snippets/examples/workflows/workflow-run.yaml [yaml]

</details>
<details><summary>Full Workflow Example</summary>

This combines a build, deploy, and cleanup into a single job.

<<< @/snippets/examples/workflows/full.yaml [yaml]

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/portainer-stack-deploy-action/network/dependents

&nbsp;

::: info Get Help
If you have more questions, please [request support](https://github.com/cssnr/portainer-stack-deploy-action/discussions/categories/feature-requests)
:::

<style>
.examples-page summary {
    color: var(--vp-c-brand-1);
}
.examples-page summary:hover {
    filter: brightness(115%);
    /*color: var(--vp-c-indigo-2);*/
    /*text-decoration: underline;*/
    /*text-decoration-thickness: 1px;*/
}
</style>
