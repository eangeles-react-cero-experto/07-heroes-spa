import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const formRef = useRef();
  const submitCallbackRef = useRef();

  const onSubmit = useCallback(
    (callback) => {
      submitCallbackRef.current = callback;
    },
    [submitCallbackRef],
  );

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitCallbackRef.current) submitCallbackRef.current(formState);
  };

  useEffect(() => {
    const formRefCurrent = formRef.current;
    formRefCurrent.addEventListener("input", handleInput);
    formRefCurrent.addEventListener("submit", handleSubmit);

    return () => {
      formRefCurrent.removeEventListener("input", handleInput);
      formRefCurrent.removeEventListener("submit", handleSubmit);
    };
  }, [formRef, handleInput]);

  useEffect(() => {
    const controls = formRef.current.elements;

    for (const key in initialState) {
      controls[key].value = formState[key];
    }
  }, [formState, initialState]);

  return {
    formRef,
    formState,
    onSubmit,
  };
};
