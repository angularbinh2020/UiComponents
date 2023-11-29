import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FirstStory: Story = {
  args: {
    title: "Test",
    children: <b>fun</b>,
  },
};
