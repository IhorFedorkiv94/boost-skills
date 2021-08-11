// Payload that allows simple callbacks to the component
// may be useful for instance to reset form on success
// something like this https://github.com/formium/formik/issues/446#issuecomment-499675993
// looks much more error-prone so let's use callbacks from time to time
export interface PayloadWithCallbacks<T> {
  data: T;
  onSuccess?: () => void;
  onError?: () => void;
}

export interface GenericAction<T = void> {
  type: string;
  payload: T;
}
