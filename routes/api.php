<?php

use Illuminate\Http\Request;

Route::group(['prefix'=>'v1','middleware'=>'auth:api'],function(){
// Route::group(['prefix'=>'v1'],function(){
    // user
    Route::get('/profile', 'UserController@getUser');
    Route::get('/userData', 'UserController@userData');
    Route::get('/user', 'UserController@index');
    Route::get('/user/indexCU/{id}', 'UserController@indexCU');
    Route::get('/user/create', 'UserController@create');
    Route::get('/user/edit/{id}', 'UserController@edit');
    Route::post('/user/store', 'UserController@store');
    Route::post('/user/update/{id}', 'UserController@update');
    Route::post('/user/updateStatus/{id}', 'UserController@updateStatus');
    Route::post('/user/resetPassword/{id}', 'UserController@resetPassword');

    // role
    Route::get('/role', 'RoleController@index');
    Route::get('/role_all', 'RoleController@indexAll');
    Route::get('/role_tipe/{tipe}', 'RoleController@indexTipe');
    Route::get('/role_permission/{id}', 'RoleController@indexPermission');
    Route::get('/role/create', 'RoleController@create');
    Route::get('/role/edit/{id}', 'RoleController@edit');
    Route::post('/role/store', 'RoleController@store');
    Route::post('/role/update/{id}', 'RoleController@update');

    //artikel
    Route::get('/artikel', 'ArtikelController@index');
    Route::get('/artikel/indexCU/{id}', 'ArtikelController@indexCU');
    Route::get('/artikel/create', 'ArtikelController@create');
    Route::get('/artikel/edit/{id}', 'ArtikelController@edit');
    Route::post('/artikel/store', 'ArtikelController@store');
    Route::post('/artikel/update/{id}', 'ArtikelController@update');
    Route::post('/artikel/updateTerbitkan/{id}', 'ArtikelController@updateTerbitkan');
    Route::post('/artikel/updateUtamakan/{id}', 'ArtikelController@updateUtamakan');
    Route::delete('/artikel/{id}', 'ArtikelController@destroy');

    //artikel kategori
    Route::get('/artikelKategori', 'ArtikelKategoriController@index');
    Route::get('/artikelKategori/indexAll', 'ArtikelKategoriController@indexAll');
    Route::get('/artikelKategori/indexCU/{id}', 'ArtikelKategoriController@indexCU');
    Route::get('/artikelKategori/cu/{id}', 'ArtikelKategoriController@getCU');
    Route::get('/artikelKategori/create', 'ArtikelKategoriController@create');
    Route::get('/artikelKategori/edit/{id}', 'ArtikelKategoriController@edit');
    Route::post('/artikelKategori/store', 'ArtikelKategoriController@store');
    Route::post('/artikelKategori/update/{id}', 'ArtikelKategoriController@update');
    Route::delete('/artikelKategori/{id}', 'ArtikelKategoriController@destroy');

    //artikel penulis
    Route::get('/artikelPenulis', 'ArtikelPenulisController@index');
    Route::get('/artikelPenulis/indexAll', 'ArtikelPenulisController@indexAll');
    Route::get('/artikelPenulis/indexCU/{id}', 'ArtikelPenulisController@indexCU');
    Route::get('/artikelPenulis/cu/{id}', 'ArtikelPenulisController@getCU');
    Route::get('/artikelPenulis/create', 'ArtikelPenulisController@create');
    Route::get('/artikelPenulis/edit/{id}', 'ArtikelPenulisController@edit');
    Route::post('/artikelPenulis/store', 'ArtikelPenulisController@store');
    Route::post('/artikelPenulis/update/{id}', 'ArtikelPenulisController@update');
    Route::delete('/artikelPenulis/{id}', 'ArtikelPenulisController@destroy');

    // cu
    Route::group(['middleware' => ['permission:index cu']], function () {
        Route::get('/cu', 'CUController@index');
        Route::get('/cu/indexAll', 'CUController@indexAll');
        Route::get('/cu/pus/{id}', 'CUController@indexPus');
    });
    Route::group(['middleware' => ['permission:create cu']], function () {
        Route::get('/cu/create', 'CUController@create');
        Route::post('/cu/store', 'CUController@store');
    });
    Route::group(['middleware' => ['permission:update cu']], function () {
        Route::get('/cu/edit/{id}', 'CUController@edit');
        Route::post('/cu/update/{id}', 'CUController@update');
    });
    // Route::group(['middleware' => ['permission:destroy cu']], function () {
    //     Route::delete('/cu/{id}', 'CUController@destroy');
    // });

    // puskopdit
    Route::get('/pus', 'PusController@index');
    Route::get('/pus_all', 'PusController@indexAll');
    Route::post('/pus/store', 'PusController@store');

    //provinces
    Route::get('/provinces', 'ProvincesController@index');
    Route::get('/provinces/indexAll', 'ProvincesController@indexAll');
    Route::get('/provinces/create', 'ProvincesController@create');
    Route::get('/provinces/edit/{id}', 'ProvincesController@edit');
    Route::post('/provinces/store', 'ProvincesController@store');
    Route::post('/provinces/update/{id}', 'ProvincesController@update');
    Route::delete('/provinces/{id}', 'ProvincesController@destroy');

    //regencies
    Route::get('/regencies', 'RegenciesController@index');
    Route::get('/regencies/indexAll', 'RegenciesController@indexAll');
    Route::get('/regencies/indexProvinces/{id}', 'RegenciesController@indexProvinces');
    Route::get('/regencies/provinces/{id}', 'RegenciesController@getProvinces');
    Route::get('/regencies/create', 'RegenciesController@create');
    Route::get('/regencies/edit/{id}', 'RegenciesController@edit');
    Route::post('/regencies/store', 'RegenciesController@store');
    Route::post('/regencies/update/{id}', 'RegenciesController@update');
    Route::delete('/regencies/{id}', 'RegenciesController@destroy');

    //districts
    Route::get('/districts', 'DistrictsController@index');
    Route::get('/districts/indexAll', 'DistrictsController@indexAll');
    Route::get('/districts/indexRegencies/{id}', 'DistrictsController@indexRegencies');
    Route::get('/districts/regencies/{id}', 'DistrictsController@getRegencies');
    Route::get('/districts/create', 'DistrictsController@create');
    Route::get('/districts/edit/{id}', 'DistrictsController@edit');
    Route::post('/districts/store', 'DistrictsController@store');
    Route::post('/districts/update/{id}', 'DistrictsController@update');
    Route::delete('/districts/{id}', 'DistrictsController@destroy');

    //villages
    Route::get('/villages', 'VillagesController@index');
    Route::get('/villages/indexAll', 'VillagesController@indexAll');
    Route::get('/villages/indexDistricts/{id}', 'VillagesController@indexDistricts');
    Route::get('/villages/districts/{id}', 'VillagesController@getDistricts');
    Route::get('/villages/create', 'VillagesController@create');
    Route::get('/villages/edit/{id}', 'VillagesController@edit');
    Route::post('/villages/store', 'VillagesController@store');
    Route::post('/villages/update/{id}', 'VillagesController@update');
    Route::delete('/villages/{id}', 'VillagesController@destroy');
});

// Route::resource('artikel', 'ArtikelController');



