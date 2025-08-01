import { toast } from "react-toastify";
import { ChangeEvent } from "react";
import * as Yup from "yup";

export const handleNumberChange = (
  callback: (value: number) => void,
  schema?: Yup.ObjectSchema<any>, 
  setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  return async (event: ChangeEvent<HTMLInputElement>) => {

    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      callback(value);
      if (schema && setErrors) {
        try {
          const fieldSchema = Yup.reach(schema, event.target.name);
          if (Yup.isSchema(fieldSchema)) {
            await fieldSchema.validate(value);
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[event.target.name]; 
              return newErrors;
            });
          }
        } catch (validationError: any) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: validationError.message, 
          }));
        }
      }
    }
  };
};

export const handleTextChange = (
  callback: (value: string) => void,
  schema?: Yup.ObjectSchema<any>,
  setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  return async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    callback(value);
    if (schema && setErrors) {
      try {
        const fieldSchema = Yup.reach(schema, event.target.name);
        if (Yup.isSchema(fieldSchema)) {
          await fieldSchema.validate(value);
          setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[event.target.name];
            return newErrors;
          });
        }
      } catch (validationError: any) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [event.target.name]: validationError.message,
        }));
      }
    }
  };
};

export const handleFileChange = (
  callback: (file: File | null) => void,
  schema?: Yup.ObjectSchema<any>,
  setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  return async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "file") {
      const file = event.target.files ? event.target.files[0] : null;
      callback(file);

      if (schema && setErrors) {
        try {
          const fieldSchema = Yup.reach(schema, event.target.name);
          if (Yup.isSchema(fieldSchema)) {
            await fieldSchema.validate(file);
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[event.target.name]; 
              return newErrors;
            });
          }
        } catch (validationError: any) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: validationError.message, 
          }));
        }
      }
    }
  };
};

export const handleImageChange = (
  callback: (image: File | null) => void,
  schema?: Yup.ObjectSchema<any>,
  setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>
) => {
  return async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "file") {
      const file = event.target.files ? event.target.files[0] : null;
      if (file && file.type.startsWith("image/")) {
        callback(file);
      } else {
        callback(null);
        toast.error('Must Be Image!');
      }
      if (schema && setErrors) {
        try {
          const fieldSchema = Yup.reach(schema, event.target.name);
          if (Yup.isSchema(fieldSchema)) {
            await fieldSchema.validate(file);
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[event.target.name]; 
              return newErrors;
            });
          }
        } catch (validationError: any) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: validationError.message, 
          }));
        }
      }
    }
  };
};
