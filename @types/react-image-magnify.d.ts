declare module "react-image-magnify" {
    import { FunctionComponent } from "react";
  
    interface MagnifyProps {
      smallImage: {
        alt: string;
        isFluidWidth?: boolean;
        src: string;
        width?: number;
        height?: number;
      };
      largeImage: {
        src: string;
        width: number;
        height: number;
      };
      enlargedImageContainerDimensions?: {
        width: string;
        height: string;
      };
    }
  
    const ReactImageMagnify: FunctionComponent<MagnifyProps>;
    export default ReactImageMagnify;
  }
  