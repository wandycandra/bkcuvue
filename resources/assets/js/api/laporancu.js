import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCu' ,{params: p});
  },

  indexCU: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCu/indexCU/' + id, {params: p});
  },

  indexPeriode: function( p, periode ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCu/indexPeriode/' + periode, {params: p});
  },

  getPeriode: function(){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCu/getPeriode');
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/laporanCu/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanCu/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/laporanCu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanCu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/laporanCu/' + id);
  }
}