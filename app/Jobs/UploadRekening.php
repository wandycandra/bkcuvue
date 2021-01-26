<?php

namespace App\Jobs;

use App\FileUpload;
use App\Imports\RekeningImportEscete;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Excel;

class UploadRekening implements ShouldQueue
{
    private $path,$id_user;
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($path,$id_user)
    {
        $this->path = $path;
        $this->id_user = $id_user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $files = File::allFiles($this->path);
        foreach ($files as $file) {
            if(stripos($file->getFilename(), 'REKENING')==true){
                (new RekeningImportEscete)->queue($file)->chain([new SendNotification($this->id_user)]);
                FileUpload::where('real_file_name', $file->getFilename())->delete();
                unlink($file->getRealPath());
            }
        }
    }
}
