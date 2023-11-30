import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ActivityService } from '../services/activity.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/activity')
@UseGuards(JwtAuthGuard)
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ){}

    @Get()
    getAll() {
        return this.activityService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.activityService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.activityService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.activityService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.activityService.delete(id);
    }
}
