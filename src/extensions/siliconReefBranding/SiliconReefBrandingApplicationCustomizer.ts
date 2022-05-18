import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as $ from 'jquery';





import pnp, { List, ListEnsureResult } from "sp-pnp-js";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IHubSiteWebData } from  "@pnp/sp/hubsites";
import "@pnp/sp/webs";
import "@pnp/sp/hubsites/web";
import { Webs, IWebs } from "@pnp/sp/webs";
import { Lists, ILists } from "@pnp/sp/lists";


import * as jQuery from "jquery";
window["jQuery"] = window["$"] = $;
import {AppInsights} from "applicationinsights-js";

import * as strings from 'SiliconReefBrandingApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SiliconReefBrandingApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISiliconReefBrandingApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SiliconReefBrandingApplicationCustomizer
  extends BaseApplicationCustomizer<ISiliconReefBrandingApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context,
    });
    let appInsightsKey: String;
    appInsightsKey  = "39f70f1c-aeed-4ece-8972-029b37259ace";
    AppInsights.downloadAndSetup({ instrumentationKey: appInsightsKey });
    AppInsights.trackPageView('Silicon Reef Branded Page', <any>{
      Site:this.context.pageContext.site.absoluteUrl,
			PageTitle: document.title,
			SiteTitle: this.context.pageContext.web.title,
			ItemId:  this.context.pageContext.legacyPageContext.pageItemId,
			TenantID: this.context.pageContext.aadInfo.tenantId._guid,
			GuestUser:this.context.pageContext.user.isExternalGuestUser,


        });
var siteurl: any = this.context.pageContext.site.serverRelativeUrl;
    async function getcssfile() {

      let currentconetent = (await sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/mycss.txt`).getText()).toString();
 $("#spTopPlaceholder").append("<style id='siliconreefbranding'>"+currentconetent+"</style>")
    }

getcssfile()

    return Promise.resolve();
  }
}
