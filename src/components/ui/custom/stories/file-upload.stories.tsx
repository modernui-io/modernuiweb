import { useState } from "react";
import Image from "next/image";

import type { Meta, StoryObj } from "@storybook/react";
import type { DropzoneOptions } from "react-dropzone";

import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "~/components/ui/custom/file-upload";

import { Button } from "../../button";

/**
 * A custom file upload component.
 */
const meta: Meta<typeof FileUploader> = {
  title: "custom/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof FileUploader>;

/**
 * The default form of the file uploader.
 */
export const Default: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[] | null>(null);
    const dropZoneConfig = {
      accept: {
        "image/*": [".jpg", ".jpeg", ".png"],
      },
      multiple: true,
      maxFiles: 4,
      maxSize: 1 * 1024 * 1024,
    } satisfies DropzoneOptions;
    return (
      <FileUploader
        {...args}
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative max-w-xs space-y-1"
      >
        <FileInput className="w-fit ">
          <Button variant={"outline"}>Upload a file</Button>
        </FileInput>
        <FileUploaderContent className="flex h-48 flex-row flex-wrap items-center gap-2">
          {files?.map((file, i) => (
            <FileUploaderItem
              key={i}
              index={i}
              className="size-20 overflow-hidden rounded-md p-0"
              aria-roledescription={`file ${i + 1} containing ${file.name}`}
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                height={80}
                width={80}
                className="size-20 p-0"
              />
            </FileUploaderItem>
          ))}
        </FileUploaderContent>
      </FileUploader>
    );
  },

  // args: {
  //   value: null,
  //   reSelect: false,
  //   dropzoneOptions: {},
  // },
};
