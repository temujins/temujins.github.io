import React from "react";

interface Props {
    width?: number;
    height?: number;
    white?: boolean;
}

export const Logo: React.FC<Props> = ({width, height, white}) => {
    return (
        <div>
            <svg
                width={width ? width : 46}
                height={height ? height : 50}
                viewBox="0 0 46 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 0L0 13.2743V36.7257L23 50L27.9798 47.1019L27.7583 47.2278V36.2471V23.3871H31.7239L31.6992 36.2471V44.9374L46 36.6147V13.2743L23 0ZM31.7239 23.3871H35.6894V26.6129H31.7239V23.3871ZM11.376 16.4056C10.1861 17.6156 9.51764 19.2567 9.51764 20.9677C9.51764 22.6788 10.1861 24.3197 11.376 25.5296C12.5659 26.7395 14.1797 27.4193 15.8625 27.4193H19.0349C19.8763 27.4193 20.6832 27.7591 21.2781 28.364C21.8731 28.969 22.2073 29.7896 22.2073 30.6451C22.2073 31.5007 21.8731 32.3211 21.2781 32.9261C20.6832 33.531 19.8763 33.871 19.0349 33.871H15.8625C15.0211 33.871 14.2142 33.531 13.6192 32.9261C13.0243 32.3211 12.6901 31.5007 12.6901 30.6451H9.51764C9.51764 32.3562 10.1861 33.9971 11.376 35.207C12.5659 36.4169 14.1797 37.0968 15.8625 37.0968H19.0349C20.7176 37.0968 22.3315 36.4169 23.5214 35.207C24.7112 33.9971 25.3797 32.3562 25.3797 30.6451C25.3797 28.9341 24.7112 27.293 23.5214 26.0831C22.3315 24.8732 20.7176 24.1935 19.0349 24.1935H15.8625C15.0211 24.1935 14.2142 23.8536 13.6192 23.2487C13.0243 22.6437 12.6901 21.8233 12.6901 20.9677C12.6901 20.1122 13.0243 19.2915 13.6192 18.6866C14.2142 18.0816 15.0211 17.7419 15.8625 17.7419H19.5647C19.9117 17.7419 20.2553 17.8114 20.576 17.9465C20.8966 18.0815 21.1879 18.2794 21.4333 18.5289C21.6787 18.7784 21.8733 19.0747 22.0061 19.4007C22.1389 19.7267 22.2073 20.0762 22.2073 20.429V20.9677H25.3797V20.429C25.3797 17.1613 22.7752 14.5161 19.5647 14.5161H15.8625C14.1797 14.5161 12.5659 15.1957 11.376 16.4056Z"
                    fill="#0070FF"
                    // fill="#030303"
                />
            </svg>
        </div>
    );
};