import { NodeViewWrapper } from "@tiptap/react";
import React from "react";
import AvatarQuote from "./avatar.png";

interface BlockquoteViewProps {
  children: React.ReactNode;
}

export const BlockquoteView: React.FC<BlockquoteViewProps> = (props: any) => {
  return (
    <NodeViewWrapper className="blockquote">
      <div className="blockquote-container">
        <div className="blockquote-header">
          <div className="richtext-flex richtext-justify-center richtext-flex-1">
            <img src={AvatarQuote} alt="Avatar" className="blockquote-avatar" />
          </div>
        </div>
        <div className="richtext-italic">&ldquo; {props?.node?.attrs?.quoteContent || ""} &rdquo;</div>
      </div>
    </NodeViewWrapper>
  );
};
