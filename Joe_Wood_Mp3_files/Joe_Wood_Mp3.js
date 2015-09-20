// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="341" height="16"><param name="src" value="Media/04%20mr%20pitman.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="341" height="16"><param name="src" value="Media/04%20mr%20pitman.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="341" height="16" data="Media/04%20mr%20pitman.mp3"><param name="src" value="Media/04%20mr%20pitman.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Joe_Wood_Mp3_files/Joe_Wood_Mp3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','0');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','1');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','2');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','3');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','4');IMpreload('Joe_Wood_Mp3_files','shapeimage_3','5');applyEffects()}
