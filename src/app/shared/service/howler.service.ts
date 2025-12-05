import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root', // Singleton pour toute l'application
})
export class HowlerService {
  private sound: Howl;
  private tickingSound: Howl;
  private drumSound: Howl;
  private resultSound: Howl;

  constructor() {
    this.sound = new Howl({
      src: [
        '/assets/djedje.mp3',
        '/assets/kids.mp3',
        '/assets/arcade.mp3',
        '/assets/opener.mp3',
      ],
      autoplay: false,
      loop: true,
      volume: 0.5,
      html5: true,
      preload: true,
    });

    this.tickingSound = new Howl({
      src: ['/assets/tiking.mp3'],
      autoplay: false,
      volume: 0.2,
      html5: true,
      preload: true,
    });

    this.drumSound = new Howl({
      src: ['/assets/drum.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.2,
      html5: true,
      preload: true,
    });

    this.resultSound = new Howl({
      src: ['/assets/victory.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.8,
      html5: true,
      preload: true,
    });
  }

  playMainSound() {
    if (!this.sound.playing()) {
      this.sound.play();
    }
  }

  stopMainSound() {
    if (this.sound.playing()) {
      this.sound.stop();
    }
  }

  // toggleSound() {
  //   if (!this.sound.playing()) {
  //     this.sound.play();
  //   } else {
  //     this.sound.pause();
  //   }
  // }

  toggleTickingSound() {
    if (!this.tickingSound.playing()) {
      this.tickingSound.play();
    } else {
      this.tickingSound.pause();
    }
  }

  toggleDrumSound() {
    if (!this.drumSound.playing()) {
      this.drumSound.play();
    } else {
      this.drumSound.pause();
    }
  }

  toggleResultSound() {
    if (!this.resultSound.playing()) {
      this.resultSound.play();
    } else {
      this.resultSound.pause();
    }
  }
}
