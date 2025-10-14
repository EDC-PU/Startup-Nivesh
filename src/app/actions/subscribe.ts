'use server';

import { google } from 'googleapis';
import { z } from 'zod';

const subscribeSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
});

export async function subscribeToAction(formData: z.infer<typeof subscribeSchema>) {
  try {
    const validatedData = subscribeSchema.parse(formData);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID is not configured.');
    }

    const range = 'Sheet1!A:D';
    const valueInputOption = 'USER_ENTERED';

    const newRow = [
      new Date().toISOString(),
      validatedData.name,
      validatedData.email,
      validatedData.phone,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: {
        values: [newRow],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error subscribing:', error);
    if (error instanceof z.ZodError) {
      const fieldErrors = Object.entries(error.flatten().fieldErrors)
        .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
        .join('; ');
      return { success: false, error: `Invalid data: ${fieldErrors}` };
    }
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}
