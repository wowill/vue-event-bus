
class Bus {
  $emit (action, ...params) {
    if (!this[action]) {
      return
    }

    var args = [].slice.call(params, 0)
    var results = this[action].map(fn => fn.apply(this, args))
    return results.length > 1 ? results : results[0]
  }

  $on (action, fn) {
    if (!this[action]) {
      this[action] = [fn]
    } else {
      this[action].push(fn)
    }

    this.$id = this.$id || 0
    fn.$id = ++this.$id
    return fn.$id
  }

  $off (action, id) {
    if (!this[action]) {
      return
    }

    if (id) {
      this[action] = this[action].filter(fn => fn.$id !== id)
    } else {
      this[action] = null
    }
  }

  $subscribed (action) {
    return this[action] && this[action].length > 0
  }
}
var index = {
  Bus: Bus,
  install(Vue) {
    Vue.prototype.$bus = new Bus();
  },
};
export default index;
