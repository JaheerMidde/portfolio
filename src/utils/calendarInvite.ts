interface CalendarInviteOptions {
  name: string;
  email: string;
  title?: string;
  details?: string;
  durationMinutes?: number;
  portfolioUrl?: string;
}

/** Opens Google Calendar with a pre-filled event - visitor picks a time and sends the invite. */
export function getCalendarInviteUrl({
  name,
  email,
  title,
  details,
  durationMinutes = 30,
  portfolioUrl,
}: CalendarInviteOptions): string {
  const defaultDetails = portfolioUrl
    ? `${durationMinutes}-minute intro call about opportunities or frontend work. Portfolio: ${portfolioUrl}`
    : `${durationMinutes}-minute intro call about opportunities or frontend work.`;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title ?? `Chat with ${name}`,
    details: details ?? defaultDetails,
    add: email,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
