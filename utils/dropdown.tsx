/* eslint-disable @typescript-eslint/no-unused-vars */
const dropdowns: any = [
  {
    id: '1',
    heading: 'Select PnL',
    key: 'selectPnl',
    selectedValue: '',
    data: [
      { id: '1', label: 'Net P&L', value: 'netPnl' },
      { id: '2', label: 'Gross P&L', value: 'grossPnl' },
    ],
  },
  {
    id: '2',
    heading: 'Open/Closed',
    key: 'status',
    selectedValue: '',
    data: [
      { id: '1', label: 'Open', value: 'open' },
      { id: '2', label: 'Close', value: 'close' },
    ],
  },
  {
    id: '3',
    heading: 'Trade Type',
    key: 'tradeType',
    selectedValue: '',
    data: [
      { id: '1', label: 'Stocks', value: 'stocks' },
      { id: '2', label: 'Options', value: 'option' },
    ],
  },
  {
    id: '4',
    heading: 'Result',
    key: 'result',
    selectedValue: '',
    data: [
      { id: '1', label: 'Win', value: 'win' },
      { id: '2', label: 'Lose', value: 'lose' },
      { id: '3', label: 'Break Even', value: 'breakEven' },
    ],
  },
  {
    id: '5',
    heading: 'Ticket Type',
    key: 'ticketType',
    selectedValue: '',
    data: [
      { id: '1', label: 'Suggestion', value: 'suggestion' },
      { id: '2', label: 'Feedback', value: 'feedback' },
      { id: '3', label: 'Bug', value: 'bug' },
      { id: '4', label: 'Feature Request', value: 'feature-request' },
    ],
  },
];
const getPnlValue: any = {
  netPnl: 'Net P&L',
  grossPnl: 'Gross P&L',
};

const ticketTypes = [
  {
    label: 'Suggestion',
    value: 'suggestion',
  },
  {
    label: 'Feedback',
    value: 'feedback',
  },
  {
    label: 'Bug',
    value: 'bug',
  },
  {
    label: 'Feature Request',
    value: 'feature-request',
  },
];
const typeOptions: any = [
  {
    label: 'Stocks',
    value: 'stocks',
    enabled: true,
  },
  {
    label: 'Option',
    value: 'option',
    enabled: true,
  },
  {
    label: 'Future',
    value: 'future',
    enabled: false,
  },
  {
    label: 'Future Option',
    value: 'futureOption',
    enabled: false,
  },
  {
    label: 'Forex',
    value: 'forex',
    enabled: false,
  },
  {
    label: 'Crypto',
    value: 'crypto',
    enabled: false,
  },
  {
    label: 'CFD',
    value: 'cfd',
    enabled: false,
  },
];
const columnsHeadings = [
  {
    key: 'date',
    heading: 'Date',
    title: 'Date',
    placeholder: 'YYYY-MM-DD',
    btn: true,
    suffix: true,
    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },
  {
    key: 'time',
    heading: 'Time',
    title: 'Time',
    placeholder: 'HH:mm:ss',
    btn: true,

    suffix: true,

    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },

  {
    key: 'quantity',
    heading: 'QTY',
    title: 'Quantity',
    btn: false,

    placeholder: 'ex: 10',
    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },
  {
    key: 'side',
    heading: 'Side',
    title: 'Side',
    btn: true,
    suffix: true,
    placeholder: 'Buy/Sell',
    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },
  {
    key: 'price',
    heading: 'Price',
    title: 'Price',
    btn: false,
    placeholder: '0.00',
    prefix: '$',
    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },
  {
    key: 'commission',
    heading: 'Commission',
    btn: false,
    title: 'Commission',
    placeholder: '0.00',
    prefix: '$',
    includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  },
  {
    key: 'contractMultiplier',
    heading: 'Contract Multiplier',
    btn: false,
    title: 'Contract Multiplier',
    placeholder: 'ex: 100',
    includesIn: ['option', 'future', 'futureOption', 'forex', 'cfd'],
  },
  {
    key: 'instrument',
    heading: 'Instrument',
    title: 'Instrument',
    btn: true,
    suffix: true,
    placeholder: 'Put/Call',
    includesIn: ['option', 'futureOption'],
  },
  {
    key: 'expDate',
    heading: 'Exp Date',
    suffix: true,
    btn: true,
    title: 'Exp Date',
    placeholder: 'YYYY-MM-DD',
    includesIn: ['option', 'futureOption', 'future'],
  },
  {
    key: 'strike',
    heading: 'Strike',
    btn: false,
    prefix: '$',
    title: 'Strike',
    placeholder: '0.00',
    includesIn: ['option', 'futureOption'],
  },
  // {
  //   key: 'numberOfContracts',
  //   heading: 'No. of Contracts',
  //   includesIn: ['future', 'futureOption', 'forex', 'cfd'],
  // },

  // {
  //   key: '',
  //   heading: '',
  //   includesIn: ['stocks', 'option', 'future', 'futureOption', 'forex', 'crypto', 'cfd'],
  // },
];
const sideOption = [
  {
    label: 'BUY',
    value: 'buy',
  },
  {
    label: 'SELL',
    value: 'sell',
  },
];
const instrumentOption = [
  {
    label: 'CALL',
    value: 'call',
  },
  {
    label: 'PUT',
    value: 'put',
  },
];
export {
  dropdowns,
  getPnlValue,
  ticketTypes,
  typeOptions,
  columnsHeadings,
  sideOption,
  instrumentOption,
};
