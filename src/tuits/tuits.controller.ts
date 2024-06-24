import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
    @Get()
    getTuits(): string{
        return `Hello from twitter`;
    }
    @Get(`:id`)
    getTuit(@Param(`id`) id:string) : string{
        return`Your tuit id is ${id}`
    }

    @Post()
    createTuit(@Body('message') message:string) {
        return `Your tuit was ${message}`;
    }
}
