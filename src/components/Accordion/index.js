import Accordion from './Accordion'
import { usePlugin, installPlugin } from './../../utils'

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Accordion);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Accordion,
};
