
import { Controller, Post, Body } from '@nestjs/common';
import { UrlsService } from './urls.service.js';
import { CreateUrlData } from './dto/create-url.dto.js';

@Controller('urls')

 export class UrlsController{
     constructor(private readonly urlsService: UrlsService){}

     @Post('shorten')
     shortenUrl(@Body() createUrlDtO: CreateUrlData){
        return this.urlsService.shortenUrl(createUrlDtO.originalUrl);
     }
 }
