// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="573" height="446" style="height: 446px; left: 63px; position: absolute; top: 155px; width: 573px; z-index: 1; "><param name="src" value="Media/KRS%20clip.2.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="573" height="446" style="height: 446px; left: 63px; position: absolute; top: 155px; width: 573px; z-index: 1; "><param name="src" value="KRS_clip_files/KRS%20clip.2.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/KRS%20clip.2.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="573" height="446" data="Media/KRS%20clip.2.mov" style="height: 446px; left: 63px; position: absolute; top: 155px; width: 573px; z-index: 1; "><param name="src" value="Media/KRS%20clip.2.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('KRS_clip_files/KRS_clipMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('KRS_clip_files','shapeimage_2','0');IMpreload('KRS_clip_files','shapeimage_2','1');IMpreload('KRS_clip_files','shapeimage_2','2');IMpreload('KRS_clip_files','shapeimage_2','3');IMpreload('KRS_clip_files','shapeimage_2','4');IMpreload('KRS_clip_files','shapeimage_2','5');applyEffects()}
