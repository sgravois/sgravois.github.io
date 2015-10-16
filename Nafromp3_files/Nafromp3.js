// Created by iWeb 3.0.4 local-build-20150919

function writeMovie1() {
  // detectBrowser();
  document.write('<audio id="id2" style="width:576px" src="Media/Slippin.mp3" preload="auto" controls><p>Your browser does not support the <code>audio</code> element.</p></audio>');
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
