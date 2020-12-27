/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { Input } from 'antd';

type IProps = {
  placeholder: string;
  mask: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLInputElement, Event>) => void;
  style?: any;
  disabled?: any;
  onBlur?: any;
  type?: 'password';
  borderless?: boolean;
};

export const AntdMaskedInput = ({
  borderless,
  mask,
  value,
  onChange,
  onPaste,
  onLoad,
  style,
  placeholder,
  disabled,
  onBlur,
  type,
}: IProps): JSX.Element => {
  return (
    <ReactInputMask
      mask={mask}
      value={value}
      onChange={onChange}
      maskChar={null}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      onBlur={onBlur}
      type={type}
      onPaste={onPaste}
      onLoad={onLoad}
    >
      {(inputProps: any) => (
        <Input {...inputProps} borderless={borderless} disabled={disabled} />
      )}
    </ReactInputMask>
  );
};
