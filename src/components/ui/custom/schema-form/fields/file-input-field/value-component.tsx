import { ReactSVG, type FunctionComponent } from "react";

import { IconFileText, IconPhoto } from "@tabler/icons-react";

interface IconProps
  extends Partial<Omit<React.SVGProps<SVGSVGElement>, "stroke">> {
  size?: string | number;
  stroke?: string | number;
}
type Icon = FunctionComponent<IconProps>;

function Value({
  file,
  showPreview,
  handleRemoveFile,
}: {
  file: File | null;
  showPreview?: boolean;
  handleRemoveFile?: (file: File) => void;
}) {
  if (!file) return null;
  let Icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<Icon>
  >;

  if (file.type.includes("image")) {
    Icon = IconPhoto;
  } else {
    Icon = IconFileText;
  }
  const fileImage = showPreview ? URL.createObjectURL(file) : null;

  if (fileImage) {
    return (
      <div className="flex items-center space-x-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={fileImage} alt={file.name} className="h-8 w-8 object-cover" />
        <span
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: 200,
            display: "inline-block",
          }}
        >
          {file.name}
        </span>
        <button type="button" onClick={() => handleRemoveFile?.(file)}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="text-md rounded-xs flex items-center gap-2 bg-secondary px-2 py-1">
      <Icon size={14} style={{ marginRight: 5 }} />
      <span
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: 200,
          display: "inline-block",
        }}
      >
        {file.name}
      </span>
      <button type="button" onClick={() => handleRemoveFile?.(file)}>
        Delete
      </button>
    </div>
  );
}

const ValueComponent = ({
  value,
  showPreview,
  handleRemoveFile,
}: {
  value: File | File[];
  showPreview?: boolean;
  handleRemoveFile?: (file: File) => void;
}) => {
  if (Array.isArray(value)) {
    return (
      <div className="flex items-center gap-2 py-2">
        {value.map((file, index) => (
          <Value
            file={file}
            key={index}
            showPreview={showPreview}
            handleRemoveFile={handleRemoveFile}
          />
        ))}
      </div>
    );
  }

  return (
    <Value
      file={value}
      showPreview={showPreview}
      handleRemoveFile={handleRemoveFile}
    />
  );
};

export default ValueComponent;
