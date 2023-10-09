Iniciar proyecto
-
- docker-compose up -d (ó docker start *container_name*)
- docker-compose exec app_backend pm2 start mysql/index-mysql.js
- docker-compose exec app_backend pm2 start cache/index-cache.js
- docker-compose exec app_backend pm2 start api/index.js