'use strict';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, action, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: ['board-screen'],

  gameService: service(),
  localStorageService: service(),

  confirmedDialog: false,
  user: '',

  records: [],

  points: alias('gameService.points'),
  isPlaying: alias('gameService.isPlaying'),

  showScore: computed('isPlaying', 'confirmedDialog', function() {
    const confirmedDialog = this.confirmedDialog;
    const isPlaying = this.isPlaying;
    return !confirmedDialog && isPlaying;
  }),

  didInsertElement() {
    this._super(...arguments);
    set(this, 'confirmedDialog', false);
    const localStorageService = this.localStorageService;
    const records = localStorageService && localStorageService.getCachedItem('records');
    if(records) {
      set(this, 'records', records);
    }
  },

  @action
  showBoard() {
    set(this, 'confirmedDialog', true);
  },

  @action
  saveScore() {
    const user = this.user ? this.user : '';
    const points = this.points;
    const newRecord = { user, points };
    let records = this.records ? this.records : [];
    records.pushObject(newRecord);
    records = records.sortBy('points');
    if (records.length > 5) {
      records = records.slice(records.length - 5);
    }
    records = records.reverse();
    const localStorageService = this.localStorageService;
    localStorageService && localStorageService.setCachedItem('records', records);
    set(this, 'records', records);
    set(this, 'confirmedDialog', true);
  },

  @action
  goHome() {
    const gameService = this.gameService;
    gameService && gameService.goHome();
  },

  @action
  resetCachedPoints() {
    const localStorageService = this.localStorageService;
    const records = [];
    localStorageService && localStorageService.setCachedItem('records', records);
    set(this, 'records', records);
  }
});
