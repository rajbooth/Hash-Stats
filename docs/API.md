


## API description
The hash stats functionality extends the existing Wordpress REST API by providing additional REST endpoints to serve requests for data from the main data tables in the westlon2_stats database.  

## REST Namespace
The additional REST endpoints are defined within the *wlh/v1/* namespace, resulting in a URL of the form 
https://westlondonhasn.com/wp-json/wlh/v1/

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

## REST Endpoints

### hashers
**Description**
Returns a list of all hashers in the  westlon2_stats database.
**Usage**
Used to populate hasher lookup tables in Google Sheets
**SQL**
```SQL
SELECT hasher_ID, hash_name, membership_date, resume_date FROM wlh_hasher
```

### runs

### next_run 

### run_form

### add_run

### register
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEyODg1MTYzNywxOTM3NTExMzczLDg5Nj
AxMDExMywxMDM2MjAzNTkwLC0xNDEwNTIzOTMwXX0=
-->