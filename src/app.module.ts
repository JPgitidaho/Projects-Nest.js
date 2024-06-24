import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './tuits/tuits.controller';

@Module({
  imports: [],
  controllers: [AppController, TuitsController],
  providers: [AppService],
})
export class AppModule {}
