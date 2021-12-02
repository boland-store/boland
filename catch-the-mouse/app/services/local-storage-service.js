import Service from '@ember/service';

export default Service.extend({
  general: ['lang'],

  getCachedItem(item) {
    let cachedItem;
    if(typeof localStorage !== undefined) {
      const boland = localStorage.getItem('boland');
      const parsedBoland = (boland && typeof boland === 'string') ? JSON.parse(boland) : boland;
      const general = this.general;
      if (general && general.length > 0 && general.includes(item)) {
        cachedItem = parsedBoland && parsedBoland[item];
      }
      if (!cachedItem) {
        cachedItem = parsedBoland && parsedBoland['catch-the-mouse'] && parsedBoland['catch-the-mouse'][item];
      }
    }
    return cachedItem;
  },

  setCachedItem(item, value) {
    if(typeof localStorage !== undefined) {
      const boland = localStorage.getItem('boland');
      let newBolandRecord = (boland && typeof boland === 'string') ? JSON.parse(boland) : boland;
      if (!newBolandRecord || typeof newBolandRecord === 'string') {
        newBolandRecord = {};
      }
      if (newBolandRecord && !newBolandRecord['catch-the-mouse']) {
        newBolandRecord['catch-the-mouse'] = {};
      }
      const general = this.general;
      if (general && general.length > 0 && general.includes(item)) {
        newBolandRecord[item] = value;
      }
      else {
        newBolandRecord['catch-the-mouse'][item] = value;
      }
      localStorage.setItem('boland',JSON.stringify(newBolandRecord));
    }
  }
})
