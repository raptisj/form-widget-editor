import { keysToCssVars } from "@/constants";
import {
  Settings,
  SubmitButton,
  ContentProps,
  HeaderProps,
} from "@/types/Settings";

export const changeCssVars = (
  settings: SubmitButton | ContentProps,
  key: string
) => {
  const root = document.querySelector(":root") as HTMLElement;

  root.style.setProperty(
    keysToCssVars[key][Object.keys(settings)[0]],
    Object.values(settings)[0] as string
  );
};

export const setCssVars = (
  settings: Pick<Settings, "header" | "submitBtn">
) => {
  const root = document.querySelector(":root") as HTMLElement;
  const {
    header: { title, subtitle },
    submitBtn,
  } = settings as any;

  root.style.setProperty("--title-color", title.color);
  root.style.setProperty("--title-font-size", title.fontSize);
  root.style.setProperty("--title-text-align", title.alignment);

  root.style.setProperty("--subtitle-color", subtitle.color);
  root.style.setProperty("--subtitle-font-size", subtitle.fontSize);
  root.style.setProperty("--subtitle-text-align", subtitle.alignment);

  root.style.setProperty("--submit-bg-color", submitBtn.background);
};

type StringsToObjectsProps = {
  string: string;
  lengthOfArray: number;
};
export const stringToArrayOfObjects = ({
  string,
  lengthOfArray,
}: StringsToObjectsProps) => {
  return string
    .split(",")
    .map((r: string, i: number) => {
      if (i <= lengthOfArray - 1) {
        return {
          text: r.replace(/\s/g, ""),
        };
      }
    })
    .filter(Boolean);
};

export const addAsterisk = (string: string, condition: boolean) =>
  condition ? string + "*" : string;
