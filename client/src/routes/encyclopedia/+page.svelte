<script lang="ts">
  import FruitEntry from '$lib/components/fruits/fruit_entry.svelte';
  import * as PIXI from 'pixi.js';
  import { devicePixelRatio } from 'svelte/reactivity/window';
  import { Application, AssetsLoader, Container, Sprite, Text } from 'svelte-pixi';
  import FruitEntryBg from '$lib/assets/fruit_entry_bg.png';
  import NokiaCFFont from '$lib/fonts/nokiafc22.ttf';
  import _04b03Font from '$lib/fonts/04b03.ttf';
  import fruitBundle from '$lib/data/fruits/assetBundle';
  import FruitCard from '$lib/components/fruits/fruit_card.svelte';
  import { FruitEntity } from '$lib/domain/fruitEntity';
  import { Shampapple } from '$lib/data/fruits';
  import { FruitRegistry } from '$lib/domain/fruitRegistry';

  const initPromise = PIXI.Assets.init({
    skipDetections: true,
    texturePreference: {
      resolution: devicePixelRatio.current
    }
  });
  PIXI.TextureStyle.defaultOptions.scaleMode = 'nearest';

  //move this in the layout or somewhere more global
  PIXI.Assets.addBundle('fruitBundle', fruitBundle);
  PIXI.Assets.loadBundle('fruitBundle');
  const fruitRegistry = FruitRegistry.getInstance();
</script>

<div class="relative mx-auto my-0 block h-106 w-220 bg-red-500">
  {#await initPromise then}
    <Application width={880} height={424} autoDensity={true} backgroundColor={0xffffff}>
      <AssetsLoader assets={[FruitEntryBg, NokiaCFFont, _04b03Font]} />
      <Container label="fruit_entry_container">
        <FruitCard fruit={fruitRegistry.getFruit('wolfberry')} />
        <FruitCard pos_y={104} fruit={fruitRegistry.getFruit('shampapple')} />
      </Container>
      <Container x={442}>
        <Container x={0} y={0}>
          <FruitEntry />
          <Text
            text="hello"
            label="fruit_name"
            x={4}
            y={2}
            style={{ fontSize: 16, fontFamily: 'nokiafc22', fill: 'white' }}
          />
        </Container>
      </Container>
    </Application>
  {/await}
</div>
