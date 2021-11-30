'use strict';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class extends Component {
  classNames = ['main-screen'];

  @service gameService;

  @alias('gameService.gameScreen') gameScreen;
  @alias('gameService.boardScreen') boardScreen;

  @action
  startGame() {
    const gameService = this.gameService;
    gameService && gameService.startGame();
  }
}
