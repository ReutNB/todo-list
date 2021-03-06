import { Injectable } from '@nestjs/common';
import { Message } from '@todo-list/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
