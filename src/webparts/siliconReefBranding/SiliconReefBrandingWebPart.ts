import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
	PropertyPaneButtonType,
	IPropertyPaneDropdownOption,
	PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import * as React from "react";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';
import { PropertyFieldToggleWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldToggleWithCallout';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/Callout';
import { PropertyFieldLabelWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldLabelWithCallout';
import { PropertyFieldButtonWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldButtonWithCallout';
import { IPropertyFieldSwatchColorOption, PropertyFieldSwatchColorPicker, PropertyFieldSwatchColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldSwatchColorPicker';
import UIkit from 'uikit';
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
import Icons from 'uikit/dist/js/uikit-icons';
import * as moment from "moment";
import {
  PropertyPaneLabel,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneLink,
  PropertyPaneSlider,PropertyPaneButton
} from '@microsoft/sp-property-pane';
import pnp, { ConsoleListener, List, ListEnsureResult } from "sp-pnp-js";
import { spfi, SPFI, SPFx, ISPFXContext } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IHubSiteWebData } from  "@pnp/sp/hubsites";
import "@pnp/sp/webs";
import "@pnp/sp/hubsites/web";
import { Webs, IWebs } from "@pnp/sp/webs";
import { Lists, ILists } from "@pnp/sp/lists";
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import * as strings from 'SiliconReefBrandingWebPartStrings';
import {AppInsights} from "applicationinsights-js";
import { IColor } from 'office-ui-fabric-react/lib/utilities/color';
import * as jQuery from "jquery";
import { initializeComponentRef } from '@uifabric/utilities';
import { parseJSON } from 'jquery';
export interface ISiliconReefBrandingWebPartProps {
  description: string;
  color: string;
  color2: string;
  color3: string;
  buttonprimary: string;
  h1color: string;
  h2color: string;
  buttonprimaryhover: string;
  h1size: string;

  h2size: string;
  fontname: string;
  fonturl: string;
  contrast: boolean;
  newsuppercase: boolean;
  buttonuppercase: boolean;
  fontcolor: string;
  background: string;
  fontsize: string;
  CustomCSS: string;
  CustomJS: string;
  hubsite: boolean;
  font:string;
  font2:string;
  font3:string;
  bold:string;
  italic:string;
  light:string;
  collectionData: any[];
  collectionData1: any[];

}

export default class SiliconReefBrandingWebPart extends BaseClientSideWebPart<ISiliconReefBrandingWebPartProps> {


  public render(): void {


const sp = spfi().using(SPFx(this.context));
    if(this.displayMode==2){

      jQuery("#siliconreefbranding").remove()
      jQuery("#siliconreefbranding").remove()

    }

 let swatch1 = this.properties.collectionData;
let swatch2 = this.properties.collectionData1;
 if(swatch1&&swatch2){swatch2 = this.properties.collectionData.concat(this.properties.collectionData1)};
if(swatch1){
    var matcher: any = swatch1.filter( element1 => element1.background ==this.properties.background);}

    else if(!swatch1){var matcher: any =  "#ffffff";}
    console.log(matcher.length)
    if(matcher.length >= 1){

    var colormatch = matcher[0].text}
    else if(matcher.length == 0) {var colormatch = matcher}

    if(swatch1){
    let matcher1: any = swatch1.filter( element1 => element1.background ==this.properties.color3);
    if(matcher1.length <=0){
      var colormatch1: any = "#ffffff"}
      else {var colormatch1 = matcher1[0].text}
      console.log(colormatch1)
    }

    if(swatch2){
      var matcher2: any = swatch2.filter( element1 => element1.background ==this.properties.buttonprimary);
      var matcher3: any = swatch2.filter( element1 => element1.background ==this.properties.buttonprimaryhover);}

      else if(!swatch2){var matcher2: any =  "#ffffff";var matcher3: any =  "#ffffff";}

      if(matcher2.length >= 1){

      var colormatch2 = matcher2[0].text}
      else if(matcher2.length == 0) {var colormatch2 = matcher2}
      if(matcher3.length >= 1){

        var colormatch3 = matcher3[0].text}
        else if(matcher3.length == 0) {var colormatch3 = matcher3}
console.log(colormatch3)
    AppInsights.trackEvent('Branding webpart used on a page', <any>{
      Site:this.context.pageContext.site.absoluteUrl,
			PageTitle: document.title,
			SiteTitle: this.context.pageContext.web.title,
			ItemId:  this.context.pageContext.legacyPageContext.pageItemId,
			TenantID: this.context.pageContext.aadInfo.tenantId._guid,
			GuestUser:this.context.pageContext.user.isExternalGuestUser,
      MainFont: this.properties.font,
      HeaderFont: this.properties.font2
        });
        var siteurl: any;
        if(this.context.pageContext.legacyPageContext.siteServerRelativeUrl==="/") {siteurl=""} else{siteurl = this.context.pageContext.site.serverRelativeUrl};
   async function createfile(serverRelativeUrl: string) {
      try {

        const fileExists =  await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`).files.getByUrl("myfonts.txt").exists();

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not

        if (!fileExists) {

          await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`)
  .files.addUsingPath(encodeURI(`myfonts.txt`), "Open Sans,Poppins", { Overwrite: true });
        }


      }
      catch (error) {
         //Log
      }
    }
    async function createprimary(serverRelativeUrl: string) {
      try {

        const fileExists =  await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`).files.getByUrl("primary.txt").exists();

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not

        if (!fileExists) {

          await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`)
  .files.addUsingPath(encodeURI(`primary.txt`), `[{"uniqueId":"1b580d73-4af4-43d3-bd9b-048db540727b","Title":"Dark grey","background":"#363636","text":"#ffffff","sortIdx":1},{"uniqueId":"d16056fc-7e80-4274-a229-3d5fc7ee6ddd","Title":"Coral","background":"#EF5F4C","text":"#ffffff","sortIdx":2},{"uniqueId":"dbfb8d63-7d54-40b9-b8f8-8707fda060a3","Title":"Blue","background":"#CCE0DC","text":"#363636","sortIdx":3}]`, { Overwrite: true });
        }


      }
      catch (error) {
         //Log
      }
    }
    async function createsecondary(serverRelativeUrl: string) {
      try {

        const fileExists =  await sp.web.getFolderByServerRelativePath(`${siteurl}/SiteAssets`).files.getByUrl("combined.txt").exists();

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not

        if (!fileExists) {

          await sp.web.getFolderByServerRelativePath(`${siteurl}/SiteAssets`)
  .files.addUsingPath(encodeURI(`secondary.txt`), `[{"uniqueId":"40982aaf-8c7a-453c-8a33-066b4852fd00","Title":"Pale blue","background":"#EBF4F1","text":"#363636","sortIdx":1},{"uniqueId":"3fceaa31-76b7-4a25-88a6-a05969375a3c","Title":"Warm grey","background":"#a5a4a5","text":"#000000","sortIdx":2},{"uniqueId":"1741f604-9aae-4978-802e-3c640d79cc3a","Title":"Teal","background":"#4b99a2","text":"#ffffff","sortIdx":3},{"uniqueId":"8809ea12-d81b-429e-bbe2-9e901b31514f","Title":"Green","background":"#53955f","text":"#ffffff","sortIdx":4},{"uniqueId":"5cec170c-f7c7-4c20-8efa-e60d54efbe97","Title":"Amber","background":"#f7bc5f","text":"#363636","sortIdx":5},{"uniqueId":"c54f0bae-653c-45af-ba98-62f869724e5e","Title":"Blush","background":"#f7dcd4","text":"#363636","sortIdx":6}]`, { Overwrite: true });
        }


      }
      catch (error) {
         //Log
      }
    }
    async function createcombined(serverRelativeUrl: string) {
      try {

        const fileExists =  await sp.web.getFolderByServerRelativePath(`${siteurl}/SiteAssets`).files.getByUrl("combined.txt").exists();

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not

        if (!fileExists) {

          await sp.web.getFolderByServerRelativePath(`${siteurl}/SiteAssets`)
  .files.addUsingPath(encodeURI(`combined.txt`), `[{"uniqueId":"40982aaf-8c7a-453c-8a33-066b4852fd00","Title":"Pale blue","background":"#EBF4F1","text":"#363636","sortIdx":1},{"uniqueId":"3fceaa31-76b7-4a25-88a6-a05969375a3c","Title":"Warm grey","background":"#a5a4a5","text":"#000000","sortIdx":2},{"uniqueId":"1741f604-9aae-4978-802e-3c640d79cc3a","Title":"Teal","background":"#4b99a2","text":"#ffffff","sortIdx":3},{"uniqueId":"8809ea12-d81b-429e-bbe2-9e901b31514f","Title":"Green","background":"#53955f","text":"#ffffff","sortIdx":4},{"uniqueId":"5cec170c-f7c7-4c20-8efa-e60d54efbe97","Title":"Amber","background":"#f7bc5f","text":"#363636","sortIdx":5},{"uniqueId":"c54f0bae-653c-45af-ba98-62f869724e5e","Title":"Blush","background":"#f7dcd4","text":"#363636","sortIdx":6}]`, { Overwrite: true });
        }


      }
      catch (error) {
         //Log
      }
    }
    async function createcssfile(serverRelativeUrl: string) {
      try {

        const fileExists = await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`).files.getByUrl("mycss.txt").exists();

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not
console.log(fileExists)
        if (!fileExists) {
          await sp.web.getFolderByServerRelativePath(siteurl+`/SiteAssets`)
  .files.addUsingPath(encodeURI(`mycss.txt`), "",{ Overwrite: true });
        }


      }
      catch (error) {
         //Log
      }
    }
    async function updatefile() {
      var serverRelativeUrl: string = siteurl
      let currentconetent = (await sp.web.getFileByUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString()
      console.log(currentconetent)
      await  sp.web.getFileByUrl(`${siteurl}/SiteAssets/myfonts.txt`)
      .setContent(currentconetent+","+jQuery("#gf").val()+"");
      var string = (await sp.web.getFileByUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString();

var array = string.split(",");
jQuery("#fonts").html("")
array.forEach(element => {
  jQuery("#fonts").append("<li>"+element.replace("'","").replace("'","")+"</li>")
});
    }
    async function updateuploadedfile(serverRelativeUrl: any, filename: string) {
      var serverRelativeUrl = siteurl
      let currentconetent = (await sp.web.getFileByUrl(siteurl+`/SiteAssets/myfonts.txt`).getText()).toString()

      await  sp.web.getFileByUrl(`${siteurl}/SiteAssets/myfonts.txt`)
      .setContent(currentconetent+","+filename);
      var string = (await sp.web.getFileByUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString();
var array = string.split(",");
jQuery("#fonts").html("")
array.forEach(element => {
  jQuery("#fonts").append("<li>"+element.replace("'","").replace("'","")+"</li>")
});
    }

    createfile(siteurl)
    createcssfile(siteurl)
    createprimary(siteurl)
    createsecondary(siteurl)
    createcombined(siteurl)
    this.domElement.innerHTML = `<div id="allfonts"></div>
    <ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Color</a></li>
    <li><a href="#">Upload fonts</a></li>
    <li><a href="#">Typography</a></li>
    <li><a href="#">Image and Overlays</a></li>

</ul>
<ul class="uk-switcher uk-margin">
<li  class="" style="padding:15px">
<h1>Colour</h1>
<div class="uk-grid-match" uk-grid >

    <div class="uk-width-1-4@m">
        <div class="uk-card uk-card-default uk-card-body">

        <h3>Primary colours</h3>
       <p> Create space and contrast- use as much white space as possible- use as much contrast with colours for accessibility</p>
        </div>
    </div>
    <div class="uk-width-expand@m">
        <div id="access" class="uk-card uk-card-default uk-card-body uk-grid uk-child-width-expand@s" style="margin-left:-15px"></div>
    </div>
</div>
<div class="uk-grid-match" uk-grid >

    <div class="uk-width-1-4@m">
        <div class="uk-card uk-card-default uk-card-body">
        <h3>Secondary colours</h3>
       <p>Supports the primary palette- should only be used in small areas</p>

        </div>
    </div>
    <div class="uk-width-expand@m">
        <div id="access2" class="uk-card uk-card-default uk-card-body uk-grid uk-child-width-1-4@m " style="margin-left:-15px"></div>
    </div>
</div>
   </li>
<li>
    <div style="padding:15px" id="branding">
    <form>

    <label><input onchange="jQuery('.searchitem').show();jQuery('.googlefont').show();jQuery('.fontbutton').show();jQuery('.js-upload').hide();" class="uk-radio" type="radio" name="radio2" > Import a Google font</label>

    <label><input onchange="jQuery('.searchitem').hide();jQuery('.googlefont').hide();jQuery('.fontbutton').hide();jQuery('.js-upload').show();" class="uk-radio" type="radio" name="radio2"> Upload a font file</label>
    <div style="display:none" class="uk-margin searchitem">
    <input id="fontsearch" class="uk-input" type="text" placeholder="Search">
</div>
    <div style="display:none" class="uk-margin googlefont">
    <select id="gf" class="uk-select">
    </select>
    <div>
    <a id="addfont" class="uk-button uk-button-text" href="#modal-example" uk-toggle>+ Add to my fonts</a>
    <!-- This is the modal -->
    <div id="modal-example" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <h2 class="uk-modal-title">Font added</h2>
            <p>Your current fonts</p>
            <ul class="uk-list" id="fonts">
            </ul>
            <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">OK</button>

            </p>
        </div>
    </div>
</div>
</div>
<div  style="display:none" class="js-upload">
    <div >
    <input type="file" id="uploadfont" />

    </div>
    <a id="uploadfontclick" class="uk-button uk-button-text" href="#modal-example" uk-toggle>+ Add to my fonts</a>
</div>
</form>
</li >
<li class="" style="padding:15px"><article class="uk-article">

<h1 >Heading 1</h1>
<h2 >Heading 2</h2>
<h3 >Heading 3</h3>
<h4 >Heading 4</h4>
<h5 >Heading 5</h5>

<p class="intro">Intro -- Medium sentence case - line clamped at 2 lines</p>
<p class="uk-article-meta">Meta -- Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>

<p style="font-weight:norma;">Paragraph -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
<p><strong >Bold -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</strong></p>
<i>Italic -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
<p style="font-weight:300" >Light text -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
<div class="uk-grid-small uk-child-width-auto" uk-grid>
    <div>
        <a class="uk-button uk-button-text" href="#">Read more</a>
    </div>
    <div>
        <a class="uk-button uk-button-text" href="#">5 Comments</a>
    </div>
</div>
<p uk-margin>
    <button class="uk-button uk-button-default">Default</button>
    <button class="uk-button uk-button-primary">Primary</button>
    <button class="uk-button uk-button-secondary">Secondary</button>
    <button class="uk-button uk-button-danger">Danger</button>

    <button class="uk-button uk-button-link">Link</button>
</p>
</article></li>
<li class="" style="padding:15px">Overlays</li>
    <div id="beaconbrandingzone"></div>`;
    function hexToRgb(hex: string) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    function luminance(r: any, g: any, b: any) {
      var a = [r, g, b].map(function (v) {
          v /= 255;
          return v <= 0.03928
              ? v / 12.92
              : Math.pow( (v + 0.055) / 1.055, 2.4 );
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
    console.log(this.properties.collectionData)
    console.log(this.properties.collectionData1)
    let palette = this.properties.collectionData;
    let palette2 = this.properties.collectionData1;
    if(palette){
    palette.forEach(color => {
      const color1 = color.background;
const color2 = color.text;
const color1rgb = hexToRgb(color1);
const color2rgb = hexToRgb(color2);
const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);
const ratio = color1luminance > color2luminance
    ? ((color2luminance + 0.05) / (color1luminance + 0.05))
    : ((color1luminance + 0.05) / (color2luminance + 0.05));
    const result = `
                AA-level large text:  ${ratio < 1/3 ? ' <strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                AA-level small text:  ${ratio < 1/4.5 ? ' <strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                AAA-level large text: ${ratio < 1/4.5 ? '<strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                AAA-level small text: ${ratio < 1/7 ? '<strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }
               `;
var rgb = color1rgb.r+","+ color1rgb.g+","+ color1rgb.b
      let swatchhtml = `<div style="background:`+color.background+`; color:`+color.text+`; padding:15px;"><p style="font-weight:bold">`+color.Title+` <br>Hex: `+color.background+`<br>RGB: `+rgb+` </p></br><span>`+result+`</span></div>`
$("#access").append(swatchhtml)
    })};
    if(palette2){
      palette2.forEach(color => {
        const color1 = color.background;
  const color2 = color.text;
  const color1rgb = hexToRgb(color1);
  const color2rgb = hexToRgb(color2);
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);
  const ratio = color1luminance > color2luminance
      ? ((color2luminance + 0.05) / (color1luminance + 0.05))
      : ((color1luminance + 0.05) / (color2luminance + 0.05));
      const result = `
                  AA-level large text:  ${ratio < 1/3 ? ' <strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                  AA-level small text:  ${ratio < 1/4.5 ? ' <strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                  AAA-level large text: ${ratio < 1/4.5 ? '<strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }<br>
                  AAA-level small text: ${ratio < 1/7 ? '<strong>✔ PASS</strong>' : '<strong>X FAIL</strong>' }
                 `;
                 var rgb = color1rgb.r+","+ color1rgb.g+","+ color1rgb.b
        let swatchhtml = `<div style="background:`+color.background+`; color:`+color.text+`;padding:15px;"><p style="font-weight:bold">`+color.Title+` <br>Hex: `+color.background+`<br>RGB: `+rgb+` </p></br><span>`+result+`</span></div>`
  $("#access2").append(swatchhtml)
      })};
    var inputElement = jQuery("#uploadfontclick");
    jQuery(inputElement).on('click', function () {
      uploadFileFromControl()
    })
    function uploadFileFromControl(){

      //Get the file from File DOM
    var files = jQuery("#uploadfont").prop('files');
    var file = files[0];
       //Upload a file to the SharePoint Library
       sp.web.getFolderByServerRelativePath("SiteAssets")
       .files.addUsingPath(file.name, file, { Overwrite: true })
       .then((data) =>{
        updateuploadedfile("",file.name)
       })
       .catch((error) =>{
         alert("Error is uploading");
       });
    }
    jQuery( "#fontsearch" ).keyup(function() {

      jQuery("#gf").find('option').remove().end();
      jQuery.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=AIzaSyAVRRaVmMFgBktw9mL7hwornyqJbf8acUQ`)
      .then(data  => {

        var fonts = data.items;
       for(var k in fonts){
        if(fonts[k].family.includes(jQuery("#fontsearch").val())){
          jQuery("#gf").append("<option>"+fonts[k].family+"</option>")

       }
   }
   }
   );
    }
    );

     var uppercase;
     if(this.properties.newsuppercase == undefined){uppercase = ""}
     else if(this.properties.newsuppercase == true){ uppercase = "text-transform:uppercase;"}
      else if(this.properties.newsuppercase == false) {uppercase = "text-transform:none;"};
      var buppercase;
      if(this.properties.buttonuppercase == undefined){buppercase = ""}
      else if(this.properties.buttonuppercase == true){ buppercase = "text-transform:uppercase;"}
       else if(this.properties.buttonuppercase == false) {buppercase = "text-transform:none;"};
       let h1c;
      if(this.properties.h1color != undefined) {h1c ="color:"+ this.properties.h1color;}
     var h1s;
      if(this.properties.h1size != undefined) {h1s ="font-size:"+ this.properties.h1size+" !important";}
      let h2c;
      if(this.properties.h2color != undefined) {h2c ="color:"+ this.properties.h2color;}
     var h2s;
      if(this.properties.h2size != undefined) {h2s ="font-size:"+ this.properties.h2size+" !important" ;}
let bodyimport;
let bodyimport1;
let bodyimport2;
let bodyimport3;
let headerimport;
let headerimport2;
let headerfont;
let headerfont2;
let font;
let font1;
let font2;
let font3;
if(this.properties.font==undefined){font="Poppins"; bodyimport = ""} else
if(this.properties.font.indexOf(".") > -1){font = this.properties.font.split(".")[0]; bodyimport = `@font-face {
  font-family: `+this.properties.font.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.font+`);
  font-weight: normal;
  font-style:normal;
}` }
else {font=this.properties.font;bodyimport =`
@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');`
}
if(this.properties.bold==undefined){font1="Poppins"; bodyimport1 = ""} else
if(this.properties.bold.indexOf(".") > -1){font1 = this.properties.font.split(".")[0]; bodyimport1 = `@font-face {
  font-family: `+this.properties.font.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.bold+`);
  font-weight: bold;
  font-style:normal;
}` }
else {font1=this.properties.bold;bodyimport1 =`
@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');`
}
if(this.properties.italic==undefined){font2="Poppins"; bodyimport2 = ""} else
if(this.properties.italic.indexOf(".") > -1){font2 = this.properties.font.split(".")[0]; bodyimport2 = `@font-face {
  font-family: `+this.properties.font.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.italic+`);
  font-weight:normal;
  font-style:italic;
}` }
else {font2=this.properties.italic;bodyimport2 =`
@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');`
}
if(this.properties.light==undefined){font3="Poppins"; bodyimport3 = ""} else
if(this.properties.light.indexOf(".") > -1){font = this.properties.font.split(".")[0]; bodyimport3 = `@font-face {
  font-family: `+this.properties.font.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.light+`);
  font-weight:300;
  font-style:normal;
}` }
else {font3=this.properties.light;bodyimport3 =`
@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');`
}


if(this.properties.font2==undefined){headerfont="Poppins"; headerimport = ""} else
if(this.properties.font2.indexOf(".") > -1){headerfont = this.properties.font2.split(".")[0]; headerimport = `@font-face {
  font-family: `+this.properties.font2.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.font2+`);
  font-weight: bold;
}` }
else {headerfont=this.properties.font2;headerimport =`@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font2+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');` }
if(this.properties.font3==undefined){headerfont2="Poppins"; headerimport2 = ""} else
if(this.properties.font3.indexOf(".") > -1){headerfont2 = this.properties.font3.split(".")[0]; headerimport2 = `@font-face {
  font-family: `+this.properties.font3.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.font3+`);
  font-weight: bold;
}` }
else {headerfont2=this.properties.font3;headerimport2 =`@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font3+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');` }



     SPComponentLoader.loadCss(this.properties.description);
     var styles =
    `<style data-load-themed-styles="true" id="beaconbranding">
    `+bodyimport+`
    `+bodyimport1+`
    `+bodyimport2+`
    `+bodyimport3+`
    `+headerimport+`
    `+headerimport2+`
    .uk-subnav-pill>.uk-active>a {
      background-color: black !important;
      .uk-subnav-pill>*>:first-child {
        padding: 5px 10px;
        background: 0 0;
        color: #333 !important;
    }
  }
  .ms-DocumentCardTile .ms-DocumentCard:not(.ms-DocumentCard--compact) .ms-DocumentCardTile-titleArea .ms-DocumentCardLocation, .ms-NewsSiteTitle.text_siteLink  {
    color:  `+colormatch1+` !important;
}
.ms-NewsPinningItemImage img {
  max-width: 100%;
  height: -webkit-fill-available !important;
  box-sizing: border-box;
}

    .uk-button-primary,.uk-button-secondary:hover, .ms-Button--primary, .ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"]{background:`+this.properties.buttonprimary+` ;border:1px solid `+this.properties.buttonprimary+`; }

     .ms-Button--primary .ms-Button-label, .ms-Button--primary .ms-Button-icon, .ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"], .uk-button-primary{color:`+colormatch2+` !important;`+buppercase+`}
    .ms-Button-label:hover, .uk-label:hover{color:`+colormatch3+` !important}
    .uk-label:hover{background:`+colormatch2+` !important;}
    .uk-label a:hover{color:`+colormatch3+` !important}
    .uk-label{background:`+colormatch3+` !important}
    .uk-button-secondary, .ms-Button--primary:hover, .uk-button-primary:hover,.ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"]{background:`+this.properties.buttonprimaryhover+` ;border:1px solid `+this.properties.buttonprimaryhover+`;color:`+colormatch3+` !important}
   p, .od-FieldRenderer-text,tspan,.noopener, .datetime, .location, .category, .ms-TextField-field,.ms-TextField,
    .ms-TextField--multiline div[data-automation-id*="metadataTitle"],.ms-DetailsHeader-cellName, .overlay-text-wrapper,
    .ms-Link,.root-40,  div[data-automation-id*="people-card"] > div > div > div,
    div[data-automation-id*="people-card"] > div > div > div > div,  div[data-automation-id*="webPartHeader"] > div > textarea, .root-62 ,
    .root-150,div[data-automation-id*="captionElement"] > textarea, div[data-automation-id*="captionElement"] > a,
     .intro,.ms-DocumentCardActivity-name, .ms-DocumentCardActivity-activity, .ms-DocumentCardTile-titleArea,
     .ms-DocumentCardLocation, .ms-DocumentCardTitle,  div.post-content > div > span > span, div.post-content > div > i,
     .wc-message-from-bot .wc-message-content,  .title, .intro, div.post-content > div > a > span,
     .wc-message-from-bot .wc-message-content, .nav-link,.nav-item, .ms-Menu-heading,
     .wc-message-from-me .wc-message-content,  .wc-card p, .root-45,div[data-automation-id*="newsItem"] span,.ms-DocumentCardActivity-activity,.ms-DocumentCardActivity-name,
     .ms-DocumentCardActivity-details,#O365_Settings_navbardatalinks a,#o365sectionexpandlink,a[class*="linkText"],a[class*="newsSiteTitle"],span[class*="itemDetail"],a[class*="seeAll"],
     .ms-HorizontalNavItem-link, [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled), form .likert, #statement,
     [data-automationid="SimpleFooter"] a,
[data-automationid="SimpleFooter"] button,
 #sp-appBarPanel,[class*="itemDetail"] ,
.ms-Nav-linkText,
#O365_MainLink_Me span,
[type*="search"],
[class*="suggestion-selector"] span,
.fc-list-event-title,
.uk-accordion-title,
.od-FieldRenderer-text,
tspan,
.noopener,
.datetime,
.location,
.category,
.ms-TextField-field,
.ms-TextField,
.ms-TextField--multiline div[data-automation-id*="metadataTitle"],
.ms-DetailsHeader-cellName,
.overlay-text-wrapper,
.ms-Link,


.root-40,
div[data-automation-id*="people-card"]>div>div>div,
div[data-automation-id*="people-card"]>div>div>div>div,

.root-62,
.root-150,
div[data-automation-id*="captionElement"]>textarea,
div[data-automation-id*="captionElement"]>a,
.ms-DocumentCardActivity-name,
.ms-DocumentCardActivity-activity,
.ms-DocumentCardTile-titleArea,
.ms-DocumentCardLocation,
.ms-DocumentCardTitle,
div.post-content>div>span>span,
div.post-content>div>i,
.wc-message-from-bot .wc-message-content,

.intro,
div.post-content>div>a>span,
.nav-link,
.nav-item,
.ms-Menu-heading,
.wc-message-from-me .wc-message-content,

.wc-card p,

.root-45,
.ms-HorizontalNavItem-link,
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled),
form .likert,
#statement,

body,
.ms-HubNav-link,
.ms-HorizontalNavItem-link,
.ms-Menu-heading,
.ms-Menu-item .ms-ContextualMenu-itemText,
div[data-automation-id*="button-card"]:hover,
div[data-automation-id*="quick-links-item-title"],
div[data-automation-id*="captionElement"],
.uk-card-default .uk-card-title,

.uk-card-body>p,
.format-markdown a,

div[data-automation-id*="captionElement"],
.uk-card-title,
.uk-label,
#head,
.uk-grid>ol li:before,
div[data-automation-id*="yammer_feed"],

div.uk-overlay.uk-position-bottom.uk-light>p,
div.uk-overlay.uk-position-bottom.uk-light>div,
h4.title,
 h3, h4, h5, h6,  h4.title, h4,h4.title,
 h4,.uk-card-body>h3,.uk-text-center h3,div.uk-overlay.uk-position-bottom.uk-light>h3,.root-40
   {
	    font-family:`+font+` !Important; line-height:1.6em
   }
   .o365sx-appBrandLink > span{font-family:`+font+` !Important; }
   div[data-automation-id*="TitleTextId"],
 .webpart-header,
 div[data-automation-id*="HeroTitle"],
 span[data-automation-id*="newsItemTitle"],
 .uk-h1,


 .uk-heading-2xlarge,
 .uk-heading-large,

 .uk-heading-xlarge,
 h1,
 .webpart-header,
div[data-automation-id*="HeroTitle"],
div[data-automation-id*="webPartHeader"]>div>textarea,
.title,
.wc-card h1,




.wc-card h1,

.uk-text-center h1,


li div.uk-overlay.uk-position-center.uk-light>h2,


.wc-card h1
 {
    font-family:`+headerfont+` !Important;line-height:1.3em !important;`+uppercase+`
  }
  .uk-h2,.uk-heading-medium,
 .uk-heading-small,h2, .webpart-header,.wc-card h2,.uk-text-center h2,div.uk-overlay.uk-position-bottom.uk-light>h2,div.uk-overlay.uk-position-bottom.uk-light>h2,
 li div.uk-overlay.uk-position-center.uk-light>h2
 {
  font-family:`+headerfont2+` !Important;line-height:1.3em !important;`+uppercase+`
 }
  [data-log-name="DisplayName"]{font-size:18px !important}
   .ms-DocumentCard{background:white !important}
   /*PRIMARY COLOUR*/

.wc-console input[type=text], .wc-console textarea, .useThemes .panel-header[data-v-60e023b1], .card-title, .comments a,.ms-HorizontalNavItem-link
{
	 color: `+colormatch+` !Important;
}
div[data-automation-id*="TitleTextId"],
.uk-label {


  text-align: center;
  font: normal normal normal 13px/15px `+font+`;
  border-radius: 0px;
  padding: 7px;


}
div.uk-overlay.uk-position-bottom.uk-light>p {


  font: normal normal normal 12px/14px `+font+`;


}

div.uk-overlay.uk-position-bottom.uk-light>div {


  font: normal normal medium 14px/16px `+font+`;


}
div.uk-overlay.uk-position-bottom.uk-light>h2,
li div.uk-overlay.uk-position-center.uk-light>h2,
div.uk-overlay.uk-position-bottom.uk-light>h3,

div.uk-overlay.uk-position-bottom.uk-light>p,
div.uk-overlay.uk-position-bottom.uk-light>div {


    letter-spacing: 0px;

    opacity: 1;
    font-weight: 600
}
.uk-h1, .uk-heading-2xlarge,
 .uk-heading-large, h1{`+h1c+` ;`+h1s+` ;line-height:1.5em}
 div[data-automation-id*="HeroTitle"]{`+h1s+` ;line-height:1.5em}
 div[data-automation-id*="TitleTextId"],
 .webpart-header,

 span[data-automation-id*="newsItemTitle"],
 [data-automation-id*="captionElement"] span,

 .uk-h2,


 .uk-heading-medium,
 .uk-heading-small,

 h2, .webpart-header{`+h2c+` ;`+h2s+`;line-height:1.5em}
div[data-automation-id*="HeroTitle"]{ `+uppercase+`}
.wc-console svg, .wc-message-from-bot svg.wc-message-callout path
{
    fill: `+colormatch+` !Important
}
.spAppAndPropertyPanelContainer .sp-appBar,button[data-automation-id*="button-web-part"],.wc-header, .o365cs-base .o365sx-button, .wc-message-from-bot .wc-message-content, footer > div, .o365sx-navbar,  .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-waffle
{
    color: `+colormatch+` !important;
    background: `+this.properties.background+` !important;
}
.sp-appBar i {
  color: `+colormatch+` !important;
}
#showhero {background:`+colormatch1+` !important;}

.nav-link{ `+uppercase+` color:`+colormatch2+` !important; font-size:`+this.properties.fontsize+` !important}
   /*RIPPLE NEWS STYLES*/
.intro{color:#666 !important}
   li[data-tool*="warning"] {display:none}
li[data-tool*="quote"] {display:none}
li[data-tool*="link"] {display:none}
li[data-tool*="table"] {display:none}
li[data-tool*="checklist"] {display:none}
.ms-Checkbox {
    padding-top: 20px
}
.title {
    max-height: 46px;
    overflow: hidden;
}
.wc-console input[type=text], .wc-console textarea {

    font-size: 18px !Important;

}
.false {
    display: none
}

.true {
    display: inherit
}
   .pin {
    display: inline-block;
    background: #FEFEFE;
    border: 2px solid #FAFAFA;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    margin: 0 2px 15px;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    padding: 15px;
    padding-bottom: 5px;
    background: -webkit-linear-gradient(45deg, #FFF, #F9F9F9);
    opacity: 1;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    width:100%;
}
@media (min-width: 960px) {
    #columns {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}

@media (min-width: 1100px) {
    #columns {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}

#columns:hover .pin:not(:hover) {
    opacity: 0.7;
}


.icon {
    color: gray !important;
}
   .Emoji{height:32px}
#columns {
    -webkit-column-count: 3;
    -webkit-column-gap: 10px;
    -webkit-column-fill: auto;
    -moz-column-count: 3;
    -moz-column-gap: 10px;
    -moz-column-fill: auto;
    column-count: 3;
    column-gap: 15px;
    column-fill: auto;
}

   .edit {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: block;
    margin: 0;
    outline: 0;
    overflow: hidden;
    resize: none;
    white-space: pre;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-align: inherit;
    color: #333333;
    height: 40px;
}

body{font-family:`+font+` !important}
.component-container {
    background: white
}
.count {
    float: right;
    padding: 20px;
}
#kanban-board {
    width: 98%;
    margin: auto;
}

.sortable-wrapper {
    float: left;
    width: 300px !important
}

.ghost {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
    opacity: 0.4;
    border-style: solid;
}

.dragging {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
    opacity: 0.8;
}
#getimages > span, #save-button {
    color: white !important;
}



#gettitle, #getintro {

    color: #53565A;
}

.drag-place-holder {
    height: 0px !important;
    margin-top: -5px;
    overflow: hidden;
    height: 200px;
    background: silver;
}

.postmodulefalse {
    height: 210px !important;
}

.imagesfalse {
    display: none
}



#newform {
    background: white !important;
    overflow: auto;
    height: 600px;
}
.ms-metadata {
    display: inline !important
}

.ui-state-default {
    min-height: 45px;
    max-width: 90%;
    background: white !important;
    border-radius: 3px;
    padding: 10px cursor:pointer;
    margin-left: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 15px;
    margin-bottom: 20px
}

.sortable div {
    padding: 3px;
}
.edit {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: block;
    margin: 0;
    outline: 0;
    overflow: hidden;
    resize: none;
    white-space: pre;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-align: inherit;
    color: #333333;
    height: 40px;
}
   .post-module {
    position: relative;
    z-index: 1;
    display: block;
    background: #ffffff;
    min-width: 25%;
    height: 340px;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.15);
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
}

    .post-module:hover, .hover, .ControlZone-control {
        -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3);
    }

.post-module {
    margin-top: 8px;
    margin-bottom: 10px !important;
}

    .post-module .thumbnail {
        height: 400px;
        overflow: hidden;
    }

        .post-module .thumbnail .date {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1;
            background: #ff6d62;
            width: 60px;
            height: 60px;
            padding: 12.5px 0;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            color: #ffffff;
            font-weight: 700;
            text-align: center;
            -webkti-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

    .post-module:hover .thumbnail img, .hover .thumbnail img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 0.6;
    }

    .post-module .thumbnail img {
        display: block;
        width: 120%;
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
    }

    .post-module .post-content {
        position: absolute;
        bottom: 0px;
        background: #ffffff;
        width: 100%;
        padding: 15px;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    }

        .post-module .post-content .category {
            position: absolute;
            top: -34px;
            left: 0px;
            background: #ff6d62;
            padding: 10px 15px;
            color: #ffffff;

            font-weight: 600;
            text-transform: uppercase;
        }

    .post-module .thumbnail .date .day {
        font-size: 18px;
    }

    .post-module .thumbnail .date .month {
        font-size: 12px;
        text-transform: uppercase;
    }

    .post-module .thumbnail .date {
        background-color: white !important;
        color: #8f92b5 !important;
    }

    .post-module .thumbnail .date {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        background: #ff6d62;
        width: 60px;
        height: 60px;
        padding: 12.5px 0;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .post-module .thumbnail img {
        display: block;
        width: 120%;
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
    }

h4.title {
    color: rgb(41,41,41) !Important;

    line-height: 25px;
    height: 55px !important;
    font-size: 16px !important;

}


    .post-module .post-content .category {
        text-transform: none !important;
    }

.card {
    border-radius: 2px
}

.intro {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 20px;
    height: 60px;
    overflow: hidden;
}

.post-module .post-content .post-meta {
    margin: 30px 0 0;
    color: #999999;
}

.post-module .post-content .post-meta {
    margin: 30px 0 0;
    color: #999999;
}

  /*MODERN SP STYLING*/

div[data-automation-id*="CanvasControl"], .root-78 {
background-color:white !Important;}


div[data-sp-feature-tag*="QuickLinksWebPart web part (Quick links)"] {
    padding:15px !Important
}
div[data-sp-feature-tag*="ContentRollupWebPart web part (Highlighted content)"] {
  padding:15px !Important
}

span[data-automationid*="SiteHeaderTitle"]{display:none !Important}

.logoImg-50{height:50px}

div[data-automation-id*="CanvasControl"], .root-78 {
background-color:white !Important;}

div[data-sp-feature-instance-id*="713a4f7f-a9b2-4353-813f-c8b944733225"] {
    padding:20px
}
div[data-sp-feature-instance-id*="840cdcce-f7ea-4353-af65-d33f714964c5"] {
    padding:20px
}
div[data-sp-feature-instance-id*="40605d96-c147-4010-ac31-ca2b60d9855d"] {
    padding:20px
}
div[data-sp-feature-tag*="PeopleWebPart web part (People)"] {
    padding:20px
}
div[data-sp-feature-tag*="ListWebPart web part (Document library)"] {
    padding:20px
}
div[data-sp-feature-tag*="Rich Text Editor"] {
    padding:20px
}
div[data-sp-feature-tag*="LinkPreviewWebPart web part (Link)"] {
    padding:20px
}
div[data-sp-feature-tag*="BingMapsWebPart web part (Bing Maps)"] {
    padding:20px
}
div[data-sp-feature-tag*="ButtonWebPart web part (Button)"] {
    padding:20px
}
div[data-sp-feature-tag*="YammerFullFeedWebPart web part (Conversations)"] {
    padding:20px
}
div[data-sp-feature-tag*="EventsWebPart web part (Events)"] {
    padding:20px
}
div[data-sp-feature-tag*="GroupCalendarWebPart web part (Group calendar)"] {
    padding:20px
}
div[data-sp-feature-tag*="YammerEmbedWebPart web part (Yammer)"] {
    padding:20px
}
div[data-sp-feature-tag*="ImageGalleryWebPart web part (Image gallery)"] {
    padding:20px
}
div[data-sp-feature-tag*="ListWebPart web part (List)"] {
    padding:20px
}
div[data-sp-feature-tag*="ListPropertiesWebPart web part (List properties)"] {
    padding:20px
}
div[data-sp-feature-tag*="FormsWebPart web part (Microsoft Forms)"] {
    padding:20px
}
div[data-sp-feature-tag*="NewsWebPart web part (News)"] {
    padding:20px
}
div[data-sp-feature-tag*="FieldsWebPart web part (Page properties)"] {
    padding:20px
}
div[data-sp-feature-tag*="MyDocumentsWebPart web part (Recent documents)"] {
    padding:20px
}
div[data-sp-feature-tag*="SavedForLaterWebPart web part (Saved for later)"] {
    padding:20px
}
div[data-sp-feature-tag*="SiteActivityWebPart web part (Site activity)"] {
    padding:20px
}
div[data-sp-feature-tag*="SitesWebPart web part (Sites)"] {
    padding:20px
}
div[data-sp-feature-tag*="EmbeddedVideoWebPart web part (Stream)"] {
    padding:20px
}
div[data-sp-feature-tag*="TwitterWebPart web part (Twitter)"] {
    padding:20px
}
div[data-sp-feature-tag*="WeatherWebPart web part (Weather)"] {
    padding:20px
}
div[data-sp-feature-tag*="WorldClockWebPart web part (World clock)"] {
    padding:20px
}

.root-45, .ms-HorizontalNavItem-link {
    padding: 10px;

}
.ms-HorizontalNavItem-link {
    color: #5e243c;font-weight:700
}

.SPPageChrome-app, .SPPageChrome-app > div {
    padding: 0px !important
}

#spPageCanvasContent{border-top:1px solid rgba(0,0,0,.1)}


.logoImg-50{height:40px !Important}


 div[data-sp-feature-instance-id*="2a19d510-1f33-4ebb-825b-44f4bc8b0e79"] > div{background:white !important}

footer > div {
    min-height:100px !Important;


    background-repeat: no-repeat;
    /* padding-top: 30px; */
    /* background-size: contain; */
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 10px;
}

.webpart-header {
    font-size: 25px;
    font-weight: 300;
    padding-top: 20px;

}


   /* BUTTONS */
   .btn-primary {
    background-color: #d93361;
}

.btn-success {
    background-color: #6c7b02;
    border-color: #6c7b02
}
    .btn-success:hover {
        background-color: #ad2b00;
        border-color: #ad2b00
    }
.btn-warning {
    background-color: #18808e;
    border-color: #18808e
}
    .btn-warning:hover {
        background-color: #d93361;
        border-color: #d93361
    }

.btn-primary:hover {
    color: white;
    background-color: #5E243C; padding: 5px;
    border-color: #5E243C !important;
}

.badge-secondary {
    background-color: #ff6d62 !important;
    padding: 15px;
    font-size: 15px !important;
}




.ms-HubNav-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  text-decoration: none;
  white-space: nowrap;
  font-size: 18px;
  color: `+colormatch+`;
  /* width: 244px; */
  font-weight: 700;
 font-family: `+font+`;
}




div[data-automation-id*="CanvasControl"], .root-78 {
  background-color: transparent !Important;
}
.cke_editable h2, .cke_editable h3, .cke_editable h4 {
  font-weight: 600 !important;

}


.ms-HorizontalNavItem-link, .ms-Menu-heading {
  color: `+colormatch1+` !important;

  font-family:
  `+font+`;
}
.ms-Icon--WaffleOffice365, #O365_AppName > span, .ms-Icon--Settings, .ms-Icon--Help, .o365cs-base {
  color:`+colormatch+` !important;
}
#spSiteHeader > div {background:`+this.properties.color3+` !important;}
.ms-Menu-heading{ color: `+colormatch1+` !important;}
.ms-Menu-item .ms-ContextualMenu-itemText {
  color: `+colormatch1+` !important;
  width: 244px;
  font-family:
  `+font+`;
}
.ms-HorizontalNav-chevronDown {
  color: `+colormatch1+` !important;
  background: transparent !important;

}
div[data-automation-id*="button-card"] {
 color:`+colormatch2+`;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  outline: 0px;
  border: none;
  border-radius: 2px;
  background-color: `+this.properties.buttonprimary+`;
  user-select: text;

  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="button-card"]:hover {
 color:`+colormatch3+`;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  outline: 0px;
  border: none;
  border-radius: 2px;
  background-color: `+this.properties.buttonprimaryhover+`;
  opacity: 0.8;
  user-select: text;

  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="quick-links-item-title"] {

  line-height: 20px;
  margin-bottom: 2px;

  -webkit-font-smoothing: antialiased;

  font-weight: 600;
  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="button-card"] > div > i {
 color:`+colormatch2+`;

}
.ButtonCard {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  outline: 0px;
  border: none;
  border-radius: 2px;
  background-color: `+this.properties.buttonprimary+` !important;
  user-select: text;
}
.ButtonCard:hover {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  outline: 0px;
  border: none;
  border-radius: 2px;
  background-color: `+this.properties.buttonprimary+` !important;
  opacity:.8;
  user-select: text;
}
div[data-automation-id*="captionElement"]  {
  font-family: '`+headerfont+`', sans-serif;
 overflow:hidden;

}
.uk-card-default .uk-card-title {

  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="overlay-text-wrapper"] {
  background-color: `+this.properties.background+` !important;
  opacity:.8 !important;
  white-space: pre-wrap;
  word-break: break-word;
  z-index: 1;
  position: unset;
  opacity: 1;
  box-sizing: border-box;
  font-size: 20px;
  padding: 8px 16px;
  max-width: 302px;
  font-weight: 600;
  color: white !important;
  line-height: 30px;
  min-height: 46px;
  color: black;
}
.featuredNewsLayout .text_siteLink-138:not(.orgNews) {

  font-weight: 600;
}







.cke_editable div, .cke_editable p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: black !important;
  font-weight: 400;
}
.ms-HorizontalNav-chevronDown {
color: black;
  background: white;
  font-weight: 600;
}
div[data-automation-id*="titleRegionBackgroundImage"] > image{
  left: 0px !important;


    width: 100% !important;
}

div.uk-overlay.uk-position-bottom.uk-light>div>a:after, div.uk-overlay.uk-position-center.uk-light>div>a:after {
  content: '';
  position: absolute;
  width: 90%;
  margin: auto;
  transform: scaleX(0);
  height: 3px;
  bottom: 20px;
  left: 0;
  background-color: #fc4191  !important;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}
.
#getimages>span,
#save-button {
  color: white !important;
}



#gettitle,
#getintro {

  color: #53565A;
}








#head {
  font-weight: 600
}


#followcamp,
#followteams,
#followlocations {
  font-weight: 600
}









#head {
  text-transform: uppercase;
  font-weight: 600;
}

#followcamp {
  font-weight: 600
}



.bodytext {
  font-size: 15px;
  line-height: 18pt;
  color: white;
  font-weight: 400;
  width: 60%;
}

.ce-paragraph[data-placeholder]:empty::before {
  font-size: 18px;
  font-weight: 400 !important
}

.ce-paragraph {
  margin-bottom: 20px
}

.ce-toolbox__button,
.ce-toolbar__plus {
  width: 24px !Important;
  height: 24px !important;
  left: -10px;
}

.ce-block__content {
  padding-left: 5px;
  padding-right: 5px;
  width: 90%;
  max-width: 90%
}

.ce-toolbar__content {
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}

a>i.delete.icon {
  color: white !important
}



.codex-editor--narrow .ce-toolbar__plus {
  left: 1% !important;
}

.ce-toolbox {
  left: 30px
}

.codex-editor svg {
  font-size: 14px !important;
  fill: currentColor;
}

.ce-toolbox__button,
.ce-toolbar__plus {
  border: 1px solid silver;
  border-radius: 100%;
  padding: 8px;
  margin-right: 12px;
  height: 30px !important;
  width: 30px !Important;
  padding: 5px;
}

.codex-editor--narrow .ce-toolbox {
  left: 7% !important;
}

.ce-toolbar {
  right: 30px
}

.uk-card-default {
  background: #fff;
  color: #666;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
}

div:empty:before {
  content: attr(data-placeholder);
  font-size: 30px;
  color: gray
}

.preview {
  overflow: hidden;
  width: 200px;
  height: 200px;
}

#workbenchPageContent {
  max-width: 1400px
}

[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  color: #bababa;
}

.ce-paragraph a {
  font-weight: 700
}

.ce-paragraph a:hover {
  color: #CCE0DC
}

.format-markdown a {
  color: white !Important;

}

.format-markdown img {
  border-radius: 7px;
  padding: 1px;
  width: 99%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.ce-header {
  padding-bottom: 20px
}

.ce-paragraph a {
  color: rgb(239, 95, 76);
  font-weight: 600;
  text-decoration: none;
}

.ui.comments .comment .metadata {
  display: inline-block;
  margin-left: .5em;
  color: #666;
  font-size: .875em;
}

.ce-paragraph {

  outline: none;
  font-size: 18px;
  line-height: 30px;
  color: #363636;
}

.ce-paragraph {
  line-height: 30px !important;
  outline: none;
  font-size: 18px !important;
  line-height: 30px;

  font-weight: 400 !important;
}

.ce-header {
  text-transform: uppercase;
  margin-bottom: 20px
}

.image-tool--withBorder img {
  border: 2px solid rgba(0, 0, 0, .1);
}

.cdx-input image-tool__caption,
div:empty:before {
  content: attr(data-placeholder);
  font-size: 14px !Important;
  color: gray;
}

.image-tool--filled .cdx-button {
  display: none
}

#article .cdx-alert__message:empty,
#article .cdx-input image-tool__caption:empty {
  display: none
}

div:empty:before {
  display: none
}



.select-wrapper {
  margin: auto;
  max-width: 600px;
  width: calc(100% - 40px);
}

a.ui.label {

  background-image: none;

  font-weight: 300
}

.dropdown {
  width: 100%
}

h3 > .heroclick, h2 > .heroclick{line-height: 1.2;
}

.CallToAction-Icon {position: relative;
  bottom: 10px;
  color: #fc4191 !important;
}
[data-automation-id="yammer_feed"]{padding:15px}
.uk-accordion>:nth-child(n+2) {
  margin-top: 40px;
}

#panelcomment,
#panellikes,
#panelheart,
#panelcurious,
#panelclap {
  font-weight: 700
}

.uk-marker{font-size: 25px !important;
  height: 45px!important;
  width: 45px!important;}
.uk-button-danger {
  background-color: #f0506e;
  color: #fff !important;
  border: 1px solid transparent;
}
#int {
  font-size: 32px;
  color: #444;
  font-weight: 500 !important;
}

.uk-accordion-title {


  font-size: 18px;
  font-weight: 600 !important;
  border-bottom: 1px solid rgba(0, 0, 0, .04);
  padding-bottom: 10PX;
}

.nav-link {
  color: #ffffff !important;
  font-size: 14px !important
}
.null{visibility:hidden}
 .uk-accordion-title {
  font-size: 24px;
  font-weight: 600 !important;
  border-bottom: 1px solid rgba(0, 0, 0, .04);
  padding-bottom: 10PX;
}
.uk-article-meta{color:#666}
[data-automation-id="propertyPaneGroupContent"] button {background:`+this.properties.buttonprimary+`;color:`+colormatch2+`}
#getimages>span,
#save-button {
    color: white !important;
}



#gettitle,
#getintro {

    color: #53565A;
}








#head {
    font-weight: 600
}


#followcamp,
#followteams,
#followlocations {
    font-weight: 600
}









#head {
    text-transform: uppercase;
    font-weight: 600;
}

#followcamp {
    font-weight: 600
}



.bodytext {
    font-size: 15px;
    line-height: 18pt;
    color: white;
    font-weight: 400;
    width: 60%;
}

.ce-paragraph[data-placeholder]:empty::before {
    font-size: 18px;
    font-weight: 400 !important
}

.ce-paragraph {
    margin-bottom: 20px
}

.ce-toolbox__button,
.ce-toolbar__plus {
    width: 24px !Important;
    height: 24px !important;
    left: -10px;
}

.ce-block__content {
    padding-left: 5px;
    padding-right: 5px;
    width: 90%;
    max-width: 90%
}

.ce-toolbar__content {
    max-width: 100%;
    margin: 0 auto;
    position: relative;
}

a>i.delete.icon {
    color: white !important
}



.codex-editor--narrow .ce-toolbar__plus {
    left: 1% !important;
}

.ce-toolbox {
    left: 30px
}

.codex-editor svg {
    font-size: 14px !important;
    fill: currentColor;
}

.ce-toolbox__button,
.ce-toolbar__plus {
    border: 1px solid silver;
    border-radius: 100%;
    padding: 8px;
    margin-right: 12px;
    height: 30px !important;
    width: 30px !Important;
    padding: 5px;
}

.codex-editor--narrow .ce-toolbox {
    left: 7% !important;
}

.ce-toolbar {
    right: 30px
}

.uk-card-default {
    background: #fff;
    color: #666;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
}

div:empty:before {
    content: attr(data-placeholder);
    font-size: 30px;
    color: gray
}

.preview {
    overflow: hidden;
    width: 200px;
    height: 200px;
}

#workbenchPageContent {
    max-width: 1400px
}

[contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    color: #bababa;
}

.ce-paragraph a {
    font-weight: 700
}

.ce-paragraph a:hover {
    color: #CCE0DC
}

.format-markdown a {
    color: white !Important;

}

.format-markdown img {
    border-radius: 7px;
    padding: 1px;
    width: 99%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.ce-header {
    padding-bottom: 20px
}

gulp package .ce-paragraph a {
    color: rgb(239, 95, 76);
    font-weight: 600;
    text-decoration: none;
}

.ui.comments .comment .metadata {
    display: inline-block;
    margin-left: .5em;
    color: #666;
    font-size: .875em;
}

.ce-paragraph {

    outline: none;
    font-size: 18px;
    line-height: 30px;
    color: #363636;
}

.ce-paragraph {
    line-height: 30px !important;
    outline: none;
    font-size: 18px !important;
    line-height: 30px;

    font-weight: 400 !important;
}

.ce-header {
    text-transform: uppercase;
    margin-bottom: 20px
}

.image-tool--withBorder img {
    border: 2px solid rgba(0, 0, 0, .1);
}

.cdx-input image-tool__caption,
div:empty:before {
    content: attr(data-placeholder);
    font-size: 14px !Important;
    color: gray;
}

.image-tool--filled .cdx-button {
    display: none
}

#article .cdx-alert__message:empty,
#article .cdx-input image-tool__caption:empty {
    display: none
}

div:empty:before {
    display: none
}



.select-wrapper {
    margin: auto;
    max-width: 600px;
    width: calc(100% - 40px);
}

a.ui.label {

    background-image: none;

    font-weight: 300
}

.dropdown {
    width: 100%
}




.uk-accordion>:nth-child(n+2) {
    margin-top: 40px;
}

#panelcomment,
#panellikes,
#panelheart,
#panelcurious,
#panelclap {
    font-weight: 700
}

#int {
    font-size: 32px;
    color: #444;
    font-weight: 500 !important;
}

.uk-accordion-title {


    font-size: 18px;
    font-weight: 600 !important;
    border-bottom: 1px solid rgba(0, 0, 0, .04);
    padding-bottom: 10PX;
}
.PropertyFieldCollectionData__panel__color-field > div{width:100% !important}
.ms-CustomFieldHost label {font-size:18px;margin-top:15px}
div[data-automation-id*="BaseCollection-FreshData"]  > div{background:transparent !important}
[aria-label="Silicon Reef Branding Customiser property pane"]{
  font-size: 14px;
    font-weight: 400;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color: #ffffff;
    width: 340px;
    -webkit-font-smoothing: antialiased;
    max-width: 600px;
    width:600px;
}
.intro {
  color: #666 !important
}


div[data-sp-feature-tag*="Comments"] {
  display: none
}


.ms-Checkbox {
  padding-top: 20px
}

.title {
  max-height: 46px;
  overflow: hidden;
}

.pin {
  display: inline-block;
  background: #FEFEFE;
  border: 2px solid #FAFAFA;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;

  padding: 15px;
  padding-bottom: 5px;
  background: -webkit-linear-gradient(45deg, #FFF, #F9F9F9);
  opacity: 1;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
  width: 100%;
}

@media (min-width: 960px) {
  #columns {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
  }
}

@media (min-width: 1100px) {
  #columns {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
  }
}

#columns:hover .pin:not(:hover) {
  opacity: 0.7;
}


.icon {
  color: gray !important;
}

.Emoji {
  height: 32px
}

#columns {
  -webkit-column-count: 3;
  -webkit-column-gap: 10px;
  -webkit-column-fill: auto;
  -moz-column-count: 3;
  -moz-column-gap: 10px;
  -moz-column-fill: auto;
  column-count: 3;
  column-gap: 15px;
  column-fill: auto;
}

.edit {
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: block;
  margin: 0;
  outline: 0;
  overflow: hidden;
  resize: none;
  white-space: pre;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: inherit;
  color: #333333;
  height: 40px;
}

.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #FFFFFF;
  min-width: 25%;
  height: 340px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

.post-module:hover,
.hover,
.ControlZone-control {
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
}

.post-module {
  margin-top: 8px;
  margin-bottom: 10px !important;
}

.post-module .thumbnail {
  height: 400px;
  overflow: hidden;
}

.post-module .thumbnail .date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  width: 60px;
  height: 60px;
  padding: 12.5px 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;

  font-weight: 700;
  text-align: center;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.post-module:hover .thumbnail img,
.hover .thumbnail img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.6;
}

.post-module .thumbnail img {
  display: block;
  width: 120%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

.post-module .post-content {
  position: absolute;
  bottom: 0px;
  background: #FFFFFF;
  width: 100%;
  padding: 15px;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}

.post-module .post-content .category {
  position: absolute;
  top: -34px;
  left: 0px;

  padding: 10px 15px;

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.post-module .thumbnail .date .day {
  font-size: 18px;
}

.post-module .thumbnail .date .month {
  font-size: 12px;
  text-transform: uppercase;
}

.post-module .thumbnail .date {
  background-color: white !important;
  color: #8f92b5 !important;
}

.post-module .thumbnail .date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  width: 60px;
  height: 60px;
  padding: 12.5px 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.post-module .thumbnail img {
  display: block;
  width: 120%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

h4.title {
  color: rgb(41, 41, 41) !Important;

  line-height: 25px;
  height: 55px !important;
  font-size: 16px !important;
  font-weight: 800 !important
}

h4,
h2 {
  font-weight: 600 !Important
}

.post-module .post-content .category {
  text-transform: none !important;
}

.card {
  border-radius: 2px
}

.intro {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 20px;
  height: 60px;
  overflow: hidden;
}

.post-module .post-content .post-meta {
  margin: 30px 0 0;
  color: #999999;
}

.post-module .post-content .post-meta {
  margin: 30px 0 0;
  color: #999999;
}

.postmodulefalse {
  height: 210px !important;
}

.imagesfalse {
  display: none
}

.uk-card-title {
  font-size: 14px;
  font-weight: 600 !important;

  text-transform: uppercase;
}

.intro {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  height: 66.6px;
  padding-top: 8px;
  overflow: hidden;
  font-weight: 400;
  color: #333 !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

h4.title {
  color: rgb(41, 41, 41) !Important;
  line-height: 25px;
  height: 55px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  text-transform: uppercase;
}

.uk-label {
  text-align: center;
  font: normal normal normal 13px/15px;
  letter-spacing: 0px;

  opacity: 1;
  border-radius: 0px;
  padding: 7px;
}

.uk-grid>ol {
  list-style: none;
  counter-reset: mycounter;
  padding: 0;
}

.uk-grid>ol li:before {
  content: counter(mycounter);
  counter-increment: mycounter;
  color: red;
  display: inline-block;
  width: 1em;
  margin-left: -1.5em;
  margin-right: 0.5em;
  font-size: 30px;
  text-align: right;
  direction: rtl
}

.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #FFFFFF;
  min-width: 25%;
  height: 340px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

.post-module:hover,
.hover,
.ControlZone-control {
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
}

.post-module {
  margin-top: 8px;
  margin-bottom: 10px !important;
}

.post-module .thumbnail {
  height: 400px;
  overflow: hidden;
}

.post-module .thumbnail .date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  width: 60px;
  height: 60px;
  padding: 12.5px 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.post-module:hover .thumbnail img,
.hover .thumbnail img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.6;
}

.post-module .thumbnail img {
  display: block;
  width: 120%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

.post-module .post-content {
  position: absolute;
  bottom: 0px;
  background: #FFFFFF;
  width: 100%;
  padding: 15px;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}

.post-module .post-content .category {
  position: absolute;
  top: -34px;
  left: 0px;

  padding: 10px 15px;

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.post-module .thumbnail .date .day {
  font-size: 18px;
}

.post-module .thumbnail .date .month {
  font-size: 12px;
  text-transform: uppercase;
}

.post-module .thumbnail .date {
  background-color: white !important;
  color: #8f92b5 !important;
}

.post-module .thumbnail .date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  width: 60px;
  height: 60px;
  padding: 12.5px 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.post-module .thumbnail img {
  display: block;
  width: 120%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}

h4.title {
  color: rgb(41, 41, 41) !Important;

  line-height: 25px;
  height: 55px !important;
  font-size: 16px !important;
  font-weight: 600 !important
}






.component-container {
  background: white
}

.count {
  float: right;
  padding: 20px;
}

#kanban-board {
  width: 98%;
  margin: auto;
}

.sortable-wrapper {
  float: left;
  width: 300px !important
}

.ghost {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  opacity: 0.4;
  border-style: solid;
}

.dragging {
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  transform: rotate(-5deg);
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
}

#getimages>span,
#save-button {
  color: white !important;
}




#gettitle,
#getintro {

  color: #53565A;
}

.drag-place-holder {
  height: 0px !important;
  margin-top: -5px;
  overflow: hidden;
  height: 200px;
  background: silver;
}





#newform {
  background: white !important;
  overflow: auto;
  height: 600px;
}

.ms-metadata {
  display: inline !important
}

.ui-state-default {
  min-height: 45px;
  max-width: 90%;
  background: white !important;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  margin-left: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 15px;
  margin-bottom: 20px
}

.sortable div {
  padding: 3px;
}

.edit {
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: block;
  margin: 0;
  outline: 0;
  overflow: hidden;
  resize: none;
  white-space: pre;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: inherit;
  color: #333333;
  height: 40px;
}
.uk-card-primary.uk-card-body .uk-label, .uk-card-primary>:not([class*=uk-card-media]) .uk-label, .uk-card-secondary.uk-card-body .uk-label, .uk-card-secondary>:not([class*=uk-card-media]) .uk-label, .uk-light .uk-label, .uk-offcanvas-bar .uk-label, .uk-overlay-primary .uk-label, .uk-section-primary:not(.uk-preserve-color) .uk-label, .uk-section-secondary:not(.uk-preserve-color) .uk-label, .uk-tile-primary:not(.uk-preserve-color) .uk-label, .uk-tile-secondary:not(.uk-preserve-color) .uk-label {
  background:`+this.properties.buttonprimary+` !important;
  color: `+colormatch2+` !important;
}
.webpart-header {
  font-size: 25px;
  font-weight: 600;
  padding-top: 20px;
}
h4.title {

  line-height: 25px;
  height: 40px !important;
  font-size: 15px !important;
  font-weight: 600 !important;
}
h4.title {
  color: rgb(41, 41, 41) !Important;

  line-height: 25px;
  height: 40px !important;
  font-size: 15px !important;
  font-weight: 600 !important;
}
ol > li > span {margin-left: -2em;
  text-indent: 2em;
  position: relative;
  bottom: 32px !important;
  left: 8px;
  /* padding-bottom: 10px; */
  padding-top: 8px !important;
  line-height: 22px;
  font-size: 15px;
  padding-bottom: 5px !important;
  min-width: 100%;
  height: 28px;
  overflow: hidden !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: -22px;
  margin-left: -4em !important;}
  [type=radio]:checked + img {
    outline: 0px solid rgba(0,0,0,.4);
    outline-style: outset;
    border-radius: 100px;
    box-shadow: 0px 0px 0px 2px black;
    box-shadow: 0px 0px 0px 2px #666 inset;
}
.qaCapsule,.y-fixedGridColumn div,.y-layoutList--item p, .y-layoutList--item a, .y-layoutList--item time, .y-layoutList--item span {font-size:14px;font-weight:500}

.uk-button{border-radius: 4px !important}

.uk-button-primary{background:#027AF9 !important; color:white !important; text-transform:none !important}

.uk-button-primary:hover, .uk-button-primary:focus{background:#015ED6 !important; color:white !important;text-transform:none !important}

.uk-button-primary.uk-active,
.uk-button-primary:active{background:#0146B3 !important; color:white !important;text-transform:none !important}
.uk-button-default{border: 2px solid #027AF9 !important;text-transform:none !important;color:#027AF9 !important}
.uk-button-default:hover, .uk-button-default:focus{border: 2px solid #015ED6 !important;text-transform:none !important;color:#015ED6 !important}
.uk-button-default.uk-active,.uk-button-default:active{border: 2px solid #0146B3 !important;color:#0146B3 !important;text-transform:none !important}

.uk-label,.uk-button{border-radius: 4px !important}
.uk-label{background:#0146B3 !important; color:white !important;text-transform:none !important}


.uk-button-danger {
    border: 2px solid #ee3955 !important;
    text-transform: none !important;
    color: #ee395b !important;
    background: white;
}
.uk-button:focus{outline: 2px silver solid;}
.uk-button-danger:hover, .uk-button-danger:focus{ border: 2px solid #ee3955 !important;
    text-transform: none !important;
    color: #ee395b !important;
    background: white; text-transform:none}
.uk-button-danger.uk-active,.uk-button-danger:active{border: 2px solid #ee3955 !important;color:#ee3955 !important;text-transform:none !important}
.ui.button.disabled {

    background: #e0e1e2 none !important;
    color: rgba(0,0,0,.6) !important;

}
  #Promoted > div:nth-child(1),#Promoted  > div:nth-child(2),#Promoted  > div:nth-child(3) {
border: 2px solid black;
}
.lpc-hoverTarget > span, .y-fixedGridColumn span, .y-fakeLink{font-size:12px}
.rippleseeall{color: rgb(216, 86, 69);}
.disabled {
    pointer-events: none;
}



.ms-Button-menuIcon, .ms-Button-icon{color:rgba(0,0,0,.8) !Important}
div[data-sp-feature-tag*="SpCompanyFeedWebPart web part (Feed (Preview) for Viva Connections)"] {
    padding: 15px	 !Important;
}
#int{display:none}
#article h2 > a,#article h1 > a,#article h3 > a,#article h4 > a{
color:#ef5f4c !important}
.image-tool--stretched{margin-right: 0px;
    width: 100vw;
    position: relative;
    left: -40%;}
    [data-sp-feature-tag="SiliconReefMediaWebpartWebPart web part (Silicon Reef Media Experience Webpart)"] > div > div > div {min-height:200px}
[data-sp-feature-tag="HeroWebPart web part (Ripple Hero)"] h3 {height:75px !Important;font-size:24px !important}
.ControlZone--control {
  background: transparent;
}
div[data-automation-id*="CanvasControl"] {
  background: transparent !Important;
  webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 15%);
}
div.uk-overlay.uk-position-bottom.uk-light>p {
  font: normal normal normal 12px/14px Poppins;
  position: relative;
  top: 10px;
  color: white;
}
div.uk-overlay.uk-position-bottom.uk-light>div>a:after, div.uk-overlay.uk-position-center.uk-light>div>a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: -5px;
  left: 0;
  background-color: #EF5F4C !important;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}
`+this.properties.CustomCSS+`

    </style> `;

    var script = "<script>"+this.properties.CustomJS+"</script>"
    $('#beaconbrandingzone').append(styles);
    $('#beaconbrandingzone').append(script);


    var addfont = document.getElementById('addfont');
addfont.addEventListener('click', function () {

      updatefile()
    })
  }

  private buttonAdd(): any {
    pnp.setup({
      spfxContext: this.context,
    });

      var serverRelativeUrl: string = this.context.pageContext.site.serverRelativeUrl;
console.log($("#beaconbranding").html())
 pnp.sp.web.getFileByServerRelativeUrl(`${serverRelativeUrl}/SiteAssets/mycss.txt`)
      .setContent($("#beaconbranding").html());

      pnp.sp.web.getFileByServerRelativeUrl(`${serverRelativeUrl}/SiteAssets/primary.txt`)
      .setContent(JSON.stringify(this.properties.collectionData));
      pnp.sp.web.getFileByServerRelativeUrl(`${serverRelativeUrl}/SiteAssets/secondary.txt`)
      .setContent(JSON.stringify(this.properties.collectionData1));
      pnp.sp.web.getFileByServerRelativeUrl(`${serverRelativeUrl}/SiteAssets/combined.txt`)
      .setContent(JSON.stringify(this.properties.collectionData).concat(JSON.stringify(this.properties.collectionData1)))


}
private lists: IPropertyPaneDropdownOption[];
private swatcharray: Array<IPropertyFieldSwatchColorOption>;
private thisdropitems: Array<IPropertyPaneDropdownOption>;
private thisdropitems2: Array<IPropertyPaneDropdownOption>;
private thisdropitems3: Array<IPropertyPaneDropdownOption>;
private fontitems:IPropertyPaneDropdownOption[];
private items: IPropertyPaneDropdownOption[];
private listitems: IPropertyPaneDropdownOption[];
private listsDropdownDisabled: boolean = true;
private listsitemsDropdownDisabled: boolean = true;
private loadLists(): Promise<IPropertyPaneDropdownOption[]> {
   pnp.setup({
    spfxContext: this.context,
  });

  return new Promise<IPropertyPaneDropdownOption[]>(
    (
      resolve: (options: IPropertyPaneDropdownOption[]) => void,
      reject: (error: any) => void
    ) => {


        pnp.sp.web.getFileByServerRelativeUrl(this.context.pageContext.site.serverRelativeUrl+`/SiteAssets/myfonts.txt`).getText()
        .then(function (data) {
          var splitdata = data.split(',')
          var items: IPropertyPaneDropdownOption[] = [];
          for (var k in splitdata ) {
            items.push({ key: splitdata[k], text: splitdata[k] });
          }

          setTimeout((): void => {
            resolve(items);

          }, 2000);
        });
    }
  );
}
protected onPropertyPaneConfigurationStart(): void {

  pnp.setup({
    spfxContext: this.context,
  });
  this.listsDropdownDisabled = !this.lists;

  if (this.lists) {
    return;
  }

  this.context.statusRenderer.displayLoadingIndicator(
    this.domElement,
    "lists"
  );
  this.loadLists().then(
    (listOptions: IPropertyPaneDropdownOption[]): void => {
      this.lists = listOptions;
      this.listsDropdownDisabled = false;

      this.context.propertyPane.refresh();
      this.context.statusRenderer.clearLoadingIndicator(this.domElement);
      this.render();
    }
  );

  async function updateuploadedfile() {

    let currentconetent = (await pnp.sp.web.getFileByServerRelativeUrl(`/SiteAssets/myfonts.txt`).getText()).toString()
  console.log(currentconetent)

	const drop1_1_1 = csvToArray(currentconetent)



  }


  function csvToArray(str: string, delimiter = ",") {
    const headers = ["key", "text"];

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(0, str.indexOf("\n")).split(delimiter);

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row: string) {
      const values = row.split(delimiter);
      const el = values.reduce(function (object, header, index) {
        object = { key: values[index], text: values[index] };
        console.log(object)
        return object;

      }, {});
      return el;
    });

    // return the array
    this.fontitems = arr
    return arr;
  }
}
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {

    if(this.properties.collectionData){


      var swatcharray: IPropertyFieldSwatchColorOption[]=[{color:"#000000", label:"#ffffff"},{color:"#ffffff", label:"#000000"}];
      const swatcha = this.properties.collectionData;



console.log(this.properties.background)

      swatcha.forEach(element => {
       return swatcharray.push({color:element.background, label:element.text},);

      });

    }
    if(this.properties.collectionData1){


      var swatcharray1: IPropertyFieldSwatchColorOption[]=[{color:"#000000", label:"#ffffff"},{color:"#ffffff", label:"#000000"}];
      const swatcha = this.properties.collectionData;
      const swatchb = this.properties.collectionData1;


console.log(this.properties.background)

      swatcha.forEach(element => {
       return swatcharray1.push({color:element.background, label:element.text},);

      });
      swatchb.forEach(element => {
        return swatcharray1.push({color:element.background, label:element.text},);

       });
    }
    return {
      pages: [
        {


          groups: [
            {
              groupName: "",
              groupFields: [

                PropertyFieldLabelWithCallout('fakeProp', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'fonts',
                  calloutContent: 'Select from fonts uploaded in the font uploader section',
                  calloutWidth: 200,
                  text: 'Select fonts'
                }),
                PropertyPaneDropdown('font', {

									label: "Regular",
									options: this.lists,

								}),
                PropertyPaneDropdown('bold', {

									label: "Bold",
									options: this.lists,

								}),
                PropertyPaneDropdown('italic', {

									label: "italic",
									options: this.lists,

								}),
                PropertyPaneDropdown('light', {

									label: "Light",
									options: this.lists,

								}),]
              },]


        },
        {


          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Create primary and secondary colour palettes which can be used across all Beacon components, check accessibility against guidelines',
                  calloutWidth: 200,
                  text: 'Select colours'
                }),
                PropertyFieldCollectionData("collectionData", {
                  key: "collectionData",
                  label: "",
                  panelHeader: "Select available primary colours",
                  manageBtnLabel: "Manage Primary Palette",
                  enableSorting:true,
                  value: this.properties.collectionData,
                  fields: [
                    {
                      id: "Title",
                      title: "Title",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "background",
                      title: "Background",
                      type: CustomCollectionFieldType.color,
                      required: true
                    },
                    {
                      id: "text",
                      title: "Foreground",
                      type: CustomCollectionFieldType.color,
                      required: true,

                    },

                  ],
                  disabled: false
                }),
                PropertyFieldCollectionData("collectionData1", {
                  key: "collectionData",
                  label: "",
                  panelHeader: "Select available secondary colours",
                  manageBtnLabel: "Manage Secondary Palette",
                  value: this.properties.collectionData1,
                  fields: [
                    {
                      id: "Title",
                      title: "Title",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "background",
                      title: "Background",
                      type: CustomCollectionFieldType.color
                    },
                    {
                      id: "text",
                      title: "Text",
                      type: CustomCollectionFieldType.color,
                      required: true,

                    },

                  ],
                  disabled: false
                }),
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the SharePoint / M365 top bar background with colour matched text and icons from the primary colour palette',
                  calloutWidth: 200,
                  text: 'Top bar colour'
                }),
                PropertyFieldSwatchColorPicker('background', {
                  style:1,
                  label: '',
                  selectedColor: this.properties.background,
                  colors: swatcharray,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,

                  showAsCircles:true,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the SharePoint menu bar background with colour matched text and icons from the primary colour palette',
                  calloutWidth: 200,
                  text: 'Menu bar colour'
                }),
                PropertyFieldSwatchColorPicker('color3', {
                  label: '',
                  selectedColor: this.properties.color3,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  colors: swatcharray,
                  showAsCircles:true,
                  style: 1,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),

                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the button colours with colour matched text and icons from the primary and secondary colour palettes',
                  calloutWidth: 200,
                  text: 'Button Colour'
                }),
                PropertyFieldSwatchColorPicker('buttonprimary', {
                  label: '',
                  selectedColor: this.properties.buttonprimary,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  colors: swatcharray1,
                  style: 1,
                  properties: this.properties,

                  showAsCircles:true,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the button colours with colour matched text and icons from the primary and secondary colour palettes',
                  calloutWidth: 200,
                  text: 'Button hover Colour'
                }),
                PropertyFieldSwatchColorPicker('buttonprimaryhover', {
                  label: '',
                  selectedColor: this.properties.buttonprimaryhover,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  colors: swatcharray1,
                  style: 1,
                  properties: this.properties,

                  showAsCircles:true,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneCheckbox('buttonuppercase', {
                  text: 'Make button text uppercase'
                }),
              ]
              },]


        },
        {


          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the colour and font sizes for the heading elements',
                  calloutWidth: 200,
                  text: 'Headings'
                }),
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the colour and font sizes for the H1 elements',
                  calloutWidth: 200,
                  text: 'Heading 1'
                }),

                PropertyPaneDropdown('font2', {
									label: "Font",
									options: this.lists
								}),

                PropertyFieldSwatchColorPicker('h1color', {
                  label: '',
                  selectedColor: this.properties.h1color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  colors: swatcharray1,
                  style: 1,
                  properties: this.properties,

                  showAsCircles:true,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneTextField('h1size', {
                  label:"Text size"
                }),
                PropertyFieldLabelWithCallout('fakeProp1', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'colours',
                  calloutContent: 'Set the colour and font sizes for the H1 elements',
                  calloutWidth: 200,
                  text: 'Heading 2'
                }),
                PropertyPaneDropdown('font3', {
									label: "Font",
									options: this.lists
								}),
                PropertyFieldSwatchColorPicker('h2color', {
                  label: '',
                  selectedColor: this.properties.h2color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  colors: swatcharray1,
                  style: 1,
                  properties: this.properties,

                  showAsCircles:true,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneTextField('h2size', {
                  label:"Text size"
                }),

                PropertyPaneCheckbox('newsuppercase', {
                  text: 'Make headings uppercase'
                }),



              ]
              },]},
              {
                header: {
                  description: 'Save options'

                },

                groups: [
                  {
                    groupName: "",
                    groupFields: [


                      PropertyPaneButton('numberTypeOfContent',{
                        text: 'Save site branding',
                        buttonType: PropertyPaneButtonType.Hero,
                        icon: 'Save',
                        onClick: this.buttonAdd.bind(this),
                        disabled: false
                      }), PropertyPaneCheckbox("hubsite", {
                        text: "Is this a Hub Site?",
                        disabled: false
                      }),


                       PropertyFieldCodeEditor('CustomCSS', {
                         label: 'Add Styles',
                         panelTitle: 'Add styles',
                         initialValue: this.properties.CustomCSS,
                         onPropertyChange: this.onPropertyPaneFieldChanged,
                         properties: this.properties,
                         disabled: false,
                         key: 'codeEditorFieldId',
                         language: PropertyFieldCodeEditorLanguages.css
                       }),
                       PropertyFieldCodeEditor('CustomJS', {
                         label: 'Add JavaScript',
                         panelTitle: 'Add JavaScript',
                         initialValue: this.properties.CustomJS,
                         onPropertyChange: this.onPropertyPaneFieldChanged,
                         properties: this.properties,
                         disabled: false,
                         key: 'codeEditorFieldId',
                         language: PropertyFieldCodeEditorLanguages.JavaScript
                       }),

      ]
                    },
                  ]


              },
      ]
    };
  }
}

function resolve(items: IPropertyPaneDropdownOption[]) {
  throw new Error('Function not implemented.');
}

