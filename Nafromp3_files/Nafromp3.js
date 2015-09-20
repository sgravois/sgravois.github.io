// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1() {
  detectBrowser();
  if (windowsInternetExplorer) {
    // document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="576" height="16"><param name="src" value="Media/Slippin.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');
    document.write('<audio id="id2" width="576" height="16" src="Media/Slippin.mp3" preload="auto" controls></audio>');
  } else if (isiPhone) {
    // document.write('<object id="id2" type="video/quicktime" width="576" height="16"><param name="src" value="Media/Slippin.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');
    document.write('<audio id="id2" width="576" height="16" src="Media/Slippin.mp3" preload="auto" controls></audio>');
  } 
  else {
    // document.write('<object id="id2" type="video/quicktime" width="576" height="16" data="Media/Slippin.mp3"><param name="src" value="Media/Slippin.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');
    document.write('<audio id="id2" width="576" height="16" src="Media/Slippin.mp3" preload="auto" controls></audio>');
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
  loadMozillaCSS('Nafromp3_files/Nafromp3Moz.css')
  adjustLineHeightIfTooBig('id1');
  adjustFontSizeIfTooBig('id1');
  fixupAllIEPNGBGs();
  fixAllIEPNGs('Media/transparent.gif');
  IMpreload('Nafromp3_files', 'shapeimage_1', '0');
  IMpreload('Nafromp3_files', 'shapeimage_2', '0');
  IMpreload('Nafromp3_files', 'shapeimage_2', '1');
  IMpreload('Nafromp3_files', 'shapeimage_2', '2');
  IMpreload('Nafromp3_files', 'shapeimage_2', '3');
  IMpreload('Nafromp3_files', 'shapeimage_2', '4');
  IMpreload('Nafromp3_files', 'shapeimage_2', '5');
  applyEffects()
}
