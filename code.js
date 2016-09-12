var address = '173.194.86.101';
var user = 'reader';
var userPwd = 'S9C3AHl50TXg';
var db = 'main';

var dbUrl = 'jdbc:mysql://' + address + '/' + db;

function runScript(){
  getLocation(); 
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Dialog').addItem('Open', 'openDialog').addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('index').setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(html, 'Input Form');
}

function getLocation(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2, formattedAddress){
  var row = SpreadsheetApp.getActiveSheet().getLastRow() + 1;
  var myArray = []
  var scans = getScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2);
  var uniqueScans = getUniqueScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2);
  var firstScans = getFirstScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2);
  SpreadsheetApp.getActiveSheet().getRange('A'+row).setValue(scans);
  SpreadsheetApp.getActiveSheet().getRange('B'+row).setValue(uniqueScans);
  SpreadsheetApp.getActiveSheet().getRange('C'+row).setValue(firstScans);
  SpreadsheetApp.getActiveSheet().getRange('D'+row).setValue(minLat);
  SpreadsheetApp.getActiveSheet().getRange('E'+row).setValue(maxLat);
  SpreadsheetApp.getActiveSheet().getRange('F'+row).setValue(minLon);
  SpreadsheetApp.getActiveSheet().getRange('G'+row).setValue(maxLon); 
  SpreadsheetApp.getActiveSheet().getRange('H'+row).setValue(formattedAddress);
  myArray.push(scans, uniqueScans, firstScans, minLat, maxLat, minLon, maxLon, formattedAddress);
  return myArray;
}

//var address = '9924 Gulf Coast Main St. #130, Ft Myers, FL 33913, USA'; //Change the address within the quotes.
//var date1 = '2016-06-01'; //Change the first date of capture_ts within the quotes
//var date2 = '2016-06-29'; //Change the second date of capture_ts withing the quotes
//var dn = 250; //Radius of the area you want to search

//function getLocation(address, date1, date2, dn){
//  var response = Maps.newGeocoder().geocode(address);
//  var latitude = 0;
//  var longitude = 0;
//  var radius = 6378137;
//  var pie = Math.PI;  
//  var de = dn;
//  var row = SpreadsheetApp.getActiveSheet().getLastRow() + 1;
//  var myArray2 = [];
//  
//  for (var i = 0; i < response.results.length; i++) {
//    var myArray = []
//    var result = response.results[i];
//    latitude = result.geometry.location.lat;
//    longitude = result.geometry.location.lng;
//    var maxLon = longitude;
//    var minLon = longitude;
//    var maxLat = latitude;
//    var minLat = latitude;
//    var dLon = de/(radius * Math.cos(pie*latitude/180));
//    var dLat = dn/radius;
//    maxLon += dLon * 180/pie;
//    minLon -= dLon * 180/pie;
//    maxLat += dLat * 180/pie;
//    minLat -= dLat * 180/pie;
//    var scans = getScans(minLat, minLon, maxLat, maxLon, date1, date2);
//    SpreadsheetApp.getActiveSheet().getRange('A'+row).setValue(scans);
//    SpreadsheetApp.getActiveSheet().getRange('B'+row).setValue(minLat);
//    SpreadsheetApp.getActiveSheet().getRange('C'+row).setValue(maxLat);
//    SpreadsheetApp.getActiveSheet().getRange('D'+row).setValue(minLon);
//    SpreadsheetApp.getActiveSheet().getRange('E'+row).setValue(maxLon);
//    SpreadsheetApp.getActiveSheet().getRange('F'+row).setValue(result.formatted_address);
//    myArray.push(scans, minLat, maxLat, minLon, maxLon, result.formatted_address);
//    row++;
//  }
//  return myArray;
//}

function getScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2){
  var conn = Jdbc.getConnection(dbUrl, user, userPwd); 
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("select count(*) from sessions s where s.latitude between '"+minLat+"' and '"+maxLat+"' and s.longitude between '"+minLon+"' and '"+maxLon+"' and s.capture_ts between '"+date1+" "+time1+"' and '"+date2+" "+time2+"'");
  var numCols = results.getMetaData().getColumnCount();
  while (results.next()) {
    var rowString = '';
    for (var col = 0; col < numCols; col++) {
      rowString+=(results.getString(col + 1));
    }   
  }
  results.close();
  stmt.close();
  return rowString;
}

function getUniqueScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2){
  var conn = Jdbc.getConnection(dbUrl, user, userPwd); 
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("select count(distinct s.user_id) from sessions s where s.latitude between '"+minLat+"' and '"+maxLat+"' and s.longitude between '"+minLon+"' and '"+maxLon+"' and s.capture_ts between '"+date1+" "+time1+"' and '"+date2+" "+time2+"'");
  var numCols = results.getMetaData().getColumnCount();
  while (results.next()) {
    var rowString = '';
    for (var col = 0; col < numCols; col++) {
      rowString+=(results.getString(col + 1));
    }   
  }
  results.close();
  stmt.close();
  return rowString;
}

function getFirstScans(minLat, minLon, maxLat, maxLon, date1, date2, time1, time2){
  var conn = Jdbc.getConnection(dbUrl, user, userPwd); 
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery("select COUNT(Distinct sf.u_id) as fs from sessions s join (select user_id as u_id, min(init_ts) as first_scan_ts from sessions where capture_ts between '"+date1+" "+time1+"' and '"+date2+" "+time2+"' group by user_id) sf on sf.u_id = s.user_id and s.init_ts = sf.first_scan_ts where sf.first_scan_ts between '"+date1+" "+time1+"' and '"+date2+" "+time2+"' and s.capture_ts between '"+date1+" "+time1+"' and '"+date2+" "+time2+"' and s.latitude between '"+minLat+"' and '"+maxLat+"' and s.longitude between '"+minLon+"' and '"+maxLon+"'");
  var numCols = results.getMetaData().getColumnCount();
  while (results.next()) {
    var rowString = '';
    for (var col = 0; col < numCols; col++) {
      rowString+=(results.getString(col + 1));
    }   
  }
  results.close();
  stmt.close();
  return rowString;
}
