<?php
function mymovies_admin_form() {
  $form['mymovies_tmdb_api'] = array(
    '#type' => 'textfield',
    '#title' => 'TheMovieDatabase API KEY',
    '#default_value' => variable_get('mymovies_tmdb_api', ''),
  );

  return system_settings_form($form);
}
