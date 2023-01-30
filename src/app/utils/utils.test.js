import {formatDate, formatMiliseconds} from './utils';

describe('Function inside utils.js', ()=>
{
  describe('formatDate', () => {
    test('check formatDate Function', () => {
      const result = formatDate('2022/07/07');
      expect(typeof result).toBe('string');
    });
  });

  describe('formatMiliseconds', () => {
    test('check formatDate Function', () => {
      const result = formatMiliseconds('16165165165');
      expect(typeof result).toBe('string'); 
    });
  })
  

})

  