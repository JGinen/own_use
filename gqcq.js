var token = "5fca6fd1ef7d4b2691a5c22accad076a";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
    headers["deviceType"] = "iPhone";
    headers["platformNo"] = "iOS";
    headers["imei"] = "EE952283-6B8D-4966-A0FA-3C531D86D296";
}

$done({ headers: headers });
