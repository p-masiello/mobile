export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/musicprs/api';
// DA MODFICIARE
export const URL = {
    LOGIN: URL_BASE + '/login',
    LOGOUT: URL_BASE + '/logout',
    UPDATE_PROFILO: URL_BASE + '/utente/updateprofilo',
    EVENTI: URL_BASE + '/eventi',
    UPDATE_EVENTO: URL_BASE + '/eventi/updateevento',
    UTENTE: URL_BASE + '/utenti',
    FOTO: URL_BASE + '/foto',
    DONATORI: URL_BASE + '/eventi/genere/donatori',
    CREATORI: URL_BASE + '/eventi/creatore',

};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';
