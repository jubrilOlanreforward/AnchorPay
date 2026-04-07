import React from "react";
type DashboardIconProps = {
    fill?: string
}
const DoubleArrowIcon = ({ fill }: DashboardIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 11.1554L17.5858 12.5L12 7.1892L6.4142 12.5L5 11.1554L12.0001 4.5L19 11.1554Z" fill={fill || "#181818"} />
            <path fillRule="evenodd" clipRule="evenodd" d="M19 18.1554L17.5858 19.5L12 14.1892L6.4142 19.5L5 18.1554L12.0001 11.5L19 18.1554Z" fill={fill || "#181818"} />
        </svg>

    )
};

export default DoubleArrowIcon;