var http = require("http");
var server = http.createServer(function (peticion, respuesta){
   respuesta.end("Hola DesarrolloWeb.com");
});
server.listen(3000, function(){
   console.log("tu servidor est� listo en " + this.address().port);
});