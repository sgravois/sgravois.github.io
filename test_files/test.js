// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="503" height="393" style="height: 393px; left: 78px; position: absolute; top: 83px; width: 503px; z-index: 1; "><param name="src" value="Media/test4CD.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="503" height="393" style="height: 393px; left: 78px; position: absolute; top: 83px; width: 503px; z-index: 1; "><param name="src" value="test_files/test4CD.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/test4CD.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="503" height="393" data="Media/test4CD.mov" style="height: 393px; left: 78px; position: absolute; top: 83px; width: 503px; z-index: 1; "><param name="src" value="Media/test4CD.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('test_files/testMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
