import isString from "lodash/isString";
import mergeWith from "lodash/mergeWith";

import { tw } from "~/lib/utils";

import type { RichTextEditorContext } from "./rte-context";

export const defaultClassNames: RichTextEditorContext["classNames"] = {
  root: tw`rte-root`,
  content: tw`rte-content`,
  control: tw`rte-control`,
  controlsGroup: tw`rte-controls-group`,
  toolbar: tw`rte-toolbar`,
  linkEditor: tw`rte-link-editor`,
  linkEditorInput: tw`rte-link-editor-input`,
  linkEditorSave: tw`rte-link-editor-save`,
  linkEditorDropdown: tw`rte-link-editor-dropdown`,
  linkEditorExternalControl: tw`rte-link-editor-external-control`,
};

export function mergeClassNames(
  defaults: RichTextEditorContext["classNames"],
  overrides?: RichTextEditorContext["classNames"],
): RichTextEditorContext["classNames"] {
  return mergeWith({}, defaults, overrides, (objValue, srcValue) => {
    if (isString(objValue) && isString(srcValue)) {
      return `${objValue} ${srcValue}`.trim();
    }
    return srcValue;
  });
}
