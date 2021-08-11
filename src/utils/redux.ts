// eslint-disable-next-line no-shadow
export enum ASYNC_TYPES {
  INIT = "INIT",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  FAILURE_SILENT = "FAILURE_SILENT",
  RESET_STATUS = "RESET_STATUS"
}

// type with fields from enum
export type AsyncType = {
  [key in keyof typeof ASYNC_TYPES]: string;
};

export interface AsyncAction<TRequestPayload, TResponsePayload> {
  init: (payload: TRequestPayload) => {
    type: string;
    payload: TRequestPayload;
  };
  pending: (payload: void) => {type: string};
  success: (payload: TResponsePayload) => {
    type: string;
    payload: TResponsePayload;
  };
  failure: (payload: string) => {type: string; payload: string}; // TODO: maybe not string but error
  failureSilent: (payload: void) => {type: string};
  resetStatus: (payload: void) => {type: string};
}

export const ERROR_PAYLOAD = "ERROR_PAYLOAD";

/**
 * Create type for sync operation;
 */
export const createReduxType = (TYPE: string): string => `${TYPE}`;

/**
 * Create type for async operation;
 */
export const createReduxAsyncType = (TYPE: string): AsyncType => ({
  INIT: `${createReduxType(TYPE)}_${ASYNC_TYPES.INIT}`,
  PENDING: `${createReduxType(TYPE)}_${ASYNC_TYPES.PENDING}`,
  SUCCESS: `${createReduxType(TYPE)}_${ASYNC_TYPES.SUCCESS}`,
  FAILURE: `${createReduxType(TYPE)}_${ASYNC_TYPES.FAILURE}`,
  FAILURE_SILENT: `${createReduxType(TYPE)}_${ASYNC_TYPES.FAILURE_SILENT}`,
  RESET_STATUS: `${createReduxType(TYPE)}_${ASYNC_TYPES.RESET_STATUS}`
});

/**
 * Redux 'async-action' creator;
 */
export const createReduxAsyncAction = <Req, Resp>(type: AsyncType): AsyncAction<Req, Resp> => ({
  init: (payload: Req) => ({type: type[ASYNC_TYPES.INIT], payload}),
  pending: (payload: void) => ({type: type[ASYNC_TYPES.PENDING], payload}),
  success: (payload: Resp) => ({type: type[ASYNC_TYPES.SUCCESS], payload}),
  failure: (payload: string) => ({type: type[ASYNC_TYPES.FAILURE], payload}),
  failureSilent: (payload: void) => ({
    type: type[ASYNC_TYPES.FAILURE_SILENT],
    payload
  }),
  resetStatus: (payload: void) => ({
    type: type[ASYNC_TYPES.RESET_STATUS],
    payload
  })
});
