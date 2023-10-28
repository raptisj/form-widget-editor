export type ContentProps = {
  text?: string;
  fontSize?: string;
  color?: string;
  alignment?: string;
};

export type Title = ContentProps;
type Subtitle = ContentProps;

export type HeaderProps = {
  title?: Title;
  subtitle?: Subtitle;
};

export type SubmitButton = {
  text: string;
  background: string;
};

export type Inputs = {
  firstName: {
    required: boolean;
  };
  lastName: {
    required: boolean;
  };
};

export type Checkbox = {
  enabled: boolean;
  required: boolean;
  text: string;
};

export type RadioOptions = {
  text: string;
};

export type Radio = {
  enabled: boolean;
  options: []
};

export type DropdownOptions = {
  text: string;
};

export type Dropdown = {
  enabled: boolean;
  options: [];
};

export type ExtraFields = {
  checkbox: Checkbox;
  radio: Radio;
  dropdown: Dropdown;
};

export type Settings = {
  header: HeaderProps;
  submitBtn: SubmitButton;
  inputs: Inputs;
  extraFields: ExtraFields;
};

export type SettingsList = {
  id: string;
  settings: Settings;
};
