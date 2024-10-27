import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";
import clsx from "clsx";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .min(5, "Email must be at least 5 characters long")
    .max(254, "Email must be no more than 254 characters long")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ),
  bookingdate: Yup.date()
    .min(new Date(), "Booking date cannot be earlier than tomorrow")
    .required("Booking date is required"),
  comment: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  bookingdate: "",
  comment: "",
};

const BookForm = () => {
  const nameFieldId = useId();
  const emailField = useId();
  const bookingField = useId();
  const commentField = useId();

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <p className={css.title}>Book your campervan now</p>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={Schema}
      >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <Field
              placeholder="Name*"
              type="text"
              name="name"
              id={nameFieldId}
              className={css.input}
            />
            <ErrorMessage
              name="name"
              component="p"
              className={css.customError}
            />
          </div>
          <div className={css.wrapper}>
            <Field
              placeholder="Email*"
              type="text"
              name="email"
              id={emailField}
              className={css.input}
            />
            <ErrorMessage
              name="email"
              component="p"
              className={css.customError}
            />
          </div>
          <div className={css.wrapper}>
            <Field
              placeholder="Booking date"
              type="date"
              name="bookingdate"
              id={bookingField}
              className={css.input}
            />
            <ErrorMessage
              name="bookingdate"
              component="p"
              className={css.customError}
            />
          </div>
          <div className={css.wrapper}>
            <Field
              as="textarea"
              placeholder="Comment"
              name="comment"
              id={commentField}
              className={clsx(css.input, css.textarea)}
            />
          </div>
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
