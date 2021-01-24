import React, { FC } from 'react';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { Snackbar as MaterialSnackbar } from '@material-ui/core';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type SnackbarProps = {
  severity: 'success' | 'error';
  open: boolean;
  message: string;
};

const Snackbar: FC<SnackbarProps> = (props: SnackbarProps) => {
  const { open, severity, message } = props;

  return (
    <MaterialSnackbar open={open} autoHideDuration={3000}>
      <Alert severity={severity}>
        {message}
      </Alert>
    </MaterialSnackbar>
  );
};

export default Snackbar;
