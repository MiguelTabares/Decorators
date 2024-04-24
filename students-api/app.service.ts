import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  convert(id: number) {
    return id * 80;
  }

  assignName(name) {
    return name = "Miguel Tabares";
  }

  deleteByName(name) {
    return `${name} Deleted successfully`
  }
}
