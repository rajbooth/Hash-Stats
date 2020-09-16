


## Run Attendance Form
### Description
This form is used to record the attendance and payment status for attendees at each hash.  It is implemented using Gogle Sheets with back-end scripts to populate the form from the WP REST API, and to update the westlon2_stats database via the REST API whenever a hashers status changes.

### Location
[Run attendance form](https://docs.google.com/spreadsheets/d/1K0YOljGE2HHLYWpGt3HI9RvtwQnncWaLmcDvwE-ZFdc/edit#gid=873490598)

### Back-end scrips
The scripts used on this form can be found on [GitHub](https://raw.githubusercontent.com/rajbooth/Hash-Stats/master/code/run_form_scripts.gs), in addition to being included in the code behind the Google Sheet referenced above.

#### Sheet population
The back-end  **Hashers** sheet is populated by executing the *getHashers* function, which performs a GET call to the REST API endpoint:  [https://westlondonhash.com/wp-json/wlh/v1/hashers](https://westlondonhash.com/wp-json/wlh/v1/hashers) to download a list of all hashers and their associated membership renewal dates from the **wlh_hasher** table on the WP database.

The header in the  main **Run Form** sheet is populated by executing the *getNextRun* function, which performs a GET call on the REST API endpoint:  [https://westlondonhash.com/wp-json/wlh/v1/next_run](https://westlondonhash.com/wp-json/wlh/v1/next_run), and downloads the run number, date, location and harfe for the next run from the **wlh_runs** table.

The main content for the **Run Form** sheet is populated by executing the *getRunners* function, which performs a GET call to the REST API endpoint:  [https://westlondonhash.com/wp-json/wlh/v1/run_form](https://westlondonhash.com/wp-json/wlh/v1/run_form), and downloads the list of hashers who have pre-registered for the next run from the **run_form** view in the WP database.  The *hasher_ID* and *membership expiry date* columns are populated by performing a VLOOKUP of the hasher name in the **Hashers** sheet.

#### Data entry
Clicking in the ***Attended*** or ***Paid*** check-boxes on the ***Run Form*** sheet will cause the (normally hidden) value column to be updated as follows:

 - "H" - if the hasher's name corresponds to the named hare in the form header
 - "2" - if the hasher has no current membership and has paid their weekly run fee
 - "M" - if the hasher is present and has a current membership
 - "X" - if the hasher is present but has no current membership and has not paid a weekly run fee  
 
The act of clicking in either checkbox will also trigger the *hasher_checked* function, which in turn calls the *add_run* function.  This performs a POST call to the REST API endpoint:   [https://westlondonhash.com/wp-json/wlh/v1/add_run](https://westlondonhash.com/wp-json/wlh/v1/add_run). The JSON payload includes the ***run_number, run_date, hasher_name*** , and  ***hasher_ID*** fields, which are inserted (or updated if the key values already exist) into the **wlh_hasher_run** table in the WP stats database.

If the hasher has not pre-registered for the run, then their hash name can be manually typed into the ***Hasher*** column on the Run Form sheet.  This column uses the list of hasher names in the **Hashers** sheet for data validation, so simply typing the first few letters of the hasher's name will bring up the full hasher name, which can then be selected for entry into the ***Hasher*** column.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMDUzMTc0NDQsNTU4ODc1MDkwLC03MT
E4NTExODEsLTEyNDc2Njc5NDEsMTA4MjY4NDM2NiwtMTQxNTU0
NTY3NSwtMTk3MTE5NTA4OCwtMzQ1MzQzNTVdfQ==
-->