<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo:

1. Clonar el repositorio
2. Ejecutar:

```
npm install
```

3. Tener nest-cli instalado:

```
npm install -g @nestjs/cli
```

4. Levantar la base de datos:

```
docker-compose up -d
```

5. Clonar el archivo **_.env.template_** y la copia renombrarla como **_.env_**

```
".env.template copy" --> ".env"
```

6. Llenar las variables de entorno en el archivo **_.env_**

7. Ejecutar la aplicación en modo desarrollo

```
npm run start:dev
```

8. Reconstruir la base de datos con data inicial. SOLO USAR EN MODO DESARROLLO!!!

```
http://localhost:3000/api/v2/seed
```

## Stack Usado:

- NestJS
- Docker
- MongoDB
- Postman
