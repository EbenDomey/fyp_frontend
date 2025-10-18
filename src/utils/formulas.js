export function defineFvcFev1(formData) {
  const FEV1_MULTIPLIER = 0.87 * 1.08;
  const FVC_MULTIPLIER = 0.87 * 1.1;

  const fvc_male = -3.08 - 0.024 * formData.age + 4.8 * (formData.height / 100);
  const fvc_female =
    -3.04 - 0.023 * formData.age + 4.5 * (formData.height / 100);

  const fev1_male =
    -0.54 - 0.027 * formData.age + 2.9 * (formData.height / 100);
  const fev1_female =
    -1.87 - 0.028 * formData.age + 3.4 * (formData.height / 100);

  let fev1_pred =
    FEV1_MULTIPLIER * (0.043 * formData.height - 0.029 * formData.age - 2.49);
  let fvc_pred =
    FVC_MULTIPLIER * (0.0576 * formData.height - 0.0269 * formData.age - 4.34);
  if (formData.gender === 1) {
    fvc_pred = fvc_male;
    fev1_pred = fev1_male;
  } else {
    fvc_pred = fvc_female;
    fev1_pred = fev1_female;
  }
  return [fvc_pred.toFixed(3), fev1_pred.toFixed(3)];
}
