function parseHtmlTemplate(settings) {
  const { header, submitBtn, inputs, extraFields } = settings;

  const { title, subtitle } = header;
  const { firstName, lastName } = inputs;
  const { checkbox, radio, dropdown } = extraFields;

  return (html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
     
      <style>
    
    .form__header-title {
        text-align: ${title.alignment};
        font-size: ${title.fontSize};
        color: ${title.color};
    }

    .form__header-subtitle {
        text-align: ${subtitle.alignment};
        font-size: ${subtitle.fontSize};
        color: ${subtitle.color};
        line-height: 1.1;
    }

    .form__submit-btn {
        background: ${submitBtn.background}; 
    }
      </style>
    </head>
    <body>
        <div class="form__wrapper">
        <form id="form" class="form">
            <header class="form__header">
                <h2 class="form__header-title">${title.text}</h2>
                <p class="form__header-subtitle">${subtitle.text}</p>
            </header>
            <label class="form__label">
                ${firstName.required ? "First name*" : "First name"}
                <input type="text" onchange="onChangeFirstName(this.value)" class="form__input" required="${
                  firstName.required
                }" />
                </label>
                
                <label class="form__label">
                ${lastName.required ? "Last name*" : "Last name"}
                <input type="text" onChange="onChangeLastName(this.value)" class="form__input" required="${
                  lastName.required
                }" />
            </label>
    
            <label class="form__label">
                Email*
                <input type="email" onChange="onChangeEmail(this.value)" class="form__input" required />
            </label>

            ${
              radio.enabled || dropdown.enabled
                ? ` <hr class="form__divider" />`
                : ""
            } 

            ${radio.enabled ? `${radioComponent(radio)}` : ""}

            ${dropdown.enabled ? `${dropdownComponent(dropdown)}` : ""}

            ${checkbox.enabled ? `${checkboxComponent(checkbox)}` : ""}

            <button type="submit" class="form__submit-btn">${
              submitBtn.text
            }</button>
        </form>
        </div>
      <script>
        let email = "";
        let firstName = "";
        let lastName = "";
  
        function onChangeEmail(val) {
          console.log(val, "email");
          email = val;
        }
  
        function onChangeFirstName(val) {
          console.log(val, "first name");
          firstName = val;
        }
  
        function onChangeLastName(val) {
          console.log(e.target.value, "last name");
          lastName = val
        }
  
        const form = document.getElementById("form");
        form.addEventListener("submit", function (event) {
          event.preventDefault();
  
        });
      </script>
    </body>
  </html>
  `);
}

const radioComponent = (settings) => {
  return `   
      <div class="form__radio">
      ${settings.options
        .map((r, i) => {
          return `
          <label class="form__radio-label">
              ${r.text}
              <input type="radio"  name="radio" />
              <span class="form__radio-checkmark"></span>
          </label>
      `;
        })
        .join("")}
      </div>
      `;
};

const dropdownComponent = (settings) => {
  return `
    <div class="form__dropdown">
    <div class="form__dropdown-custom-select">
        <select>
        <option value="0">Select car:</option>
        ${settings.options.map((d) => {
          return `
            <option value=${d.text}>${d.text}</option>
            `;
        })}
        </select>
    </div>
</div>
`;
};

const checkboxComponent = (settings) => {
  return `
    <label class="form__checkbox">
        ${settings.text}
        <input type="checkbox" required="${settings.required}" />
        <span class="form__checkbox-checkmark"></span>
    </label>`;
};

const getWidgetPath = (id) => `/widgets/${id}.html`;

module.exports = { parseHtmlTemplate, getWidgetPath };
