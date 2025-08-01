import { ChangeEvent } from "react";
import * as Yup from "yup";

export const handleFormChange = <T extends object>(
  setFormState: React.Dispatch<React.SetStateAction<T>>, 
setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  schema?: Yup.ObjectSchema<any>, // تغيير ليتحقق إذا كان schema موجودًا

) => {
  return async (event: ChangeEvent) => {
    const { name, value, type } = event.target as HTMLInputElement;

    // تحديث الحقل
    setFormState((prevState) => ({
      ...prevState,
      [name]:
        type === "file" && event.target instanceof HTMLInputElement
          ? event.target.files?.[0]
          : type === "number"
          ? parseFloat(value) || ""
          : value,
    }));

    // التحقق من الحقل باستخدام Yup إذا كان schema موجودًا
    if (schema) {
      try {
        const fieldSchema = Yup.reach(schema, name);
        
        // تحقق من أن fieldSchema هو مخطط يمكن التحقق من صحته
        if (Yup.isSchema(fieldSchema)) {
          await fieldSchema.validate(value); // تحقق من صحة القيمة
          setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name]; // إزالة الخطأ إذا كان الحقل صحيحًا
            return newErrors;
          });
        }
      } catch (validationError: any) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validationError.message, // تحديث الأخطاء
        }));
      }
    }
  };
};

export const handleImageChange = <T extends object>(
  setFormState: React.Dispatch<React.SetStateAction<T>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  schema?: Yup.ObjectSchema<any>, // تغيير ليتحقق إذا كان schema موجودًا
  
) => {
  return async (event: ChangeEvent) => {
    if (event.target instanceof HTMLInputElement) {
      const { name, files } = event.target;
      const file = files?.[0];

      setFormState((prevState) => ({
        ...prevState,
        [name]: file && file.type.startsWith("image/") ? file : null,
      }));

      // التحقق من صحة الملف باستخدام Yup إذا كان schema موجودًا
      if (schema) {
        try {
          const fieldSchema = Yup.reach(schema, name);
          
          // تحقق من أن fieldSchema هو مخطط يمكن التحقق من صحته
          if (Yup.isSchema(fieldSchema)) {
            await fieldSchema.validate(file); // تحقق من صحة الملف
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[name]; // إزالة الخطأ إذا كان الملف صحيحًا
              return newErrors;
            });
          }
        } catch (validationError: any) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationError.message, // تحديث الأخطاء
          }));
        }
      }
    }
  };
};
