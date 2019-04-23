import { Controller,Body,Put,Post,Delete, Param } from '@nestjs/common';
import { Matrix } from './matrix.entity';
import * as Puid from 'puid';
const puid=new Puid(true);

@Controller('matrix')
export class MatrixController {
    @Post('/addMatrix')
    postMatrix(@Body() matrix:Matrix){
        matrix.id=puid.generate();
        //service method
    }

    @Put('/updateMatrix/:id')
    updateMatrix(@Param('id') id,@Body() matrix:Matrix){
        matrix.id=id;
        //service method
    }

    @Delete('/deleteMatrix/:id')
    deleteMatrix(@Param('id') id){
        //service method
    }
}
