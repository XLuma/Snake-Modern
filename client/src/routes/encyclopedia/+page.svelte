<script lang="ts">
  import FruitEntry from '$lib/components/fruits/fruit_entry.svelte';
  import * as PIXI from 'pixi.js';
  import { devicePixelRatio } from 'svelte/reactivity/window';
  import { Application, AssetsLoader, Container, Sprite, Text } from 'svelte-pixi';
  import FruitEntryBg from '$lib/assets/fruit_entry_bg.png';
  import NokiaCFFont from '$lib/fonts/nokiafc22.ttf';
  import _04b03Font from '$lib/fonts/04b03.ttf';
  import fruitBundle from '$lib/data/fruits/assetBundle';
  import FruitName from '$lib/components/fruits/fruit_name.svelte';
  import FruitNumber from '$lib/components/fruits/fruit_number.svelte';
  import FruitStock from '$lib/components/fruits/fruit_stock.svelte';
  import FruitSprite from '$lib/components/fruits/fruit_sprite.svelte';
  import FruitStats from '$lib/components/fruits/fruit_stats.svelte';
  import { m } from '$lib/paraglide/messages';
  import { FruitTag } from '$lib/types/fruitTags';

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

<div class="relative mx-auto my-0 block h-106 w-220 bg-red-500">
  {#await initPromise then}
    <Application width={880} height={424} autoDensity={true} backgroundColor={0xffffff}>
      <AssetsLoader assets={[FruitEntryBg, NokiaCFFont, _04b03Font]} />
      <Container label="fruit_entry_container">
        <Container x={0} y={0}>
          <FruitEntry />
          <FruitName key="shampapple" />
          <FruitNumber rank={5} />
          <FruitStock stock={20} />
          <FruitSprite key="shampapple" seen={true} />
          <FruitStats
            lvl={1}
            fruit={{
              rank: 5,
              score: 8,
              vitamin: 20,
              nutrition: 10,
              conservation: 10
            }}
            tags={[FruitTag.Red, FruitTag.Leaf, FruitTag.Sugar, FruitTag.Apple]}
          />
        </Container>
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
