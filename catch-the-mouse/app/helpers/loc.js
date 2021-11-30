import Helper from '@ember/component/helper'
import { inject as service } from '@ember/service';

export default Helper.extend({
  langService: service(),

  init() {
    this._super(...arguments);
    const langService = this.langService;
    langService && langService.subscribe(this, 'onLangChange');
  },

  willDestroy() {
    const langService = this.langService;
    langService && langService.unsubscribe(this, 'onLangChange');
  },

  onLangChange() {
    const langService = this.langService;
    const isLangSetup = langService && langService.isLangSetup;
    const lang = langService && langService.lang;
    const allTranslations = langService && langService.allTranslations;
    if (isLangSetup && lang && allTranslations && allTranslations.length > 0) {
      this.recompute();
    }
  },

  compute([text]) {
    const langService = this.langService;
    return langService && langService.loc(text);
  }
});
