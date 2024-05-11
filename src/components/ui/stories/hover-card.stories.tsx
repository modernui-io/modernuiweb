import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../hover-card";

/**
 * For sighted users to preview content available behind a link.
 */
const meta: Meta<typeof HoverCard> = {
  title: "ui/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

/**
 * The default form of the hover card.
 */
export const Default: Story = {};

/**
 * Use the `openDelay` and `closeDelay` props to control the delay before the
 * hover card opens and closes.
 */
export const Instant: Story = {
  args: {
    openDelay: 0,
    closeDelay: 0,
  },
};
