# FutureCan
- [mertinop/collar-dashboard](https://github.com/mertinop/collar-dashboard): Vue.js Frontend
- [mertinop/collar-api](https://github.com/mertinop/collar-api): Express API
- [mertinop/collar-server](https://github.com/mertinop/collar-server): Socketio server (para datos en tiempo real)

## About
Vue frontend for "FutureCan".

Code and docs are in Spanish because it was a school project. 

There are 2 possible roles; `user` or `vet`. After login, the routing is handled depending on the role either on `src/user/routes.js` or `src/vet/routes.js`.

Stack: 
-
- Vue.js
- Vuetify
- Vuex


## Instalacion
 - Configurar `src/common/apiSetup.js` y `src/common/Socket.js`
 
## Project setup
```
npm install
```
 
### Compiles and hot-reloads for development
```
npm run serve
```
### Por defecto se ejecutara en la dirección `localhost:8080`

# Capturas de pantalla
## Login
![Captura](screens/1.png?raw=true "Captura")
## Dashboard (vet)
![Captura](screens/2.png?raw=true "Captura")
![Captura](screens/3.png?raw=true "Captura")
## Mobile (user)
![Captura](screens/4.png?raw=true "Captura")
![Captura](screens/5.png?raw=true "Captura")
<!--
### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
``` -->
