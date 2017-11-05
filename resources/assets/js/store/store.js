import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
	 state: {

	 },
	 getters,
	 mutations,
	 actions,
	 modules: {
	 	modal
	 }
});