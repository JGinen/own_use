var token = "0b2afa176c0643f4978ac14eec0afa0f";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
}

$done({ headers: headers });
