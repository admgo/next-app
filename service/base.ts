import type { ResponseError } from "./fetch";

import { base } from "./fetch";

import { asyncRunSafe } from "@/utils";
import { basePath } from "@/utils/var";

const TIME_OUT = 100000;

export type IOtherOptions = {
  isAPI?: boolean;
  isAuthURL?: boolean;
  bodyStringify?: boolean;
  needAllResponseContent?: boolean;
  deleteContentType?: boolean;
  silent?: boolean;
  onData?: IOnData; // for stream
  onThought?: IOnThought;
  onFile?: IOnFile;
  onMessageEnd?: IOnMessageEnd;
  onMessageReplace?: IOnMessageReplace;
  onError?: IOnError;
  onCompleted?: IOnCompleted; // for stream
  getAbortController?: (abortController: AbortController) => void;

  onWorkflowStarted?: IOnWorkflowStarted;
  onWorkflowFinished?: IOnWorkflowFinished;
  onNodeStarted?: IOnNodeStarted;
  onNodeFinished?: IOnNodeFinished;
  onIterationStart?: IOnIterationStarted;
  onIterationNext?: IOnIterationNext;
  onIterationFinish?: IOnIterationFinished;
  onNodeRetry?: IOnNodeRetry;
  onParallelBranchStarted?: IOnParallelBranchStarted;
  onParallelBranchFinished?: IOnParallelBranchFinished;
  onTextChunk?: IOnTextChunk;
  onTTSChunk?: IOnTTSChunk;
  onTTSEnd?: IOnTTSEnd;
  onTextReplace?: IOnTextReplace;
  onLoopStart?: IOnLoopStarted;
  onLoopNext?: IOnLoopNext;
  onLoopFinish?: IOnLoopFinished;
  onAgentLog?: IOnAgentLog;
};

const baseFetch = base;

export const request = async <T>(
  url: string,
  options = {},
  otherOptions?: IOtherOptions,
) => {
  try {
    const otherOptionsForBaseFetch = otherOptions || {};
    const [err, resp] = await asyncRunSafe<T>(
      baseFetch(url, options, otherOptionsForBaseFetch),
    );

    if (err === null) return resp;
    const errResp: Response = err as any;

    if (errResp.status === 401) {
      const [parseErr, errRespData] = await asyncRunSafe<ResponseError>(
        errResp.json(),
      );
      const loginUrl = `${globalThis.location.origin}${basePath}/signin`;

      if (parseErr) {
        globalThis.location.href = loginUrl;

        return Promise.reject(err);
      }
      // special code
      const { code, message } = errRespData;

      // webapp sso
      if (code === "web_app_access_denied") {
        requiredWebSSOLogin(message, 403);

        return Promise.reject(err);
      }
      if (code === "web_sso_auth_required") {
        removeAccessToken();
        requiredWebSSOLogin();

        return Promise.reject(err);
      }
      if (code === "unauthorized_and_force_logout") {
        localStorage.removeItem("console_token");
        localStorage.removeItem("refresh_token");
        globalThis.location.reload();

        return Promise.reject(err);
      }
      const { isPublicAPI = false, silent } = otherOptionsForBaseFetch;

      if (isPublicAPI && code === "unauthorized") {
        removeAccessToken();
        globalThis.location.reload();

        return Promise.reject(err);
      }
      if (code === "init_validate_failed" && IS_CE_EDITION && !silent) {
        Toast.notify({ type: "error", message, duration: 4000 });

        return Promise.reject(err);
      }
      if (code === "not_init_validated" && IS_CE_EDITION) {
        globalThis.location.href = `${globalThis.location.origin}${basePath}/init`;

        return Promise.reject(err);
      }
      if (code === "not_setup" && IS_CE_EDITION) {
        globalThis.location.href = `${globalThis.location.origin}${basePath}/install`;

        return Promise.reject(err);
      }

      // refresh token
      const [refreshErr] = await asyncRunSafe(
        refreshAccessTokenOrRelogin(TIME_OUT),
      );

      if (refreshErr === null)
        return baseFetch<T>(url, options, otherOptionsForBaseFetch);
      if (location.pathname !== `${basePath}/signin` || !IS_CE_EDITION) {
        globalThis.location.href = loginUrl;

        return Promise.reject(err);
      }
      if (!silent) {
        Toast.notify({ type: "error", message });

        return Promise.reject(err);
      }
      globalThis.location.href = loginUrl;

      return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  } catch (error) {
    console.error(error);

    return Promise.reject(error);
  }
};
