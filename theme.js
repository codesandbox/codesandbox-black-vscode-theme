const dot = require('dot-object');

const tokens = {
  white: '#fff',
  grays: {
    100: '#fff9f9',
    200: '#e6e6e6',
    300: '#999999',
    400: '#757575',
    500: '#242424',
    600: '#343434',
    700: '#151515',
    800: '#040404',
  },
  blues: {
    300: '#6CC7F6',
    500: '#3793E0',
    600: '#0971f1',
    700: '#535BCF',
  },
  reds: {
    200: '#EB455A',
    300: '#FF453A',
    500: '#E1270E',
  },
  green: '#5BC266',
  purple: '#BF5AF2',
  yellow: '#FBCC43',
};

/*
  we use dot to convert objects to vscode dot notation

  the object style is better authoring experience, it helps
  organising the file better, let's us lint the file and find
  duplicates / classhing styles.
*/

const uiColors = {
  contrastBorder: tokens.grays[600],
  contrastActiveBorder: null,
  errorForeground: tokens.reds[500],
  focusBorder: tokens.grays[600],
  foreground: tokens.grays[200],
  activityBar: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  activityBarBadge: {
    background: tokens.grays[500],
  },
  button: {
    background: tokens.blues[600],
    foreground: tokens.white,
    border: tokens.blues[600],
  },
  dropdown: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    foreground: tokens.white,
  },
  editor: {
    background: tokens.grays[700],
    foreground: tokens.grays[300],
    foldBackground: tokens.grays[700],
    hoverHighlightBackground: tokens.grays[500],
    inactiveSelectionBackground: tokens.grays[500],
    lineHighlightBackground: tokens.grays[600],
    lineHighlightBorder: tokens.grays[600],
    rangeHighlightBackground: tokens.grays[600],
    selectionBackground: tokens.blues[500] + '33', // 20% opacity
    selectionHighlightBackground: tokens.grays[600],
    wordHighlightStrongBackground: tokens.grays[600],
    wordHighlightBackground: tokens.grays[600],
  },
  editorBracketMatch: {
    background: tokens.grays[600],
    border: tokens.grays[600],
  },
  editorCodeLens: {
    foreground: tokens.grays[600],
  },
  editorCursor: {
    background: tokens.grays[700],
    foreground: tokens.white,
  },
  editorError: {
    border: tokens.grays[600],
    foreground: tokens.reds[500],
  },
  editorGroup: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    dropBackground: tokens.blues[500] + '1a',
  },
  editorGroupHeader: {
    noTabsBackground: null,
    tabsBackground: tokens.grays[700],
    tabsBorder: tokens.grays[600],
  },
  editorGutter: {
    background: tokens.grays[700],
    deletedBackground: tokens.reds[500],
    modifiedBackground: tokens.grays[700],
  },
  editorHoverWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  editorIndentGuide: {
    background: tokens.grays[700],
  },
  editorLink: {
    activeForeground: tokens.grays[300],
  },
  editorLineNumber: {
    foreground: tokens.grays[600],
    activeForeground: tokens.grays[400],
  },
  editorRuler: {
    foreground: tokens.grays[600],
  },
  editorMarkerNavigation: {
    background: tokens.grays[700],
  },
  editorMarkerNavigationWarning: {
    background: tokens.grays[600],
  },
  editorMarkerNavigationError: {
    background: tokens.grays[700],
  },
  editorOverviewRuler: {
    border: tokens.grays[600],
    commonContentForeground: tokens.grays[600],
    currentContentForeground: tokens.reds[500],
    incomingContentForeground: tokens.green,
  },
  editorSuggestWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    foreground: tokens.grays[300],
    selectedBackground: tokens.grays[600],
  },
  editorWarning: {
    border: tokens.grays[600],
    foreground: tokens.reds[300],
  },
  editorWhitespace: {
    foreground: tokens.grays[500],
  },
  editorWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  extensionButton: {
    prominentBackground: tokens.grays[600],
    prominentForeground: tokens.white,
    prominentHoverBackground: tokens.grays[600],
  },
  input: {
    background: tokens.grays[600],
    foreground: tokens.white,
    border: tokens.grays[900],
    placeholderForeground: tokens.grays[300],
  },
  inputOption: {
    activeBorder: tokens.grays[500],
  },
  inputValidation: {
    infoForeground: null,
    infoBackground: null,
    infoBorder: tokens.purple,
    warningForeground: null,
    warningBackground: null,
    warningBorder: tokens.yellow,
    errorForeground: null,
    errorBackground: null,
    errorBorder: tokens.reds[500],
  },
  list: {
    dropBackground: tokens.grays[700],
    highlightForeground: tokens.blues[300],
    hoverBackground: tokens.grays[600],
    focusBackground: tokens.grays[600],
    activeSelectionBackground: tokens.grays[600],
    activeSelectionForeground: tokens.white,
    inactiveSelectionBackground: tokens.grays[600],
    inactiveSelectionForeground: tokens.white,
    warningForeground: tokens.yellow,
    errorForeground: tokens.reds[500],
    hoverForeground: null,
    focusForeground: null,
  },
  menu: {
    background: tokens.grays[700],
    selectionBackground: tokens.grays[600],
  },
  peekView: {
    border: tokens.grays[500],
  },
  peekViewEditor: {
    background: tokens.grays[600],
    matchHighlightBackground: tokens.blues[300],
  },
  peekViewEditorGutter: {
    background: null,
  },
  peekViewResult: {
    background: tokens.grays[600],
    fileForeground: tokens.white,
    lineForeground: tokens.white,
    matchHighlightBackground: tokens.blues[300],
    selectionBackground: tokens.grays[600],
    selectionForeground: tokens.white,
  },
  peekViewTitle: {
    background: tokens.grays[600],
  },
  peekViewTitleDescription: {
    foreground: tokens.blues[700],
  },
  peekViewTitleLabel: {
    foreground: tokens.white,
  },
  scrollbarSlider: {
    activeBackground: tokens.white,
    border: tokens.grays[600],
    background: null,
    hoverBackground: null,
  },
  selection: {
    background: tokens.blues[500] + '40', // 25% opacity
  },
  separator: {
    background: tokens.grays[900],
    foreground: tokens.white,
  },
  sideBar: {
    background: tokens.grays[700],
    hoverBackground: tokens.grays[600],
    border: tokens.grays[600],
    foreground: tokens.grays[200],
  },
  sideBarSectionHeader: {
    background: tokens.grays[700],
    foreground: tokens.white,
    border: tokens.grays[600],
  },
  sideBarTitle: {
    foreground: tokens.white,
  },
  statusBar: {
    background: tokens.grays[600],
    foreground: tokens.white,
    debuggingBackground: tokens.reds[500],
    debuggingForeground: tokens.grays[600],
    noFolderBackground: tokens.grays[600],
    noFolderForeground: tokens.white,
    border: tokens.grays[600],
  },
  statusBarItem: {
    activeBackground: null,
    hoverBackground: null,
    prominentBackground: tokens.reds[500],
    prominentHoverBackground: tokens.yellow,
    remoteForeground: tokens.grays[100],
    remoteBackground: tokens.purple,
  },
  tab: {
    activeBackground: tokens.grays[700],
    activeForeground: tokens.white,
    border: tokens.grays[600],
    activeBorder: tokens.blues[300],
    unfocusedActiveBorder: null,
    inactiveBackground: tokens.grays[700],
    inactiveForeground: tokens.grays[400],
    unfocusedActiveForeground: tokens.white,
    unfocusedInactiveForeground: tokens.grays[400],
  },
  terminal: {
    background: tokens.grays[700],
    foreground: tokens.white,
    ansiBrightBlack: tokens.blues[700],
    ansiBrightRed: tokens.reds[500],
    ansiBrightGreen: tokens.green,
    ansiBrightYellow: tokens.yellow,
    ansiBlack: tokens.grays[600],
    ansiRed: tokens.reds[500],
    ansiGreen: tokens.green,
    ansiYellow: tokens.yellow,
    ansiBlue: tokens.blues[700],
    ansiMagenta: tokens.purple,
    ansiCyan: tokens.blues[300],
    ansiWhite: tokens.white,
  },
  titleBar: {
    background: tokens.grays[700],
    activeBackground: tokens.grays[700],
    activeForeground: tokens.white,
    border: tokens.grays[600],
    inactiveBackground: tokens.grays[700],
    inactiveForeground: tokens.grays[300],
  },
};

