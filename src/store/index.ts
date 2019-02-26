import Vuex, { StoreOptions } from 'vuex';
import Vue from 'vue';
import { colors } from './colors/colors.module';


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    colors
  }
};

export default new Vuex.Store<RootState>(store);
