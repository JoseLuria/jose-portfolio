import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./ContactSection.module.scss";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import { type ContactForm, contactFormSchema } from "../../validation/contact";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const sendEmail = async (data: ContactForm) => {
    toast.success("Mensaje enviado");
    await emailjs.send("service_qhx3mf2", "template_991okhn", data, {
      publicKey: "PZ0Fhcdo4PFS9pRUk",
    });
    reset();
  };

  return (
    <section id="contact" className={styles.contactSectionContainer}>
      <Title size="h2">Contáctame</Title>
      <Paragraph>Puedes contactarme vía email</Paragraph>

      <form
        onSubmit={handleSubmit(sendEmail)}
        className={styles.contactForm}
        action=""
      >
        <fieldset>
          <label htmlFor="name">
            Nombre
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <input
            className={errors.name ? styles.error : ""}
            id="name"
            type="text"
            {...register("name")}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">
            Correo
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <input
            className={errors.email ? styles.error : ""}
            id="email"
            type="text"
            {...register("email")}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="message">
            Mensaje
            {errors.message && <span>{errors.message.message}</span>}
          </label>
          <textarea
            className={errors.message ? styles.error : ""}
            id="message"
            rows={5}
            {...register("message")}
          />
        </fieldset>

        <button disabled={isSubmitting} className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
