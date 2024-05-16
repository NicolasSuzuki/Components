import React from 'react';
import './Button.css';

const ButtonCmp = ({
    width = 'min-content',
    height,
    label = '',
    icon = '',
    iconPosition = 'left',
    disable = false,
    url = '',
    colorButton = '#f7b742'
}) => {
    const isOnlyIcon = icon && !label;
    const padding = isOnlyIcon ? '15px 16px' : '12px 32px';
    return (
        <div className="button" style={{width, height, backgroundColor: colorButton, padding}}>
            {!!icon && iconPosition === 'left' && 
                <span className="button-label-icon" style={!!label ? { margin: '0 8px 0 0' } : {}}>
                    {icon}
                </span>
            }

            <span className="button-label">{label}</span>

            {!!icon && iconPosition === 'right' && 
                <span className="button-label-icon" style={!!label ? { margin: '0 0 0 8px' } : {}}>
                    {icon}
                </span>
            }
        </div>
    )
}

export default ButtonCmp;