<script lang="ts">
    const { data } = $props();
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
  </script>
  
  <Button href="/" variant="outline" >
	Home
  </Button>
  
  <h1 class="text-3xl font-semibold mb-4">
	{data.item.identification.label}
  </h1>
  
  {#if data.item.image}
	<img
	  src="{data.item.image.url}"
	  alt="{data.item.identification.label}"
	  class="max-w-lg mb-6 rounded shadow"
	/>
  {/if}
  
  <Table.Root>
   
    <Table.Header>
      <Table.Row>
        <Table.Head>Property</Table.Head>
        <Table.Head>Value</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each data.item.properties as prop}
        <Table.Row>
          <Table.Cell>{prop.label}</Table.Cell>
          <Table.Cell>{prop.values[0]?.content || ''}</Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>