"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>

      {/* Business Type */}
      <div className="space-y-2">
        <Label htmlFor="business-type">Business Type</Label>
        <Input
          id="business-type"
          name="business-type"
          type="text"
          placeholder="e.g., Property Management, HVAC, Law Firm"
        />
      </div>

      {/* What they're looking for help with */}
      <div className="space-y-2">
        <Label htmlFor="help-with">What are you looking for help with?</Label>
        <Textarea
          id="help-with"
          name="help-with"
          placeholder="Tell us about the repetitive tasks or processes that are eating up your time..."
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Book a free consultation"}
      </Button>
    </form>
  );
}
