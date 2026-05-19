<script lang="ts">
  import FruitEntry from '$lib/components/fruits/fruit_entry.svelte';
  import * as PIXI from 'pixi.js';
  import { devicePixelRatio } from 'svelte/reactivity/window';
  import { Application, AssetsLoader, Container, Sprite, Text } from 'svelte-pixi';
  import FruitEntryBg from '$lib/assets/fruit_entry_bg.png';
  import NokiaCFFont from '$lib/fonts/nokiafc22.ttf';
  import _04b03Font from '$lib/fonts/04b03.ttf';
  import fruitBundle from '$lib/data/fruits/assetBundle';

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
          <Text
            text="pomme shampoing"
            label="fruit_name"
            x={4}
            y={2}
            style={{ fontSize: 16, fontFamily: 'nokiafc22', fill: 'white' }}
          />
          <Text
            text="100"
            label="fruit_stock_eaten"
            x={413}
            y={28}
            anchor={0.5}
            style={{
              align: 'center',
              fontSize: 16,
              fontFamily: 'nokiafc22',
              fill: 'white'
            }}
          />
          <Sprite
            label="fruit_sprite_shadow"
            texture={PIXI.Texture.from('shampapple')}
            scale={2}
            x={22}
            y={35}
            filters={[colorMatrixFilter]}
          />
          <Sprite
            label="fruit_sprite"
            texture={PIXI.Texture.from('shampapple')}
            scale={2}
            x={18}
            y={31}
          />
          <Container x={80} y={18} label="fruit_data_label_container">
            <Text
              text="score :"
              label="fruit_score"
              style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
            />
            <Text
              text="vitamine :"
              y={14}
              label="fruit_vitamin"
              style={{
                align: 'center',
                fontSize: 16,
                fontFamily: '04b03',
                fill: '#c7ff77'
              }}
            />
            <Text
              text="nutrition :"
              y={28}
              label="fruit_nutrition"
              style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
            />
            <Text
              text="conservation :"
              y={42}
              label="fruit_conservation"
              style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
            />
            <Text
              text="rouge,feuille,sucre,pomme"
              y={59}
              label="fruit_tags"
              style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#319202' }}
            />
          </Container>
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
