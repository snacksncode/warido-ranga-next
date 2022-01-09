import Button from "@components/Button";
import { Checks, PaperPlaneTilt, Warning } from "phosphor-react";
import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import MaskedInput from "react-text-mask";
import emailjs from "@emailjs/browser";

interface Props {}

interface FormData {
  firmName: string;
  email: string;
  phone: string;
  message: string;
  captchaResponse: string;
}

const ContactForm: FC<Props> = ({}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    console.log("submitted", data);
    const submitemail = prompt("submit?");
    if (submitemail == null) return;

    // setTimeout(() => {
    //   setIsSent(true);
    //   setIsSubmitting(false);
    //   reset();
    // }, 2000);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          firmName: data.firmName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER
      )
      .then(
        (_result) => {
          setIsSubmitting(false);
          setIsSent(true);
          reset();
        },
        (_error) => {
          setIsError(true);
          setIsSubmitting(false);
          reset();
        }
      );
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input_wrapper}>
        <label htmlFor="firmName">Nazwa firmy</label>
        <input id="firmName" {...register("firmName", { required: true })} />
        {errors.firmName?.type === "required" && <p className={styles.error}>To pole jest obowiązkowe</p>}
      </div>
      <div className={styles.row}>
        <div className={styles.input_wrapper}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            {...register("email", {
              required: true,
              pattern:
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.error}>Potrzebujemy twojego e-mail&apos;a aby się z tobą skontaktować</p>
          )}
          {errors.email?.type === "pattern" && <p className={styles.error}>Ten adres e-mail jest nieprawidłowy</p>}
        </div>

        <div className={styles.input_wrapper}>
          <label htmlFor="phone">Telefon</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true, pattern: /\(\+48\)\s\d{3}\s\d{3}\s\d{3}/ }}
            render={({ field: { onChange, onBlur } }) => (
              <MaskedInput
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                mask={["(", "+", "4", "8", ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/]}
                showMask={true}
              />
            )}
          />
          {errors.phone?.type === "required" && (
            <p className={styles.error}>Potrzebujemy twój number telefonu aby się z tobą skontaktować</p>
          )}
          {errors.phone?.type === "pattern" && <p className={styles.error}>Ten numer jest niepoprawny</p>}
        </div>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="message">Informacje dodatkowe</label>
        <textarea id="message" {...register("message")} />
      </div>
      <div id="captcha_container" />
      <Button className={styles.button} loading={isSubmitting} type="submit" size="small" icon={PaperPlaneTilt}>
        Wyślij wiadomość
      </Button>
      {isSent === true && (
        <p className={styles.success}>
          <Checks weight="bold" size={30} /> E-Mail został wysłany. Skontaktujemy się z tobą w najbliższym czasie
        </p>
      )}
      {isError === true && (
        <p className={styles.sent_error}>
          <Warning weight="bold" size={30} />
          Wystąpił błąd w trakcie wysyłania twojej wiadomości. Spróbuj jeszcze raz później lub skontaktuj się z nami
          bezpośrednio
        </p>
      )}
    </form>
  );
};

export default ContactForm;
