import React, { useState, useEffect } from 'react';

function ValidationError(props) {
  const { prefix, field, errors, ...attrs } = props;

  const error = (errors || []).find(error => {
    return error.field == field;
  });

  if (!error) {
    return null;
  }

  return (
    <div {...attrs}>
      {prefix} {error.message}
    </div>
  );
}

function useForm(id, baseUrl) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState(errors);

  const submit = e => {
    const form = e.target;
    const url = (baseUrl || "https://api.statickit.com") + '/j/forms/' + id + '/submissions';

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
        });
      })
      .catch(error => {
        setSucceeded(false);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return [submitting, succeeded, errors, submit];
}

export { ValidationError, useForm };
