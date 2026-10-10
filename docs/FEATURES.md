# Funciones verificadas / Verified features

Verificación por lectura del código y esquema; no prueba de producción. Los nombres siguientes identifican módulos de evidencia, no enlaces al repositorio privado. / Verified through source and schema inspection; not production testing. Module names identify evidence and do not link to private source.

| Función / Feature | Evidencia / Evidence | Límite / Limit |
| --- | --- | --- |
| Gastos y pagos / Expenses and payments | Servidor, interfaz y esquema de gastos y obligaciones / Server, UI, expense and obligation schema | Sin acceso a registros / No record access |
| Reparto compartido / Shared obligations | Módulo bill-split y beneficiarios / bill-split module and beneficiaries | No se publican planes particulares / Household plans excluded |
| Recurrencias / Recurrence | Módulo recurrence y agenda / recurrence and calendar modules | Cálculo por reglas / Rule-based |
| Agenda / Calendar | Parser de eventos, rutas y esquema / Event parser, routes and schema | Sin eventos reales / No real events |
| Comprobantes / Receipts | Rutas de carga, binding de objetos y visor PDF.js / Upload routes, object binding, PDF.js viewer | Sin archivos ni capturas reales / No real files or screenshots |
| Lectura con IA / AI extraction | Módulos receipt-ai y expense-ai / receipt-ai and expense-ai modules | Integraciones presentes; calidad y disponibilidad no comprobadas / Present integrations; quality and availability untested |
| Audio / Audio | Ruta de transcripción en servidor / Server transcription path | Requiere configuración privada; no activada / Requires private configuration; not activated |
| Telegram / Telegram | Receptor, validación de miembros, eventos procesados e informe semanal / Receiver, member validation, processed events and weekly report | Activación del receptor pendiente de verificar / Receiver activation unverified |
| Informes y proyección / Reports and projection | Módulos weekly y forecast / weekly and forecast modules | Deterministas; sin asesoramiento ni predicción de IA / Deterministic; no advice or AI prediction |
| Identidad y 2FA / Identity and 2FA | Módulos authentication y auth-crypto / authentication and auth-crypto modules | Sin evaluación de penetración ni prueba de producción / No penetration or production testing |

No se afirma uso de React, Vite, Express, Prisma, PostgreSQL ni modelos de IA específicos para este proyecto. / This project makes no claim of using React, Vite, Express, Prisma, PostgreSQL, or specific AI model versions.
