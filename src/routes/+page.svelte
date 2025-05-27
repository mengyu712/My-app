<script lang="ts">
    const { data } = $props();
  
    import * as Table from "$lib/components/ui/table/index.js";
    import { MapLibre, DefaultMarker } from 'svelte-maplibre';
  </script>
    <MapLibre
    class="map h-[500px] w-full mt-8"
    standardControls={true}
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  >
    {#each data.items as item}
      {#if item.coordinates}
        <DefaultMarker
          lngLat={{ lng: item.coordinates.longitude, lat: item.coordinates.latitude }}
        />
      {/if}
    {/each}
  </MapLibre>

  <style>
    :global(.map) {
      height: 500px;
    }
  </style>
  <Table.Root>
    <Table.Caption>Spatial Units</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Name</Table.Head>
        {#each data.propertyLabels as label}
          <Table.Head>{label}</Table.Head>
        {/each}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each data.items as item}
        <Table.Row>
          <Table.Cell>
            <a href="/{item.uuid}" >
              {item.identification.label}
            </a>
          </Table.Cell>
          {#each data.propertyLabels as label}
            <Table.Cell>{item.properties.find(p => p.label === label)?.values?.[0]?.content || ''}</Table.Cell>
          {/each}
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
  
