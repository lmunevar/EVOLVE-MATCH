const SHEET_ID = '1wIe_6uZ4kvQnIN0gVqxQy3ZWta3hwti7aKZKJzLxvrw';

const HEADERS = [
  'Fecha',
  'Hora',
  'Ciudad',
  'Editora',
  'Ejecutivo',
  'Celular Ejecutivo',
  'Evaluado',
  'Celular Evaluado',
  'Email Evaluado',
  'Profesion',
  'Empresa',
  'Cargo',
  'Modalidad',
  'Resultado Diagnostico',
  'Resultado Final',
  'Decision Final',
  'Plan Seleccionado',
  'Confirmaciones Completas',
  'Version Herramienta',
  'Notas'
];

function doGet(e) {
  if (e && e.parameter && e.parameter.payload) {
    return registrarPayload_(e.parameter.payload);
  }
  return responder_({ ok: true, message: 'EVOLVE MATCH logger active' });
}

function doPost(e) {
  const raw = (e && e.postData && e.postData.contents) ||
    (e && e.parameter && e.parameter.payload) ||
    '{}';
  return registrarPayload_(raw);
}

function registrarPayload_(raw) {
  let lock;
  try {
    lock = LockService.getScriptLock();
    lock.waitLock(10000);

    const data = parsePayload_(raw);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    asegurarEncabezados_(sheet);

    const now = new Date();
    const tz = 'America/Bogota';
    sheet.appendRow([
      Utilities.formatDate(now, tz, 'yyyy-MM-dd'),
      Utilities.formatDate(now, tz, 'HH:mm:ss'),
      data.ciudad || '',
      data.editora || '',
      data.ejecutivo || '',
      data.celularEjecutivo || '',
      data.nombreEvaluado || '',
      data.celularEvaluado || '',
      data.emailEvaluado || '',
      data.profesion || '',
      data.empresa || '',
      data.cargo || '',
      data.modalidad || '',
      data.resultadoDiagnostico || '',
      data.resultadoFinal || '',
      data.decisionFinal || '',
      data.planSeleccionado || '',
      data.confirmacionesCompletas || '',
      data.versionHerramienta || '',
      data.notas || ''
    ]);

    return responder_({ ok: true, row: sheet.getLastRow() });
  } catch (error) {
    return responder_({ ok: false, error: String(error) });
  } finally {
    if (lock) lock.releaseLock();
  }
}

function parsePayload_(raw) {
  if (!raw) return {};
  if (typeof raw === 'object') return raw;
  return JSON.parse(raw);
}

function asegurarEncabezados_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(HEADERS);
}

function responder_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
