import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";

import { formFields, SchemaForm } from "~/components/ui/custom/schema-form";

const createProgramSchema = z.object({
  title: formFields.text
    .min(10, "Title must be at least 10 Characters.")
    .max(100, "Title must be less than 100 characters.")
    .describe("Program Title // Please enter a title"),
  description: formFields.textarea.describe(
    "Program Description // Please enter a description",
  ),
});

/**
 * A custom schema form component.
 */
const meta: Meta<typeof SchemaForm> = {
  title: "custom/SchemaForm",
  component: SchemaForm,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof SchemaForm>;

/**
 * All Variants of the schema form.
 */
export const AllVariants: Story = {
  render: (args) => {
    const handleCreateProgramFormSubmit = async (
      values: z.infer<typeof createProgramSchema>,
    ) => {
      console.log("CreateProgramForm onSubmit", values);
    };
    return (
      <SchemaForm
        {...args}
        schema={createProgramSchema}
        defaultValues={{
          title: "",
          description: "",
        }}
        onSubmit={handleCreateProgramFormSubmit}
        formProps={{
          wrapperClassName: "gap-6 max-w-lg",
          showSubmitButton: true,
        }}
      />
    );
  },
};
