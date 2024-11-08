import { Howl } from 'howler';

export const mouseClik = () => {
  const s = new Howl({ src: ['/assets/click.mp3'], preload: true, volume: 1 });
  s.play();
};
