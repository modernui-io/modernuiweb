import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const formSchema = z.object({
  name: z.string(),
});

export function DeleteConfirmationWithInputField() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="flex items-center justify-between p-4 sm:px-5">
          <h3 className="text-lg font-semibold leading-none">Are you sure?</h3>
        </div>
        <Text className="border-y border-orange-200 bg-orange-100 p-4 text-orange-700 dark:border-gray-600 dark:bg-gray-700 dark:text-orange-300 sm:px-5">
          Unexpected bad things can happen if you don’t read this!
        </Text>
        <div className="p-4 sm:p-5">
          <Text className="text-gray-500 dark:text-gray-400">
            This action&nbsp;
            <span className="font-semibold">CANNOT</span>
            &nbsp;be undone. This will permanently delete the&nbsp;
            <span className="font-semibold">bergside/flowbite-library</span>
            &nbsp;file, wiki, issues and comments, and remove all collaborator
            assosiations.
          </Text>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4 mt-2">
                <Label
                  htmlFor="repository-name-input"
                  className="mb-2 block text-sm font-medium"
                >
                  Please type in the name of the repository to confirm.
                </Label>
                <Input
                  id="repository-name-input"
                  placeholder="Ex. bergside/flowbite-library"
                  required
                  {...form.register("name")}
                />
              </div>
              <Button type="submit" size="sm" className="w-full bg-red-500">
                I understand, delete this repository
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
