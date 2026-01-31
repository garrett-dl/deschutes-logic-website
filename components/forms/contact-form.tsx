"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
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
          />
          <FieldDescription>
            No spam, and we'll never share your email.
          </FieldDescription>
      </Field>

      {/* Business Type */}
      <Field>
        <FieldLabel htmlFor="business-type">Business Type</FieldLabel>
        <Input
          id="business-type"
          name="business-type"
          type="text"
          placeholder="e.g., Property Management, HVAC, Law Firm"
        />
      </Field>

      {/* What they're looking for help with */}
      <Field>
        <Label htmlFor="help-with">What are you looking for help with?</Label>
        <Textarea
          id="help-with"
          name="help-with"
          placeholder="Tell us about the repetitive tasks or processes that are eating up your time..."
          rows={4}
        />
      </Field>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Book a free consultation"}
      </Button>
    </form>
  );
}
