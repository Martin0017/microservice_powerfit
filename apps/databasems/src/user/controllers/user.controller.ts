import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/user')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    @Post('search')
    findByEmail(@Body() searchItemDto: any) {
      return this.userService.findOneUserByMail(searchItemDto.correo_user);
    }

    @Post()
    create(@Body() body: any){
        return this.userService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.userService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.delete(id);
    }
}

