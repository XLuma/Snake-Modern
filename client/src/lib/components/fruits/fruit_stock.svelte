<script lang="ts">
  import { Text } from 'svelte-pixi';

  let { stock } = $props();
</script>

<Text
  text={`${stock}`}
  label="fruit_stock_eaten"
  x={413}
  y={28}
  anchor={{ x: 0.5, y: 0.5 }}
  style={{
    align: 'center',
    fontSize: 16,
    fontFamily: 'nokiafc22',
    fill: 'white'
  }}
/>
