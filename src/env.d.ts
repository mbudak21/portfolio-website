/// <reference types="astro/client" />
/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    Background3D: {
      getSpeedx(): number;
      setSpeedx(spd: number): void;
      getSpeedy(): number;
      setSpeedy(spd: number): void;
      setColor(hex: import('three').ColorRepresentation): void;
    };
  }
}
