import { createStore } from 'vuex';
import Service from '../services/commonService';
export default createStore({
  state: {
    categories:[],
    spent: 800,
    budget: 2000
  },
  getters: {
    getCategories(state){
      return state.categories;
    },
    getSpent(state){
      return state.spent;
    },
    getBudget(state){
      return state.budget;
    },
  },
  mutations: {
    setCategories(state, data){
      state.categories = data;
    },
    setSpent(state, data){
      state.spent = data;
    },
    setBudget(state, data){
      state.budget = data;
    },
  },
  actions: {
    fetchCategories({ commit }){
      return new Promise(resolve => {
        Service.getAll().then(categories=>{
          commit('setCategories', categories);
          resolve(categories);
        })
      });
    },
    updateCategories({ commit, state }, data){
      const updatedData = state.categories.map(c=>{
        if(c.name==data.name){
          c.spent += data.spent;
        }
        return c;
      })
      const newAmount = state.spent + data.spent;
      console.log("upadte", state.categories, updatedData);
      commit('setCategories', updatedData);
      commit('setSpent', newAmount);
    },
  },
  modules: {
  },
});
