import * as Yup from "yup";

export const yupRequired = (yup: Yup.AnySchema) =>
  yup.required("ERROR.REQUIRED_FIELD");

export const yupString = Yup.string();

export const yupRequiredString = yupRequired(yupString);

export const yupStringMin = (min: number) => yupString.min(min);

export const yupWhen = (
  key: string | string[],
  status: any,
  result: Yup.AnySchema
) =>
  yupString.when(key, {
    is: status,
    then: result,
  });

export const yupStringMax = (max: number) => yupString.max(max);

export const yupNotOneOf = (values: string[], message = "") =>
  yupRequiredString.notOneOf(values, message);

export const yupNumberMinMax = (min: number, max: number) =>
  yupRequired(
    Yup.number()
      .min(min, "ERROR.VALUE_NOT_ALLOWED")
      .max(max, "ERROR.VALUE_NOT_ALLOWED")
  );
