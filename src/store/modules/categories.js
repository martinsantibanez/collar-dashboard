import Api from '@/utils/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    category: {},
  },
  getters: {
    availableProducts (state, getters, rootState){
      return _.differenceBy(rootState.products.list, state.category.products, '_id');
    }
  },
  mutations: {
    setAllCategories(state, category){
      state.list = category;
    },
    setCategory(state, category){
      state.category = category;
    }
  },
  actions: {
    async getCategories({commit}){
      const response = await Api().get('categories');
      commit('setAllCategories', response.data);
    },
    async addCategory({commit}, newCategory){
      await Api().post('categories', newCategory);
    },
    async getCategoryById({commit}, id){
      const response = await Api().get('categories/'+id);
      commit('setCategory', response.data);
    },
    async editCategory({commit}, editedCategory){
      await Api().put('categories/'+editedCategory._id, editedCategory);
    },
    async deleteCategory({commit, dispatch}, id){
      await Api().delete('categories/'+id);
      dispatch('getCategories');
    },
    async addProductToCategory({commit, dispatch, state}, product_id){
      const response = await Api().post('categories/'+state.category._id+'/products', { id: product_id });
      commit('setCategory', response.data);
    },
    async removeProductFromCategory({commit, dispatch, state}, product_id){
      const response = await Api().delete('categories/'+state.category._id+'/products/'+product_id);
      commit('setCategory', response.data);
    }
  }
}