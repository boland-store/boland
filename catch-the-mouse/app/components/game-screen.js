'use strict';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: ['game-screen'],

  gameService: service(),

  points: alias('gameService.points'),
  time: alias('gameService.time'),
  pointsClass: computed('gameService.pointState', 'points', function() {
    const gameService = this.gameService;
    const pointState = gameService && gameService.pointState;
    const points = this.points;
    return 'points-' + ((points === 0) ? 'initial' : (pointState === 'increased' ? 'increased' : 'decreased'));
  }),
  pointsTimeClass: computed('time', function() {
    const gameService = this.gameService;
    const time = gameService && gameService.time;
    return 'points-timer-' + ((time < 6) ? 'warning' : 'ok');
  }),

  @action
  endGame() {
    const gameService = this.gameService;
    gameService && gameService.endGame();
  }
});
