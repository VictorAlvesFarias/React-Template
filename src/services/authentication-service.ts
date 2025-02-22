export type RedirectType = "authenticate" | "not-required" | "logout"

export class AuthenticationService {
    public static timeoutStarted = false

    public static authenticationPipeline(
        token: string | undefined,
        currentRoute: string,
        expirationDate: Date,
        disableAuth: boolean,
        unprotectedPaths: string[],
        redirect: (event: RedirectType) => boolean | void | null | undefined
    ) {

        if (disableAuth == true) {
            return redirect("authenticate") ?? true
        }

        if (unprotectedPaths.includes(currentRoute)) {
            return redirect("not-required") ?? true
        }

        else if ((expirationDate == null || expirationDate == undefined || token == null || token == undefined)) {
            if (unprotectedPaths.includes(currentRoute)) {
                return redirect("not-required") ?? true
            }

            return redirect("logout") ?? false
        }

        const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

        if (!this.timeoutStarted) {
            this.timeoutStarted = true
            setTimeout(() => {
            }, timeDiference);

            return redirect("logout") ?? false
        }

        return redirect("authenticate") ?? true
    }
}