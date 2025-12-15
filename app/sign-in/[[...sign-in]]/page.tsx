"use client";

import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SignIn
                routing="hash"
                redirectUrl="/admin"
                appearance={{
                    elements: {
                        footerAction: {
                            display: "none",
                        },
                        card: {
                            paddingBottom: "0px",
                        },
                    }
                }}
            />
        </div>
    );
}
