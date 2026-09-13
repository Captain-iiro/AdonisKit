/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'password.forgot.show': {
    methods: ["GET","HEAD"],
    pattern: '/forgot-password',
    tokens: [{"old":"/forgot-password","type":0,"val":"forgot-password","end":""}],
    types: placeholder as Registry['password.forgot.show']['types'],
  },
  'password.forgot.store': {
    methods: ["POST"],
    pattern: '/forgot-password',
    tokens: [{"old":"/forgot-password","type":0,"val":"forgot-password","end":""}],
    types: placeholder as Registry['password.forgot.store']['types'],
  },
  'password.reset.show': {
    methods: ["GET","HEAD"],
    pattern: '/reset-password',
    tokens: [{"old":"/reset-password","type":0,"val":"reset-password","end":""}],
    types: placeholder as Registry['password.reset.show']['types'],
  },
  'password.reset.store': {
    methods: ["POST"],
    pattern: '/reset-password',
    tokens: [{"old":"/reset-password","type":0,"val":"reset-password","end":""}],
    types: placeholder as Registry['password.reset.store']['types'],
  },
  'verify_email.show': {
    methods: ["GET","HEAD"],
    pattern: '/verify-email',
    tokens: [{"old":"/verify-email","type":0,"val":"verify-email","end":""}],
    types: placeholder as Registry['verify_email.show']['types'],
  },
  'verify_email.send': {
    methods: ["POST"],
    pattern: '/verify-email/notification',
    tokens: [{"old":"/verify-email/notification","type":0,"val":"verify-email","end":""},{"old":"/verify-email/notification","type":0,"val":"notification","end":""}],
    types: placeholder as Registry['verify_email.send']['types'],
  },
  'verify_email.confirm': {
    methods: ["GET","HEAD"],
    pattern: '/verify-email/confirm',
    tokens: [{"old":"/verify-email/confirm","type":0,"val":"verify-email","end":""},{"old":"/verify-email/confirm","type":0,"val":"confirm","end":""}],
    types: placeholder as Registry['verify_email.confirm']['types'],
  },
  'confirm_password.show': {
    methods: ["GET","HEAD"],
    pattern: '/confirm-password',
    tokens: [{"old":"/confirm-password","type":0,"val":"confirm-password","end":""}],
    types: placeholder as Registry['confirm_password.show']['types'],
  },
  'confirm_password.store': {
    methods: ["POST"],
    pattern: '/confirm-password',
    tokens: [{"old":"/confirm-password","type":0,"val":"confirm-password","end":""}],
    types: placeholder as Registry['confirm_password.store']['types'],
  },
  'dashboard.index': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [{"old":"/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['dashboard.index']['types'],
  },
  'settings.profile': {
    methods: ["GET","HEAD"],
    pattern: '/settings/profile',
    tokens: [{"old":"/settings/profile","type":0,"val":"settings","end":""},{"old":"/settings/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['settings.profile']['types'],
  },
  'settings.update_profile': {
    methods: ["PATCH"],
    pattern: '/settings/profile',
    tokens: [{"old":"/settings/profile","type":0,"val":"settings","end":""},{"old":"/settings/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['settings.update_profile']['types'],
  },
  'settings.password': {
    methods: ["GET","HEAD"],
    pattern: '/settings/password',
    tokens: [{"old":"/settings/password","type":0,"val":"settings","end":""},{"old":"/settings/password","type":0,"val":"password","end":""}],
    types: placeholder as Registry['settings.password']['types'],
  },
  'settings.update_password': {
    methods: ["PATCH"],
    pattern: '/settings/password',
    tokens: [{"old":"/settings/password","type":0,"val":"settings","end":""},{"old":"/settings/password","type":0,"val":"password","end":""}],
    types: placeholder as Registry['settings.update_password']['types'],
  },
  'settings.appearance': {
    methods: ["GET","HEAD"],
    pattern: '/settings/appearance',
    tokens: [{"old":"/settings/appearance","type":0,"val":"settings","end":""},{"old":"/settings/appearance","type":0,"val":"appearance","end":""}],
    types: placeholder as Registry['settings.appearance']['types'],
  },
  'settings.destroy': {
    methods: ["POST"],
    pattern: '/settings/account/delete',
    tokens: [{"old":"/settings/account/delete","type":0,"val":"settings","end":""},{"old":"/settings/account/delete","type":0,"val":"account","end":""},{"old":"/settings/account/delete","type":0,"val":"delete","end":""}],
    types: placeholder as Registry['settings.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
