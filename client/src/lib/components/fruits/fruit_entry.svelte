<script lang="ts">
  import * as PIXI from 'pixi.js';
  import { Sprite, texture } from 'svelte-pixi';
  import FruitEntryBG from '$lib/assets/fruit_entry_bg.png';

  const fruitEntryBg = PIXI.Texture.from(FruitEntryBG); //base texture

  const fruitBg = new PIXI.Texture({
    source: fruitEntryBg.source,
    frame: new PIXI.Rectangle(0, 0, 219, 48)
  });
  //maybe move the above code to something else, to avoid regenerating the texture every time
</script>

<Sprite label="fruit" texture={fruitBg} x={0} y={0} scale={2}></Sprite>
