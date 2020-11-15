/*
Copyright (c) 2015 INFRAWARE, Inc. All rights reserved.

homepage: www.infraware-global.com

We make no express warranties, oral or written, to you regarding the software and that the software is being provided to you 'as is' without warranty of any kind. We disclaim any and all other warranties, whether expressed, implied, or statutory. Your rights may vary depending on the state in which you live. We shall not be liable for indirect, incidental, special, cover, reliance, or consequential damages resulting from the use of this product.
You use this program solely at your own risk. In no event shall we be liable to you for any damages, including but not limited to any loss, or other incidental, indirect or consequential damages of any kind arising out of the use of the software, even if we have been advised of the possibility of such damages. In no event will we be liable for any claim, whether in contract, tort, or any other theory of liability, exceed the cost of the software. This limitation shall apply to claims of personal injury to the extent permitted by law.
*/

(function () {
  'use strict';

  //[Jake] Read user-configed value first.
  //var language = navigator.language == 'en'? POLARIS.lang.en: POLARIS.lang.ko;
  var lang = POLARIS.config.defaultLanguage;
  if (POLARIS.config.language) {
    lang = POLARIS.config.language;
  } else if (POLARIS.lang.detect) {
    lang = POLARIS.lang.detect();
  }

  var language = POLARIS.lang[lang];
  if (!language) {
    return;
  }

  POLARIS.stylesSet.add('default', [
  /* Block Styles */

  // These styles are already available in the "Format" combo ("format" plugin),
  // so they are not needed here by default. You may enable them to avoid
  // placing the "Format" combo in the toolbar, maintaining the same features.
  /*
  { name: 'Paragraph',		element: 'p' },
  { name: 'Heading 1',		element: 'h1' },
  { name: 'Heading 2',		element: 'h2' },
  { name: 'Heading 3',		element: 'h3' },
  { name: 'Heading 4',		element: 'h4' },
  { name: 'Heading 5',		element: 'h5' },
  { name: 'Heading 6',		element: 'h6' },
  { name: 'Preformatted Text',element: 'pre' },
  { name: 'Address',			element: 'address' },
  */

  { name: language.common.styleItalicTitle /* 'Italic Title'*/, element: 'h2', styles: { 'font-style': 'italic' } },
  { name: language.common.styleSubtitle /*'Subtitle'*/, element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
  {
    name: language.common.styleSpecialContainer /*'Special Container'*/,
    element: 'div',
    styles: {
      padding: '5px 10px',
      background: '#eee',
      border: '1px solid #ccc' } },



  /* Inline Styles */

  // These are core styles available as toolbar buttons. You may opt enabling
  // some of them in the Styles combo, removing them from the toolbar.
  // (This requires the "stylescombo" plugin)
  /*
  { name: 'Strong',			element: 'strong', overrides: 'b' },
  { name: 'Emphasis',			element: 'em'	, overrides: 'i' },
  { name: 'Underline',		element: 'u' },
  { name: 'Strikethrough',	element: 'strike' },
  { name: 'Subscript',		element: 'sub' },
  { name: 'Superscript',		element: 'sup' },
  */

  { name: language.common.styleMarker /*'Marker'*/, element: 'span', attributes: { 'class': 'marker' } },

  { name: language.common.styleBig /*'Big'*/, element: 'big' },
  { name: language.common.styleSmall /*'Small'*/, element: 'small' },
  { name: language.common.styleTypewriter /*'Typewriter'*/, element: 'tt' },

  { name: language.common.styleComputerCode /*'Computer Code'*/, element: 'code' },
  { name: language.common.styleKeyboardPhrase /*'Keyboard Phrase'*/, element: 'kbd' },
  { name: language.common.styleSampleText /*'Sample Text'*/, element: 'samp' },
  { name: language.common.styleVariable /*'Variable'*/, element: 'var' },

  { name: language.common.styleDeletedText /*'Deleted Text'*/, element: 'del' },
  { name: language.common.styleInsertedText /*'Inserted Text'*/, element: 'ins' },

  { name: language.common.styleCitedWork /*'Cited Work'*/, element: 'cite' },
  { name: language.common.styleInlineQuotation /*'Inline Quotation'*/, element: 'q' },

  { name: language.common.styleLanguage_RTL /*'Language: RTL'*/, element: 'span', attributes: { 'dir': 'rtl' } },
  { name: language.common.styleLanguage_LTR /*'Language: LTR'*/, element: 'span', attributes: { 'dir': 'ltr' } }]);



})();
