import React from "react"

export default function({children}: {
    children: React.ReactNode
}) {
    return <div>
        <div className="border-b p-1 text-center font-semibold">
            Welcome! Sign in or sign up to continue.
        </div>
        {children}
    </div>
}