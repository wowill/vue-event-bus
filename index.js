
class Bus {

  /**
   * To run the callback function of the event name 'action' binding
   * @param {string} action event name
   * @param  {any} params 
   * @returns {any} event execution result
   */
  $emit (action, ...params) {
    if (!this[action]) {
      return
    }

    var args = [].slice.call(params, 0)
    var results = this[action].map(fn => fn.apply(this, args))
    return results.length > 1 ? results : results[0]
  }

  /**
   * To bind the callback function to an event named 'action'
   * @param {string} action event name
   * @param {any} fn callback function
   * @returns {number} event id
   */
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

  /**
   * To unbind the event corresponding to the 'id'
   * @param {string} action event name
   * @param {number} id 
   * @returns {void}
   */
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

  /**
   * To determine whether the event named 'action' is bound.
   * @param {string} action event name
   * @returns {boolean} If the value is true, the event named 'actoin' is already bound to the callback function. vice versa.
   */
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
