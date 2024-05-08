let url = $request.url;
let body = $response.body;

let regexTime = /"time":\d+,/;
let regexMobile = /"mobile":"\d+******\d+"/;
let regexCompanyName = /"companyName":"[^"]+"/;
let regexName = /"name":"[^"]+"/;

body = body.replace(regexTime, '"time": "*",');
body = body.replace(regexMobile, '"mobile": "*"');
body = body.replace(regexCompanyName, '"companyName": "*"');
body = body.replace(regexName, '"name": "*"');

$done({ body });
