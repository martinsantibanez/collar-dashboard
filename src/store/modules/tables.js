import Api from '@/utils/Api';

export default {
  namespaced: true,
  state: {
    list: [],
    table: {}
  },
  getters: {
    usersWithTables(state, getters, rootState){
      return rootState.users.list;
    }
  },
  mutations: {
    setAllTables(state, tables){
      state.list = tables;
    },
    setTable(state, table){
      state.table = table;
    }
  },
  actions: {
    async getTables({commit}){
      const response = await Api().get('tables');
      commit('setAllTables', response.data);
    },
    async addTable({commit}, newTable){
      await Api().post('tables', newTable);
    },
    async getTableById({commit}, id){
      const response = await Api().get('tables/'+id);
      commit('setTable', response.data);
    },
    async editTable({commit}, editedTable){
      await Api().put('tables/'+editedTable._id, editedTable);
    },
    async deleteTable({commit, dispatch}, id){
      await Api().delete('tables/'+id);
      dispatch('getTables');
    }
  }
}