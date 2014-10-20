var Identities = (function() {

  var identityToIcon = {
    "linkedIn": {
                  iconClass: "fa-linkedin-square",
                  urlPrefix: "https://www.linkedin.com/pub/"
                },
    "blog": {
              iconClass: "fa-wordpress",
              urlPrefix: ""
            },
    "twitter": {
          iconClass: "fa-twitter",
          urlPrefix: "https://twitter.com/"
        },
    "github": {
        iconClass: "fa-github",
        urlPrefix: "https://github.com/"
      }
  };

  var fromJson = function(json) {
    var identities = [];

    for (name in json) {
        var urlSuffix = json[name];
        var base = identityToIcon[name];
        identities.push({
          iconClass: base.iconClass,
          url: base.urlPrefix + urlSuffix
        });
    }

    return identities;
  };

  return {
    fromJson: fromJson
  };

})();
