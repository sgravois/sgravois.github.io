// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="257" height="16"><param name="src" value="Media/01%20Cyclone.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="257" height="16"><param name="src" value="Media/01%20Cyclone.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="257" height="16" data="Media/01%20Cyclone.mp3"><param name="src" value="Media/01%20Cyclone.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('lords_of_altamont_mp3_files/lords_of_altamont_mp3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','0');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','1');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','2');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','3');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','4');IMpreload('lords_of_altamont_mp3_files','shapeimage_1','5');applyEffects()}
