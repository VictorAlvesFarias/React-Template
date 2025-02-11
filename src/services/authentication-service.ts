import { AUTH } from "../config/auth-config"
import { loginService } from "./login-service"
import Cookies from "js-cookie"

class AuthenticationService {
    public static timeoutStarted = false

    public static authenticationPipeline(token: string | undefined, currentRoute: string, expirationDate: Date, redirect: (event: "authenticate" | "not-required" | "logout") => void) {
        if (((expirationDate == null || expirationDate == undefined) || token == null || token == undefined) && AUTH.DISABLE_AUTH == false) {
            if (!AUTH.AUTHORIZE_NOT_REQUIRED.includes(currentRoute)) {
                redirect("logout")
            }
        }
        else if (token) {
            const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

            if (AUTH.AUTHORIZE_NOT_REQUIRED.includes(currentRoute)) {
                redirect("not-required")
            }

            if (!this.timeoutStarted) {
                this.timeoutStarted = true
                setTimeout(() => {
                }, timeDiference);

                redirect("logout")
            }

            else {
                redirect("authenticate")
            }
        }
    }
}

export { AuthenticationService }