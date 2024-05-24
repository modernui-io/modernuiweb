import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function FooterWithActionSelect() {
  return (
    <footer className="flex items-center justify-between rounded-lg bg-background p-4 shadow md:p-6 xl:p-8">
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 dark:text-gray-400 xl:text-center">
          <span className="font-semibold">1/150</span>
          &nbsp;items selected
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select action" />
          </SelectTrigger>
          <SelectContent>
            {[
              { value: "all", label: "Select All" },
              { value: "archive", label: "Archive" },
              { value: "edit", label: "Edit" },
              { value: "delete", label: "Delete" },
            ].map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button className="text-xs">Apply</Button>
      </div>
    </footer>
  );
}
