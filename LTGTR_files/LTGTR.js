// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="565" height="440" style="height: 440px; left: 67px; position: absolute; top: 83px; width: 565px; z-index: 1; "><param name="src" value="Media/LTGTRnew.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="565" height="440" style="height: 440px; left: 67px; position: absolute; top: 83px; width: 565px; z-index: 1; "><param name="src" value="LTGTR_files/LTGTRnew.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/LTGTRnew.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="565" height="440" data="Media/LTGTRnew.mov" style="height: 440px; left: 67px; position: absolute; top: 83px; width: 565px; z-index: 1; "><param name="src" value="Media/LTGTRnew.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('LTGTR_files/LTGTRMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('LTGTR_files','shapeimage_1','0');performPostEffectsFixups()}
