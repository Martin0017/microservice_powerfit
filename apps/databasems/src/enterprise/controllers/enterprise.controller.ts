import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { EnterpriseService } from '../services/enterprise.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/enterprise')
@UseGuards(JwtAuthGuard)
export class EnterpriseController {
    constructor(
        private enterpriseService: EnterpriseService
    ){}

    @Get()
    getAll() {
        return this.enterpriseService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.enterpriseService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.enterpriseService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.enterpriseService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.enterpriseService.delete(id);
    }
}
