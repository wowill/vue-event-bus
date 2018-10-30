import _Vue from 'vue'

class EventBus {

  private $id!: number;
  [index: string]: any;

  public $on(action: string, fn: any): void {
    if (!this[action]) {
      this[action] = [fn];
    } else {
      this[action].push(fn);
    }

    this.$id = this.$id || 0;
    fn.$id = ++this.$id;
    return fn.$id;
  }

  public $emit(action: string): any {
    if (!this[action]) {
      return;
    }

    const args = [].slice.call(arguments, 1);
    const results = this[action].map((fn: any) => fn.apply(this, args));
    return results.length > 1 ? results : results[0];
  }

  public $off(action: string, id: number): void {
    if (!this[action]) {
      return;
    }

    if (id) {
      this[action] = this[action].filter((fn: any) => fn.$id !== id);
    } else {
      this[action] = null;
    }
  }

  public $subscribed(action: string): any {
    return this[action] && this[action].length > 0;
  }
}

export default BusPlugin = {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$bus = new EventBus();
  },
};
