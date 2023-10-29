import { UserButton } from "@clerk/nextjs";

export default function ClerkUserBtn() {
    return (
        <UserButton afterSignOutUrl="/" />
    )
}