import { boolean } from "zod";
import { useQueryExecuteRequestProps } from "../hooks/query-hooks";

export async function executeRequests(requests: useQueryExecuteRequestProps, resolveState: (event: boolean) => any) {
    resolveState(false);

    if (Array.isArray(requests)) {
        await Promise.all(
            requests.map(request =>
                request()
                    .catch(error => {
                        resolveState(true);
                        throw error;
                    })
            )
        );
    } else {
        await requests()
            .catch(error => {
                resolveState(true);
                throw error;
            });
    }
}