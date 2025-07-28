declare module "reactjs-tiptap-editor" {
  import React from "react";
  const RichTextEditor: React.ComponentType<any>;
  export default RichTextEditor;
  export const BaseKit: any;
  export type { Editor } from "@tiptap/core";
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      RichTextEditor: any;
    }
  }
}

declare module "reactjs-tiptap-editor/mermaid" {
  export const Mermaid: any;
}

declare module "reactjs-tiptap-editor/attachment" {
  export const Attachment: any;
}

declare module "reactjs-tiptap-editor/blockquote" {
  export const Blockquote: any;
}

declare module "reactjs-tiptap-editor/bold" {
  export const Bold: any;
}

declare module "reactjs-tiptap-editor/bulletlist" {
  export const BulletList: any;
}

declare module "reactjs-tiptap-editor/clear" {
  export const Clear: any;
}

declare module "reactjs-tiptap-editor/code" {
  export const Code: any;
}

declare module "reactjs-tiptap-editor/codeblock" {
  export const CodeBlock: any;
}

declare module "reactjs-tiptap-editor/color" {
  export const Color: any;
}

declare module "reactjs-tiptap-editor/multicolumn" {
  export const ColumnActionButton: any;
}

declare module "reactjs-tiptap-editor/emoji" {
  export const Emoji: any;
}

declare module "reactjs-tiptap-editor/exportpdf" {
  export const ExportPdf: any;
}

declare module "reactjs-tiptap-editor/exportword" {
  export const ExportWord: any;
}

declare module "reactjs-tiptap-editor/fontfamily" {
  export const FontFamily: any;
}

declare module "reactjs-tiptap-editor/fontsize" {
  export const FontSize: any;
}

declare module "reactjs-tiptap-editor/formatpainter" {
  export const FormatPainter: any;
}

declare module "reactjs-tiptap-editor/heading" {
  export const Heading: any;
}

declare module "reactjs-tiptap-editor/highlight" {
  export const Highlight: any;
}

declare module "reactjs-tiptap-editor/history" {
  export const History: any;
}

declare module "reactjs-tiptap-editor/horizontalrule" {
  export const HorizontalRule: any;
}

declare module "reactjs-tiptap-editor/iframe" {
  export const Iframe: any;
}

declare module "reactjs-tiptap-editor/image" {
  export const Image: any;
}

declare module "reactjs-tiptap-editor/imagegif" {
  export const ImageGif: any;
}

declare module "reactjs-tiptap-editor/importword" {
  export const ImportWord: any;
}

declare module "reactjs-tiptap-editor/indent" {
  export const Indent: any;
}

declare module "reactjs-tiptap-editor/italic" {
  export const Italic: any;
}

declare module "reactjs-tiptap-editor/lineheight" {
  export const LineHeight: any;
}

declare module "reactjs-tiptap-editor/link" {
  export const Link: any;
}

declare module "reactjs-tiptap-editor/mention" {
  export const Mention: any;
}

declare module "reactjs-tiptap-editor/moremark" {
  export const MoreMark: any;
}

declare module "reactjs-tiptap-editor/orderedlist" {
  export const OrderedList: any;
}

declare module "reactjs-tiptap-editor/searchandreplace" {
  export const SearchAndReplace: any;
}

declare module "reactjs-tiptap-editor/slashcommand" {
  export const SlashCommand: any;
}

declare module "reactjs-tiptap-editor/strike" {
  export const Strike: any;
}

declare module "reactjs-tiptap-editor/table" {
  export const Table: any;
}

declare module "reactjs-tiptap-editor/tableofcontent" {
  export const TableOfContents: any;
}

declare module "reactjs-tiptap-editor/tasklist" {
  export const TaskList: any;
}

declare module "reactjs-tiptap-editor/textalign" {
  export const TextAlign: any;
}

declare module "reactjs-tiptap-editor/textunderline" {
  export const TextUnderline: any;
}

declare module "reactjs-tiptap-editor/video" {
  export const Video: any;
}

declare module "reactjs-tiptap-editor/textdirection" {
  export const TextDirection: any;
}

declare module "reactjs-tiptap-editor/katex" {
  export const Katex: any;
}

declare module "reactjs-tiptap-editor/drawer" {
  export const Drawer: any;
}

declare module "reactjs-tiptap-editor/excalidraw" {
  export const Excalidraw: any;
}

declare module "reactjs-tiptap-editor/twitter" {
  export const Twitter: any;
}

declare module "reactjs-tiptap-editor/style.css" {
  const content: string;
  export default content;
}
