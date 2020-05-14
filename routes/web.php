<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('pages/index');});
Route::get('/stacks', function () {return view('pages/stacks');});
Route::get('/sets', function () {return view('pages/sets');});
Route::get('/queue', function () {return view('pages/queue');});
Route::get('/binary-search', function () {return view('pages/binary-search');});
Route::get('/binary-search-traversal', function () {return view('pages/binary-search-traversal');});
Route::get('/hash-tables', function () {return view('pages/hash-tables');});
Route::get('/linked-list', function () {return view('pages/linked-list');});
Route::get('/heap-max-min', function () {return view('pages/heap-max-min');});
Route::get('/heap-viz', function () {return view('pages/heap-viz');});
Route::get('/graphs', function () {return view('pages/graphs');});
Route::get('/graph-search', function () {return view('pages/graph-search');});

