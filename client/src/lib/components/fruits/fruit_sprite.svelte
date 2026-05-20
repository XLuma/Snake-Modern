<script lang="ts">
  import * as PIXI from 'pixi.js';
  import { Sprite } from 'svelte-pixi';

  let { key, seen } = $props();

  const colorMatrixFilter = new PIXI.ColorMatrixFilter();
  //original game does a total replacement with color 0x52B31E
  colorMatrixFilter.matrix = [
    0,
    0,
    0,
    0,
    0x52 / 255,
    0,
    0,
    0,
    0,
    0xb3 / 255,
    0,
    0,
    0,
    0,
    0x1e / 255,
    0,
    0,
    0,
    1,
    0
  ];
</script>

{#if seen}
  <Sprite
    label="fruit_sprite_shadow"
    texture={PIXI.Texture.from(key)}
    scale={2}
    x={22}
    y={35}
    filters={[colorMatrixFilter]}
  />
{/if}
<Sprite
  label="fruit_sprite"
  texture={PIXI.Texture.from(key)}
  scale={2}
  x={18}
  y={31}
  filters={!seen ? [colorMatrixFilter] : []}
/>