const tokenColors = [
  {
    name: 'Comment',
    scope: ['comment'],
    settings: {
      foreground: '#757575',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment Markup Link',
    scope: ['comment markup.link'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Entity Name Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Entity Other Inherited Class',
    scope: ['entity.other.inherited-class'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword'],
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: 'Keyword Control',
    scope: ['keyword.control'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Keyword Operator',
    scope: ['keyword.operator'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Keyword Other Special Method',
    scope: ['keyword.other.special-method'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Keyword Other Unit',
    scope: ['keyword.other.unit'],
    settings: {
      foreground: '#C64640',
    },
  },
  {
    name: 'Storage',
    scope: ['storage'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Storage Type Annotation,storage Type Primitive',
    scope: ['storage.type.annotation', 'storage.type.primitive'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Storage Modifier Package,storage Modifier Import',
    scope: ['storage.modifier.package', 'storage.modifier.import'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Constant',
    scope: ['constant'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Constant Variable',
    scope: ['constant.variable'],
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: 'Constant Character Escape',
    scope: ['constant.character.escape'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Constant Numeric',
    scope: ['constant.numeric'],
    settings: {
      foreground: '#C64640',
    },
  },
  {
    name: 'Constant Other Color',
    scope: ['constant.other.color'],
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: 'Constant Other Symbol',
    scope: ['constant.other.symbol'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Variable',
    scope: ['variable'],
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: 'Variable Interpolation',
    scope: ['variable.interpolation'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Variable Parameter',
    scope: ['variable.parameter'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'String',
    scope: ['string'],
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: 'String Regexp',
    scope: ['string.regexp'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'String Regexp Source Ruby Embedded',
    scope: ['string.regexp source.ruby.embedded'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'String Other Link',
    scope: ['string.other.link'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Punctuation Definition Comment',
    scope: ['punctuation.definition.comment'],
    settings: {
      foreground: '#757575',
    },
  },
  {
    name:
      'Punctuation Definition Method Parameters,punctuation Definition Function Parameters,punctuation Definition Parameters,punctuation Definition Separator,punctuation Definition Seperator,punctuation Definition Array',
    scope: [
      'punctuation.definition.method-parameters',
      'punctuation.definition.function-parameters',
      'punctuation.definition.parameters',
      'punctuation.definition.separator',
      'punctuation.definition.seperator',
      'punctuation.definition.array',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Punctuation Definition Heading,punctuation Definition Identity',
    scope: [
      'punctuation.definition.heading',
      'punctuation.definition.identity',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Punctuation Definition Bold',
    scope: ['punctuation.definition.bold'],
    settings: {
      foreground: '#DFE2E7',
      fontStyle: 'bold',
    },
  },
  {
    name: 'Punctuation Definition Italic',
    scope: ['punctuation.definition.italic'],
    settings: {
      foreground: '#977CDC',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Punctuation Section Embedded',
    scope: ['punctuation.section.embedded'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name:
      'Punctuation Section Method,punctuation Section Class,punctuation Section Inner Class',
    scope: [
      'punctuation.section.method',
      'punctuation.section.class',
      'punctuation.section.inner-class',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Support Class',
    scope: ['support.class'],
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: 'Support Type',
    scope: ['support.type'],
    settings: {
      foreground: '#86D9CA',
    },
  },
  {
    name: 'Support Function',
    scope: ['support.function'],
    settings: {
      foreground: '#86D9CA',
    },
  },
  {
    name: 'Support Function Any Method',
    scope: ['support.function.any-method'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Entity Name Function',
    scope: ['entity.name.function'],
    settings: {
      foreground: '#86D9CA',
    },
  },
  {
    name: 'Entity Name Class,entity Name Type Class',
    scope: ['entity.name.class', 'entity.name.type.class'],
    settings: {
      foreground: '#86D9CA',
    },
  },
  {
    name: 'Entity Name Section',
    scope: ['entity.name.section'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Entity Name Tag',
    scope: ['entity.name.tag'],
    settings: {
      foreground: '#86D9CA',
    },
  },
  {
    name: 'Entity Other Attribute Name',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Entity Other Attribute Name Id',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Meta Class',
    scope: ['meta.class'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Method Call,meta Method',
    scope: ['meta.method-call', 'meta.method'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Definition Variable',
    scope: ['meta.definition.variable'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Link',
    scope: ['meta.link'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Require',
    scope: ['meta.require'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Selector',
    scope: ['meta.selector'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Meta Separator',
    scope: ['meta.separator'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Meta Tag',
    scope: ['meta.tag'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Underline',
    scope: ['underline'],
    settings: {
      'text-decoration': 'underline',
    },
  },
  {
    name: 'None',
    scope: ['none'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Invalid Deprecated',
    scope: ['invalid.deprecated'],
    settings: {
      foreground: '#DFE2E7',
      background: '#E0C285',
    },
  },
  {
    name: 'Invalid Illegal',
    scope: ['invalid.illegal'],
    settings: {
      foreground: '#DFE2E7',
      background: '#E05252',
    },
  },
  {
    name: 'Markup Bold',
    scope: ['markup.bold'],
    settings: {
      foreground: '#DFE2E7',
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Italic',
    scope: ['markup.italic'],
    settings: {
      foreground: '#DFE2E7',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markup Heading',
    scope: ['markup.heading'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Heading Punctuation Definition Heading',
    scope: ['markup.heading punctuation.definition.heading'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Link',
    scope: ['markup.link'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Markup Raw',
    scope: ['markup.raw'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Source C Keyword Operator',
    scope: ['source.c keyword.operator'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Cpp Keyword Operator',
    scope: ['source.cpp keyword.operator'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Cs Keyword Operator',
    scope: ['source.cs keyword.operator'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Css Property Name,source Css Property Value',
    scope: ['source.css property-name', 'source.css property-value'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Css Property Name Support,source Css Property Value Support',
    scope: [
      'source.css property-name.support',
      'source.css property-value.support',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Gfm Markup',
    scope: ['source.gfm markup'],
    settings: {
      '-webkit-font-smoothing': 'auto',
    },
  },
  {
    name: 'Source Gfm Link Entity',
    scope: ['source.gfm link entity'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Go Storage Type String',
    scope: ['source.go storage.type.string'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Ini Keyword Other Definition Ini',
    scope: ['source.ini keyword.other.definition.ini'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Java Storage Modifier Import',
    scope: ['source.java storage.modifier.import'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Java Storage Type',
    scope: ['source.java storage.type'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Java Keyword Operator Instanceof',
    scope: ['source.java keyword.operator.instanceof'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Java Properties Meta Key Pair',
    scope: ['source.java-properties meta.key-pair'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Source Java Properties Meta Key Pair > Punctuation',
    scope: ['source.java-properties meta.key-pair > punctuation'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Js Keyword Operator',
    scope: ['source.js keyword.operator'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name:
      'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
    scope: [
      'source.js keyword.operator.delete',
      'source.js keyword.operator.in',
      'source.js keyword.operator.of',
      'source.js keyword.operator.instanceof',
      'source.js keyword.operator.new',
      'source.js keyword.operator.typeof',
      'source.js keyword.operator.void',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
    scope: ['source.json meta.structure.dictionary.json > string.quoted.json'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name:
      'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
    scope: [
      'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name:
      'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
    scope: [
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
      'source.json meta.structure.array.json > value.json > string.quoted.json',
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
      'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name:
      'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
    scope: [
      'source.json meta.structure.dictionary.json > constant.language.json',
      'source.json meta.structure.array.json > constant.language.json',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Ruby Constant Other Symbol > Punctuation',
    scope: ['source.ruby constant.other.symbol > punctuation'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Python Keyword Operator Logical Python',
    scope: ['source.python keyword.operator.logical.python'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Source Python Variable Parameter',
    scope: ['source.python variable.parameter'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Meta Attribute Rust',
    scope: ['meta.attribute.rust'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'Storage Modifier Lifetime Rust,entity Name Lifetime Rust',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: 'Keyword Unsafe Rust',
    scope: ['keyword.unsafe.rust'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: 'customrule',
    scope: 'customrule',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Support Type Property Name',
    scope: 'support.type.property-name',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Punctuation for Quoted String',
    scope: 'string.quoted.double punctuation',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Support Constant',
    scope: 'support.constant',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Property Name',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
    scope: 'support.type.property-name.json punctuation',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation for key-value',
    scope: [
      'punctuation.separator.key-value.ts',
      'punctuation.separator.key-value.js',
      'punctuation.separator.key-value.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Embedded Operator',
    scope: [
      'source.js.embedded.html keyword.operator',
      'source.ts.embedded.html keyword.operator',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Variable Other Readwrite',
    scope: [
      'variable.other.readwrite.js',
      'variable.other.readwrite.ts',
      'variable.other.readwrite.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Support Variable Dom',
    scope: ['support.variable.dom.js', 'support.variable.dom.ts'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Support Variable Property Dom',
    scope: [
      'support.variable.property.dom.js',
      'support.variable.property.dom.ts',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Interpolation String Punctuation',
    scope: [
      'meta.template.expression.js punctuation.definition',
      'meta.template.expression.ts punctuation.definition',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation Type Parameters',
    scope: [
      'source.ts punctuation.definition.typeparameters',
      'source.js punctuation.definition.typeparameters',
      'source.tsx punctuation.definition.typeparameters',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Definition Block',
    scope: [
      'source.ts punctuation.definition.block',
      'source.js punctuation.definition.block',
      'source.tsx punctuation.definition.block',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation Separator Comma',
    scope: [
      'source.ts punctuation.separator.comma',
      'source.js punctuation.separator.comma',
      'source.tsx punctuation.separator.comma',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Variable Property',
    scope: [
      'support.variable.property.js',
      'support.variable.property.ts',
      'support.variable.property.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Default Keyword',
    scope: [
      'keyword.control.default.js',
      'keyword.control.default.ts',
      'keyword.control.default.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Instanceof Keyword',
    scope: [
      'keyword.operator.expression.instanceof.js',
      'keyword.operator.expression.instanceof.ts',
      'keyword.operator.expression.instanceof.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Of Keyword',
    scope: [
      'keyword.operator.expression.of.js',
      'keyword.operator.expression.of.ts',
      'keyword.operator.expression.of.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Braces/Brackets',
    scope: [
      'meta.brace.round.js',
      'meta.array-binding-pattern-variable.js',
      'meta.brace.square.js',
      'meta.brace.round.ts',
      'meta.array-binding-pattern-variable.ts',
      'meta.brace.square.ts',
      'meta.brace.round.tsx',
      'meta.array-binding-pattern-variable.tsx',
      'meta.brace.square.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation Accessor',
    scope: [
      'source.js punctuation.accessor',
      'source.ts punctuation.accessor',
      'source.tsx punctuation.accessor',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation Terminator Statement',
    scope: [
      'punctuation.terminator.statement.js',
      'punctuation.terminator.statement.ts',
      'punctuation.terminator.statement.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Array variables',
    scope: [
      'meta.array-binding-pattern-variable.js variable.other.readwrite.js',
      'meta.array-binding-pattern-variable.ts variable.other.readwrite.ts',
      'meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Support Variables',
    scope: [
      'source.js support.variable',
      'source.ts support.variable',
      'source.tsx support.variable',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Support Variables',
    scope: [
      'variable.other.constant.property.js',
      'variable.other.constant.property.ts',
      'variable.other.constant.property.tsx',
    ],
    settings: {
      foreground: '#DFC45C',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Keyword New',
    scope: [
      'keyword.operator.new.ts',
      'keyword.operator.new.j',
      'keyword.operator.new.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] TS Keyword Operator',
    scope: ['source.ts keyword.operator', 'source.tsx keyword.operator'],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Punctuation Parameter Separator',
    scope: [
      'punctuation.separator.parameter.js',
      'punctuation.separator.parameter.ts',
      'punctuation.separator.parameter.tsx ',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Import',
    scope: [
      'constant.language.import-export-all.js',
      'constant.language.import-export-all.ts',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSX/TSX Import',
    scope: [
      'constant.language.import-export-all.jsx',
      'constant.language.import-export-all.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Keyword Control As',
    scope: [
      'keyword.control.as.js',
      'keyword.control.as.ts',
      'keyword.control.as.jsx',
      'keyword.control.as.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Variable Alias',
    scope: [
      'variable.other.readwrite.alias.js',
      'variable.other.readwrite.alias.ts',
      'variable.other.readwrite.alias.jsx',
      'variable.other.readwrite.alias.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Constants',
    scope: [
      'variable.other.constant.js',
      'variable.other.constant.ts',
      'variable.other.constant.jsx',
      'variable.other.constant.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Export Variable',
    scope: [
      'meta.export.default.js variable.other.readwrite.js',
      'meta.export.default.ts variable.other.readwrite.ts',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Template Strings Punctuation Accessor',
    scope: [
      'source.js meta.template.expression.js punctuation.accessor',
      'source.ts meta.template.expression.ts punctuation.accessor',
      'source.tsx meta.template.expression.tsx punctuation.accessor',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Import equals',
    scope: [
      'source.js meta.import-equals.external.js keyword.operator',
      'source.jsx meta.import-equals.external.jsx keyword.operator',
      'source.ts meta.import-equals.external.ts keyword.operator',
      'source.tsx meta.import-equals.external.tsx keyword.operator',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Type Module',
    scope:
      'entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Meta Class',
    scope: 'meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Property Definition Variable',
    scope: [
      'meta.definition.property.js variable',
      'meta.definition.property.ts variable',
      'meta.definition.property.jsx variable',
      'meta.definition.property.tsx variable',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Meta Type Parameters Type',
    scope: [
      'meta.type.parameters.js support.type',
      'meta.type.parameters.jsx support.type',
      'meta.type.parameters.ts support.type',
      'meta.type.parameters.tsx support.type',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Meta Tag Keyword Operator',
    scope: [
      'source.js meta.tag.js keyword.operator',
      'source.jsx meta.tag.jsx keyword.operator',
      'source.ts meta.tag.ts keyword.operator',
      'source.tsx meta.tag.tsx keyword.operator',
    ],
    settings: {
      foreground: '#757575',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Meta Tag Punctuation',
    scope: [
      'meta.tag.js punctuation.section.embedded',
      'meta.tag.jsx punctuation.section.embedded',
      'meta.tag.ts punctuation.section.embedded',
      'meta.tag.tsx punctuation.section.embedded',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Meta Array Literal Variable',
    scope: [
      'meta.array.literal.js variable',
      'meta.array.literal.jsx variable',
      'meta.array.literal.ts variable',
      'meta.array.literal.tsx variable',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Module Exports',
    scope: [
      'support.type.object.module.js',
      'support.type.object.module.jsx',
      'support.type.object.module.ts',
      'support.type.object.module.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Constants',
    scope: ['constant.language.json'],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Object Constants',
    scope: [
      'variable.other.constant.object.js',
      'variable.other.constant.object.jsx',
      'variable.other.constant.object.ts',
      'variable.other.constant.object.tsx',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Properties Keyword',
    scope: [
      'storage.type.property.js',
      'storage.type.property.jsx',
      'storage.type.property.ts',
      'storage.type.property.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Single Quote Inside Templated String',
    scope: [
      'meta.template.expression.js string.quoted punctuation.definition',
      'meta.template.expression.jsx string.quoted punctuation.definition',
      'meta.template.expression.ts string.quoted punctuation.definition',
      'meta.template.expression.tsx string.quoted punctuation.definition',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS Backtick inside Templated String',
    scope: [
      'meta.template.expression.js string.template punctuation.definition.string.template',
      'meta.template.expression.jsx string.template punctuation.definition.string.template',
      'meta.template.expression.ts string.template punctuation.definition.string.template',
      'meta.template.expression.tsx string.template punctuation.definition.string.template',
    ],
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] JS/TS In Keyword for Loops',
    scope: [
      'keyword.operator.expression.in.js',
      'keyword.operator.expression.in.jsx',
      'keyword.operator.expression.in.ts',
      'keyword.operator.expression.in.tsx',
    ],
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Constants Other',
    scope: 'source.python constant.other',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Constants',
    scope: 'source.python constant',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Placeholder Character',
    scope: 'constant.character.format.placeholder.other.python storage',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Magic',
    scope: 'support.variable.magic.python',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Meta Function Parameters',
    scope: 'meta.function.parameters.python',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Function Separator Annotation',
    scope: 'punctuation.separator.annotation.python',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Python Function Separator Punctuation',
    scope: 'punctuation.separator.parameters.python',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Fields',
    scope: 'entity.name.variable.field.cs',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Keyword Operators',
    scope: 'source.cs keyword.operator',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Variables',
    scope: 'variable.other.readwrite.cs',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Variables Other',
    scope: 'variable.other.object.cs',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Property Other',
    scope: 'variable.other.object.property.cs',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Property',
    scope: 'entity.name.variable.property.cs',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] CSharp Storage Type',
    scope: 'storage.type.cs',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Rust Unsafe Keyword',
    scope: 'keyword.other.unsafe.rust',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Raw Block',
    scope: 'markup.raw.block.markdown',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Shell Variables Punctuation Definition',
    scope: 'punctuation.definition.variable.shell',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Css Support Constant Value',
    scope: 'support.constant.property-value.css',
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Css Punctuation Definition Constant',
    scope: 'punctuation.definition.constant.css',
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Sass Punctuation for key-value',
    scope: 'punctuation.separator.key-value.scss',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Sass Punctuation for constants',
    scope: 'punctuation.definition.constant.scss',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Sass Punctuation for key-value',
    scope: 'meta.property-list.scss punctuation.separator.key-value.scss',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Java Storage Type Primitive Array',
    scope: 'storage.type.primitive.array.java',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown headings',
    scope: 'entity.name.section.markdown',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading setext',
    scope: 'markup.heading.setext',
    settings: {
      foreground: '#77B7D7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Inline Raw',
    scope: 'markup.inline.raw.markdown',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
    scope: 'beginning.punctuation.definition.list.markdown',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Quote',
    scope: 'markup.quote.markdown',
    settings: {
      foreground: '#977CDC',
      fontStyle: 'italic',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
    scope: [
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown',
    ],
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
    scope: 'punctuation.definition.metadata.markdown',
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
    scope: [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown',
    ],
    settings: {
      foreground: '#DFAB5C',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown',
    ],
    settings: {
      foreground: '#977CDC',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Ruby Punctuation Separator Variable',
    scope: 'punctuation.separator.variable.ruby',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Ruby Other Constant Variable',
    scope: 'variable.other.constant.ruby',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] Ruby Keyword Operator Other',
    scope: 'keyword.operator.other.ruby',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] PHP Punctuation Variable Definition',
    scope: 'punctuation.definition.variable.php',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    name: '[VSCODE-CUSTOM] PHP Meta Class',
    scope: 'meta.class.php',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: '#DFE2E7',
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: '#DFE2E7',
    },
  },
];

const theme = {
  name: 'CodeSandbox Black',
  type: 'light',
  // convert to vscode style flat dot notation
  colors: dot.dot(uiColors),
  tokenColors,
};

module.exports = theme;
