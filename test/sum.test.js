import {sum} from '../src/sum';

test('Test Sum Function', () => { 
    const result = sum(1,2);

    expect(result).toBe(3);
});