import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);

export function capitalizeFirstLetter(word: string): string {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}
// export const formatDateInTimeZone = ({ date, tz = 'America/New_York' }: any) => {
//   let newData = '';
//   let newTime = '';
//   if (date) {
//     newData = dayjs(date).tz('America/New_York', true).format('YYYY-MM-DD');
//     newTime = dayjs(date).tz('America/New_York', true).format('HH:mm:ss');
//   }
//   return {
//     date: newData,
//     time: newTime,
//   };
// };
export const formatDateInTimeZone = ({ date, tz = 'America/New_York' }: any) => {
  if (!date) return { date: '' };

  return {
    date: '',
    time: '',
  };
};
export function convertTimezone(timestamp: any, tz: any) {
  const formattedDate = dayjs.tz(timestamp, tz).format('YYYY-MM-DDThh:mm:ssZ');
  return formattedDate;
}
