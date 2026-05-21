<script lang="ts">
  import * as PIXI from 'pixi.js';
  import { Container } from 'svelte-pixi';
  import FruitEntry from './fruit_entry.svelte';
  import FruitName from './fruit_name.svelte';
  import FruitNumber from './fruit_number.svelte';
  import FruitStock from './fruit_stock.svelte';
  import FruitSprite from './fruit_sprite.svelte';
  import FruitStats from './fruit_stats.svelte';
  import type { FruitEntity } from '$lib/domain/fruitEntity';

  interface Props {
    fruit: FruitEntity;
    pos_y: number;
  }
  let { fruit, pos_y }: Props = $props();
</script>

<Container y={pos_y}>
  <FruitEntry />
  {#if fruit.level > 1}
    <FruitName key={fruit.key} />
  {:else}
    <FruitName key={'unknown'} />
  {/if}

  <FruitNumber rank={fruit.rank} />
  <FruitStock stock={fruit.stock} />
  <FruitSprite key={fruit.key} seen={fruit.level > 0} />
  <FruitStats
    lvl={fruit.level}
    fruit={{
      rank: fruit.rank,
      score: fruit.score,
      vitamin: fruit.vitamines,
      nutrition: fruit.calories,
      conservation: fruit.sta
    }}
    tags={fruit.tags}
  />
</Container>
