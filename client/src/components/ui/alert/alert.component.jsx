import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../layouts/portal/portal.component';

import { ReactComponent as SuccessIcon } from '../../../assets/images/done-icon.svg';
import { ReactComponent as WarningIcon } from '../../../assets/images/warning-icon.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/images/exclamation-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/close-icon.svg';

import './alert.styles.scss';

const Alert = ({
  severity = 'info',
  message = '',
  autoHideDuration = 30000,
  onClose,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
    const timeOutId = window.setTimeout(() => {
      setOpen(false);
    }, autoHideDuration);

    return () => {
      window.clearTimeout(timeOutId);
    };
  }, []);

  const getIcon = type => {
    if (type === 'success') return <SuccessIcon className="alert-icon" />;
    if (type === 'warning') return <WarningIcon className="alert-icon" />;
    if (type === 'error') return <ErrorIcon className="alert-icon" />;
    return null;
  };

  const closeAlert = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  const renderContent = () => {
    if (!open) return null;

    return (
      <Portal>
        <div role="alert" className={`alert ${severity} `}>
          <div className="alert-content">
            {getIcon(severity)}
            <div className="alert-message"> {message}</div>
          </div>
          <CloseIcon onClick={closeAlert} className="close-icon" />
        </div>
      </Portal>
    );
  };
  return renderContent();
};

Alert.propTypes = {
  severity: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
};
export default Alert;
