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
<details><summary>Deploy with relative path volumes</summary>

<<< @/snippets/examples/steps/path.yaml [yaml]

</details>

## Workflows

<details><summary>Full Workflow Example</summary>

<<< @/snippets/examples/workflows/full.yaml [yaml]

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/portainer-stack-deploy-action/network/dependents

<style scoped>
summary {
    color: var(--vp-c-brand-1);
}
summary:hover {
    filter: brightness(115%);
    /*color: var(--vp-c-indigo-2);*/
    /*text-decoration: underline;*/
    /*text-decoration-thickness: 1px;*/
}
</style>
