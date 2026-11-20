
import { Controller, Post, Body, Get, Param,Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service.js';
import { CreateUrlData } from './dto/create-url.dto.js';

 
@Controller('urls')

 export class UrlsController{
     constructor(private readonly urlsService: UrlsService){}
     @Get(':code/redirect')
      @Redirect()
      redirectToOriginalUrl(@Param('code')code: string){
        const url = this.urlsService.findByCode(code);

        return{
             url: url.originalUrl,
             statusCode: 302,
        };
      }
     getOriginalUrl(@Param('code') code: string){
        return this.urlsService.findByCode(code);
     }
     @Post('shorten')
     shortenUrl(@Body() createUrlDtO: CreateUrlData){
        return this.urlsService.shortenUrl(createUrlDtO.originalUrl);
     }
     
    

 }
