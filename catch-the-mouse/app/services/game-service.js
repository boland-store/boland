import Ember from 'ember';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { tracked } from '@glimmer/tracking';

const IS_POINT_CHANGED = 'is-point-changed';

export default Service.extend(Evented, {
  @tracked points: 0,
  @tracked time: 30,
  @tracked pointState: undefined,
  @tracked isPlaying: false,
  @tracked gameScreen: false,
  @tracked boardScreen: false,
  @tracked gates: [
    {left: -5, bottom: 37, rotate: 299, occupied: false},
    {left: 16, bottom: 1,  rotate: 0, occupied: false},
    {left: 20, bottom: 35, rotate: 232, occupied: false},
    {left: 23, bottom: 82, rotate: 0, occupied: false},
    {left: 40, bottom: 53, rotate: 19, occupied: false},
    {left: 48, bottom: -5, rotate: 180, occupied: false},
    {left: 58, bottom: 36, rotate: 12, occupied: false},
    {left: 57, bottom: 42, rotate: 196, occupied: false},
    {left: 76, bottom: 6, rotate: 135, occupied: false},
    {left: 80, bottom: 55, rotate: 45, occupied: false},
  ],

  onPointChanged() {
    this.trigger(IS_POINT_CHANGED);
  },

  subscribe(object, functionName) {
    this.on(IS_POINT_CHANGED, object, functionName);
  },

  unsubscribe(object, functionName) {
    this.off(IS_POINT_CHANGED, object, functionName);
  },

  incrementPoints() {
    this.points = (this.points ? this.points : 0) + 1;
    this.pointState = 'increased';
  },

  decrementPoints() {
    this.points = ((this.points > 1) ? this.points : 1) - 1;
    this.pointState = 'decreased';
  },

  resetPoints() {
    this.points = 0;
  },

  resetTime() {
    this.time = 30;
  },

  handleTimer() {
    setTimeout(() => {
      if (this.isDestroyed || this.isDestroying || !this.gameScreen) {
        return;
      }
      this.time = this.time - 1;
      if (this.time < 1) {
        this.endGame();
      }
      else {
        this.handleTimer();
      }
    }, 1000);
  },

  getFreeGate() {
    const gates = this.gates;
    const freeGates = gates && gates.length > 0 && gates.filterBy('occupied', false);
    const freeGateIndex = freeGates && freeGates.length > 0 && Math.floor(Math.random() * freeGates.length);
    if (freeGateIndex && freeGates[freeGateIndex]) {
      freeGates[freeGateIndex].occupied = true;
    }
    return freeGateIndex && freeGates[freeGateIndex];
  },

  unlockGate(gate) {
    if (gate && gate.occupied) {
      gate.occupied = false;
    }
  },

  startGame() {
    this.isPlaying = true;
    this.gameScreen = true;
    this.resetPoints();
    this.resetTime();
    this.handleTimer();
  },

  endGame() {
    this.gameScreen = false;
    this.boardScreen = true;
  },

  goHome() {
    this.isPlaying = false;
    this.boardScreen = false;
    this.gameScreen = false;
  }
})
