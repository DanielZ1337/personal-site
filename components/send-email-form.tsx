'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { Dictionary } from "@/dictionaries/utils/dictionary-type"
import emailjs from "@emailjs/browser"
import { toast } from "@/components/ui/use-toast"

interface SendEmailFormProps {
    readonly dict: Dictionary
    readonly EMAILJS_SERVICE_ID: string
    readonly EMAILJS_TEMPLATE_ID: string
    readonly EMAILJS_PUBLIC_KEY: string

}

export default function SendEmailForm({ dict, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY }: SendEmailFormProps) {
    const [emailIsPending, setEmailIsPending] = useState(false)

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            return
        }

        const { from_name, from_email, message } = e.target as HTMLFormElement
        if (!from_name || !from_email || !message) {
            return
        }

        if (from_name.value === "" || from_email.value === "" || message.value === "") {
            return
        }

        setEmailIsPending(true)
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target as HTMLFormElement, EMAILJS_PUBLIC_KEY).then(r => {
            setEmailIsPending(false)
            toast({
                // @ts-ignore
                title: dict.text.contactform.toast.title,
                // @ts-ignore
                description: dict.text.contactform.toast.description,
            })
        })
    }

    return (
        <form className={"flex flex-col gap-3 text-start"} onSubmit={sendEmail}>
            {/* @ts-ignore */}
            <Input type="text" id="from_name" name="from_name" placeholder={dict.text.contactform.name}
                className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"} required />
            {/* @ts-ignore */}
            <Input type="email" id="from_email" name="from_email" placeholder={dict.text.contactform.email}
                className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"} required />
            {/*<p className="mb-2 invisible hidden peer-invalid:visible peer-invalid:block text-red-500 text-sm ">
                Please provide a valid email address.
            </p>*/}
            {/* @ts-ignore */}
            <Textarea id="message" name="message" placeholder={dict.text.contactform.message}
                className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"} required />
            <Button
                disabled={emailIsPending}
                type={"submit"}
                className={"bg-primary text-white p-2 rounded-md font-semibold hover:bg-primary/90 hover:text-white transition-all drop-shadow-[0_0px_4px_hsla(var(--primary))] active:drop-shadow-none"}
            >
                {/* @ts-ignore */}
                {emailIsPending ? dict.text.contactform.sending : dict.text.contactform.sendemail}
            </Button>
        </form>
    )
} 