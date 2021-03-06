import Button from "@components/Button";
import { Checks, PaperPlaneTilt, Warning } from "phosphor-react";
import { FC, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import MaskedInput from "react-text-mask";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "@components/Alert";

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
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSent(false);
    setIsError(false);
    const captchaCode = await recaptchaRef.current?.executeAsync();
    if (!captchaCode) return;
    setIsSubmitting(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          firmName: data.firmName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          "g-recaptcha-response": captchaCode,
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
        {errors.firmName?.type === "required" && <p className={styles.error}>To pole jest obowi??zkowe</p>}
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
            <p className={styles.error}>Potrzebujemy twojego e-mail&apos;a aby si?? z tob?? skontaktowa??</p>
          )}
          {errors.email?.type === "pattern" && <p className={styles.error}>Ten adres e-mail jest nieprawid??owy</p>}
        </div>

        <div className={styles.input_wrapper}>
          <label htmlFor="phone">Telefon</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true, pattern: /\(\+48\)\s\d{3}\s\d{3}\s\d{3}/ }}
            render={({ field: { onChange, onBlur } }) => (
              <MaskedInput
                id="phone"
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                mask={["(", "+", "4", "8", ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/]}
                showMask={true}
              />
            )}
          />
          {errors.phone?.type === "required" && (
            <p className={styles.error}>Potrzebujemy tw??j number telefonu aby si?? z tob?? skontaktowa??</p>
          )}
          {errors.phone?.type === "pattern" && <p className={styles.error}>Ten numer jest niepoprawny</p>}
        </div>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="message">Informacje dodatkowe</label>
        <textarea id="message" {...register("message")} />
      </div>
      <Button className={styles.button} loading={isSubmitting} type="submit" size="small" icon={PaperPlaneTilt}>
        Wy??lij wiadomo????
      </Button>
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} />
      {isSent === true && (
        <Alert className={styles.success} icon={Checks}>
          E-Mail zosta?? wys??any. Skontaktujemy si?? z tob?? w najbli??szym czasie
        </Alert>
      )}
      {isError === true && (
        <Alert className={styles.sent_error} icon={Warning}>
          Wyst??pi?? b????d w trakcie wysy??ania twojej wiadomo??ci. Spr??buj jeszcze raz p????niej lub skontaktuj si?? z nami
          bezpo??rednio
        </Alert>
      )}
    </form>
  );
};

export default ContactForm;
