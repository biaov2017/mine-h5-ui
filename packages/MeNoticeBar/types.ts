/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";

// 当前 vue props
export type Props = PublicProps<{
  list: string | string[];
  scroll: string;
  loop: boolean;
  delay: number;
  preappendIcon: string;
  preappendColor: string;
  appendIcon: string;
  appendColor: string;
  height: number;
  radius: string | number;
  background: string;
  color: string;
}>;