import { IsUrl, IsNotEmpty } from  'class-validator';

export class CreateUrlData{
     
    @IsNotEmpty()
    @IsUrl()
    originalUrl: string;
}