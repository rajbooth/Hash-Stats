


## API description
The hash stats functionality extends the existing Wordpress REST API by providing additional REST endpoints to serve requests for data from the main data tables in the westlon2_stats database.  

## REST Namespace
The additional REST endpoints are defined within the *wlh/v1/* namespace, resulting in a URL of the form 
[https://westlondonhasn.com/wp-json/wlh/v1/](https://westlondonhasn.com/wp-json/wlh/v1/)

## Endpoint implementation
All the endpoints defined for the Hash Stats functionality are derived by extending the base WordPress REST API.  They make use of the *wpdb* 
class and its various methods to manage the database connection and to retrieve, insert or update data in the westlon2_stats database.  A sample of the php code used for a typical POST operation is shown here.
```php
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
```
The full code for the functions.php file can be found at
[https://github.com/rajbooth/Hash-Stats/raw/master/code/functions.php](https://github.com/rajbooth/Hash-Stats/raw/master/code/functions.php)
This file needs to be deployed in the current WordPress theme directory for the West London Hash website in order for the API to be active.

## REST Endpoints

### hashers
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Populates hasher lookup tables in Google Sheets
**SQL**
```SQL
SELECT hasher_ID, hash_name, membership_date, resume_date FROM wlh_hasher
```

### runs
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Populates hasher lookup tables in Google Sheets
**SQL**
```SQL
SELECT run_number, location FROM wlh_runs
```

### next_run 
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Populates hasher lookup tables in Google Sheets
**SQL**
```SQL
SELECT * FROM wlh_runs ORDER BY run_number DESC LIMIT 1
```

### run_form
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Populates hasher lookup tables in Google Sheets
**SQL**
```SQL
SELECT * FROM run_form
```

### add_run
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Populates hasher lookup tables in Google Sheets

### register
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1OTY5MzcxNzIsLTE4Njg5NDkyNzgsND
A1NDc2NDgxLDE5Mzc1MTEzNzMsODk2MDEwMTEzLDEwMzYyMDM1
OTAsLTE0MTA1MjM5MzBdfQ==
-->