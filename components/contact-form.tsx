'use client'

import { Dictionary } from '@/dictionaries/utils/dictionary-type'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import InViewWrapper from '@/components/in-view-wrapper'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import SendEmailForm from '@/components/send-email-form'

export default function ContactForm({ dict }: { dict: Dictionary }) {
	const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env

	if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
		console.error('EmailJS environment variables are not set!')
		return
	}

	return (
		<InViewWrapper
			initial={{ opacity: 0, y: 50 }}
			whenInView={{ opacity: 1, y: 0 }}
			whenNotInView={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5 }}
		>
			<div
				id={dict.navbar.links[0].contact.id}
				className={
					'mt-16 mb-16 flex max-w-[90vw] lg:max-w-[70vw] mx-auto bg-neutral-200 dark:bg-black rounded-xl py-14 px-10 md:py-20 md:px-16 flex-col h-full shadow-md'
				}
			>
				<h1 className={'text-5xl font-bold text-center'}>{dict.text.contacttitle}</h1>
				<h2 className={'text-2xl mt-6 mb-8 dark:text-muted-foreground text-center'}>{dict.text.contact}</h2>
				<div className={'mx-auto flex gap-2 w-full md:w-2/3 xl:w-1/2'}>
					<div className={'whitespace-pre-wrap flex-wrap w-full'}>
						<p className={'text-xl mb-5 md:mt-0 mt-16 dark:text-muted-foreground text-start'}>
							{dict.text.email}:{' '}
							<span>
								<Link
									href={`mailto:${siteConfig.links.dev_email}`}
									className={'text-primary hover:underline'}
									target={'_blank'}
									rel={'noreferrer'}
								>
									{siteConfig.links.dev_email}
								</Link>
							</span>
						</p>
						<div className={'flex flex-col gap-4'}>
							<SendEmailForm
								dict={dict}
								EMAILJS_SERVICE_ID={EMAILJS_SERVICE_ID}
								EMAILJS_TEMPLATE_ID={EMAILJS_TEMPLATE_ID}
								EMAILJS_PUBLIC_KEY={EMAILJS_PUBLIC_KEY}
							/>
						</div>
					</div>
				</div>
			</div>
		</InViewWrapper>
	)
}
