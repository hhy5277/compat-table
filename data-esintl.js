exports.name = 'ES Intl';
exports.target_file = 'esintl/index.html';
exports.skeleton_file = 'esintl/skeleton.html';

exports.tests = [
{
  name: 'Intl object',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-8',
  subtests: [
    {
      name: 'exists on global',
      exec: function(){/*
        return typeof Intl === 'object';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'has prototype of Object',
      exec: function(){/*
        return Intl.constructor === Object;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
  ],
},
{
  name: 'Intl.Collator',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.Collator === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'creates new Collator instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.Collator() instanceof Intl.Collator;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.Collator() instanceof Intl.Collator;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'calling Collator with Collator instance throws error',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.Collator.call(Intl.Collator());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.Collator(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome29: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
  ],
},
{
  name: 'Intl.Collator.prototype.compare',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.2',
  subtests: [
    {
      name: 'exists on Collator prototype',
      exec: function(){/*
        return typeof Intl.Collator().compare === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
  ],
},
{
  name: 'Intl.Collator.prototype.resolvedOptions',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.3.3',
  subtests: [
    {
      name: 'exists on Collator prototype',
      exec: function(){/*
        return typeof Intl.Collator().resolvedOptions === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
  ],
},
{
  name: 'NumberFormat',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-11',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.NumberFormat === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.NumberFormat === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'creates new NumberFormat instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.NumberFormat() instanceof Intl.NumberFormat;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.NumberFormat() instanceof Intl.NumberFormat;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'calling NumberFormat with NumberFormat instance throws error',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.NumberFormat.call(Intl.NumberFormat());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.NumberFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome29: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
  ],
},
{
  name: 'DateTimeFormat',
  spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-12',
  subtests: [
    {
      name: 'exists on intl object',
      exec: function(){/*
        return typeof Intl.DateTimeFormat === 'function';
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'creates new DateTimeFormat instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.3.1',
      exec: function(){/*
        return new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'constructor called without new creates instances',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.2.1',
      exec: function(){/*
        return Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'calling DateTimeFormat with DateTimeFormat instance throws error',
      spec: 'http://www.ecma-international.org/ecma-402/1.0/#sec-10.1.1.1',
      exec: function(){/*
        try {
          Intl.DateTimeFormat.call(Intl.DateTimeFormat());
          return false;
        } catch(e) {
          return e instanceof TypeError;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome24: true,
        chrome29: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'accepts valid language tags',
      exec: function(){/*
        try {
          // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
          var validLanguageTags = [
            "de", // ISO 639 language code
            "de-DE", // + ISO 3166-1 country code
            "DE-de", // tags are case-insensitive
            "cmn", // ISO 639 language code
            "cmn-Hans", // + script code
            "CMN-hANS", // tags are case-insensitive
            "cmn-hans-cn", // + ISO 3166-1 country code
            "es-419", // + UN M.49 region code
            "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
            "i-klingon", // grandfathered tag
            "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
            "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
            "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
            "x-en-US-12345", // anything goes in private use tags
            "x-12345-12345-en-US",
            "x-en-US-12345-12345",
            "x-en-u-foo",
            "x-en-u-foo-u-bar"
          ];
          for (var i in validLanguageTags) {
            Intl.DateTimeFormat(validLanguageTags[i]);
          }
          return true;
        } catch(e) {
          return false;
        }
      */},
      res: {
        ie11: true,
        edge12: true,
        firefox29: true,
        chrome29: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      },
    },
    {
      name: 'resolvedOptions().timeZone defaults to the host environment',
      exec: function () {/*
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz !== undefined && tz.length > 0;
      */},
      res: {
        ie9: false,
        ie10: false,
        ie11: false,
        edge12: false,
        edge14: true,
        firefox29: false,
        firefox52: true,
        chrome24: null,
        chrome29: true,
        safari51: null,
        safari6: null,
        safari7: false,
        safari71_8: false,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
        opera12: null,
        android40: null,
        ios7: false,
        ios9: false
      }
    },
    {
      name: 'accepts IANA timezone names',
      exec: function() {/*
        try {
          new Intl.DateTimeFormat('en-US', {
            timeZone: 'Australia/Sydney',
            timeZoneName: 'long'
          }).format();
          return true;
        } catch (e) {
          return false;
        }
      */},
      res: {
        ie9: false,
        ie10: false,
        ie11: false,
        edge12: false,
        edge14: true,
        firefox29: false, // Firefox bug #1266290
        firefox52: true,
        chrome24: true,
        chrome29: true,
        safari10: true,
        safaritp: true,
        webkit: true,
        node012: true,
        node4: true,
      }
    }
  ],
},
{
  name: 'String.prototype.localeCompare',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.localecompare',
  subtests: [
    {
      name: 'exists on String prototype',
      exec: function(){/*
        return typeof String.prototype.localeCompare === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Number.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.prototype.tolocalestring',
  subtests: [
    {
      name: 'exists on Number prototype',
      exec: function(){/*
        return typeof Number.prototype.toLocaleString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Array.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.tolocalestring',
  subtests: [
    {
      name: 'exists on Array prototype',
      exec: function(){/*
        return typeof Array.prototype.toLocaleString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Object.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tolocalestring',
  subtests: [
    {
      name: 'exists on Object prototype',
      exec: function(){/*
        return typeof Object.prototype.toLocaleString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Date.prototype.toLocaleString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocalestring',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Date.prototype.toLocaleDateString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaledatestring',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleDateString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
{
  name: 'Date.prototype.toLocaleTimeString',
  spec: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.tolocaletimestring',
  subtests: [
    {
      name: 'exists on Date prototype',
      exec: function(){/*
        return typeof Date.prototype.toLocaleTimeString === 'function';
      */},
      res: {
        ie9: true,
        ie10: true,
        ie11: true,
        edge12: true,
        firefox2: true,
        firefox29: true,
        chrome22: true,
        chrome24: true,
        chrome29: true,
        safari51: true,
        safari6: true,
        safari7: true,
        safari71_8: true,
        safaritp: true,
        webkit: true,
        opera12: true,
        ios7: true,
        ios9: true,
        node010: true,
        node012: true,
        iojs: true,
        node4: true,
        android40: true,
      },
    },
  ],
},
];
