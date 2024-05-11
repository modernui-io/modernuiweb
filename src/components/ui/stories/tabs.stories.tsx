import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

/**
 * A set of layered sections of content—known as tab panels—that are displayed
 * one at a time.
 */
const meta: Meta<typeof Tabs> = {
  title: "ui/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    defaultValue: "account",
    className: "w-96",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Make changes to your account here. Click save when you&#39;re done.
        </p>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <div className="flex">
          <Button>Save changes</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Change your password here. After saving, you&#39;ll be logged out.
        </p>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </div>
        <div className="flex">
          <Button>Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * The default form of the tabs.
 */
export const Default: Story = {};
