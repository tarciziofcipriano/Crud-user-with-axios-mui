// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from "axios-mock-adapter";

import { USER_ROUTE } from "../services/routes";
import { userData } from "./data";

const useMock = (axios: any) => {
  const mock = new MockAdapter(axios, { delayResponse: 500 });

  // api/users/user
  mock.onGet(USER_ROUTE).reply((res: any) => {
    const statusCode = !!res.headers.token ? 200 : 400;
    return [statusCode, userData];
  });
  mock.onPost(USER_ROUTE).reply(200);
  mock.onPut(USER_ROUTE).reply(200);
  mock.onDelete(USER_ROUTE).reply(200);
};

export default useMock;
