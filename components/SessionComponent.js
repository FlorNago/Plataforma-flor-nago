"use client"

import { useSession } from "next-auth/react";

export default function UserComponent() {
    const { data: session } = useSession()

    return (
        <div>
            {JSON.stringify(session?.user)}
        </div>
    )
}