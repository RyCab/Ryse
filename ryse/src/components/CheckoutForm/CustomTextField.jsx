// import React from 'react'
// import { TextField, Grid } from '@material-ui/core';
// import { useFormContext, Controller } from 'react-hook-form';


// const FormInput = ({ name, label }) => {
//     const {control} = useFormContext();
//     const isError = false;
//   return (
//     <Grid item xs={12} sm={6}>
//         <Controller 
//             // as={TextField}
//             name={name}
//             control={control}
//             defaultValue=""
//             error={isError}
//             render = {({ field }) => (
//                 <TextField
//                     label={label}
//                     fullWidth
//                     // required={required}
//                 />
//             )}
//         />
//     </Grid>
//   )
// }

// export default FormInput;



import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        name={name}
        control={control}
        // label={label}
        // fullWidth
        // required={required}
        error={isError}
        render = {({ field: {ref, ...field }, fieldState }) => (
            <TextField
                fullWidth
                name={name}
                {...field}
                inputRef={ref}
                label={label}
                required
            />
        )}
      />
    </Grid>
  );
}

export default FormInput;