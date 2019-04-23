import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import * as Puid from 'puid';
import { Section } from './section.entity';
const puid=new Puid(true);

@Controller('section')
export class SectionController {
    @Post('/addSection')
    postSection(@Body() section:Section){
        section.id=puid.generate();
        //service method
    }

    @Put('/updateSection/:id')
    updateSection(@Param('id') id,@Body() section:Section){
        section.id=id;
        //service method
    }

    @Delete('/deleteSection/:id')
    deleteSection(@Param('id') id){
        //service method
    }
}
