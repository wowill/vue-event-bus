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

var eventId = this.$bus.$on('event_name', 'callback_function') // return this event id

var eventResult = this.$bus.$emit('event_name', params) // return this result from this event

this.$bus.$on('event_name', 'callback_function') // return to unbind event binding

```

