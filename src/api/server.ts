import { createServer, Model } from 'miragejs';
import { TaskInterface } from '../interfaces/TaskInterface';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      task: Model.extend<Partial<TaskInterface>>({}),
    },

    seeds(server) {
      server.create('task', {
        id: 1,
        title: 'Balanço 1',
        isChecked: false,
        description: 'Task 1',
        date: new Date(),
      });
      server.create('task', {
        id: 2,
        title: 'Balanço 2',
        isChecked: true,
        description: 'Task 2',
        date: new Date(),
      });
      server.create('task', {
        id: 3,
        title: 'Balanço 3',
        isChecked: false,
        description: 'Task 3',
        date: new Date('2022, 12, 04'),
      });
      server.create('task', {
        id: 4,
        title: 'Balanço 4',
        isChecked: false,
        description: 'Task 4',
        date: new Date(),
      });
      server.create('task', {
        id: 5,
        title: 'Balanço 5',
        isChecked: true,
        description: 'Task 5',
        date: new Date(),
      });
      server.create('task', {
        id: 6,
        title: 'Balanço 6',
        isChecked: false,
        description: 'Task 6',
        date: new Date('2022, 12, 04'),
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/tasks', (schema) => {
        return schema.tasks.all();
      });

      this.patch('/tasks/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;

        let tasks = schema.tasks.find(id);

        return tasks.update(newAttrs);
      });

      this.delete('/tasks/:id', (schema, request) => {
        let id = request.params.id;

        return schema.tasks.find(id).destroy();
      });
    },
  });

  return server;
}
