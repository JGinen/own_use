var token = "5fca6fd1ef7d4b2691a5c22accad076a";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
}

$done({ headers: headers });
