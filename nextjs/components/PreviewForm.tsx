"use client";

import { useStore } from "@/store";
import { RadioOptions, DropdownOptions } from "@/types/Settings";
import { addAsterisk } from "@/utils";

export default function PreviewForm() {
  const formSettings = useStore((state) => state.formSettings);

  const {
    header: { title, subtitle },
    submitBtn,
    inputs: { firstName, lastName },
    extraFields: { checkbox, radio, dropdown },
  } = formSettings;

  return (
    <div className="form__wrapper">
      <form id="form" className="form">
        <header className="form__header">
          <h2 className="form__header-title">{title.text}</h2>
          <p className="form__header-subtitle">{subtitle.text}</p>
        </header>
        <label className="form__label">
          {addAsterisk("First name", firstName.required)}
          <input type="text" className="form__input" readOnly />
        </label>
        <label className="form__label">
          {addAsterisk("Last name", lastName.required)}
          <input type="text" className="form__input" readOnly />
        </label>
        <label className="form__label">
          {addAsterisk("Email", true)}
          <input type="email" className="form__input" readOnly />
        </label>

        <hr className="form__divider" />

        {radio.enabled ? (
          <div className="form__radio">
            {radio.options.length
              ? radio.options.map((r: RadioOptions, i: number) => {
                  return (
                    <label className="form__radio-label" key={i}>
                      {r.text}
                      <input type="radio" name="radio" checked={i === 0} />
                      <span className="form__radio-checkmark"></span>
                    </label>
                  );
                })
              : null}
          </div>
        ) : null}

        {dropdown.enabled ? (
          <div className="form__dropdown">
            <div className="form__dropdown-custom-select">
              <select>
                <option value="0">Select:</option>
                {dropdown.options.length &&
                  dropdown.options.map((d: DropdownOptions) => {
                    return (
                      <option value={d.text} key={d.text}>
                        {d.text}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        ) : null}

        {checkbox.enabled ? (
          <label className="form__checkbox">
            {checkbox.text}
            <input type="checkbox" required={checkbox.required} />
            <span className="form__checkbox-checkmark"></span>
          </label>
        ) : null}

        <button type="submit" className="form__submit-btn">
          {submitBtn.text}
        </button>
      </form>
    </div>
  );
}
