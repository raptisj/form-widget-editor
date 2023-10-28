import { create } from "zustand";
import { changeCssVars, setCssVars } from "./utils";
import {
  ContentProps,
  Checkbox,
  SubmitButton,
  Radio,
  Dropdown,
} from "./types/Settings";
import { InputProps } from "@chakra-ui/react";

const initialState = {
  header: {
    title: {
      text: "Form Title",
      fontSize: "22px",
      color: "#333333",
      alignment: "left",
    },
    subtitle: {
      text: "Form Subtitle",
      fontSize: "16px",
      color: "#4d4d4d",
      alignment: "left",
    },
  },
  submitBtn: {
    text: "Submit",
    background: "#7d91fc",
  },
  inputs: {
    firstName: { required: false },
    lastName: { required: false },
  },
  extraFields: {
    checkbox: { enabled: false, required: false, text: "I am a checkbox" },
    radio: {
      enabled: false,
      options: [],
    },
    dropdown: {
      enabled: false,
      options: [],
    },
  },
};

type FormSettings = typeof initialState;
export const useStore = create<{
  formSettings: FormSettings;
  setSettingsState: (s: FormSettings) => void;
  setTitleSettings: (s: ContentProps) => void;
  setSubtitleSettings: (s: ContentProps) => void;
  setInputSettings: (f: string, s: InputProps) => void;
  setSubmitBtnSettings: (s: SubmitButton) => void;
  setCheckboxSettings: (s: Checkbox) => void;
  setRadioSettings: (s: Radio) => void;
  setDropdownSettings: (s: Dropdown) => void;
}>()((set) => ({
  formSettings: initialState,
  setSettingsState: (settings: typeof initialState) => {
    setCssVars(settings);

    return set(() => ({
      formSettings: {
        ...settings,
      },
    }));
  },

  setTitleSettings: (settings: ContentProps) => {
    changeCssVars(settings, "title");

    set((state) => ({
      formSettings: {
        ...state.formSettings,
        header: {
          ...state.formSettings.header,
          title: {
            ...state.formSettings.header.title,
            ...settings,
          },
        },
      },
    }));
  },

  setSubtitleSettings: (settings: ContentProps) => {
    changeCssVars(settings, "subtitle");

    set((state) => ({
      formSettings: {
        ...state.formSettings,
        header: {
          ...state.formSettings.header,
          subtitle: {
            ...state.formSettings.header.subtitle,
            ...settings,
          },
        },
      },
    }));
  },

  setInputSettings: (field: string, settings: InputProps) =>
    set((state) => ({
      formSettings: {
        ...state.formSettings,
        inputs: {
          ...state.formSettings.inputs,
          [field]: {
            ...settings,
          },
        },
      },
    })),

  setSubmitBtnSettings: (settings: SubmitButton) => {
    changeCssVars(settings, "submitBtn");

    set((state) => ({
      formSettings: {
        ...state.formSettings,
        submitBtn: {
          ...state.formSettings.submitBtn,
          ...settings,
        },
      },
    }));
  },

  setCheckboxSettings: (settings: Checkbox) =>
    set((state) => ({
      formSettings: {
        ...state.formSettings,
        extraFields: {
          ...state.formSettings.extraFields,
          checkbox: {
            ...settings,
          },
        },
      },
    })),

  setRadioSettings: (settings: Radio) =>
    set((state) => ({
      formSettings: {
        ...state.formSettings,
        extraFields: {
          ...state.formSettings.extraFields,
          radio: {
            ...settings,
          },
        },
      },
    })),

  setDropdownSettings: (settings: Dropdown) =>
    set((state) => ({
      formSettings: {
        ...state.formSettings,
        extraFields: {
          ...state.formSettings.extraFields,
          dropdown: {
            ...settings,
          },
        },
      },
    })),
}));
