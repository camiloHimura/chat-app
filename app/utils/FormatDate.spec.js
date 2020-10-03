import FormatDate from './FormatDate';
import {INVALID_DATE} from '../contans/ErrorMessages';

describe('Invalid Date', () => {
  it('string, throw error', () => {
    expect(() => FormatDate({date: '12321323'})).toThrow(Error(INVALID_DATE));
  });

  it('boolean, throw error', () => {
    expect(() => FormatDate({date: true})).toThrow(Error(INVALID_DATE));
  });

  it('Obj, throw error', () => {
    expect(() => FormatDate({date: {}})).toThrow(Error(INVALID_DATE));
  });

  it('decimal, throw error', () => {
    expect(() => FormatDate({date: 123123.2})).toThrow(Error(INVALID_DATE));
  });
})

describe('save and retrive the saved vale', () => {
  const date = 1601734416154; //2020-10-03, 16:13:36

  it('date format 12', () => {
    const outcome = FormatDate({date});
    expect(outcome.includes('4:13:36')).toBe(true);
  });
  
  it('date format 24', () => {
    const outcome = FormatDate({date, isHour12: false});
    expect(outcome.includes('16:13:36')).toBe(true);
  });


})


