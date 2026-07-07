# TINA — Tutora de Inglés A1

Chat con IA basado en *English File Beginner, 5th Edition*, para alumnos de Nivel A1.

## Estructura del proyecto

```
tina-repo/
├── index.html        ← Frontend (lo que ve el alumno)
├── api/
│   └── chat.js        ← Backend (guarda la API key y llama a Claude de forma segura)
└── README.md
```

**Por qué está separado en dos partes:** la API key de Anthropic nunca debe estar
en un archivo que corre en el navegador del alumno (cualquiera podría verla y
usarla a tu costa). El `index.html` le pide la respuesta a tu propio backend
(`/api/chat`), y es ese backend el único que conoce la API key.

## Pasos para publicarlo (gratis, con GitHub + Vercel)

### 1. Subir el código a GitHub
1. Creá un repositorio nuevo en GitHub (puede ser privado o público).
2. Subí estos 3 archivos/carpetas (`index.html`, `api/chat.js`, `README.md`)
   manteniendo la misma estructura de carpetas.

### 2. Conseguir tu API key de Anthropic
1. Entrá a **https://console.anthropic.com** (esto es distinto de tu cuenta de claude.ai — es la consola de desarrollador).
2. Creá una API key en la sección **API Keys**.
3. Cargá crédito o activá el plan de pago-por-uso (la API se cobra por uso, no está incluida en una suscripción de claude.ai).

### 3. Desplegar en Vercel (gratis)
1. Entrá a **https://vercel.com** e iniciá sesión con tu cuenta de GitHub.
2. Hacé clic en **"Add New" → "Project"** y elegí el repositorio que subiste.
3. Antes de darle a "Deploy", andá a **Environment Variables** y agregá:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** la key que generaste en el paso 2.
4. Hacé clic en **Deploy**. Vercel va a detectar automáticamente la carpeta
   `/api` como funciones serverless — no necesitás configurar nada más.
5. En unos segundos vas a tener una URL pública tipo
   `https://tina-tuusuario.vercel.app` — esa es tu app funcionando de verdad,
   fuera de Claude.

### 4. Probarla
Abrí la URL, tocá una unidad o escribile algo a TINA. La llamada va a viajar:

```
Navegador del alumno → /api/chat (tu función en Vercel) → API de Anthropic → respuesta
```

## Actualizar el contenido de TINA
El "cerebro" de TINA (las reglas, el temario, el formato de respuesta) está en
`api/chat.js`, dentro de la constante `SYSTEM_PROMPT`. Para cambiar cómo explica
o qué temas cubre, editá ese archivo y volvé a desplegar (Vercel lo hace solo
cada vez que hacés push a GitHub).

## Próximo paso: integración con Moodle
Una vez que la tengas andando en Vercel, se puede embeber la URL pública
dentro de un recurso "Página" o "iframe" de Moodle. Avisame cuando llegues a
ese punto y lo vemos juntos.
