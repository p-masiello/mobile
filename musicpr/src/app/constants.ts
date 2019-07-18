export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/musicprs/api';
export const STORE_PATH = URL_BASE + '/store';
export const UPDATE_PATH = URL_BASE + '/update';
export const DELETE_PATH = URL_BASE + '/delete';

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
    CHATLIST: URL_BASE + '/chatlist',
    CHAT: URL_BASE + '/chat',
    SIGNIN: URL_BASE + '/signin',
    STORE: {
        MESSAGE: STORE_PATH + '/message',
        CHAT: STORE_PATH + '/chat',
        POSITION: STORE_PATH + '/position'
    },

};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';
