<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { FruitTag } from '$lib/types/fruitTags';
  import * as PIXI from 'pixi.js';
  import { Text, Container } from 'svelte-pixi';
  import { FruitEntity } from '$lib/domain/fruitEntity';

  interface Props {
    lvl: number;
    fruit: FruitEntity;
  }
  let { lvl, fruit }: Props = $props();

  function buildTagsString() {
    return fruit.tags.map((tag) => m[`fruit.tags.${tag}`]()).join(',');
  }
</script>

<Container x={80} y={20} label="fruit_data_label_container">
  {#if lvl >= 3}
    <Text
      text={`${m['fruits.props.score']()} :`}
      label="fruit_score"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
    />
    <Text
      text={`${m['fruits.props.vitamin']()} :`}
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
      text={`${m['fruits.props.nutrition']()} :`}
      y={28}
      label="fruit_nutrition"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
    />
    <Text
      text={`${m['fruits.props.conservation']()} :`}
      y={42}
      label="fruit_conservation"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#c7ff77' }}
    />
  {/if}
  {#if lvl >= 4}
    <Text
      text={buildTagsString()}
      y={58}
      label="fruit_tags"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: '#319202' }}
    />
  {/if}
</Container>
<Container label="fruit_stats_container" x={216} y={20}>
  {#if lvl >= 3}
    <Text
      text={`${fruit.getAverageScore()}`}
      label="fruit_score_value"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: 'white' }}
    />
    <Text
      text={`${fruit.vitamines} ${m['units.weight']()}`}
      y={14}
      label="fruit_vitamin_value"
      style={{
        align: 'center',
        fontSize: 16,
        fontFamily: '04b03',
        fill: 'white'
      }}
    />
    <Text
      text={`${fruit.calories} ${m['units.calories']()}`}
      y={28}
      label="fruit_nutrition_value"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: 'white' }}
    />
    <Text
      text={`${fruit.conservation} ${m['units.time']()}`}
      y={42}
      label="fruit_conservation_value"
      style={{ align: 'center', fontSize: 16, fontFamily: '04b03', fill: 'white' }}
    />
  {/if}
</Container>
