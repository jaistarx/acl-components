import React, { CSSProperties } from "react";
import { IAclIconProps } from "../../types/aclIconEntity";

const AclIcon = ({ style, src, alt, crossOrigin, ...props }: IAclIconProps) => {
  const defaultStyle: CSSProperties = {
    /* Give styles if required */
  };
  const imageStyle: CSSProperties = { ...defaultStyle, ...style };

  return (
    <>
      <img
        style={imageStyle}
        src={src}
        alt={alt ?? "icon"}
        {...props}
        crossOrigin={crossOrigin ?? ""}
      />
    </>
  );
};

export default AclIcon;
