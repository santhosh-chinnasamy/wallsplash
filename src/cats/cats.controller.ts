import { Controller, Get, Req, Res, Post, Header, Redirect, Param } from '@nestjs/common';
import { Request } from 'express'

@Controller('cats')
export class CatsController {

    // Get method
    @Get()
    @Header('Cache-Control', 'none')
    @Redirect('https://google.com')
    findAll(@Req() request: Request): any {
        // return {"message":"This action returns all cats"}
        return { url: 'http://localhost:3000/cats/ab_cd' } // Redirect overrides to this url
    }

    // Post methos
    @Post()
    create(): object {
        return { "message": "can create cats" }
    }

    // Route wildcards
    @Get('ab*cd/:id')
    wildcard(@Param() params) {
        console.log(params.id);
        return 'wilcard route'
    }

    // async
    @Get('async')
    async findall(): Promise<any[]> {
        return [];
    }
}
