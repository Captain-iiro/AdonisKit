import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'password.forgot.show': { paramsTuple?: []; params?: {} }
    'password.forgot.store': { paramsTuple?: []; params?: {} }
    'password.reset.show': { paramsTuple?: []; params?: {} }
    'password.reset.store': { paramsTuple?: []; params?: {} }
    'verify_email.show': { paramsTuple?: []; params?: {} }
    'verify_email.send': { paramsTuple?: []; params?: {} }
    'verify_email.confirm': { paramsTuple?: []; params?: {} }
    'confirm_password.show': { paramsTuple?: []; params?: {} }
    'confirm_password.store': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'settings.profile': { paramsTuple?: []; params?: {} }
    'settings.update_profile': { paramsTuple?: []; params?: {} }
    'settings.password': { paramsTuple?: []; params?: {} }
    'settings.update_password': { paramsTuple?: []; params?: {} }
    'settings.appearance': { paramsTuple?: []; params?: {} }
    'settings.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'password.forgot.show': { paramsTuple?: []; params?: {} }
    'password.reset.show': { paramsTuple?: []; params?: {} }
    'verify_email.show': { paramsTuple?: []; params?: {} }
    'verify_email.confirm': { paramsTuple?: []; params?: {} }
    'confirm_password.show': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'settings.profile': { paramsTuple?: []; params?: {} }
    'settings.password': { paramsTuple?: []; params?: {} }
    'settings.appearance': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'password.forgot.show': { paramsTuple?: []; params?: {} }
    'password.reset.show': { paramsTuple?: []; params?: {} }
    'verify_email.show': { paramsTuple?: []; params?: {} }
    'verify_email.confirm': { paramsTuple?: []; params?: {} }
    'confirm_password.show': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'settings.profile': { paramsTuple?: []; params?: {} }
    'settings.password': { paramsTuple?: []; params?: {} }
    'settings.appearance': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'password.forgot.store': { paramsTuple?: []; params?: {} }
    'password.reset.store': { paramsTuple?: []; params?: {} }
    'verify_email.send': { paramsTuple?: []; params?: {} }
    'confirm_password.store': { paramsTuple?: []; params?: {} }
    'settings.destroy': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'settings.update_profile': { paramsTuple?: []; params?: {} }
    'settings.update_password': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}