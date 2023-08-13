export const AddInputMessage = (input: string, message: string) => {
  const primaryDiv = document.getElementById(input);
  const inputField = document.getElementById(`${input}Input`);

  if (inputField?.classList.contains("is-danger")) {
    // @ts-ignore
    primaryDiv.lastChild.innerHTML = message;
    return;
  } else {
    inputField?.classList.add(
      "is-danger",
      "has-background-danger",
      "has-text-white"
    );
    const helpElement = document.createElement("p");
    helpElement.id = `help-${input}`;
    helpElement.classList.add("help", "has-text-white");
    helpElement.innerHTML = message;
    primaryDiv?.appendChild(helpElement);
  }
};

export const ClearInput = (input: string) => {
  const inputField = document.getElementById(`${input}Input`);
  const helpText = document.getElementById(`help-${input}`);

  inputField?.classList.remove(
    "is-danger",
    "has-background-danger",
    "has-text-white"
  );

  helpText?.remove();
};
