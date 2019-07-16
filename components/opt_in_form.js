import { ValidationError, useForm } from '@statickit/react';

export default function OptInForm() {
  const [submitting, succeeded, errors, submit] = useForm(process.env.FORM_ID, process.env.STATICKIT_URL);

  const errorFor = field => {
    return errors.find(error => {
      return error.field == field;
    });
  };

  if (succeeded) {
    return (
      <div className="pb-6 text-lg text-gray-700">
        Thank you for signing up!
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-sm">
      <div className="pb-2 flex items-center">
        <input
          type="email"
          name="email"
          className="input-field block w-full"
          placeholder="Your email address"
          required
        />
        <div className="flex-shrink-0">
          <button
            type="submit"
            name="submit"
            className="block btn focus:shadow-outline"
            disabled={submitting}
          >
            Notify me
          </button>
        </div>
      </div>
      <ValidationError
        field="email"
        prefix="Email"
        errors={errors}
        className="font-bold text-red-600 text-sm"
      />
    </form>
  );
}
