import { Button as CButton } from '@chakra-ui/react'

export const Button = ({ children, clickFn, ...props }) => {
    return (
        <>
            <CButton
                onClick={clickFn}
                {...props}
            >
                {children}
            </CButton>
        </>
    )
}