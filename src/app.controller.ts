import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "The app is running!";
  }
}
