import type { AssetsBundle } from 'pixi.js';
import { Shampapple } from './shampapple';
import { Wolfberry } from './wolfberry';

const fruitBundle = [
  {
    alias: Shampapple.key,
    src: Shampapple.spritePath
  },
  {
    alias: Wolfberry.key,
    src: Wolfberry.spritePath
  }
];

export default fruitBundle;
