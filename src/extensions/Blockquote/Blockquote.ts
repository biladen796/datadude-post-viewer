import type { BlockquoteOptions as TiptapBlockquoteOptions } from "@tiptap/extension-blockquote";
import { Blockquote as TiptapBlockquote } from "@tiptap/extension-blockquote";

import { ActionButton } from "@/components";
import type { GeneralOptions } from "@/types";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { BlockquoteView } from "@/extensions/Blockquote/components/BlockquoteView";

export interface BlockquoteOptions extends TiptapBlockquoteOptions, GeneralOptions<BlockquoteOptions> {}

export const Blockquote = /* @__PURE__ */ TiptapBlockquote.extend<BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "blockquote",
      },
      button: ({ editor, t }: any) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleBlockquote(),
          isActive: () => editor.isActive("blockquote") || false,
          disabled: !editor.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: t("editor.blockquote.tooltip"),
        },
      }),
    };
  },
  addAttributes() {
    return {
      quoteContent: {
        default: "",
        parseHTML: (element) => {
          return element.textContent || "";
        },
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(BlockquoteView);
  },
});
