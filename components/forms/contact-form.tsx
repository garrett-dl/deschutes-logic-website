"use client";

import * as React from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../ui/field";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState | null,
    FormData
  >(submitContactForm, null);

  // If submission was successful, show a success message
  if (state?.success) {
    return (
      <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message sent!
        </h3>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {/* General error message */}
      {state && !state.success && !state.errors && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {state.message}
        </div>
      )}

      {/* Name */}
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          aria-invalid={!!state?.errors?.name}
        />
        {state?.errors?.name && (
          <FieldError>{state.errors.name[0]}</FieldError>
        )}
      </Field>

      {/* Email */}
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          aria-invalid={!!state?.errors?.email}
        />
        <FieldDescription>
          No spam, and we'll never share your email.
        </FieldDescription>
        {state?.errors?.email && (
          <FieldError>{state.errors.email[0]}</FieldError>
        )}
      </Field>

      {/* Business Type */}
      <Field>
        <FieldLabel htmlFor="business-type">Business Type</FieldLabel>
        <Input
          id="business-type"
          name="business-type"
          type="text"
          placeholder="e.g., Property Management, HVAC, Law Firm"
          aria-invalid={!!state?.errors?.businessType}
        />
        {state?.errors?.businessType && (
          <FieldError>{state.errors.businessType[0]}</FieldError>
        )}
      </Field>

      {/* What they're looking for help with */}
      <Field>
        <Label htmlFor="help-with">What are you looking for help with?</Label>
        <Textarea
          id="help-with"
          name="help-with"
          placeholder="Tell us about the repetitive tasks or processes that are eating up your time..."
          rows={4}
          aria-invalid={!!state?.errors?.helpWith}
        />
        {state?.errors?.helpWith && (
          <FieldError>{state.errors.helpWith[0]}</FieldError>
        )}
      </Field>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Book a free consultation"}
      </Button>
    </form>
  );
}
