<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class Artikel_Kategori extends Model {
    
    protected $table = 'artikel_kategori';
    
    public static $rules = [
        'id_cu' => 'required',
        'nama' => 'required',
        'deskripsi' => 'required|min:5'
    ];
    
    protected $fillable = ['id_cu','nama','deskripsi'];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public function artikel(){
        return $this->hasMany('App\Artikel','id_artikel_kategori','id')
                    ->where('status','=','1')
                    ->orderBy('created_at','desc')
                    ->take(3);
    }

    public static function initialize(){
        return [
            'id_cu' => '0', 'nama' => '', 'deskripsi' => ''
        ];
    }

    public function hasartikel(){
        return $this->hasMany('App\Artikel','id_artikel_kategori','id');
    }
}