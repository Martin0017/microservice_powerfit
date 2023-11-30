import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { AdministratorService} from './../services/administrator.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/admin')
@UseGuards(JwtAuthGuard)
export class AdministratorController {
    constructor(
        private administratorService: AdministratorService
    ){}

    @Get()
    getAll() {
        return this.administratorService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.administratorService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.administratorService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.administratorService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.administratorService.delete(id);
    }

}
