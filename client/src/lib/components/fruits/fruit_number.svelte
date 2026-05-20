<script lang="ts">
  import { Text } from 'svelte-pixi';

  let { rank } = $props();
</script>

<Text
  label="fruit_no"
  text={`no.${rank + 1}`}
  x={382}
  y={28}
  anchor={{ x: 1, y: 0.5 }}
  style={{ align: 'right', fontSize: 16, fontFamily: '04b03', fill: '#319202' }}
/>
