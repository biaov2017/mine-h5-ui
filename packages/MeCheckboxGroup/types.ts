/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";

// 当前 vue props
export type Props = PublicProps<
  {
    modelValue: (string | number)[];
    direction: string;
  },
  {
    max?: number | undefined;
  }
>;