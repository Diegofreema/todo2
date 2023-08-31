/* eslint-disable prettier/prettier */


import { H5 } from "tamagui";
import { FontWeightTokens } from "tamagui";

import { blue } from "../utils/colors";

type Props = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeightTokens;
  textAlign?: "left" | "right" | "center" | "auto" | "justify"
}

const Heading = ({ children,fontSize,fontWeight,textAlign }: Props) => {
  return (
    <H5 textAlign={textAlign} fontSize={fontSize} fontWeight={fontWeight} color={blue[5]}>{children}</H5>
  );
};

export default Heading;


