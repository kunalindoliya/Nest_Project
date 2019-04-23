import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import * as Puid from 'puid';
import { Carousle } from './carousle.entity';
const puid=new Puid(true);

@Controller('carousle')
export class CarousleController {
    @Post('/addCarousle')
    postCarousle(@Body() carousle:Carousle){
        carousle.id=puid.generate();
        //service method
    }

    @Put('/updateCarousle/:id')
    updateCarousle(@Param('id') id,@Body() carousle:Carousle){
        carousle.id=id;
        //service method
    }

    @Delete('/deleteCarousle/:id')
    deleteCarousle(@Param('id') id){
        //service method
    }
}
