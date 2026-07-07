export const STANDALONE_MOBILE_EDITOR_PATH = "/mobile-edit.html";

export const getStandaloneMobileEditorHref = (memoId: string, returnTo = "/") => {
  const params = new URLSearchParams({
    memoId,
    returnTo,
  });
  return `${STANDALONE_MOBILE_EDITOR_PATH}#${params.toString()}`;
};

export const openStandaloneMobileEditor = (memoId: string, returnTo = "/") => {
  window.location.href = getStandaloneMobileEditorHref(memoId, returnTo);
};
