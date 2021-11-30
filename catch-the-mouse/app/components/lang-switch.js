'use strict';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

export default class extends Component {
  classNames = ['lang-switch'];

  @service langService;

  @alias('langService.lang') lang;
  @alias('langService.langs') langs;

  @action
  switchLang(lang) {
    const langService = this.langService;
    lang && langService && langService.setupLang(lang);
  }
}
