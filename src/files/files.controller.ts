import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import * as Puid from 'puid';
import { Files } from './files.entity';
const puid=new Puid(true);

@Controller('files')
export class FilesController {
    @Post('/addfile')
    postFile(@Body() file:Files){
        //service method
    }

    @Put('/updateFile/:id')
    updateFile(@Param('id') id,@Body() file:Files){
        file.id=id;
        //service method
    }

    @Delete('/deleteFile/:id')
    deleteFile(@Param('id') id){
        //service method
    }
}
