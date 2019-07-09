import React, { useState, useEffect } from 'react';

function ValidationError(props) {
  const errorFor = (field, errors) => {
    return errors.find(error => {
      return error.field == field;
    });
  };

  const error = errorFor(props.field, props.errors || []);

  if (!error) {
    return null;
  }

  return (
    <div {...props}>
      {props.prefix} {error.message}
    </div>
  );
}

function useForm(id) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState(errors);

  const submit = e => {
    const form = e.target;
    const url = 'https://api.statickit.com/j/forms/' + id + '/submissions';

    e.preventDefault();
    setSubmitting(true);

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: new FormData(form)
    })
      .then(response => {
        response.json().then(data => {
          switch (response.status) {
            case 200:
              setSucceeded(true);
              break;

            case 422:
              setSucceeded(false);
              setErrors(data.errors);
              break;

            default:
              setSucceeded(false);
              break;
          }

          return true;
        });
      })
      .catch(error => {
        setSucceeded(false);
        return true;
      })
      .finally(() => {
        setSubmitting(false);
        return true;
      });
  };

  return [submitting, succeeded, errors, submit];
}

export { ValidationError, useForm };
