type Scss = { [className: string]: string | Scss }
declare module "*.scss" {
    const styles: Scss;
    export = styles;
}

declare module "*.svg" {
    const content: string;
    export = content;
}
