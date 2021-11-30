import Ember from 'ember';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

const IS_LANG_CHANGED = 'is-lang-changed';

export default Service.extend(Evented, {
  langs: ['en', 'sk'],

  localStorageService: service(),

  @tracked lang: 'en',
  @tracked isLangSetup: false,
  @tracked allTranslations: {},

  onLangChanged() {
    this.trigger(IS_LANG_CHANGED);
  },

  subscribe(object, functionName) {
    this.on(IS_LANG_CHANGED, object, functionName);
  },

  unsubscribe(object, functionName) {
    this.off(IS_LANG_CHANGED, object, functionName);
  },

  setupLang(lang) {
    const localStorageService = this.localStorageService;
    if (!this.isLangSetup) {
      if (!lang) {
        lang = localStorageService && localStorageService.getCachedItem('lang');
      }
      if (!lang) {
        lang = 'en';
      }
      const langs = this.langs;
      const langsCount = langs && langs.length;
      langs && langs.length > 0 && langs.forEach(l => {
        const translation = this.getJSON((location.href.includes('catch-the-mouse') ? (location.href + 'lang') : '/lang') + '/strings_' + l + '.json').then(t => {
          const allTranslations = this.allTranslations;
          if (isEmpty(allTranslations)) {
            allTranslations = {};
          }
          allTranslations[l] = t;
          this.allTranslations = allTranslations;
          if (l === this.lang) {
            this.onLangChanged();
          }
        });
      });
      this.isLangSetup = true;
    }
    if (this.lang !== lang) {
      this.lang = lang;
      localStorageService && localStorageService.setCachedItem('lang', lang);
      this.onLangChanged();
    }
  },

  getJSON(url) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = (req) => {
        const state = req && (req.target || req.currentTarget);
        if (state.readyState === state.DONE) {
          if (state.status === 200) {
            typeof(state.response) === "string" ? resolve(JSON.parse(state.response.replace(/[\r\n]/g, ''))) : resolve(state.response);
          } else {
            reject(state.status);
          }
        }
      };
      xhr.responseType = 'text';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();
    });
  },

  loc(text) {
    const lang = this.lang;
    const curTranslations = this.allTranslations;
    const allTranslations = isEmpty(curTranslations) ? {} : curTranslations;
    let translation = allTranslations[lang];
    if (!translation && lang !== 'en') {
      translation = allTranslations['en'];
    }
    const transaltedText = translation && translation[text];
    return transaltedText ? transaltedText : '';
  }
})
