import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
	PropertyPaneButtonType,
	IPropertyPaneDropdownOption,
	PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as $ from 'jquery';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/PropertyFieldHeader';
import { PropertyFieldToggleWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldToggleWithCallout';
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
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import * as strings from 'SiliconReefBrandingWebPartStrings';
import {AppInsights} from "applicationinsights-js";
import * as jQuery from "jquery";
window["jQuery"] = window["$"] = $;
import { PropertyFieldSearch } from '@pnp/spfx-property-controls/lib/PropertyFieldSearch';
import { drop } from 'lodash';

export interface ISiliconReefBrandingWebPartProps {
  description: string;
  color: string;
  color2: string;
  color3: string;
  buttonprimary: string;
  h1color: string;
  h2color: string;

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

}

export default class SiliconReefBrandingWebPart extends BaseClientSideWebPart<ISiliconReefBrandingWebPartProps> {



  public render(): void {
    sp.setup({
      spfxContext: this.context,
    });
    if(this.displayMode==2){

$("#siliconreefbradning").remove()
$("#siliconreefbranding").remove()

    }


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
var siteurl: any = this.context.pageContext.site.serverRelativeUrl;
   async function createfile(serverRelativeUrl: string) {
      try {

        const fileExists = await sp.web
          .getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`)
          .select('Exists').get()
          .then((d) => d.Exists)
          .catch(() => false);

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not
console.log(fileExists)
        if (!fileExists) {
          await sp.web.getFolderByServerRelativeUrl(`${siteurl}/SiteAssets/`)
  .files.add(`myfonts.txt`, "Open Sans,Poppins", true);
        }


      }
      catch (error) {
         //Log
      }
    }
    async function createcssfile(serverRelativeUrl: string) {
      try {

        const fileExists = await sp.web
          .getFileByServerRelativeUrl(`${siteurl}/SiteAssets/mycss.txt`)
          .select('Exists').get()
          .then((d) => d.Exists)
          .catch(() => false);

  //Basically, the above line will tell you whether the file is present on the
  //Images folder or not
console.log(fileExists)
        if (!fileExists) {
          await sp.web.getFolderByServerRelativeUrl(`${siteurl}/SiteAssets/`)
  .files.add(`mycss.txt`, "", true);
        }


      }
      catch (error) {
         //Log
      }
    }
    async function updatefile() {
      var serverRelativeUrl: string = siteurl
      let currentconetent = (await sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString()
      console.log(currentconetent)
      await  sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`)
      .setContent(currentconetent+","+$("#gf").val()+"");
      var string = (await sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString();
var array = string.split(",");
$("#fonts").html("")
array.forEach(element => {
  $("#fonts").append("<li>"+element.replace("'","").replace("'","")+"</li>")
});
    }
    async function updateuploadedfile(serverRelativeUrl, filename) {
      var serverRelativeUrl = siteurl
      let currentconetent = (await sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString()

      await  sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`)
      .setContent(currentconetent+","+filename);
      var string = (await sp.web.getFileByServerRelativeUrl(`${siteurl}/SiteAssets/myfonts.txt`).getText()).toString();
var array = string.split(",");
$("#fonts").html("")
array.forEach(element => {
  $("#fonts").append("<li>"+element.replace("'","").replace("'","")+"</li>")
});
    }

    createfile(siteurl)
    createcssfile(siteurl)
    this.domElement.innerHTML = `<div id="allfonts"></div>
    <ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Branding Preview</a></li>
    <li><a href="#">Font Manager</a></li>

</ul>
<ul class="uk-switcher uk-margin">
<li style="padding:15px">

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p style="font-size:16px">
    Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae hendrerit massa, sit amet suscipit ligula. Cras auctor nisi non enim lobortis, ac consequat sapien maximus. Aenean at iaculis urna. Praesent at felis ligula. Nullam lacinia sem quis orci malesuada ultricies. Nullam eleifend erat non odio volutpat, a gravida metus pulvinar. Proin interdum est nisi, ut commodo enim congue vitae. Pellentesque gravida et nulla id tempus. Integer at malesuada tellus, sit amet laoreet nunc. Suspendisse dictum, urna sed elementum auctor, est tellus consectetur felis, vel feugiat turpis nulla eu massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pulvinar mi sed metus imperdiet, in dapibus felis eleifend. Donec lobortis mollis dignissim. Vivamus feugiat aliquet leo, ac commodo dolor porta quis.
    </p>
    <p style="font-size:16px">
    Sed in orci eget turpis dapibus suscipit. Nulla vestibulum mi odio, non semper nibh accumsan semper. Suspendisse tristique ligula neque, non porta neque ultricies eu. Morbi laoreet lacus sem, aliquam ultricies mi facilisis non. Sed ipsum lectus, volutpat nec auctor a, lacinia non metus. Phasellus rhoncus nulla risus, eu efficitur ligula malesuada vel. Phasellus sed ex et enim gravida dapibus. Proin ac est rutrum, dictum leo at, finibus magna. Donec venenatis nulla at ex convallis, ut rutrum mi scelerisque. Cras pellentesque dignissim accumsan. Maecenas nec rhoncus mi. Sed vulputate elit sodales velit ultrices, tincidunt sollicitudin nulla dictum. Mauris et nisi a nisl sodales accumsan a ac nulla.
    </p>
    <blockquote>Quote</blockquote>

    </div></li>
<li>
    <div style="padding:15px" id="branding">
    <form>

    <label><input onchange="$('.searchitem').show();$('.googlefont').show();$('.fontbutton').show();$('.js-upload').hide();" class="uk-radio" type="radio" name="radio2" > Import a Google font</label>

    <label><input onchange="$('.searchitem').hide();$('.googlefont').hide();$('.fontbutton').hide();$('.js-upload').show();" class="uk-radio" type="radio" name="radio2"> Upload a font file</label>



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
</li>

    <div id="ripplebrandingzone"></div>`



    var inputElement = $("#uploadfontclick");
    $(inputElement).on('click', function () {
      uploadFileFromControl()
    })
    function uploadFileFromControl(){

      //Get the file from File DOM
    var files = $("#uploadfont").prop('files');
    var file = files[0];
       //Upload a file to the SharePoint Library
       sp.web.getFolderByServerRelativeUrl("SiteAssets")
       .files.add(file.name, file, true)
       .then((data) =>{
        updateuploadedfile("",file.name)
       })
       .catch((error) =>{
         alert("Error is uploading");
       });
    }
    $( "#fontsearch" ).keyup(function() {

      $("#gf").find('option').remove().end();
      $.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=AIzaSyAVRRaVmMFgBktw9mL7hwornyqJbf8acUQ`)
      .then(data  => {

        var fonts = data.items;





       for(var k in fonts){
        if(fonts[k].family.includes($("#fontsearch").val())){
       $("#gf").append("<option>"+fonts[k].family+"</option>")

       }





   } });

    });

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
let headerimport;
let headerfont;
let font;
if(this.properties.font==undefined){font="Poppins"; bodyimport = ""} else
if(this.properties.font.indexOf(".") > -1){font = this.properties.font.split(".")[0]; bodyimport = `@font-face {
  font-family: `+this.properties.font.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.font+`);
  font-weight: bold;
}` }
else {font=this.properties.font;bodyimport =`
@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');` }


if(this.properties.font2==undefined){headerfont="Poppins"; headerimport = ""} else
if(this.properties.font2.indexOf(".") > -1){headerfont = this.properties.font2.split(".")[0]; headerimport = `@font-face {
  font-family: `+this.properties.font2.split(".")[0]+`;
  src: url(`+this.context.pageContext.site.absoluteUrl+`/SiteAssets/`+this.properties.font2+`);
  font-weight: bold;
}` }
else {headerfont=this.properties.font2;headerimport =`@import url('https://fonts.googleapis.com/css2?family=`+this.properties.font2+`:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');` }

     SPComponentLoader.loadCss(this.properties.description);
     var styles =
    `<style id="ripplebranding">
    `+bodyimport+`
    `+headerimport+`
    .uk-subnav-pill>.uk-active>a {
      background-color: black !important;
      .uk-subnav-pill>*>:first-child {
        padding: 5px 10px;
        background: 0 0;
        color: #333 !important;
    }
  }
  .ms-DocumentCardTile .ms-DocumentCard:not(.ms-DocumentCard--compact) .ms-DocumentCardTile-titleArea .ms-DocumentCardLocation, .ms-NewsSiteTitle.text_siteLink  {
    color:  `+this.properties.color2+` !important;
}
.ms-NewsPinningItemImage img {
  max-width: 100%;
  height: -webkit-fill-available !important;
  box-sizing: border-box;
}
    .ms-Button--primary, .ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"]{background:`+this.properties.buttonprimary+`;border:1px solid `+this.properties.buttonprimary+`;}
    .ms-Button--primary:hover, .ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"]{background:`+this.properties.buttonprimary+` ;border:1px solid `+this.properties.buttonprimary+`;opacity:.80}
    .ms-Button--primary .ms-Button-label, .ms-Button--primary .ms-Button-icon, .ms-NewsSiteTitle.orgNews, div[class*="hubItemImagePlaceholderContainer"]{color:`+this.properties.fontcolor+` !important;`+buppercase+`}
    h3, h4, h5, h6,  h4.title, h4, h2,p, .od-FieldRenderer-text,tspan,.noopener, .datetime, .location, .category, .ms-TextField-field,.ms-TextField,
    .ms-TextField--multiline div[data-automation-id*="metadataTitle"],.ms-DetailsHeader-cellName, .overlay-text-wrapper,
    .ms-Link,.root-40,  div[data-automation-id*="people-card"] > div > div > div,
    div[data-automation-id*="people-card"] > div > div > div > div,  div[data-automation-id*="webPartHeader"] > div > textarea, .root-62 ,
    .root-150,div[data-automation-id*="captionElement"] > textarea, div[data-automation-id*="captionElement"] > a,
     .intro,.ms-DocumentCardActivity-name, .ms-DocumentCardActivity-activity, .ms-DocumentCardTile-titleArea,
     .ms-DocumentCardLocation, .ms-DocumentCardTitle,  div.post-content > div > span > span, div.post-content > div > i,
     .wc-message-from-bot .wc-message-content,  .title, .intro, div.post-content > div > a > span,
     .wc-message-from-bot .wc-message-content, .nav-link,.nav-item, .ms-Menu-heading,
     .wc-message-from-me .wc-message-content, .wc-card h1, .wc-card h2, .wc-card p, .root-45,div[data-automation-id*="newsItem"] span,.ms-DocumentCardActivity-activity,.ms-DocumentCardActivity-name,
     .ms-DocumentCardActivity-details,#O365_Settings_navbardatalinks a,#o365sectionexpandlink,a[class*="linkText"],a[class*="newsSiteTitle"],span[class*="itemDetail"],a[class*="seeAll"],
     .ms-HorizontalNavItem-link, [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled), form .likert, #statement
   {
	    font-family:`+font+` !Important; line-height:1.6em
   }
   .o365sx-appBrandLink > span{font-family:`+font+` !Important; }
   div[data-automation-id*="TitleTextId"],
 .webpart-header,
 div[data-automation-id*="HeroTitle"],
 span[data-automation-id*="newsItemTitle"],
 .uk-h1,
 .uk-h2,

 .uk-heading-2xlarge,
 .uk-heading-large,
 .uk-heading-medium,
 .uk-heading-small,
 .uk-heading-xlarge,
 h1,
 h2, .webpart-header{
    font-family:`+headerfont+` !Important;line-height:1.8em !important;`+uppercase+`
  }
  [data-log-name="DisplayName"]{font-size:18px !important}
   .ms-DocumentCard{background:white !important}
   /*PRIMARY COLOUR*/

.wc-console input[type=text], .wc-console textarea, .useThemes .panel-header[data-v-60e023b1], .card-title, .comments a,.ms-HorizontalNavItem-link
{
	 color: `+this.properties.color+` !Important;
}
div[data-automation-id*="TitleTextId"],


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
    fill: `+this.properties.color+` !Important
}
button[data-automation-id*="button-web-part"],.wc-header, .o365cs-base .o365sx-button, .wc-message-from-bot .wc-message-content, footer > div, .o365sx-navbar,  .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-waffle
{
    background: `+this.properties.color+` !important;
    background: `+this.properties.background+` !important;

}
#showhero {background:`+this.properties.color2+` !important;}

.nav-link{ `+uppercase+` color:`+this.properties.fontcolor+` !important; font-size:`+this.properties.fontsize+` !important}
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
    background: #FFFFFF;
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
  color: `+this.properties.color+`;
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
  color: `+this.properties.color2+` !important;

  font-family:
  `+font+`;
}
.ms-Icon--WaffleOffice365, #O365_AppName > span, .ms-Icon--Settings, .ms-Icon--Help, .o365cs-base {
  color:`+this.properties.color+` !important;
}
#spSiteHeader > div {background:`+this.properties.color3+` !important;}
.ms-Menu-heading{ color: `+this.properties.color2+` !important;}
.ms-Menu-item .ms-ContextualMenu-itemText {
  color: `+this.properties.color2+` !important;
  width: 244px;
  font-family:
  `+font+`;
}
.ms-HorizontalNav-chevronDown {
  color: `+this.properties.color2+` !important;
  background: transparent !important;

}
div[data-automation-id*="button-card"], div[data-automation-id*="compact-card"] {
 color:`+this.properties.fontcolor+`;
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
 color:`+this.properties.fontcolor+`;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  outline: 0px;
  border: none;
  border-radius: 2px;
  background-color: `+this.properties.buttonprimary+`;
  opacity: 0.8;
  user-select: text;

  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="quick-links-item-title"] {
  color: `+this.properties.fontcolor+`;
  line-height: 20px;
  margin-bottom: 2px;

  -webkit-font-smoothing: antialiased;

  font-weight: 600;
  font-family: '`+font+`', sans-serif
}
div[data-automation-id*="button-card"] > div > i {
 color:`+this.properties.fontcolor+`;

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
  background-color: `+this.properties.color2+` !important;
  opacity:.8;
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


div[data-automation-id*="BaseCollection-FreshData"]  > div{background:transparent !important}
`+this.properties.CustomCSS+`

    </style> `;

    var script = "<script>"+this.properties.CustomJS+"</script>"
    $('#ripplebrandingzone').append(styles);
    $('#ripplebrandingzone').append(script);


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

 sp.web.getFileByServerRelativeUrl(`${serverRelativeUrl}/SiteAssets/mycss.txt`)
      .setContent($("#ripplebranding").html());




}
private lists: IPropertyPaneDropdownOption[];
private thisdropitems: Array<IPropertyPaneDropdownOption>;
private thisdropitems2: Array<IPropertyPaneDropdownOption>;
private thisdropitems3: Array<IPropertyPaneDropdownOption>;
private fontitems:IPropertyPaneDropdownOption[];
private items: IPropertyPaneDropdownOption[];
private listitems: IPropertyPaneDropdownOption[];
private listsDropdownDisabled: boolean = true;
private listsitemsDropdownDisabled: boolean = true;
private loadLists(): Promise<IPropertyPaneDropdownOption[]> {
  sp.setup({
    spfxContext: this.context,
  });

  return new Promise<IPropertyPaneDropdownOption[]>(
    (
      resolve: (options: IPropertyPaneDropdownOption[]) => void,
      reject: (error: any) => void
    ) => {


        sp.web.getFileByServerRelativeUrl(this.context.pageContext.site.serverRelativeUrl+`/SiteAssets/myfonts.txt`).getText()
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

    let currentconetent = (await sp.web.getFileByServerRelativeUrl(`/SiteAssets/myfonts.txt`).getText()).toString()
  console.log(currentconetent)

	const drop1_1_1 = csvToArray(currentconetent)



  }


  function csvToArray(str, delimiter = ",") {
    const headers = ["key", "text"];

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(0, str.indexOf("\n")).split(delimiter);

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
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
    return {
      pages: [
        {
          header: {
            description: 'Font Settings'

          },

          groups: [
            {
              groupName: "",
              groupFields: [


                PropertyPaneDropdown('font', {
									label: "Main Font",
									options: this.lists
								}),
                PropertyPaneDropdown('font2', {
									label: "Header Font",
									options: this.lists
								}),]
              },]


        },
        {
          header: {
            description: 'Colour Palette'

          },

          groups: [
            {
              groupName: "Colours",
              groupFields: [


                PropertyFieldColorPicker('background', {
                  label: 'Top bar Background',
                  selectedColor: this.properties.background,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('color', {
                  label: 'Top bar text and icons colour',
                  selectedColor: this.properties.color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }), PropertyFieldColorPicker('color3', {
                  label: 'Menu bar background colour',
                  selectedColor: this.properties.color3,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),

                PropertyFieldColorPicker('color2', {
                  label: 'Menu bar links colour',
                  selectedColor: this.properties.color2,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
              ]
              },]


        },
        {
          header: {
            description: 'Buttons and Headers'

          },

          groups: [
            {
              groupName: "",
              groupFields: [

                PropertyPaneCheckbox('buttonuppercase', {
                  text: 'Make button text uppercase'
                }),
                PropertyFieldColorPicker('buttonprimary', {
                  label: 'Button Colour',
                  selectedColor: this.properties.buttonprimary,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('fontcolor', {
                  label: 'Button text and icon colour',
                  selectedColor: this.properties.fontcolor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneCheckbox('newsuppercase', {
                  text: 'Make headings uppercase'
                }),
                PropertyFieldColorPicker('h1color', {
                  label: 'Heading 1 Colour',
                  selectedColor: this.properties.h1color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneTextField('h1size', {
                  label:"Heading 1 text size"
                }),
                PropertyFieldColorPicker('h2color', {
                  label: 'Heading 2 Colour (Webpart Titles)',
                  selectedColor: this.properties.h2color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneTextField('h2size', {
                  label:"Heading 2 text size"
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

