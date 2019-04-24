<?php
namespace App\Http\Controllers;

use DB;
use Auth;
use File;
use Image;
use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaCuKlaim;
use App\Support\Helper;
use App\AnggotaProdukCu;
use Illuminate\Http\Request;
use Venturecraft\Revisionable\Revision;
use App\Imports\AnggotaCuNewDraftImport;

class AnggotaCuController extends Controller{

	protected $message = "Anggota CU";

	public function index()
	{
		$table_data = AnggotaCu::with('anggota_cu','Villages','Districts','Regencies','Provinces')->advancedFilter();

		return response()
		->json([
			'model' => $table_data
		]);
	}

	public function indexCu($id)
	{
		$table_data = AnggotaCu::with('anggota_cu','Villages','Districts','Regencies','Provinces')->whereHas('anggota_cu', function($query) use ($id){ 
			$query->where('cu_id',$id); 
		})->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function indexKlaim()
	{
		$table_data = AnggotaCuKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->advancedFilter();

		return response()
			->json([
				'model' => $table_data
			]);
	}

	public function create()
	{
		return response()
			->json([
					'form' => AnggotaCu::initialize(),
					'rules' => AnggotaCu::$rules,
					'option' => []
			]);
	}

	public function createKlaim()
	{
		return response()
			->json([
					'form' => AnggotaCuKlaim::initialize(),
					'rules' => AnggotaCuKlaim::$rules,
					'option' => []
			]);
	}

	public function store(Request $request)
	{
		$this->validate($request,AnggotaCu::$rules);

		$name = $request->name;

		$kelas = AnggotaCu::create($request->all());

		$this->syncCu($request, $kelas);

		$this->syncProdukCu($request, $kelas);
		
		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil ditambah',
				'id' => $kelas->id
			]);	
	}

	public function storeCu(Request $request, $id)
	{
		AnggotaCuCu::create([
			'anggota_cu_id' => $id,
			'cu_id' => $request->cu['id'],
			'no_ba' => $request->no_ba,
			'tanggal_masuk' => $request->tanggal_masuk
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Keanggotaan CU berhasil ditambah'
			]);	
	}

	public function storeProduk(Request $request, $id)
	{
		// return response()->json($id);

		AnggotaProdukCu::create([
			'anggota_cu_id' => $id,
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'lama_pinjaman' => $request->lama_pinjaman,
		]);
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil ditambah'
			]);	
	}

	public function storeKlaim(Request $request, $id)
	{
		AnggotaCuKlaim::create($request->all());
		
		return response()
			->json([
				'saved' => true,
				'message' => 'Klaim anggota CU berhasil ditambah'
			]);	
	}


	public function edit($id)
	{
		$kelas = AnggotaCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function editKlaim($id)
	{
		$kelas = AnggotaCuKlaim::with('anggota_cu','anggota_cu.Villages','anggota_cu.Districts','anggota_cu.Regencies','anggota_cu.Provinces')->findOrFail($id);

		return response()
			->json([
					'form' => $kelas,
					'option' => []
			]);
	}

	public function update(Request $request, $id)
	{
		$this->validate($request, AnggotaCu::$rules);

		$name = $request->name;

		$kelas = AnggotaCu::findOrFail($id);

		$kelas->update($request->all());	

		$this->syncCu($request, $kelas);

		if($request->simpanan || $request->pinjaman){
			$this->syncProdukCu($request, $kelas);
		}

		return response()
			->json([
				'saved' => true,
				'message' => $this->message. ' ' .$name. ' berhasil diubah'
			]);
	}

	public function updateCu(Request $request, $id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Keanggotaan CU berhasil diubah'
			]);
	}

	public function updateProduk(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		$kelas->update([
			'produk_cu_id' => $request->produk_cu['id'],
			'saldo' => $request->saldo,
			'no_rek' => $request->no_rek,
			'tanggal' => $request->tanggal,
			'lama_pinjaman' => $request->lama_pinjaman,
		]);	

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota CU berhasil diubah'
			]);
	}

	public function updateSaldo(Request $request, $id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Produk anggota berhasil diubah'
			]);
	}

	public function updateKlaim(Request $request, $id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);

		$kelas->update($request->all());	

		return response()
			->json([
				'saved' => true,
				'message' => 'Klaim anggota CU berhasil diubah'
			]);
	}

	public function updateKlaimStatus(Request $request, $id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);

		$kelas->status_klaim = $request->status_klaim;

		$anggota_cu_id = $kelas->anggota_cu_id;
		$tipe = $kelas->tipe;

		if($kelas->status_klaim == 1){
			$message = "Klaim JALINAN dicairkan";
		}else if($kelas->status_klaim == 2){
			$message = "Klaim JALINAN ditolak";
		}else if($kelas->status_klaim == 0){
			$message = "Klaim pending";
		}

		$kelas->update();

		$kelas2 = AnggotaCu::findOrFail($anggota_cu_id);

		if($request->status_klaim == 1){
			$kelas2->status_jalinan = $tipe;
		}else{
			$kelas2->status_jalinan = '';
		}

		$kelas2->update();

		return response()
			->json([
				'saved' => true,
				'message' => $message
			]);
	}

	public function destroy($id)
	{
		$kelas = AnggotaCu::findOrFail($id);
		$name = $kelas->name;

		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' =>  $this->message. ' ' .$name. 'berhasil dihapus'
			]);
	}

	public function destroyCu($id)
	{
		$kelas = AnggotaCuCu::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Keanggotaan CU berhasil dihapus'
			]);
	}

	public function destroyProduk($id)
	{
		$kelas = AnggotaProdukCu::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Produk anggota CU berhasil dihapus'
			]);
	}

	public function destroyKlaim($id)
	{
		$kelas = AnggotaCuKlaim::findOrFail($id);
		$kelas->delete();

		return response()
			->json([
				'deleted' => true,
				'message' => 'Klaim anggota CU berhasil dihapus'
			]);
	}

	private function syncCu($request, $kelas)
	{
		if($request->cu){
			$cuArray = array();

			foreach($request->cu as $cu){
				$cuArray[$cu['no_ba']] = [
					'cu_id' => $cu['cu']['id'],
					'no_ba' => $cu['no_ba'],
					'tanggal_masuk' => $cu['tanggal_masuk']
				];	
			}

			$kelas->anggota_cu()->sync($cuArray);
		}
		
		if($request->id_cu){
			$kelasCu = AnggotaCuCU::where('anggota_cu_id',$kelas->id)->first();

			if($kelasCu){
				$kelasCu = AnggotaCuCU::where('anggota_cu_id',$kelas->id);
				$kelasCu->update([
					'anggota_cu_id' => $kelas->id,
					'cu_id' => $request->id_cu,
					'no_ba' => $request->no_ba,
					'tanggal_masuk' => $request->tanggal_masuk
				]);
			}else{
				AnggotaCuCu::create([
					'anggota_cu_id' => $kelas->id,
					'cu_id' => $request->id_cu,
					'no_ba' => $request->no_ba,
					'tanggal_masuk' => $request->tanggal_masuk
				]);
			}
			
		}
	}

	private function syncProdukCu($request, $kelas)
	{
		$produkcu = array_merge($request->simpanan, $request->pinjaman);

		if($produkcu){
			$produkCuArray = array();

			foreach($produkcu as $produk){
				$produkCuArray[$produk['produk_cu']['id']] = [
					'produk_cu_id' => $produk['produk_cu']['id'],
					'saldo' => $produk['saldo'],
					'no_rek' => $produk['no_rek'],
					'tanggal' => $produk['tanggal'],
					'lama_pinjaman' => $produk['lama_pinjaman'],
				];
			}

			$kelas->anggota_produk_cu()->sync($produkCuArray);
		}
	}

	public function uploadExcelNew(Request $request)
	{
		Excel::import(new AnggotaCuNewDraftImport, request()->file('file'));

		return response()
			->json([
				'uploaded' => true,
				'message' => $this->message.' berhasil diupload ke tabel draft, silahkan selanjutnya memeriksa hasil upload sebelum dimasukkan ke tabel utama'
			]);
	}

	public function count()
	{
			$table_data = AnggotaCu::count();

			return response()
			->json([
					'model' => $table_data
			]);
	}

	public function history()
  {
    $time = \Carbon\Carbon::now()->subMonths(6);
		
    $table_data = Revision::with('revisionable')->where('revisionable_type','App\AnggotaCu')->where('created_at','>=',$time)->orderBy('created_at','desc')->get();

    $history = collect();		
		foreach($table_data as $hs){
			$n = collect($hs);
			$n->put('user',$hs->userResponsible());
			$history->push($n);
		}

		return response()
			->json([
				'model' => $history
			]);
	}
	
	public function cariData($nik)
	{
		$table_data = AnggotaCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->where('nik',$nik)->first();
		
		if($table_data){
			return response()
			->json([
				'model' => $table_data
			]);
		}else{
			return response()
			->json([
					'form' => AnggotaCu::initialize(),
					'rules' => AnggotaCu::$rules,
					'option' => []
			]);
		}
	}

	// TODO:
	public function produkData($id)
	{
		$table_data = AnggotaProdukCu::with('anggota_cu','anggota_produk_cu','Villages','Districts','Regencies','Provinces')->where('nik',$nik)->first();

		return response()
		->json([
			'model' => $table_data
		]);
	}
}