import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

type useQueryExecuteRequestProps = (() => Promise<any>)[] | (() => Promise<any>);
type useQueryReturn = [boolean, (requests: useQueryExecuteRequestProps) => void];

function useQuery(value?): useQueryReturn  {
  const [allRequestsResolved, setAllRequestsResolved] = useState<boolean>(value);
  const navigate = useNavigate();

  async function executeRequests(requests: useQueryExecuteRequestProps) {
    setAllRequestsResolved(false);

    if (Array.isArray(requests)) {
      await Promise.all(
        requests.map(request =>
          request()
            .catch(error => {
              setAllRequestsResolved(true);
              throw error;
            })
        )
      );
    } else {
      await requests()
        .catch(error => {
          setAllRequestsResolved(true);
          throw error;
        });
    }

    setAllRequestsResolved(true);
  }

  return [allRequestsResolved, executeRequests];
}

export {
  useQuery,
  useQueryReturn,
  useQueryExecuteRequestProps
}