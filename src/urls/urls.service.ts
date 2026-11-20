
import { Injectable } from '@nestjs/common';

export interface UrlData {
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
}

@Injectable()
export class UrlsService {
  private urls: UrlData[] = [];

  shortenUrl(originalUrl: string): UrlData {
    const shortCode = Math.random()
      .toString(36)
      .substring(2, 8);

    const urlData: UrlData = {
      originalUrl,
      shortCode,
      shortUrl: `http://localhost:3000/${shortCode}`,
    };

    this.urls.push(urlData);

    return urlData;
  }
}
