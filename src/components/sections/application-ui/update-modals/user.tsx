import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function UpdateUserModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 md:min-w-[40rem]">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
          <h3 className="text-lg font-semibold">Update user</h3>
        </div>
        <form action="#">
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="username" className="mb-2 block">
                Username
              </Label>
              <Input
                defaultValue="leslie.linvingston"
                id="username"
                name="username"
                placeholder="Ex. bonnie.green"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email
              </Label>
              <Input
                defaultValue="leslie@company.com"
                id="email"
                name="email"
                placeholder="bonnie@company.com"
                required
                type="email"
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="•••••••••"
                required
                type="password"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="mb-2 block">
                Confirm password
              </Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                placeholder="•••••••••"
                required
                type="password"
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button type="submit" className="mt-4 [&>span]:text-sm">
              Update user
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
