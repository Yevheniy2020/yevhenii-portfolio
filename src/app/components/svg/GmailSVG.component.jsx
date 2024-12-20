import * as React from "react"
const GmailSVGComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <g fill="#fff" clipPath="url(#a)">
            <path d="M12.5 10.227v4.841h6.727c-.295 1.557-1.182 2.875-2.511 3.761l4.057 3.148c2.363-2.182 3.727-5.386 3.727-9.193 0-.886-.08-1.739-.227-2.557H12.5ZM5.494 14.88l-.914.7-3.24 2.522C3.399 22.182 7.614 25 12.5 25c3.374 0 6.204-1.113 8.272-3.023l-4.057-3.147c-1.113.75-2.534 1.204-4.215 1.204-3.25 0-6.012-2.193-7-5.147l-.006-.008Z" />
            <path d="M1.34 6.898A12.346 12.346 0 0 0 0 12.5c0 2.023.489 3.92 1.34 5.602 0 .012 4.16-3.227 4.16-3.227a7.49 7.49 0 0 1-.398-2.375c0-.83.148-1.625.398-2.375L1.34 6.898Z" />
            <path d="M12.5 4.977c1.84 0 3.477.637 4.784 1.864l3.58-3.58C18.692 1.24 15.873 0 12.5 0 7.613 0 3.398 2.807 1.34 6.898l4.16 3.227c.988-2.955 3.75-5.148 7-5.148Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h25v25H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default GmailSVGComponent
