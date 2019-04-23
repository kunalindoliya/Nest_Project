import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FullRange } from './full-range.entity';
import * as Puid from 'puid';
const puid=new Puid(true);

@Controller('full-range')
export class FullRangeController {
    @Post('/addFullRange')
    postFullRange(@Body() fullRange:FullRange){
        fullRange.id=puid.generate();
        //service method
    }

    @Put('/updateFullRange/:id')
    updateFullRange(@Param('id') id, @Body() fullRange:FullRange){
        fullRange.id=id;
        //service method
    }

    @Delete('/deleteFullRange/:id')
    deleteFullRange(@Param('id') id){
        //service method
    }
}
