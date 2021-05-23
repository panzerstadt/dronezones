import React, { useEffect } from "react";
import { useSoftShadow } from "./useSoftShadow";
import { TWGrayColors, twGrayToHex } from "./utils";

interface Props {
  additionalClasses?: string;
  roundedClass:
    | "rounded"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl";
  distance: number;
  bgColor: TWGrayColors;
  bordered?: boolean;
  inset?: boolean;
}

/**
 *  thanks to neumorphism: https://neumorphism.io/
 *
 */
export const Container: React.FC<Props> = ({
  children,
  additionalClasses,
  roundedClass,
  distance,
  bgColor,
  bordered,
  inset,
}) => {
  const blur = distance * 2;
  const [softShadowStyles, setColor] = useSoftShadow({
    color: twGrayToHex[bgColor],
    blur: blur,
    lightSource: { positionX: distance, positionY: distance, angle: 200 },
  });

  useEffect(() => {
    setColor(twGrayToHex[bgColor]);
  }, [bgColor]);

  const Outside: React.FC = ({ children }) => (
    <div
      className={`
      rounded h-full w-full overflow-hidden
      ${bordered && " border-4 border-gray-50"}
      ${roundedClass || ""} 
      ${additionalClasses || ""}
  `}
      style={{
        ...softShadowStyles.outside,
      }}
    >
      {children}
    </div>
  );

  const Inside: React.FC = ({ children }) => (
    <div className="w-full h-full" style={{ ...softShadowStyles.inside }}>
      {children}
    </div>
  );

  return <Outside>{inset ? <Inside>{children}</Inside> : children}</Outside>;
};
