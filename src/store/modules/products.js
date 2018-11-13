import Api from '@/utils/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    product: {}
  },
  getters: {
    availableIngredients(state, getters, rootState){
      let rcp = getters.product.recipe;
      if(rcp)
       return _.differenceBy(rootState.ingredients.list, getters.product.recipe.map(i => i.ingredient), '_id');
      else
        return rootState.ingredients.list;
    },
    product(state){
      return state.product;
    }
  },
  mutations: {
    setAllProducts(state, products){
      state.list = products;
    },
    setProduct(state, product){
      state.product = product;
    },
  },
  actions: {
    async getProducts({commit}){
      const response = await Api().get('products');
      commit('setAllProducts', response.data);
    },
    async addProduct({commit}, newProduct){
      await Api().post('products', newProduct);
    },
    async getProductById({commit}, id){
      const response = await Api().get('products/'+id);
      commit('setProduct', response.data);
    },
    async editProduct({commit}, editedProduct){
      await Api().put('products/'+editedProduct._id, editedProduct);
    },
    async deleteProduct({commit, dispatch}, id){
      await Api().delete('products/'+id);
      dispatch('getProducts');
    },
    async addIngredientToRecipe({commit, dispatch, state}, payload){
      const response = await Api().post('products/'+state.product._id+'/recipe', payload);
      // console.log(response.data);
      commit('setProduct', response.data);
    },
    async removeIngredientFromRecipe({commit, dispatch, state}, id){
      const response = await Api().delete('products/'+state.product._id+'/recipe/'+id);
      commit('setProduct', response.data);
    }
  }
}