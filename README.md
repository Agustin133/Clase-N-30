# Clase N° 30 - Servidor Nginx

Este repositorio contiene el desafío entregable de la clase número 30, acerca de Servidores Nginx.
En el repo se encuentra cargado el .js de el desafio un archivo .txt que contiene las configuraciones del nginx.conf que utilice. 
Este programa contiene dos rutas */datos* que muestra los datos del servidor, puertos, etc y */random* que genera un número muy grande lo que hace que esa petición demore mas de lo esperado para probar la funcionalidad de Nginx.

*RUTAS:*
  - localhost/datos/
  - localhost/random/

*COMANDOS DE PM2:*
  - pm2 start node_app.js --name="server1" --watch -- 8081
  - pm2 start node_app.js --name="server2" --watch -i max -- 8082

