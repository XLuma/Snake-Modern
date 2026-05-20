<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Text } from 'svelte-pixi';

  let { key } = $props();
</script>

<Text
  text={m[`fruit.names.${key}`]()}
  label="fruit_name"
  x={4}
  y={2}
  style={{ fontSize: 16, fontFamily: 'nokiafc22', fill: 'white' }}
/>
