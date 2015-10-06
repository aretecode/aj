function dataUrlToJson(data) {
    var dataUrlJson = "{\"" + data + "\"}";
    dataUrlJson = dataUrlJson.split("&").join("\",\"");
    dataUrlJson = dataUrlJson.split("=").join("\":\"");
    return dataUrlJson;
}