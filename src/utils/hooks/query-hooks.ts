import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { executeRequests } from "../helpers/execute-requests";

type useQueryExecuteRequestProps = (() => Promise<any>)[] | (() => Promise<any>);
type useQueryReturn = [boolean, (requests: useQueryExecuteRequestProps) => void];

function useQuery(value?): useQueryReturn {
  const [allRequestsResolved, setAllRequestsResolved] = useState<boolean>(value);

  async function executeRequestsHandle(requests: useQueryExecuteRequestProps) {
    executeRequests(requests, (event) => setAllRequestsResolved(event))
  }

  return [allRequestsResolved, executeRequestsHandle];
}



export {
  useQuery,
  useQueryReturn,
  useQueryExecuteRequestProps
}