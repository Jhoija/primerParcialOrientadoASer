# Primer Parcial Arquitectura Orientada a Servicios 04/04/2024 

# Integrantes: Sebastian Amaya 191882 - Eduwin Fabian Contreras 191898

## Descripción 

API REST desarrollado en Node.js, Express y Postgresql.

La API permitira al usuario obtener y almacenar informacion correspondiente a productos. Para esto el usuario debe haberse autenticado y registrado previamente en una base de datos (en este caso postgres). La API cuenta con unas funciones, las cuales son:

- Autorización median Basic Auth
- Paginación 
- Manejador de errores


## Instalación

### Clonar el repositorio:
```
    git clone https://github.com/Jhoija/primerParcialOrientadoASer.git
    cd clase
```

### Instalación Manual

```
    npm install
```

### Instalación nodemon

```
    npm -get install nodemon
```

### Instalación express

```
    npm install express
```

## Características
- Node js
- npm
- Postgresql

## Comandos
Run Local:
```
    npm run dev
```

## Variables de Entorno
```
###> CONFIG SERVER <####
PORT=
URL_SERVER=
###> CONFIG SERVER <####

###> DB_CONNECTION ### 
DB_URL_PG=
###< CONFIGURE SERVER ###

###> SECRET_KEY ###
SECRET_KEY=
###< SECRET_KEY ###
```