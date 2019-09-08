import {Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    private readonly _scraperService: AppService;

    constructor(scraperService: AppService) {
        this._scraperService = scraperService;
    }

    @Get()
    async findAll(): Promise<string> {
        return this._scraperService.getTableData();
    }

}
