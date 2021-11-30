'use strict';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default Component.extend({
  classNames: ['game-char'],

  gameService: service(),

  @tracked type: 'cat',
  @tracked name: 'cat-1',
  @tracked gate: undefined,
  @tracked allowedClick: false,

  mice: ['mouse-1', 'mouse-2', 'mouse-3'],
  cats: ['cat-1', 'cat-2', 'cat-3'],

  didInsertElement() {
    this._super(...arguments);
    const mice = this.mice ? this.mice : [];
    const cats = this.cats ? this.cats : [];
    this.type = cats.includes(this.name) ? 'cat' : 'mouse';
    this.getFreeGate();
  },

  setupGate() {
    const gate = this.gate;
    const gameService = this.gameService;
    const left = gate && gate.left;
    const bottom = gate && gate.bottom;
    const rotate = gate && gate.rotate;

    const animationTime = (Math.floor(Math.random() * 1250)) + 500;
    const element = this.element;
    const imageElement = element && element.getElementsByClassName('gs-char-image')[0];
    if (element && element.style) {
      element.style.left = left + '%';
      element.style.bottom = bottom + '%';
      element.style.transform = 'rotate(' + rotate + 'deg)';

      if (imageElement && imageElement.style) {
        imageElement.style.top = '0';
        imageElement.style.transitionDuration = (animationTime / 1000) + 's';
      }
      this.allowedClick = true;
    }
    // show char
    setTimeout(() => {
      // hide char
      const element = this.element;
      const imageElement = element && element.getElementsByClassName('gs-char-image')[0];
      if (imageElement && imageElement.style) {
        imageElement.style.top = '100%';
      }
      setTimeout(() => {
        this.unlockGate();
      }, (animationTime));
    }, (animationTime + 250));
  },

  getFreeGate() {
    const waitTime = (Math.floor(Math.random() * 4)) * 1000;
    const gameService = this.gameService;
    const element = this.element;
    if (element && element.style) {
      element.style.left = '100vw';
      element.style.bottom = '100vh';
    }
    setTimeout(() => {
      if (this.isDestroyed || this.isDestroying || !gameService || this.gate) {
        return;
      }
      this.gate = gameService.getFreeGate();
      if (!this.gate) {
        this.getFreeGate();
      }
      else {
        this.setupGate();
      }
    }, waitTime);
  },

  unlockGate() {
    const gate = this.gate;
    if (!gate) {
      return;
    }
    this.gate = undefined;
    const gameService = this.gameService;
    const isDestroying = this.isDestroyed || this.isDestroying;
    if (this.allowedClick && !isDestroying) {
      this.allowedClick = false;
    }
    gameService && gameService.unlockGate(gate);
    if (!isDestroying) {
      this.getFreeGate();
    }
  },

  @action
  handleClick() {
    if (this.allowedClick) {
      this.allowedClick = false;
    }
    else {
      return;
    }
    const element = this.element;
    const imageElement = element && element.getElementsByClassName('gs-char-image')[0];
    if (imageElement && imageElement.style) {
      imageElement.style.transitionDuration = '0.25s';
      imageElement.style.top = '100%';
    }
    const gameService = this.gameService;
    gameService && (this.type === 'mouse' && gameService.incrementPoints()) || this.type === 'cat' && gameService.decrementPoints();
  }
});
