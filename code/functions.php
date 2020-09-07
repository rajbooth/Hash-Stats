<?php
/** WLH stats database API functions 
 */

function get_run_list() {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $rows = $mydb->get_results("SELECT run_number, location FROM wlh_runs");

    $response = new WP_REST_Response($rows);
    $response->set_status(200);

    return $response;
}

add_action('rest_api_init', function () {
  register_rest_route( 'wlh/v1', 'runs',array(
                'methods'  => 'GET',
                'callback' => 'get_run_list'
      ));
});

function get_hasher_list() {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $rows = $mydb->get_results("SELECT hasher_ID, hash_name, membership_date, resume_date  FROM wlh_hasher");

    $response = new WP_REST_Response($rows);
    $response->set_status(200);

    return $response;
}

add_action('rest_api_init', function () {
  register_rest_route( 'wlh/v1', 'hashers',array(
                'methods'  => 'GET',
                'callback' => 'get_hasher_list'
      ));
});

function get_next_run() {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $rows = $mydb->get_results("SELECT * FROM wlh_runs ORDER BY run_number DESC LIMIT 1");

    $response = new WP_REST_Response($rows);
    $response->set_status(200);

    return $response;
}

add_action('rest_api_init', function () {
  register_rest_route( 'wlh/v1', 'next_run',array(
                'methods'  => 'GET',
                'callback' => 'get_next_run'
      ));
});

function get_registrants() {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $rows = $mydb->get_results("SELECT * FROM run_form");

    $response = new WP_REST_Response($rows);
    $response->set_status(200);

    return $response;
}

add_action('rest_api_init', function () {
  register_rest_route( 'wlh/v1', 'run_form',array(
                'methods'  => 'GET',
                'callback' => 'get_registrants'
      ));
});

function add_hasher_run( WP_REST_Request $request ) {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $table = 'wlh_hasher_run';
    $item = $request->get_json_params();
    $mydb->replace($table, $item);
    return $mydb->insert_id;
}

add_action( 'rest_api_init', function () {   
    register_rest_route('wlh/v1', 'add_run', array(     
        'methods' => 'POST',     
        'callback' => 'add_hasher_run'
    ));
});

function add_registration( WP_REST_Request $request ) {
    $mydb = new wpdb(DB_USER,DB_PASSWORD,'westlon2_stats',DB_HOST);
    $table = 'registrations';
    $item = $request->get_json_params();
    $mydb->insert($table, $item);
    return $mydb->insert_id;
}

add_action( 'rest_api_init', function () {   
    register_rest_route('wlh/v1', 'register', array(     
        'methods' => 'POST',     
        'callback' => 'add_registration'
    ));
