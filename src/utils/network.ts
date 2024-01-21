import {closePopup} from '../store/features/popup/popupSlice';

import {showPopup} from '../utils/helpers';
import {httpStatusCodes} from './httpRequestCodes';
import {store} from '../store/features/store';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

// Message used in case of server error
const serverErrorMessage = 'An error has occurred, please try again later.';

// Message used in case of an network error
export const networkErrorMessage =
  'Network request failed, verify your connection and try again.';

// Popup error title
const errorTitle = 'validation.error';

export type ErrorType = FetchBaseQueryError | Error | unknown | any;

/**
 * check if error is form rtk query
 * @param error - Error to check
 * @returns {true} - Returns is rtk query error type
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Handle all kind of ws errors (network)
 * @param error - Error to handle it can be an error (throwed by WS) or error throwed in handle logic
 * @param isGlobal - Boolean to specify if the popup error is global
 * @returns {string} - Returns the error message
 */
/**
 * Handle all kind of ws errors (network)
 * @param error - Error to handle it can be an error (throwed by WS) or error throwed in handle logic
 * @param isGlobal - Boolean to specify if the popup error is global
 * @returns {string} - Returns the error message
 */
export const handleError = (
  error: Error | unknown,
  isGlobal: boolean = true,
): string => {
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      return networkErrorMessage;
    } else if (error?.status === httpStatusCodes.UNAUTHORIZED) {
      handleErrorPopUp(error, isGlobal);
      return 'session.description';
    }
    return serverErrorMessage;
  }
  return serverErrorMessage;
};
/**
 * Shows an error popup
 * @param confirmCallback - Callback to execute when pressing popup button (It can be a side logic to error)
 */
export const isNetworkErrorString = (error: string): boolean => {
  return error === networkErrorMessage;
};

/**
 * Shows an error popup
 * @param confirmCallback - Callback to execute when pressing popup button (It can be a side logic to error)
 */
export const isNetworkError = (error: any): boolean => {
  return (
    'error' in error &&
    error?.error?.toString() === 'TypeError: Network request failed'
  );
};
/**
 * Shows an error popup
 * @param error - Error to handle it can be an error (throwed by WS) or error throwed in handle logic
 * @param isGlobal - Boolean to specify if the popup error is global
 * @param confirmCallback - Callback to execute when pressing popup button (It can be a side logic to error)
 */

export const handleErrorPopUp = (
  error: Error | unknown,
  isGlobal: boolean = true,
  confirmCallback?: (() => void) | (() => Promise<void>),
  confirmText: string = 'actions.ok',
  cancelText?: string,
): void => {
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      showPopup(store.dispatch, {
        title: 'Network error',
        message: 'TypeError: Network request failed',
        isGlobal,
        confirmCallback,
        confirmText,
        cancelText,
      });
    } else if (error?.status) {
      if (error.status === httpStatusCodes.UNAUTHORIZED) {
        showPopup(store.dispatch, {
          title: 'Unauthorized',
          message: '401',
          isGlobal,
          confirmCallback: () => {
            store.dispatch(closePopup());
          },
        });
      } else {
        showPopup(store.dispatch, {
          title: errorTitle,
          message: serverErrorMessage,
          isGlobal,
          confirmCallback,
          confirmText,
          cancelText,
        });
      }
    } else {
      showPopup(store.dispatch, {
        title: 'Server error',
        message: serverErrorMessage,
        isGlobal,
        confirmCallback,
        cancelText,
        confirmText,
      });
    }
  } else {
    showPopup(store.dispatch, {
      title: errorTitle,
      message: serverErrorMessage,
      isGlobal,
      confirmCallback,
      cancelText,
      confirmText,
    });
  }
};
