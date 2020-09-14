function add_run(entry, run, rundate) {
  var url = 'https://westlondonhash.com/wp-json/wlh/v1/add_run';
  
  // Make a POST request with a JSON payload.

  var data = {
    'run_number': run,
    'run_date':  rundate,
    'hasher_ID' :  entry[0],
    'hasher_name' :  entry[1],
    'hasher_value' :  entry[5]
  };
  
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
 
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data)
  };
  
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
}

function testCheck(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var run = sheet.getRange('$A$2').getValue();
  var rundate = sheet.getRange('$C$2').getDisplayValue();
  Logger.log(rundate);
}

function get_run_data() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var run = sheet.getRange('$A$2').getValue();
  var rundate = sheet.getRange('$C$2').getDisplayValue();
  var lastRow=sheet.getLastRow();
  var data=sheet.getRange(5,1,lastRow-1,6).getValues();

  for(i=0;i<data.length;++i){
    if (data[i][4]){
      add_run(data[i], run, rundate);
    }
  }
}

function hasher_checked(e) {
  var range = e.range;
  var row = range.getRowIndex();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var run = sheet.getRange('$A$2').getValue();
  var rundate = sheet.getRange('$C$2').getDisplayValue();
  var data=sheet.getRange(row,1,1,6).getValues();
  if (row>4)
   add_run(data[0], run, rundate);
}

function clear_all() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange('D5:E');
  range.uncheck();
}

function getNextRun() {
  var url = "https://westlondonhash.com/wp-json/wlh/v1/next_run";
  var jsondata = UrlFetchApp.fetch(url);
  //Logger.log(jsondata.getContentText());
  var runs   = JSON.parse(jsondata.getContentText());
  
  var next_run  = runs[0]; 
  
Logger.log(next_run);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rng = sheet.getRange("A2").setValue(next_run.run_number);
  rng = sheet.getRange("B2").setValue(next_run.hare);
  rng = sheet.getRange("C2").setValue(next_run.run_date);
  rng = sheet.getRange("D2").setValue(next_run.location);
}

function getRunners() {
  var url = "https://westlondonhash.com/wp-json/wlh/v1/run_form";
  var jsondata = UrlFetchApp.fetch(url);
  var runners   = JSON.parse(jsondata.getContentText());
  
  var row  = new Array();
  
  for (r in runners) {
    row[r] = [runners[r].hasher];
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //var rng = sheet.getRange("B5:B").clearContent();
  rng = sheet.getRange(5, 2, row.length, 1 )
  rng.setValues(row)
}

function getHashers() {
  var url = "https://westlondonhash.com/wp-json/wlh/v1/hashers";
  var jsondata = UrlFetchApp.fetch(url);
  var runners   = JSON.parse(jsondata.getContentText());
  
  // define an array of all the object keys
  var headerRow = Object.keys(runners[0]);
  var row  = new Array();
  
  for (r in runners) {
    row[r] = headerRow.map(function(key){ return runners[r][key]});
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rng = sheet.getRange("A5:C").clearContent();
  rng = sheet.getRange(1, 1, row.length, headerRow.length )
  rng.setValues(row)
}
