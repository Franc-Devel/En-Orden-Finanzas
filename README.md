# FAUVOR Finanzas

Producto de FAUVOR. Identidad visual: marfil, bronce y dorado; símbolo e iconos del kit original de la marca. Se conserva la URL histórica del repositorio.

![Portada conceptual ilustrativa de En-Orden-Finanzas; no es una captura real. Cifras, pantallas y módulos ficticios.](assets/covers/cover.png)

> **Ilustración conceptual · No es una captura de una aplicación real.** Las cifras, métricas, pantallas y módulos del mockup son ficticios y no acreditan funcionalidades, resultados ni garantías. Los textos sobre protección de datos, autenticación, infraestructura y «demo segura» son parte del concepto visual; no constituyen garantías de seguridad ni una auditoría. Los paneles de Telegram, OCR, agenda y metas no son capturas de la aplicación.
>
> **Concept artwork · Not an actual application screenshot.** Figures, metrics, screens and modules are fictional; they do not substantiate implemented features, measured results or security guarantees. Refer to the documentation below for the project’s actual scope.

[Portada para Social Preview · 1280×640](assets/covers/cover-social.jpg) · Ilustración conceptual, no captura real.

**Finanzas personales y compartidas, con automatización e IA aplicada.**  
Desarrollado por [Francisco Agustín Delgado](https://github.com/Franc-Devel).

[Español](#español) · [English](#english) · [Arquitectura / Architecture](docs/ARCHITECTURE.md) · [Funciones verificadas / Verified features](docs/FEATURES.md) · [Privacidad / Privacy](docs/PRIVACY.md)

## Español

En Orden reúne gastos cotidianos, obligaciones recurrentes, pagos compartidos, agenda y comprobantes en una aplicación web privada. Este repositorio presenta su diseño y las funciones verificadas en el código. Incluye una demostración independiente con datos sintéticos; el sistema privado y su historial no se distribuyen aquí.

### Funciones

- Registro y clasificación de gastos por categoría y beneficiario.
- Pagos recurrentes, vencimientos y distribución de obligaciones compartidas.
- Agenda con eventos únicos y recurrentes.
- Carga y consulta de comprobantes, con extracción asistida por IA de importes y fechas y alternativa manual.
- Interpretación de gastos en texto y transcripción de audio mediante integraciones de IA.
- Integración con Telegram: recepción de mensajes, autorización de miembros, deduplicación e informes semanales a pedido.
- Resumen semanal por categorías y proyección de compromisos del mes siguiente mediante reglas deterministas.
- Autenticación por invitación, contraseñas, TOTP de dos factores, recuperación y sesiones protegidas.

**Alcance de la verificación:** estas capacidades están presentes en el código inspeccionado. No se comprobó su disponibilidad en producción ni se activaron servicios. El receptor de Telegram tiene instrucciones de activación pendientes en la documentación de origen. Las proyecciones son cálculos por reglas, no predicciones de IA.

### Tecnologías verificadas

JavaScript · HTML · CSS · runtime compatible con Cloudflare Workers · D1/SQLite · Drizzle ORM y migraciones SQL · Airtable para identidad · API de OpenAI · API de Telegram · esbuild · PDF.js · QRCode · @noble/hashes.

El código usa un binding de almacenamiento de objetos para comprobantes; no se publica su configuración de producción. La interfaz es JavaScript sin un framework de componentes. Node.js se usa para herramientas de construcción y pruebas.

### Demostración con datos sintéticos

Abrí [demo/index.html](demo/index.html) después de descargar el repositorio. Funciona localmente sin instalación. Filtrá categorías y compará el total de gastos ficticios. Todos los importes y etiquetas fueron inventados para esta presentación.

La demo muestra únicamente un resumen y un filtro de gastos. No reproduce autenticación, pagos, comprobantes, IA ni Telegram. No envía solicitudes de red, no guarda datos y no permite subir archivos. No requiere claves ni cuentas.

### Documentación

- [Arquitectura pública](docs/ARCHITECTURE.md)
- [Evidencia y límites de cada función](docs/FEATURES.md)
- [Privacidad y alcance de la auditoría](docs/PRIVACY.md)

## English

**Personal and shared finances with automation and applied AI.**

En Orden brings everyday expenses, recurring obligations, shared payments, calendar events, and receipts into a private web application. This repository presents its design and capabilities verified in source code. It includes an independent synthetic-data demo; the private system and its history are not distributed here.

### Features

- Expense recording and classification by category and beneficiary.
- Recurring payments, due dates, and shared obligations.
- One-time and recurring calendar events.
- Receipt upload and viewing, AI-assisted amount/date extraction, and manual entry.
- Text expense interpretation and audio transcription through AI integrations.
- Telegram integration: message reception, authorized members, deduplication, and on-demand weekly reports.
- Rule-based weekly category summaries and next-month obligation projections.
- Invitation-based authentication, passwords, two-factor TOTP, recovery, and protected sessions.

**Verification scope:** these capabilities exist in the inspected source code. Production availability was not tested and no services were activated. Source documentation lists pending activation steps for the Telegram receiver. Projections are deterministic calculations, not AI forecasts.

### Verified technologies

JavaScript · HTML · CSS · Cloudflare Workers-compatible runtime · D1/SQLite · Drizzle ORM and SQL migrations · Airtable identity integration · OpenAI API · Telegram API · esbuild · PDF.js · QRCode · @noble/hashes.

Receipts use an object-storage binding; production configuration is excluded. The interface uses JavaScript without a component framework. Node.js supports build tools and tests.

### Synthetic-data demo

Download this repository and open [demo/index.html](demo/index.html). Filter categories and compare fictional expense totals. Every amount and label was invented for this showcase.

The demo covers only an expense summary and category filter. Authentication, payments, receipts, AI, and Telegram are not implemented in the demo. It makes no network requests, stores no data, accepts no uploads, and needs no keys or accounts.

See the bilingual [architecture](docs/ARCHITECTURE.md), [feature evidence](docs/FEATURES.md), and [privacy notes](docs/PRIVACY.md).

## Identidad FAUVOR y documentación actual

**FAUVOR Finanzas** forma parte del catálogo de seis productos FAUVOR. Finanzas personales y compartidas.

- [Identidad, ejecución, validación y límites](docs/FAUVOR.md)
- [FAUVOR Flow: automatizaciones para negocios](https://github.com/Franc-Devel/system-flow)

La portada es conceptual. Las capacidades reales y las diferencias respecto de las demos se detallan en la documentación vinculada.
