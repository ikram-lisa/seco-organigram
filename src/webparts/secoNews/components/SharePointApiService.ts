import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export default class SharePointApiService {
  private context: WebPartContext;

  constructor(context: WebPartContext){
    this.context = context;
  }

  public async getListItems(listName: string) {
    const siteUrl = 'https://vitsolutionseu.sharepoint.com/sites/HR373';
    return await this.context.spHttpClient.get(
        `${siteUrl}/_api/web/lists/getById(guid'${listName}')/items`, 
        SPHttpClient.configurations.v1
      ).then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
}
