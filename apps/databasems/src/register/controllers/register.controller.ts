import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { RegisterService } from '../services/register.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/register')
@UseGuards(JwtAuthGuard)
export class RegisterController {
    constructor(
        private registerService: RegisterService
    ){}

    @Get()
    getAll() {
        return this.registerService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.registerService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.registerService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.registerService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.registerService.delete(id);
    }
}
