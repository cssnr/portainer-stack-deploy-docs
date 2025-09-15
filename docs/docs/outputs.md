---
title: Outputs Documentation
---

# Outputs

Details about the stack are output for use in additional steps.

| Input&nbsp;Name                  | Description |
| :------------------------------- | :---------- |
| [stackID](#stackID) <CB />       | Stack ID    |
| [swarmID](#swarmID) <CB />       | Swarm ID    |
| [endpointID](#endpointID) <CB /> | Endpoint ID |

### stackID

This is the Portainer Stack ID used by portainer to identify the stack.

Example: `123`

### swarmID

This is the Portainer Swarm ID that the stack was deployed too.

Example: `wr8i8agdr05n6wsf1tkcnhwik`

### endpointID

This is the Portainer Endpoint ID the stack was deployed too.

If you did not specify an [endpoint](inputs.md#endpoint) input the action will
get the endpoints and use the first one (if multiple are returned).

Example: `1`

&nbsp;

::: tip
Please [let us know](../support.md) if you need more outputs.
:::
