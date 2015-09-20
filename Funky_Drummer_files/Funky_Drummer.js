// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="605" height="470" style="height: 470px; left: 60px; position: absolute; top: 68px; width: 605px; z-index: 1; "><param name="src" value="Media/Funky%20Drummer.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="605" height="470" style="height: 470px; left: 60px; position: absolute; top: 68px; width: 605px; z-index: 1; "><param name="src" value="Funky_Drummer_files/Funky%20Drummer-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Funky%20Drummer.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="605" height="470" data="Media/Funky%20Drummer.mov" style="height: 470px; left: 60px; position: absolute; top: 68px; width: 605px; z-index: 1; "><param name="src" value="Media/Funky%20Drummer.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Funky_Drummer_files/Funky_DrummerMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');IMpreload('Funky_Drummer_files','shapeimage_2','0');IMpreload('Funky_Drummer_files','shapeimage_2','1');IMpreload('Funky_Drummer_files','shapeimage_2','2');IMpreload('Funky_Drummer_files','shapeimage_2','3');IMpreload('Funky_Drummer_files','shapeimage_2','4');fixupAllIEPNGBGs();IMpreload('Funky_Drummer_files','shapeimage_3','0');performPostEffectsFixups()}
