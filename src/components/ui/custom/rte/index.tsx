import dynamic from "next/dynamic";

import { Skeleton } from "~/components/ui/skeleton";

export const RichTextEditor = dynamic(
  () => import("./rte").then((mod) => mod.RichTextEditorDoNotImportDirectly),
  {
    ssr: false,
    loading: () => <Skeleton className="rounded-xs h-32 w-full" />,
  },
);

export type { RichTextEditorProps } from "./rte";
