


## Run Attendance Form
### Description
This form is used to record the attendance and payment status for attendees at each hash.  It is implemented using Gogle Sheets with back-end scripts to populate the form from the WP REST API, and to update the westlon2_stats database via the REST API whenever a hashers status changes.

### Location
[Run attendance form](https://docs.google.com/spreadsheets/d/1K0YOljGE2HHLYWpGt3HI9RvtwQnncWaLmcDvwE-ZFdc/edit#gid=873490598)

### Back-end scrips
The scripts used on this form can be found on [GitHub](https://raw.githubusercontent.com/rajbooth/Hash-Stats/master/code/run_form_scripts.gs), in addition to being included in the code behind the Google Sheet referenced above.

#### Sheet population
The **Hashers** sheet is populated by executing the *getHashers* function, which 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMjQ5NTMzMywxMDgyNjg0MzY2LC0xND
E1NTQ1Njc1LC0xOTcxMTk1MDg4LC0zNDUzNDM1NV19
-->