"use server";

import { z } from "zod";

// Validation schema for the contact form
const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  businessType: z
    .string()
    .max(200, "Business type must be 200 characters or less")
    .optional()
    .default(""),
  helpWith: z
    .string()
    .max(2000, "Message must be 2000 characters or less")
    .optional()
    .default(""),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    businessType?: string[];
    helpWith?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    businessType: formData.get("business-type"),
    helpWith: formData.get("help-with"),
  };

  // Validate the form data
  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        businessType: fieldErrors.businessType,
        helpWith: fieldErrors.helpWith,
      },
    };
  }

  const validatedData = validationResult.data;

  // Get the webhook URL from environment variable
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("CONTACT_FORM_WEBHOOK_URL environment variable is not set");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  try {
    // Send the data to the webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        businessType: validatedData.businessType,
        helpWith: validatedData.helpWith,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error(webhookUrl);
      console.error(
        `Webhook request failed with status ${response.status}: ${response.statusText}`
      );
      return {
        success: false,
        message: "Failed to submit the form. Please try again later.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for reaching out! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
