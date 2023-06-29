var token = "863cf7158b564e71baa28376ea713873";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
}

$done({ headers: headers });
