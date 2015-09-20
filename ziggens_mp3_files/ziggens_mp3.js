// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="443" height="16"><param name="src" value="Media/09%20Track%2009.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="443" height="16"><param name="src" value="Media/09%20Track%2009.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="443" height="16" data="Media/09%20Track%2009.mp3"><param name="src" value="Media/09%20Track%2009.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('ziggens_mp3_files/ziggens_mp3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');fixAllIEPNGs('Media/transparent.gif');IMpreload('ziggens_mp3_files','shapeimage_1','0');IMpreload('ziggens_mp3_files','shapeimage_1','1');IMpreload('ziggens_mp3_files','shapeimage_1','2');IMpreload('ziggens_mp3_files','shapeimage_1','3');IMpreload('ziggens_mp3_files','shapeimage_1','4');IMpreload('ziggens_mp3_files','shapeimage_1','5');IMpreload('ziggens_mp3_files','shapeimage_2','0');applyEffects()}
