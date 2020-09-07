


## API description
The hash stats functionality extends the existing Wordpress REST API by providing additional REST endpoints to serve requests for data from the main data tables in the westlon2_stats database.  

## REST Namespace
The additional REST endpoints are defined within the *wlh/v1/* namespace, resulting in a URL of the form 
https://westlondonhasn.com/wp-json/wlh/v1/

## Endpoint implementation
All the endpoints fefied for the Hash Stats functionality are derived by extendign the base WordPress REST API.
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
eyJoaXN0b3J5IjpbMTQzMTM0MjQ4OSwxOTM3NTExMzczLDg5Nj
AxMDExMywxMDM2MjAzNTkwLC0xNDEwNTIzOTMwXX0=
-->