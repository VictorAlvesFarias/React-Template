import IClaimsKeys from "../../interfaces/shared/claims";

export function claimAuthentication(
    claim: IClaimsKeys | undefined | IClaimsKeys[], 
    authDisabled: boolean, 
    permissions: { [key: string]: boolean }[]
): boolean {
    if (authDisabled) return true; 

    if (!permissions || permissions.length === 0) return false;

    if (Array.isArray(claim)) {
        return claim.some(c => 
            permissions.some(p => p[c] === true)
        );
    }

    return claim !== undefined && permissions.some(p => p[claim] === true);
}
