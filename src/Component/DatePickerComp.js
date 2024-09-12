import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DatePickerComp = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <TextField
        fullWidth
        // label="Start Date"
        inputRef={ref}
        onClick={onClick}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onClick}>
                <ArrowDropDownIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiInputBase-root": {
            width: "100%",
          },
          backgroundColor:"#fff"
        }}
      />
    ));
  return (
    <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    customInput={<CustomInput />}
    onCalendarOpen={() => setDatePickerOpen(true)}
    onCalendarClose={() => setDatePickerOpen(false)}
    showPopperArrow={false}
  />
  )
}

export default DatePickerComp