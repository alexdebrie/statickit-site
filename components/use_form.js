import React, { useState, useEffect } from 'react';

function useForm(id) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState(errors);

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitted", e.target);
  };

  return [ submitting, succeeded, errors, submit ];
}

export default useForm;
