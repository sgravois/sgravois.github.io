// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1() {
  detectBrowser();
  if (windowsInternetExplorer) {
    // document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="593" height="461" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1; "><param name="src" value="Media/Los%20Lobos%20clip.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');
    document.write('<video id="id2" width="593" height="461" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1;" src="Media/Los%20Lobos%20clip.mov" controls>' +
      'Your browser does not support the <code>video</code> element.' +
    '</video>');
  } else if (isiPhone) {
    // document.write('<object id="id2" type="video/quicktime" width="593" height="461" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1; "><param name="src" value="Los_Lobos_MP3_files/Los%20Lobos%20clip.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Los%20Lobos%20clip.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');
    document.write('<video id="id2" width="593" height="461" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1;" src="Media/Los%20Lobos%20clip.mov" controls>' +
      'Your browser does not support the <code>video</code> element.' +
    '</video>');
  } else {
    // document.write('<object id="id2" type="video/quicktime" width="593" height="461" data="Media/Los%20Lobos%20clip.mov" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1; "><param name="src" value="Media/Los%20Lobos%20clip.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');
    document.write('<video id="id2" width="593" height="461" style="height: 461px; left: 53px; position: absolute; top: 134px; width: 593px; z-index: 1;" src="Media/Los%20Lobos%20clip.mov" controls>' +
      'Your browser does not support the <code>video</code> element.' +
    '</video>');
  }
}
setTransparentGifURL('Media/transparent.gif');

function applyEffects() {
  var registry = IWCreateEffectRegistry();
  registry.registerEffects({
    shadow_0: new IWShadow({
      blurRadius: 10,
      offset: new IWPoint(4.2426, 4.2426),
      color: '#000000',
      opacity: 0.750000
    }),
    shadow_1: new IWShadow({
      blurRadius: 10,
      offset: new IWPoint(4.2426, 4.2426),
      color: '#000000',
      opacity: 0.750000
    })
  });
  registry.applyEffects();
}

function hostedOnDM() {
  return false;
}

function onPageLoad() {
  loadMozillaCSS('Los_Lobos_MP3_files/Los_Lobos_MP3Moz.css')
  adjustLineHeightIfTooBig('id1');
  adjustFontSizeIfTooBig('id1');
  fixupAllIEPNGBGs();
  fixAllIEPNGs('Media/transparent.gif');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '0');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '1');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '2');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '3');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '4');
  IMpreload('Los_Lobos_MP3_files', 'shapeimage_2', '5');
  applyEffects()
}
