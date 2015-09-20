// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="653" height="506" style="height: 506px; left: 23px; position: absolute; top: 148px; width: 653px; z-index: 1; "><param name="src" value="Media/Jack%20drummingweb.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="653" height="506" style="height: 506px; left: 23px; position: absolute; top: 148px; width: 653px; z-index: 1; "><param name="src" value="test3_files/Jack%20drummingweb.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Jack%20drummingweb.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="653" height="506" data="Media/Jack%20drummingweb.mov" style="height: 506px; left: 23px; position: absolute; top: 148px; width: 653px; z-index: 1; "><param name="src" value="Media/Jack%20drummingweb.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('test3_files/test3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');performPostEffectsFixups()}
