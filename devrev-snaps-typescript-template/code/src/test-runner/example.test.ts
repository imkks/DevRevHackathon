import { run } from '../functions/get_insights';


describe('Test some function', () => {
  it('Something', () => {
    run([{
      payload: {
        work_created: {
          work: {
            id: 'some-id'
          }
        }
      }
    }]);
  });
});
