// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="661" height="388" style="height: 388px; left: 19px; position: absolute; top: 118px; width: 661px; z-index: 1; "><param name="src" value="Media/Happy%20Feet.2.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="661" height="388" style="height: 388px; left: 19px; position: absolute; top: 118px; width: 661px; z-index: 1; "><param name="src" value="Happy_Feet_files/Happy%20Feet.2.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Happy%20Feet.2.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="661" height="388" data="Media/Happy%20Feet.2.m4v" style="height: 388px; left: 19px; position: absolute; top: 118px; width: 661px; z-index: 1; "><param name="src" value="Media/Happy%20Feet.2.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Happy_Feet_files/Happy_FeetMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Happy_Feet_files','shapeimage_2','0');performPostEffectsFixups()}
