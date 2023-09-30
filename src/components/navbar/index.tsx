"use client"

import { Text, useTheme } from "@nextui-org/react";


const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div className="" style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray900
        }}>
            <Text>Hola Mundo</Text>
        </div>
    )
}

export default Navbar;