/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { useCheckboxes } from "../../../hooks/useCheckboxes";

export const CheckboxesBox = ({
  formValuesCheckbox,
  formValuesTextField,
  onInputChange,
  onCheckboxChangeFormValues,
}) => {
  /* const [isHolidayChecked, setCheckedCheckboxisHoliday] = useState(
    formValues.isHoliday
  );
  const onHandleClickIsHoliday = () => {
    setCheckedCheckboxisHoliday(!isHolidayChecked);
  }; */

  const {
    checkedCheckbox: isHolidayChecked,
    onHandleClick: onHandleClickIsHoliday,
  } = useCheckboxes(formValuesCheckbox.isHoliday);
  const {
    checkedCheckbox: isThereOffice2hChecked,
    onHandleClick: onHandleClickIsThereOffice2h,
  } = useCheckboxes(formValuesCheckbox.isThereOffice2h);
  const {
    checkedCheckbox: isThereExtraMeetingChecked,
    onHandleClick: onHandleClickIsThereExtraMeeting,
  } = useCheckboxes(formValuesCheckbox.isThereExtraMeeting);

  return (
    <Grid
      sx={{
        /* display: { xs: "none", md: "flex" }, */
        /* bgcolor: "cyan", */
        flexDirection: "column",
        borderRadius: "5px",
        border: "1px grey solid",
        width: { xs: "100%", md: "auto" },
        /* width: { xs: "100%", md: "100%" }, */
      }}
      container
      p={1}
    >
      <Grid item md={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isHolidayChecked}
              name="isHoliday"
              onClick={onHandleClickIsHoliday}
              onChange={onCheckboxChangeFormValues}
            />
          }
          label="Es fiesta"
        />
      </Grid>
      <Grid item md={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isThereOffice2hChecked}
              name="isThereOffice2h"
              onClick={onHandleClickIsThereOffice2h}
              onChange={onCheckboxChangeFormValues}
            />
          }
          label="Hay formación de 2 horas"
        />
      </Grid>

      <Grid item md={12}>
        <FormControlLabel
          sx={{ mb: 2 }}
          control={
            <Checkbox
              checked={isThereExtraMeetingChecked}
              name="isThereExtraMeeting"
              onClick={onHandleClickIsThereExtraMeeting}
              onChange={onCheckboxChangeFormValues}
            />
          }
          label="Hay reunión extra"
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          sx={{ mb: 2 }}
          label="Tipo reunión"
          type="text"
          placeholder="Indique el tipo de reunión"
          name="extraMeetingText"
          fullWidth
          value={formValuesTextField.extraMeetingText}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          sx={{ mb: 1 }}
          label="Notas"
          type="text"
          placeholder="Anote algo aquí"
          fullWidth
          name="note"
          value={formValuesTextField.note}
          onChange={onInputChange}
        />
      </Grid>
    </Grid>
  );
};
