import _Vue from 'vue'; // <-- notice the changed import
import "./vue";

export declare class Bus {
  $on(action: string, fn: any): void;
  $emit(action: string): any;
  $off(action: string, id: number): void;
  $subscribed(action: string): any;
}

export declare function install(Vue: typeof _Vue): void;

declare const _default: {
  Bus: typeof Bus;
  install: typeof install;
};

export default _default;
