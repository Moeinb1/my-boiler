export const pick = (obj: any, arr: any) =>
  Object.fromEntries(
    Object?.entries(obj ? obj : {})?.filter(([k]) => arr.includes(k))
  );

export const omit = (obj: any, arr: any) =>
  Object.fromEntries(
    Object?.entries(obj ? obj : {})?.filter(([k]) => !arr.includes(k))
  );
export const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const onStepChangeInState = ({
  step,
  payload,
}: {
  step: number;
  payload: number | "prev" | "next";
}) => {
  if (typeof payload === "number") {
    return (step = payload);
  } else {
    if (payload === "prev") {
      if (step > 0) {
        return (step -= 1);
      }
    } else {
      return (step += 1);
    }
  }
};
