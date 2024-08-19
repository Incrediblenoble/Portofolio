// global.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    header: React.HTMLAttributes<HTMLDivElement>;
    div: React.HTMLAttributes<HTMLDivElement>;
    p: React.HTMLAttributes<HTMLParagraphElement>;
    img: React.ImgHTMLAttributes<HTMLImageElement>;
  }
}
