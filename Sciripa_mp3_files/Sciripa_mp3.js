// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="616" height="16"><param name="src" value="Media/Feel%20the%20funk.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="616" height="16"><param name="src" value="Media/Feel%20the%20funk.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="616" height="16" data="Media/Feel%20the%20funk.mp3"><param name="src" value="Media/Feel%20the%20funk.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Sciripa_mp3_files/Sciripa_mp3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');IMpreload('Sciripa_mp3_files','shapeimage_2','0');IMpreload('Sciripa_mp3_files','shapeimage_2','1');IMpreload('Sciripa_mp3_files','shapeimage_2','2');IMpreload('Sciripa_mp3_files','shapeimage_2','3');IMpreload('Sciripa_mp3_files','shapeimage_2','4');IMpreload('Sciripa_mp3_files','shapeimage_2','5');applyEffects()}
