import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";

const categories = [
  { id: "apple", name: "Apple", count: 56, checked: false },
  { id: "fitbit", name: "Fitbit", count: 56, checked: false },
  { id: "dell", name: "Dell", count: 56, checked: false },
  { id: "asus", name: "Asus", count: 97, checked: true },
  { id: "logitech", name: "Logitech", count: 97, checked: true },
  { id: "msi", name: "MSI", count: 97, checked: true },
  { id: "bosch", name: "Bosch", count: 176, checked: true },
  { id: "sony", name: "Sony", count: 234, checked: false },
  { id: "samsung", name: "Samsung", count: 76, checked: true },
  { id: "canon", name: "Canon", count: 49, checked: false },
  { id: "microsoft", name: "Microsoft", count: 45, checked: false },
  { id: "razor", name: "Razor", count: 49, checked: false },
  { id: "emetec", name: "Emetec", count: 16, checked: false },
  { id: "nvidia", name: "Nvidia", count: 45, checked: false },
  { id: "hp", name: "HP", count: 234, checked: false },
  { id: "benq", name: "BenQ", count: 45, checked: false },
  { id: "rockstar", name: "Rockstar", count: 49, checked: false },
];

export function DefaultSearchModal() {
  return (
    <div className="m-5 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Toggle modal
          </Button>
        </DialogTrigger>
        <DialogContent className="relative z-50 translate-y-0 rounded-lg">
          <div className="flex items-start justify-between rounded-t">
            <Text level={"lg"} className="font-normal text-muted-foreground">
              Filter by category
            </Text>
            <DialogClose asChild>
              <span className="sr-only">Close modal</span>
            </DialogClose>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {categories.map((category) => (
              <div className="flex items-center" key={category.id}>
                <Checkbox
                  id={category.id}
                  defaultChecked={category.checked}
                  className="size-4 rounded border-muted-foreground/60 bg-muted-foreground/80 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:ring-offset-muted-foreground/10 dark:focus:ring-primary-600"
                />
                <Label
                  htmlFor={category.id}
                  className="ml-2 text-sm font-medium"
                >
                  {category.name} ({category.count})
                </Label>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4 rounded-b dark:border-muted-foreground/30">
            <Button className="rounded-lg px-5 py-2.5 text-center text-sm font-medium">
              Apply
            </Button>
            <Button className="rounded-lg border border-muted-foreground/70 bg-background px-5 py-2.5 text-sm font-medium text-black hover:bg-muted-foreground/80 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/70 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:text-muted-foreground dark:hover:bg-muted-foreground/20 dark:hover:text-white dark:focus:ring-muted-foreground/20">
              Reset
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
