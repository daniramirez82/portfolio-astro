import TextInput from "../UI/inputs/TextInput";
import TextAreaInput from "../UI/inputs/TextAreaInput";
import ButtonMain from "../UI/buttons/ButtonMain";
import Send from "../UI/icons/Send";
import { signal } from "@preact/signals";
import { sendNewContact } from "../../db/dataBase";
import { validMailRegex } from "../../helpers/validators";
import Modal from "../UI/modal/modal";

//TODO make a form state with signal to manage the form validation.
//manage 3 inputs name, email, message.

const formInitialState = {
  name: "",
  email: "",
  message: "",
  emailError: "Type a valid email",
};
const formState = signal(formInitialState);

const ContactArea = () => {
  const handleInputChange = (e) => {

    const { value, name } = e.target;
    formState.value = { ...formState.value, [name]: value };

    if (name === "email") {
      formState.value.emailError = validMailRegex.test(value)
        ? ""
        : "Type a valid email";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendNewContact(formState.value);
    formState.value = formInitialState;
  };
  return (
    <div class="flex justify-center w-full mb-40" id="Contact">
      <div class="lg:basis-1/4"></div>
      <div class="mt-10 lg:basis-2/4 flex flex-col w-full max-w-md">
        <h3 class="text-3xl w-full pl-2 mt-2 mb-4 tracking-tighter text-stone-900 font-bold mx-auto items-start">
          I'm ready to talk...
        </h3>
        <form class="relative">
          <p>{formState.value.name}</p>
          <p>{formState.value.email}</p>
          <p>{formState.value.emailError}</p>
          <p>{formState.value.message}</p>
          <TextInput
            name="name"
            type="text"
            label="Name"
            value={formState.value.name}
            onInput={handleInputChange}
          />
          <TextInput
            name="email"
            type="email"
            label="Email"
            value={formState.value.email}
            onInput={handleInputChange}
          />
          <small>{formState.value.emailError}</small>
          <TextAreaInput
            label="Message"
            name="message"
            placeholder=""
            rows={5}
            value={formState.value.message}
            onInput={handleInputChange}
          />
        </form>
        {/* <div>
        <div class="g-recaptcha" data-sitekey="6Lc53I0lAAAAAC9Pw8V4412fhTs_PZxekH8UEOlL"></div>
        </div> */}
        <div class="w-fit self-end pr-2" onClick={handleSubmit}>
          <ButtonMain label="Send">
            <Send />
          </ButtonMain>
        </div>
      </div>
      <div class="lg:basis-1/4">
        <img
          class="hidden lg:block lg:mt-28"
          src="/images/hand2.png"
          alt="hand"
        />
      </div>
      <Modal />
    </div>
    
  );
};

export default ContactArea;
