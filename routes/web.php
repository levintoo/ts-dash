<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Welcome');
});

Route::get('/dashboard', function () {
    return inertia('Dashboard');
});
