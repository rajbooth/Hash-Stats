


## Run Attendance Form
### Description
This form is used to record the attendance and payment status for attendees at each hash.  It is implemented using Gogle Sheets with back-end scripts to populate the form from the WP REST API, and to update the westlon2_stats database via the REST API whenever a hashers status changes.

### Location
[Run attendance form](https://docs.google.com/spreadsheets/d/1K0YOljGE2HHLYWpGt3HI9RvtwQnncWaLmcDvwE-ZFdc/edit#gid=873490598)

### Back-end scrips
The scripts used on this form can be found on [GitHub](https://raw.githubusercontent.com/rajbooth/Hash-Stats/master/code/run_form_scripts.gs), in addition to being included in the code behind the Google Sheet referenced above.

#### Sheet population
The back-end  **Hashers** sheet is populated by executing the *getHashers* function, which performs a GET call on the REST API endpoint:  [https://westlondonhash.com/wp-json/wlh/v1/hashers] (https://westlondonhash.com/wp-json/wlh/v1/hashers), to download a list of all hashers and their associated membership renewal dates from the **wlh_hasher** table on the WP database.

The header in the  main **Run Form** sheet is populated by executing the *getNextRun* function, which performs a GET call on the REST API endpoint:  [https://westlondonhash.com/wp-json/wlh/v1/next_run](https://westlondonhash.com/wp-json/wlh/v1/next_run)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1OTAyMjY1NCwxMDgyNjg0MzY2LC0xND
E1NTQ1Njc1LC0xOTcxMTk1MDg4LC0zNDUzNDM1NV19
-->