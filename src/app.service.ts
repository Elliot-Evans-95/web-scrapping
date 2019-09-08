import { Injectable } from '@nestjs/common';
import fetch, {Response} from "node-fetch";
import * as cheerio from "cheerio";

@Injectable()
export class AppService {
    private readonly _testUrl = 'http://www.mrha.co.uk/mwDivisionFixtures.asp?Leagueid=4&DivisionID=1';

    fetchFromPage(): Promise<Response> {
        return fetch(this._testUrl)
    }

    getTableData(): Promise<string> {
        return this.fetchFromPage()
            .then(res => res.text())
            .then(body => {
                const $ = cheerio.load(body);
                const resultsTable = $('table')[0];
                const $resultTable = cheerio.load(resultsTable);

                return $resultTable.html();
            });
    }

}
