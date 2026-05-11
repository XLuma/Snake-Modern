import { Texture } from 'pixi.js';

type InternalTexture = {
  src: string;
  id: string;
  texture: Texture;
};

type InternalTextureSlots = Map<string, InternalTexture>;
/**
 * This class stores instanciated references to every loaded asset.
 * It is used to avoid loading the same asset multiple times, and to provide a single source of truth for all loaded assets.
 */
export class TextureAtlas {
  private static instance: TextureAtlas;
  textures: InternalTextureSlots;
  size: number;

  private constructor() {
    this.textures = new Map();
    this.size = 0;
  }

  public static getInstance(): TextureAtlas {
    if (!TextureAtlas.instance) {
      TextureAtlas.instance = new TextureAtlas();
    }
    return TextureAtlas.instance;
  }

  public getTexture(src: string): Texture | null {
    const texture = this.textures.get(src);
    if (!texture) return null;
    return texture.texture;
  }
}
