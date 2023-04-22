import TextInput from "../UI/inputs/TextInput";
import TextAreaInput from "../UI/inputs/TextAreaInput";
import ButtonMain from "../UI/buttons/ButtonMain";
import Send from "../UI/icons/Send";
import { signal, useSignal } from "@preact/signals";
import { sendNewContact } from "../../db/dataBase";
import { validMailRegex } from "../../helpers/validators";
import Modal from "../UI/modal/modal";

//TODO make a form state with signal to manage the form validation.
//manage 3 inputs name, email, message.

const formInitialState = {
  name: "",
  email: "",
  message: "",
  emailError: " ",
  filledForm: false,
};

const formState = signal(formInitialState);

const ContactArea = () => {

  const showThanksModal = useSignal(false);
  const showInvalidFormModal = useSignal(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    formState.value.filledForm = false;
    formState.value = { ...formState.value, [name]: value };

    if (name === "email") {
      formState.value.emailError = validMailRegex.test(value)
        ? "Valid email! :)"
        : "Type a valid email";
    }

    if (
      formState.value.name.length > 0 &&
      formState.value.email.length > 0 &&
      formState.value.message.length > 0 &&
      formState.value.emailError.includes(":)")
    ) {
      formState.value.filledForm = true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.value.filledForm) {
      console.log("invalid form");
      showInvalidFormModal.value = true;
      return;
    }

    const response = await sendNewContact(formState.value);

    if (response) {
      showThanksModal.value = true;
    }

    formState.value = formInitialState;
  };

  return (
    <>
      {showInvalidFormModal.value && (
        <Modal
          title="Upsss"
          message="You have to fill all the inputs."
          alert={true}
          onClick={() => (showInvalidFormModal.value = false)}
        />
      )}

      {showThanksModal.value && (
        <Modal
          title="Thank you!."
          message={"I will contact you back as soon as I receive this message!"}
          onClick={() => (showThanksModal.value = false)}
        />
      )}
      <div class="flex justify-center w-full mb-40" id="Contact">
        <div class="lg:basis-1/4"></div>
        <div class="mt-10 lg:basis-2/4 flex flex-col w-full max-w-md">
          <h3 class="text-3xl w-full pl-2 mt-2 mb-4 tracking-tighter text-stone-900 font-bold mx-auto items-start">
            I'm ready to talk...
          </h3>
          <form class="relative">
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
            <small
              className={`pl-3 ${
                !formState.value.emailError.includes(":)")
                  ? "text-red-300"
                  : "text-green-300"
              }`}
            >
              {formState.value.emailError}
            </small>
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
          <div class="w-fit self-end pr-2">
            <ButtonMain
              label="Send"
              onClick={handleSubmit}
            >
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
      </div>
    </>
  );
};

export default ContactArea;
