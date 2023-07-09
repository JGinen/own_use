const urlPattern = /^https:\/\/tmsh5\.faw-vw\.com\/gateway-elearning\/api-course\/v1\/mobile\/courses\/\d+\/\d+\/record/;
const modifiedUrl = $request.url.replace(/\d+\?/, "8888?");

if (urlPattern.test($request.url)) {
    $done({ url: modifiedUrl });
} else {
    $done({});
}
