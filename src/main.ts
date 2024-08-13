import service from './core/state';

service.start();

service.send({ type: 'FETCH' });

service.send({ type: 'RESOLVE' });

// service.send({ type: 'FETCH' });

// service.send({ type: 'REJECT' });
