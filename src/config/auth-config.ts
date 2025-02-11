import Cookies from "js-cookie"

const AUTH = {
  AUTHORIZE_NOT_REQUIRED: [
    "/login",
    "/signup",
  ],
  DISABLE_AUTH: true,
  STARTER_LENGHT_HISTORY: window.history.length,
  DEFAULT_AUTHORIZATION_TOKEN:  () =>  `Bearer ${Cookies.get("token")}`
}

export {
  AUTH
}