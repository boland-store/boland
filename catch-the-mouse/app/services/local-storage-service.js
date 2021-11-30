import Service from '@ember/service';

export default Service.extend({
  getCachedItem(item) {
    let cachedItem;
    if(typeof localStorage !== undefined) {
      const boland = localStorage.getItem('boland');
      const parsedBoland = (boland && typeof boland === 'string') ? JSON.parse(boland) : boland;
      cachedItem = parsedBoland && parsedBoland['catch-the-mouse'] && parsedBoland['catch-the-mouse'][item];
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
      newBolandRecord['catch-the-mouse'][item] = value;
      localStorage.setItem('boland',JSON.stringify(newBolandRecord));
    }
  }
})
