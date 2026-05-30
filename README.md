# EVOLVE MATCH

Version lista para compartir con el equipo: v3.13.

## Archivos

- `index.html`: archivo principal para abrir la herramienta.
- `EVOLVE-MATCH v3.13.html`: copia versionada de respaldo.
- `apps-script-logger-v3.7.js`: codigo del Web App de Google Apps Script para alimentar el Spreadsheet.
- `Storytelling-FullVersion.mp4`: video usado en la seccion de Storytelling.

## Uso

Abrir `index.html` en el navegador. Mantener el video en la misma carpeta para que la seccion de Storytelling cargue correctamente.

La herramienta guarda la informacion de sesion en el navegador del operador mediante almacenamiento local.

Desde la version 3.4, al finalizar un Match la herramienta envia el registro del proceso a la hoja central de Google Sheets. La version 3.5 ubica la informacion del examen TECS de ILTO dentro de la etapa Sistema. La version 3.6 agrega un boton privado en el panel azul para enviar o reintentar el registro manualmente. La version 3.7 cambia el envio para que se registre como doGet en Apps Script y sea visible en Executions. La version 3.8 abre el registro en una pestana de Google para confirmar visualmente que la fila fue creada. La version 3.9 elimina el boton manual y usa ese registro visible desde Finalizar. La version 3.10 ajusta textos de Diagnostico y ordena Ambientes/TECS dentro de Sistema. La version 3.12 reorganiza el flujo Sistema/Adquisicion/Pizarra/Reto, actualiza textos e imagenes de material, agrega candados de diagnostico y mejora la pizarra de precios. La version 3.13 compacta el toolbar lateral del whiteboard y convierte la calculadora en panel flotante.
