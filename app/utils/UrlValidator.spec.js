import UrlValidator from './UrlValidator';
import { INVALID_URL } from '../contans/ErrorMessages';

describe('UrlValidator', () => {
  it('empty string, false', () => {
    expect(UrlValidator('')).toBe(false);
  });

  it('valid url, no img, false', () => {
    expect(UrlValidator('https://www.google.com/')).toBe(false);
  });

  it('valid png, true', () => {
    expect(UrlValidator('https://w.wallha.com/ws/9/QsK4Si81.jpg')).toBe(true);
  });

  describe('Invalid key', () => {
    it('array, throw error', () => {
      expect(() => UrlValidator([])).toThrow(Error(INVALID_URL));
    });
  
    it('obj, throw error', () => {
      expect(() => UrlValidator({})).toThrow(Error(INVALID_URL));
    });
    
    it('null, throw error', () => {
      expect(() => UrlValidator(null)).toThrow(Error(INVALID_URL));
    });
  
    it('number, throw error', () => {
      expect(() => UrlValidator(123)).toThrow(Error(INVALID_URL));
    });
  });
  
});



