'use strict';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AppRoute extends Route {
  @service langService;

  beforeModel() {
    const langService = this.langService;
    langService && langService.setupLang();
  }
}
