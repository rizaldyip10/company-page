import Image from "next/image"

const Logo = () => {
    return (
        <Image height={35} width={35} alt="logo" src='/logo.svg' />
    )
}

export default Logo