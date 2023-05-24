import { NrButton } from "@/components/ui";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Enter a Valid Name")
    .trim()
    .min(2, "Name is Too Short")
    .max(30, "Name is Too Long")
    .required(),

  email: Yup.string()
    .email("Email you have entered is not valid")
    .min(8, "Email you have entered is not valid")
    .max(30, "Email you have entered is not valid")
    .lowercase()
    .required("Email can not be empty"),
});

const NewsletterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
  };
  const onSubmit = async (
    values: any,
    {
      resetForm,
    }: {
      resetForm: any;
    }
  ) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(props) => {
          const { values, touched, errors, handleChange, handleBlur } = props;
          return (
            <Form>
              <div className="grid grid-cols-1 gap-y-md">
                <div className="col-span-1">
                  <Field name="fullName">
                    {({ field, form, meta }: any) => (
                      <div>
                        <input
                          type="text"
                          {...field}
                          placeholder="Name"
                          id="fullName"
                          value={field.value}
                          className={`w-full px-lg py-md rounded-md bg-blue-gray text-gray ${
                            meta.touched &&
                            meta.error &&
                            "border-2 border-red-500"
                          }`}
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="col-span-1">
                  <Field name="email">
                    {({ field, form, meta }: any) => (
                      <div>
                        <input
                          type="email"
                          {...field}
                          placeholder="Email"
                          id="email"
                          value={field.value}
                          className={`w-full px-lg py-md rounded-md bg-blue-gray text-gray ${
                            meta.touched &&
                            meta.error &&
                            "border-2 border-red-500"
                          }`}
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="col-span-1">
                  <NrButton
                    type="submit"
                    styles={{
                      size: "full",
                    }}
                  >
                    Subscribe
                  </NrButton>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewsletterForm;
