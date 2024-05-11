import { createUniqueFieldSchema } from "@ts-react/form";
import { z } from "zod";

import { AddressSchema } from "./fields/address-field";

export const formFields = {
  /**
   * example of how to handle more complex fields
   */
  address: createUniqueFieldSchema(AddressSchema, "address"),
  advanced_rich_text_editor: createUniqueFieldSchema(
    z.string(),
    "advanced_rich_text_editor",
  ),
  /**
   * adapts to native switch on native, and native checkbox on web
   */
  boolean: z.boolean(),
  /**
   * switch field on all platforms
   */
  boolean_switch: createUniqueFieldSchema(z.boolean(), "boolean_switch"),
  /**
   * checkbox field on all platforms
   */
  boolean_checkbox: createUniqueFieldSchema(z.boolean(), "boolean_checkbox"),
  checkbox_group: createUniqueFieldSchema(
    z.array(z.string()),
    "checkbox_group",
  ),
  date_input: createUniqueFieldSchema(z.date(), "date_input"),
  file_input: createUniqueFieldSchema(z.string(), "file_input"),
  rich_text_editor: createUniqueFieldSchema(z.string(), "rich_text_editor"),
  multi_select: createUniqueFieldSchema(z.array(z.string()), "multi_select"),
  /**
   * input that takes number
   */
  number: z.number(),
  password: createUniqueFieldSchema(z.string(), "password"),
  pin: createUniqueFieldSchema(z.string(), "pin"),
  radio_group: createUniqueFieldSchema(z.string(), "radio_group"),
  /**
   * make sure to pass options={} to props for this
   */
  select: createUniqueFieldSchema(z.string(), "select"),
  switch_group: createUniqueFieldSchema(z.array(z.string()), "switch_group"),
  tags_input: createUniqueFieldSchema(z.array(z.string()), "tags_input"),
  text: z.string(),
  textarea: createUniqueFieldSchema(z.string(), "textarea"),
};
