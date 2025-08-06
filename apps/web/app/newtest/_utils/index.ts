import { FieldValues, Path, PathValue } from "react-hook-form";
import { SetFormValueProps } from "../_types";

interface SetFormValueParams<T extends FieldValues> extends SetFormValueProps<T> {
  fieldName: Path<T>;
  value: PathValue<T, Path<T>>;
}

export const setFormValue = <T extends FieldValues>({
  fieldName,
  value,
  setValue,
}: SetFormValueParams<T>) => {
  setValue(fieldName, value, {
    shouldValidate: true,
    shouldDirty: true,
  });
};
