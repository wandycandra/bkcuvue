import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/create');
  },

  createPekerjaan: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createPekerjaan');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/store', form);
  },

  savePekerjaan: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/savePekerjaan/' + id, form);
  },

  indexPekerjaan: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexPekerjaan/' + id);
  },

  editIdentitas: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/' + id);
  },

  destroyPekerjaan: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/pekerjaan/' + id);
  }
}