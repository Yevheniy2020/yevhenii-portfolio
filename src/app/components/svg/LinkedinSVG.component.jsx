import * as React from "react"
const LinkedinSVGComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        style={{borderRadius: '4px'}}
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#fff"
                d="M23.15 0H1.845C.826 0 0 .806 0 1.802v21.391C0 24.19.825 25 1.846 25h21.303C24.17 25 25 24.19 25 23.198V1.802C25 .806 24.17 0 23.15 0ZM7.416 21.304H3.706V9.37h3.711v11.934ZM5.562 7.744a2.15 2.15 0 1 1 0-4.297 2.148 2.148 0 0 1 0 4.297Zm15.742 13.56h-3.706v-5.801c0-1.382-.025-3.164-1.93-3.164-1.928 0-2.22 1.509-2.22 3.066v5.899H9.745V9.37h3.555v1.631h.049c.493-.938 1.704-1.929 3.505-1.929 3.755 0 4.449 2.471 4.449 5.684v6.548Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={25} height={25} fill="#fff" rx={4} />
            </clipPath>
        </defs>
    </svg>
)
export default LinkedinSVGComponent
