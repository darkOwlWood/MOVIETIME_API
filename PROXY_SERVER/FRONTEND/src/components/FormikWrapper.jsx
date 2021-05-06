import React from 'react';
import { colors } from '../assets/styles/containers/App';
import { useField } from 'formik';
import { TextField, withStyles } from '@material-ui/core';

const TextFieldFormik = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <TextField
            {...field}
            {...props}
            label={label}
            variant="outlined"
            error={Boolean(meta.touched && meta.error)}
            helperText={Boolean(meta.touched && meta.error) ? meta.error : ''}
        />
    );
}

export const TextFieldWrapperTeal = withStyles({
    root: {
        "& label.Mui-focused": {
            color: colors.normalTeal,
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: colors.normalTeal,
            }
        }
    }
})(TextFieldFormik);