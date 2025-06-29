import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

dayjs.extend(utc);
dayjs.extend(timezone);
/* eslint-disable prettier/prettier */
function millisToTime(millis: any) {
  const minutes = Math.floor(millis / 60000);
  const seconds: any = ((millis % 60000) / 1000).toFixed(0);
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
function toCurrency(number: number | string, disableDecimal = false, decimalPlaces = 2) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: disableDecimal ? 0 : decimalPlaces,
    maximumFractionDigits: disableDecimal ? 0 : decimalPlaces,
  });
  return formatter.format(+number);
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const getInitials = (name: any) => {
  if (name) {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
  }
  return '';
};
function createNewExecutions(executions: any) {
  const resultingTrades = [];
  let currentTradeSet = [];
  let netPosition = 0;

  let i = 0;
  const updatedTrades = executions.map((i: any) => {
    return {
      ...i,
      side: i?.side?.value?.toLowerCase(),
    };
  });

  do {
    const trade = updatedTrades[i];
    let tradeNetPosition = netPosition;
    const quantity = trade.side === 'sell' ? -Number(trade.quantity) : Number(trade.quantity);
    tradeNetPosition += quantity;
    trade.commission = +trade.commission || 0;
    trade.quantity = Math.abs(+quantity);
    currentTradeSet.push({
      ...trade,
      netPosition: tradeNetPosition,
    });

    // If net position becomes zero or it's the last trade, push the current trade set to resulting trades and reset current trade set
    if (tradeNetPosition === 0 || i === updatedTrades.length - 1) {
      resultingTrades.push([...currentTradeSet]);
      currentTradeSet = [];
    }

    // Update net position for next iteration
    netPosition = tradeNetPosition;

    i++;
  } while (i < updatedTrades.length);

  return resultingTrades;
}
const splitExecutions = (executions: any) => {
  const splitArray = [];
  let openPosition = 0;

  for (let i = 0; i < executions?.length; i++) {
    const {
      quantity,
      side,
      date,
      time,
      price,
      commission,
      contractMultiplier,
      expDate,
      instrument,
      strike,
      uuid,
    } = executions[i];
    let quantityNum = Number(quantity);
    const sideValue = side?.toLowerCase();

    if (sideValue === 'buy') {
      // If there's a short position, offset it first
      if (openPosition < 0) {
        const offset = Math.min(quantityNum, Math.abs(openPosition));
        splitArray.push({
          uuid,
          quantity: offset,
          side: { label: 'BUY', value: 'buy' },
          date,
          time,
          price,
          commission,
          ...(contractMultiplier && { contractMultiplier }),
          ...(expDate && { expDate }),
          ...(instrument && {
            instrument: instrument?.toLowerCase(),
          }),
          ...(strike && { strike }),
        });
        openPosition += offset;
        quantityNum -= offset;
      }

      // Any remaining buy quantity
      if (quantityNum > 0) {
        splitArray.push({
          uuid,
          quantity: quantityNum,
          side: { label: 'BUY', value: 'buy' },
          date,
          time,
          price,
          commission: commission || 0,
          ...(contractMultiplier && { contractMultiplier }),
          ...(expDate && { expDate }),
          ...(instrument && {
            instrument: instrument?.toLowerCase(),
          }),
          ...(strike && { strike }),
        });
        openPosition += quantityNum;
      }
    } else if (sideValue === 'sell') {
      // If there's a long position, offset it first
      if (openPosition > 0) {
        const offset = Math.min(quantityNum, openPosition);
        splitArray.push({
          uuid,
          quantity: offset,
          side: { label: 'SELL', value: 'sell' },
          date,
          time,
          price,
          commission: commission || 0,

          ...(contractMultiplier && { contractMultiplier }),
          ...(expDate && { expDate }),
          ...(instrument && {
            instrument: instrument?.toLowerCase(),
          }),
          ...(strike && { strike }),
        });
        openPosition -= offset;
        quantityNum -= offset;
      }

      // Any remaining sell quantity
      if (quantityNum > 0) {
        splitArray.push({
          uuid,
          quantity: quantityNum,
          side: { label: 'SELL', value: 'sell' },
          date,
          time,
          price,
          commission: commission || 0,

          ...(contractMultiplier && { contractMultiplier }),
          ...(expDate && { expDate }),
          ...(instrument && {
            instrument: instrument?.toLowerCase(),
          }),
          ...(strike && { strike }),
        });
        openPosition -= quantityNum;
      }
    }
  }

  return splitArray;
};

export { millisToTime, toCurrency, getInitials, cn, createNewExecutions, splitExecutions };
