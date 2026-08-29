import { personal, siteMeta } from '../data/portfolio';
import { getCalendarInviteUrl } from './calendarInvite';

export const personalCalendarHref =
  personal.calendarUrl ??
  getCalendarInviteUrl({
    name: personal.name,
    email: personal.email,
    portfolioUrl: siteMeta.url,
    ...personal.calendarInvite,
  });
  