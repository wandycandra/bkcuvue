export default {
  
  index: function( p ){
    return axios.get('/api/jalinanKlaim' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/jalinanKlaim/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get('/api/jalinanKlaim/create');
  },

  store: function ( form ){
    return axios.post('/api/jalinanKlaim/store', form);
  },

  edit: function( id ){
    return axios.get('/api/jalinanKlaim/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanKlaim/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/jalinanKlaim/' + id);
  },

  history: function(){
    return axios.get('/api/jalinanKlaim/history');
  },

  cariData: function( nik ){
    return axios.get('/api/jalinanKlaim/cariData/' + nik);
  },

}