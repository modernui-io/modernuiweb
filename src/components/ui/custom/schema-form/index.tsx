import dynamic from "next/dynamic";

export const SchemaForm = dynamic(
  () =>
    import("./base-schema-form").then(
      (mod) => mod.BaseSchemaFormDoNotImportDirectly,
    ),
  {
    ssr: false,
  },
);

export { formFields } from "./form-fields";
