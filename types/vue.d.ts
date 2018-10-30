import Vue, { ComponentOptions } from 'vue';
import { Bus } from './index';

declare module 'vue/types/vue' {
  interface Vue {
    $bus: Bus;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    bus?: Bus;
  }
}
