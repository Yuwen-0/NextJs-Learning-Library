"use client"

import styles from "./Button.module.scss"
const { primary } = styles;
const Button = ({
    color="#fff",
    bgColor="#7F2972",
    fontSize=25,
    border="1px solid #7F2972",
    borderRadius=5,
    fontFamily="'Times New Roman', sans-serif",
    width=100,
    height=50,
    children,
    onClick,
    type,
    disabled = false,
    className,
    style,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onMouseEnter,
    onMouseMove,
    onMouseOut,
    onMouseOver,
  }: {
    border?: string;
    borderRadius?: number;
    bgColor?: string;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    width?: number;
    height?: number;
    children: React.ReactNode;
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
    onMouseEnter?: () => void;
    onMouseMove?: () => void;
    onMouseOut?: () => void;
    onMouseOver?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties
  }
    ) => {

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      disabled={disabled}
      style={{
        borderRadius:borderRadius,
        border:border,
        backgroundColor:bgColor,
        color:color,
        width:width,
        height:height,
        fontFamily:fontFamily,
        fontSize:fontSize,
        ...style,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className={`${styles.button} ${className ? className : ''}`}
    >{children}</button>
  )
}

export default Button