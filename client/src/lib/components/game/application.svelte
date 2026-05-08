<script lang="ts">
  import { Application, Text, Sprite, AssetsLoader } from 'svelte-pixi';
  import * as FILTERS from 'pixi-filters';
  import { devicePixelRatio } from 'svelte/reactivity/window';
  import * as PIXI from 'pixi.js';
  import BrowserBMP from '$lib/assets/browser.png';
  import BrowserFront from '$lib/assets/browser_front.png';

  const initPromise = PIXI.Assets.init({
    skipDetections: true,
    texturePreference: {
      resolution: devicePixelRatio.current
    }
  });
  PIXI.TextureStyle.defaultOptions.scaleMode = 'nearest';
</script>

{#await initPromise then}
  <Application width={800} height={420} autoDensity={true}>
    <AssetsLoader assets={[BrowserBMP, BrowserFront]}>
      <Sprite label="browser" texture={PIXI.Texture.from(BrowserBMP)} x={0} y={0} scale={2} />
      <Sprite
        label="browserFront"
        texture={PIXI.Texture.from(BrowserFront)}
        x={0}
        y={0}
        scale={2}
      />
    </AssetsLoader>
  </Application>
{/await}
