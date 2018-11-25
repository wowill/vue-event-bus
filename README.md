# vue-bus-ts typescript

Vue-bus-ts is a vue-event-bus plugin that supports typescripte

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

```bash

#*.vue 

var eventId = this.$bus.$on('event_name', function (params: any) => {
  // params is the parameter passed in by $emit
  // do something...
}) // return this event id


var eventResult = this.$bus.$emit('event_name', params)
/*
params can pass in any form of value, including Array, Object, String, Number, null, undefined or even array expansion items.or example, 
1. this.$bus.$emit('event_name', [1,2,3])
2. this.$bus.$emit('event_name', {})
3. this.$bus.$emit('event_name', 'string')
4. let a = 1, b = 'test', c = [1, 2, 3], d = {a: 'test'}
    this.$bus.$emit('event_name', a, b ,c, d)
5. this.$bus.$emit('event_name', null)
return this result from this event
*/


this.$bus.$off('event_name', eventId)// To unbind event binding, eventId is the return value of this.$bus.$on 

```

