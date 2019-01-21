# vue-bus-ts typescript

Vue-bus-ts is a vue-event-bus plugin that supports typescript

## keywords

Vue-event-bus Vue-event Vue-event-bus-ts Vue-event-ts

## License

MIT License

## Install

```bash
npm i -S vue-bus-ts
```

## Usage

```bash
#main.ts

import Vue from 'vue';
import EventBus from 'vue-bus-ts';

Vue.use(EventBus);
var bus = new EventBus.Bus();

new Vue({
  bus,
  render: (h) => h(App),
}).$mount('#app');

```

> $on(action: string, fn: any): any

```bash
  #*.vue
  
  var eventId = this.$bus.$on('event_name', function (params: any) {
    // params is the parameter passed in by $emit
    // do something...
  })

```

> $emit(action: string, params?: any): any
```bash
  #*.vue
  // params can pass in any form of value, including Array, Object, String, Number, null, undefined or even array expansion items.or example, 

  var eventResult = this.$bus.$emit('event_name', params)
  
  1. var result = this.$bus.$emit('event_name', [1,2,3])
  2. var result = this.$bus.$emit('event_name', {})
  3. var result = this.$bus.$emit('event_name', 'string')
  4. let a = 1, b = 'test', c = [1, 2, 3], d = {a: 'test'}
     var result = this.$bus.$emit('event_name', a, b ,c, d)
  5. var result = this.$bus.$emit('event_name', null)
  6. var result = this.$bus.$emit('event_name')

```


> $off(action: string, id: number): void
```bash
  #*.vue

  this.$bus.$off('event_name', eventId)// To unbind event binding, eventId is the return value of this.$bus.$on 
```

> $subscribed(action: string): boolean
```bash
  #*.vue

  let result = this.$bus.$subscribed('event_name')
  if (result) {
    // do something...
  }
```
