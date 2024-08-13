import { createActor, createMachine } from 'xstate';

const promiseMachine = createMachine({
  id: 'promise',
  initial: 'idle',
  states: {
    idle: {
      on: { FETCH: 'pending' },
    },
    pending: {
      on: { RESOLVE: 'resolved', REJECT: 'rejected' },
    },
    resolved: {
      type: 'final',
    },
    rejected: {
      type: 'final',
    },
  },
});

const service = createActor(promiseMachine);
service.subscribe(state => {
  console.log(state.value);
});

export default service;
