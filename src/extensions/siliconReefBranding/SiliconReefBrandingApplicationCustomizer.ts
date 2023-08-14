import { override } from '@microsoft/decorators';

import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName, PlaceholderProvider
} from '@microsoft/sp-application-base';
import * as $ from 'jquery';

import { spfi, SPFx,  } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import "@pnp/sp/webs";
import "@pnp/sp/hubsites/web";



import "@pnp/sp/webs";

require("./css/uikit.css");
require("uikit/dist/js/uikit.min.js");



import "@pnp/sp/hubsites";
import {AppInsights} from "applicationinsights-js";



import "@pnp/sp/webs";

import "@pnp/sp/clientside-pages/web";
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
    protected get isRenderAsync(): boolean {
      return true;
    }
    @override
  public async onInit(): Promise<void> {

   this.context.application.navigatedEvent.add(this, async () => {
    let filterings: string ="" ;
    const   siteurl = this.context.pageContext.site.absoluteUrl
    $.get(siteurl+"/SiteAssets/combined.txt", function (data) {
      filterings = data;
      document.querySelectorAll('#beaconfilters').forEach(e => e.remove());

      $("body").append("<div style='display:none' id='beaconfilters'>"+filterings+"</div>");
    });
    const sp = spfi().using(SPFx(this.context));
    let thispage = await sp.web.loadClientsidePage(this.context.pageContext.site.serverRequestPath);
    document.querySelectorAll('#pagestyles').forEach(e => e.remove());
    $("body").append(`<div id="pagestyles"><div style="display:none" id="pagethumb">`+thispage.bannerImageUrl+`</div>
    <div style="display:none" id="pagetitle">`+thispage.title+`</div>
    <div style="display:none" id="pagedescription">`+thispage.description+`</div>
    <div style="display:none" id="pagetopic">`+thispage.topicHeader+`</div></div>`)

    this.render();
  });
return Promise.resolve();
  }

  private async render() {
    const sp = spfi().using(SPFx(this.context));



    console.log("Available placeholders: ",
      this.context.placeholderProvider.placeholderNames.join(", "));

    // top placeholder..
    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    if (topPlaceholder) {
      topPlaceholder.domElement.innerHTML = `<div id="beacontopplaceholder">



      </div><div id="beaconcustomplaceholder"></div>

      `;
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
console.log(this.context.pageContext.legacyPageContext)

if(this.context.pageContext.legacyPageContext.hubSiteId==null){
  siteurl = this.context.pageContext.site.absoluteUrl
  $("#beacontopplaceholder").html("");

  let fonts: string ="" ;
    $.get(siteurl+"/SiteAssets/fontcss.txt", function (data) {
      fonts = data;
      $("#beaconfonts").remove();

$("#beacontopplaceholder").append("<style id='beaconfonts'>"+fonts+"</style>");
    })


    let colors: string ="" ;
    $.get(siteurl+"/SiteAssets/colorcss.txt", function (data) {
      colors = data;
      document.querySelectorAll('#beaconcolors').forEach(e => e.remove());
      $("#beacontopplaceholder").append("<style id='beaconcolors'>"+colors+"</style>");
    });
    let headings: string ="" ;
    $.get(siteurl+"/SiteAssets/headingcss.txt", function (data) {
      headings = data;
      document.querySelectorAll('#beaconheadings').forEach(e => e.remove());
      $("#beacontopplaceholder").append("<style id='beaconheadings'>"+headings+"</style>");
    });
    let buttons: string ="" ;
    $.get(siteurl+"/SiteAssets/buttoncss.txt", function (data) {
      buttons = data;
      document.querySelectorAll('#beaconbuttons').forEach(e => e.remove());
      $("#beacontopplaceholder").append("<style id='beaconbuttons'>"+buttons+"</style>");
    });
    let custom: string ="" ;
    $.get(siteurl+"/SiteAssets/customcss.txt", function (data) {
      custom = data;
      document.querySelectorAll('#beaconcustom').forEach(e => e.remove());
      $("#beaconcustomplaceholder").append(`<style id='beaconcustom'>`+custom+`    button[id^="swatchColorPicker"],  button[id^="swatchColorPicker"]:hover{
        width:40px;height:40px;font-weight:600
        }
        button[id^="swatchColorPicker"][aria-selected="true"]{border:2px solid black;border-style:dashed;height 42px;width:42px;}
        button[id^="swatchColorPicker"][aria-selected="true"] > span {height:34px !Important;width:34px !Important;}
        button[id^="swatchColorPicker"]::after{content:"Aa";position:relative;bottom:30px;}</style>`);
    });




}
else if(this.context.pageContext.legacyPageContext.hubSiteId!=null){

        sp.web.hubSiteData().then(async hubsite =>{



siteurl = hubsite.url


$("#beacontopplaceholder").html("");

      let fonts: string ="" ;
        $.get(hubsite.url+"/SiteAssets/fontcss.txt", function (data) {
          fonts = data;
          $("#beaconfonts").remove();
          $("#beaconfonts").remove();
          $("#beaconfonts").remove();

 $("#beacontopplaceholder").append("<style id='beaconfonts'>"+fonts+"</style>");
        })

        let colors: string ="" ;
        $.get(hubsite.url+"/SiteAssets/colorcss.txt", function (data) {
          colors = data;
          $("#beaconcolors").remove();
          $("#beaconcolors").remove();
          $("#beaconcolors").remove();

          $("#beacontopplaceholder").append("<style id='beaconcolors'>"+colors+"</style>");
        })
        let headings: string ="" ;
        $.get(hubsite.url+"/SiteAssets/headingcss.txt", function (data) {
          headings = data;
          $("#beaconheadings").remove();
          $("#beaconheadings").remove();
          $("#beaconheadings").remove();

          $("#beacontopplaceholder").append("<style id='beaconheadings'>"+headings+"</style>");
        })
        let buttons: string ="" ;
        $.get(hubsite.url+"/SiteAssets/buttoncss.txt", function (data) {
          buttons = data;
          $("#beaconbuttons").remove();
          $("#beaconbuttons").remove();
          $("#beaconbuttons").remove();
          $("#beacontopplaceholder").append("<style id='beaconbuttons'>"+buttons+"</style>");
        })
        let custom: string ="" ;
        $.get(hubsite.url+"/SiteAssets/customcss.txt", function (data) {
          custom = data;
          $("#beaconcustom").remove();
          $("#beaconcustom").remove();
          $("#beaconcustom").remove();

          $("#beaconcustomplaceholder").append("<style id='beaconcustom'>"+custom+"</style>");
        })

        $.get(this.context.pageContext.site.absoluteUrl+"/SiteAssets/mycss.txt", function (data) {
          let full = data;
          $("#beaconcolors").remove();
          $("#beaconcolors").remove();
          $("#beaconcolors").remove();
          $("#beaconcustomplaceholder").append("<style id='beaconfull'>"+full+"</style>");
        })


    }


    )}



  }

}
