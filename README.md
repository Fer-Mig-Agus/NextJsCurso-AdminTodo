# Development

Pasos para levantar la app en desarrollo

1. Levantar la BDD
```
docker compose up -p
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install``` para construir los modulos de node
5. Ejecutar el comando `npm run dev` para ejecutar aplicacion de desarrollo
6. Ejecutar estos comandos de Prisma

```
npx prisma migrate dev
npx prisma generate
```

7. Ejecutar el SEED para [crear la BDD local]('localhost:3000/api/seed')

## Nota: Usuario por defecto

default user= test1@google.com
default password=123456

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```



# Prod





# Stage