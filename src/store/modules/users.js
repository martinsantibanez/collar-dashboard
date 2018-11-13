import Api from '@/utils/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    user: {}
  },
  getters: {
    user(state){
      return state.user;
    }
  },
  mutations: {
    setAllUsers(state, users){
      state.list = users;
    },
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    async getUsers({commit}){
      const response = await Api().get('users');
      commit('setAllUsers', response.data);
    },
    async addUser({commit}, newUser){
      await Api().post('users', newUser);
    },
    async editUser({commit}, editedUser){
      await Api().put('users/'+editedUser._id, editedUser);
    },
    async getUserById({commit}, id){
      const response = await Api().get('users/'+id);
      commit('setUser', response.data);
    },
    async deleteUser({commit, dispatch}, id){
      await Api().delete('users/'+id);
      dispatch('getUsers');
    },
  }
}