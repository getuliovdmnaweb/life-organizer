import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  listTodos() {
    return [
      {
        id: 1,
        content: 'Hi there',
      },
    ];
  }
}
