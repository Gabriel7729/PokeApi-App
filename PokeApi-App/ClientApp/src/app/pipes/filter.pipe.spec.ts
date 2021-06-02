import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () =>{
  it('create an Instance', () =>{
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});