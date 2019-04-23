import { Controller, Post, Body, Patch, Get, Put, Param, Delete } from '@nestjs/common';
import * as Puid from 'puid';
import { Page } from './page.entity';
const puid=new Puid(true);

@Controller('page')
export class PageController {

    @Post('/addPage')
    postPage(@Body() pageDetails:Page){
        pageDetails.id=puid.generate();
        //service method
    }
    @Put('/updatePage/:id')
    patchPage(@Param('id') id,@Body() pageDetails:Page){
        pageDetails.id=id;
        //service method
    }
    @Delete('/delete/:id')
    deletePage(@Param('id') id){
        //service method
    }
}
