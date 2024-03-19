import dotenv from 'dotenv';
import { IAuthenticateAnalyticName } from '../modules/analytics/analytics.types';

dotenv.config();

export const MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const FRONT_URL = process.env.FRONT_URL || '';

export const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL || '';
export const POSTMARK_TOKEN = process.env.POSTMARK_TOKEN || '';

export const PageAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.pageVisit,
  IAuthenticateAnalyticName.registerUser,
  IAuthenticateAnalyticName.wallCrashesModal,
  IAuthenticateAnalyticName.wallCrashesContent,
  IAuthenticateAnalyticName.wallCrashesPortal,
  IAuthenticateAnalyticName.authClicked,
  IAuthenticateAnalyticName.analyticsAuthenticate,
];

export const SocialNetworkSessionAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.startSessionFacebook,
  IAuthenticateAnalyticName.startSessionGoogle,
  IAuthenticateAnalyticName.startSession,
  IAuthenticateAnalyticName.swgStartSession,
  IAuthenticateAnalyticName.swgRegisterUser,
  IAuthenticateAnalyticName.startSessionApple,
];

export const SocialNetworkAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.facebookClicked,
  IAuthenticateAnalyticName.appleClicked,
  IAuthenticateAnalyticName.gmailClicked,
];

export const APP_SECRET = process.env.APP_SECRET || '';

export const DO_SPACES_ENDPOINT = process.env.DO_SPACES_ENDPOINT || '';
export const DO_SPACES_KEY = process.env.DO_SPACES_KEY || '';
export const DO_SPACES_SECRET = process.env.DO_SPACES_SECRET || '';
export const DO_SPACES_REGION = process.env.DO_SPACES_REGION || '';
export const DO_SPACES_BUCKET = process.env.DO_SPACES_BUCKET || '';
export const DO_SPACES_ROUTE = process.env.DO_SPACES_ROUTE || '';

export const VANGUARDIA_CATEGORIES: { section: string; subsections: string[] }[] = [
  {
    section: 'noticias',
    subsections: ['mexico', 'mundo'],
  },
  {
    section: 'autor',
    subsections: [],
  },
  {
    section: 'informacion',
    subsections: [],
  },
  {
    section: 'coahuila',
    subsections: [
      'saltillo',
      'torreon',
      'monclova',
      'acuna',
      'sabinas',
      'piedras-negras',
      'historias-del-saltillo',
      'semanario',
    ],
  },
  {
    section: 'opinion',
    subsections: ['cartones', 'politicon', 'autores'],
  },
  {
    section: 'dinero',
    subsections: [],
  },
  {
    section: 'deportes',
    subsections: [
      'futbol',
      'beisbol',
      'basquetbol',
      'automovilismo',
      'futbol-americano',
      'tenis',
      'saraperos',
    ],
  },
  {
    section: 'show',
    subsections: ['cine', 'artes'],
  },
  {
    section: 'tech',
    subsections: ['gadgets', 'videojuegos'],
  },
  {
    section: 'circulo-de-oro-2023',
    subsections: [],
  },
  {
    section: 'vida',
    subsections: [
      'bienestar',
      'hogar',
      'nutricion',
      'gourmet',
      'viajes',
      'lgbtttiq',
      'sexo',
      'viral',
    ],
  },
  {
    section: 'motor',
    subsections: ['autos', 'suvs', 'pick-up', 'motos'],
  },
  {
    section: 'newsletters',
    subsections: ['newsletter-vanguardia', 'newsletter-semanario'],
  },
];

export const ANIMAL_POLITICO_CATEGORIES: { section: string; subsections: string[] }[] = [
  {
    section: 'politica',
    subsections: [],
  },
  {
    section: 'elecciones-2024',
    subsections: ['presidencia', 'cdmx', 'estados', 'congreso', 'picalenguas'],
  },
  {
    section: 'seguridad',
    subsections: [],
  },
  {
    section: 'sociedad',
    subsections: [],
  },
  {
    section: 'salud',
    subsections: [],
  },
  {
    section: 'verificacion-de-hechos',
    subsections: ['fact-checking', 'te-explico', 'desinformacion'],
  },
  {
    section: 'tendencias',
    subsections: ['entretenimiento', 'actualidad', 'estilo-de-vida', 'ciencia-tecnologia'],
  },
  {
    section: 'estados',
    subsections: [],
  },
  {
    section: 'genero-y-diversidad',
    subsections: [],
  },
  {
    section: 'internacional',
    subsections: [],
  },
  {
    section: 'analisis',
    subsections: ['autores', 'organizaciones', 'invitades'],
  },
  {
    section: 'hablemos-de',
    subsections: ['finanzas', 'empresas', 'sustentabilidad', 'educacion'],
  },
];
