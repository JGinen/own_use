var token = "95e0301813f242118ca87ab7687b9c9c";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
}

$done({ headers: headers });
