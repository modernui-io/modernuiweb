import dynamic from "next/dynamic";

import { Skeleton } from "~/components/ui/skeleton";

export const RichTextEditor = dynamic(
  () => import("./rte").then((mod) => mod.RichTextEditorDoNotImportDirectly),
  {
    ssr: false,
    loading: () => <Skeleton className="h-32 w-full rounded-sm" />,
  },
);

export type { RichTextEditorProps } from "./rte";
