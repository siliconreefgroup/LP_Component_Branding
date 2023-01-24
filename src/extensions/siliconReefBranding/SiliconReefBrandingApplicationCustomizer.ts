import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName, PlaceholderProvider
} from '@microsoft/sp-application-base';
import * as $ from 'jquery';

import { spfi, SPFI, SPFx, ISPFXContext } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IHubSiteWebData } from  "@pnp/sp/hubsites";
import "@pnp/sp/webs";
import "@pnp/sp/hubsites/web";
import { Webs, IWebs } from "@pnp/sp/webs";
import { Lists, ILists } from "@pnp/sp/lists";

import "@pnp/sp/webs";
import UIkit from 'uikit';
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
import { Web } from "@pnp/sp/webs";
import { IHubSiteInfo } from  "@pnp/sp/hubsites";
import "@pnp/sp/hubsites";
import {AppInsights} from "applicationinsights-js";
import * as strings from 'SiliconReefBrandingApplicationCustomizerStrings';
import { ConsoleListener } from 'sp-pnp-js';

const LOG_SOURCE: string = 'SiliconReefBrandingApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISiliconReefBrandingApplicationCustomizerProperties {
  // This is an example; replace with your own property

}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SiliconReefBrandingApplicationCustomizer
  extends BaseApplicationCustomizer<ISiliconReefBrandingApplicationCustomizerProperties> {

    @override
  public onInit(): Promise<void> { UIkit;
   this.render();
   this.context.application.navigatedEvent.add(this, () => {
    this.render();
  });
return Promise.resolve();
  }
  private render() {
    const sp = spfi().using(SPFx(this.context));
    console.log("onInit: Entered");

    console.log(sp.hubSites());
    console.log("Available placeholders: ",
      this.context.placeholderProvider.placeholderNames.join(", "));

    // top placeholder..
    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    if (topPlaceholder) {
      topPlaceholder.domElement.innerHTML = `<div id="beacontopplaceholder">

      </div>`;
    }

    // bottom placeholder..
    let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
    if (bottomPlaceholder) {
      bottomPlaceholder.domElement.innerHTML = ``;
    }

    let appInsightsKey: string;
    appInsightsKey  = "bfb830c1-c429-4ca2-9a80-cd175ca8780f";
    AppInsights.downloadAndSetup({ instrumentationKey: appInsightsKey });
    AppInsights.trackEvent('Silicon Reef Branded Page', <any>{
      Site:this.context.pageContext.site.absoluteUrl,
			PageTitle: document.title,
			SiteTitle: this.context.pageContext.web.title,
			ItemId:  this.context.pageContext.legacyPageContext.pageItemId,
			TenantID: this.context.pageContext.aadInfo.tenantId._guid,
			GuestUser:this.context.pageContext.user.isExternalGuestUser,


        });
var siteurl: any;

if(this.context.pageContext.legacyPageContext.siteServerRelativeUrl==="/") {siteurl=""} else{siteurl = this.context.pageContext.site.serverRelativeUrl};
    async function getcssfile() {
      console.log(siteurl)
      console.log(sp.web.hubSiteData().catch.length)
      if(sp.web.hubSiteData().catch.length==1){

      let currentconetent = (await sp.web.getFileByUrl(`${siteurl}/SiteAssets/mycss.txt`).getText()).toString();

 $("#beacontopplaceholder").append("<style id='custombeaconbranding'>"+currentconetent+"</style>");
    }
  else { sp.web.hubSiteData().then(async hubsite =>{

    var web = Web( hubsite.url);
    var hubby = "/"+hubsite.url.split("/")[3]+"/"+hubsite.url.split("/")[4];
    const url = hubsite.url+"/SiteAssets/mycss.txt";
    const file = web.getFileByUrl(url);
    console.log(url)

 const currentconetent =  $.get(url, function (data) {
  console.log(data)

 $("#beacontopplaceholder").append("<style id='custombeaconbranding'>"+data+"</style>"); })
  })}
  }

getcssfile()


  }

}
