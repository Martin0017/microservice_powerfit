import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { RewardService } from '../services/reward.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('api_db/reward')
@UseGuards(JwtAuthGuard)
export class RewardController {

        constructor(
            private rewardService: RewardService
        ){}
    
        @Get()
        getAll() {
            return this.rewardService.findAll();
        }
    
        @Get(':id')
        getOne(@Param('id') id: number){
            return this.rewardService.findOne(id);
        }
    
        @Post()
        create(@Body() body: any){
            return this.rewardService.create(body);
        }
    
    
        @Put(':id')
        update(@Param('id') id: number, @Body() body:any){
            return this.rewardService.update(id,body);
        }
    
        @Delete(':id')
        delete(@Param('id') id: number){
            return this.rewardService.delete(id);
        }    
}
