# -Practica-Final-Devops
Aplicación web Hola Mundo con Express, pruebas unitarias, contenedor Docker y pipeline CI/CD en GitHub Actions.

## Requisitos
- Node.js 20+
- Docker (para construir/ejecutar la imagen)

## Uso local
1. Instalar dependencias: `npm install`
2. Arrancar el servidor: `npm start`
3. Visitar `http://localhost:3000` para ver la página con diseño. El endpoint JSON sigue disponible en `http://localhost:3000/api` y responde `{ "message": "Hola Mundo" }`.

## Pruebas
- Ejecutar `npm test` para correr la prueba unitaria con Jest y Supertest.

## Docker
- Construir la imagen: `docker build -t bernardogomera/practica-final-devops .`
- Ejecutar el contenedor: `docker run -p 3000:3000 bernardogomera/practica-final-devops`

## CI/CD con GitHub Actions
El workflow en `.github/workflows/ci.yml` se ejecuta en cada push a `main` y realiza:
- Instalación de dependencias (`npm ci`).
- Ejecución de pruebas (`npm test`).
- Construcción y push de la imagen a Docker Hub.
- Despliegue a Render (opcional, si se configuran secretos).

### Secretos requeridos
Configurar en GitHub > Settings > Secrets and variables > Actions:
- `DOCKERHUB_USERNAME`: usuario de Docker Hub (se usa para login; la imagen publica en `bernardogomera/practica-final-devops`).
- `DOCKERHUB_TOKEN`: token o password de Docker Hub con permisos de push.
- `RENDER_API_KEY`: API key de Render (solo si se desea desplegar).
- `RENDER_SERVICE_ID`: ID del servicio en Render (solo si se desea desplegar).

### Imagen en Docker Hub
La imagen se publica como `bernardogomera/practica-final-devops` con tags `latest` y `SHA` del commit.
