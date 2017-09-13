'use strict';

$(function () {
    $("form[name='login']").validate({
        rules: {
            username: 'required',
            password: {
                required: true,
                password: true
            }
        },
        messages: {
            username: 'Please enter your username',
            password: 'Please provide a password'
        },
        submitHandler: function submitHandler(form) {
            form.submit();
        }
    });
});

function authGoogle() {}

function authLinkedin() {}

function authLocal() {}
'use strict';

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$(function () {
  $("form[name=login']").validate({
    rules: {
      username: 'required',
      password: {
        required: true,
        password: true
      }
    },
    messages: {
      username: 'Please enter your username',
      password: 'Please provide a password'
    },
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
});

function authGoogle() {}

function authLinkedin() {}

function authLocal() {}
"use strict";

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
};

function authGoogle() {}

function authLinkedin() {}

function authLocal() {
  $("form[name='registration']").validate({
    rules: {
      username: "required",
      password: "required"
    },
    messages: {
      username: "Please enter your firstname",
      password: "Please provide a password"
    },
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
}
"use strict";

function authGoogle() {}

function authLinkedin() {}

function authLocal() {
  $("form[name='registration']").validate({
    rules: {
      username: "required",
      password: "required"
    },
    messages: {
      username: "Please enter your firstname",
      password: "Please provide a password"
    },
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
}
'use strict';

function authGoogle() {
  var GoogleAuth;
  var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // Retrieve the discovery document for version 3 of Google Drive API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      'discoveryDocs': [discoveryUrl],
      'clientId': 'YOUR_CLIENT_ID',
      'scope': SCOPE
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#sign-in-or-out-button').click(function () {
        handleAuthClick();
      });
      $('#revoke-access-button').click(function () {
        revokeAccess();
      });
    });
  }

  function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked 'Sign out' button.
      GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
    }
  }

  function revokeAccess() {
    GoogleAuth.disconnect();
  }

  function setSigninStatus(isSignedIn) {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      $('#sign-in-or-out-button').html('Sign out');
      $('#revoke-access-button').css('display', 'inline-block');
      $('#auth-status').html('You are currently signed in and have granted ' + 'access to this app.');
    } else {
      $('#sign-in-or-out-button').html('Sign In/Authorize');
      $('#revoke-access-button').css('display', 'none');
      $('#auth-status').html('You have not authorized this app or you are ' + 'signed out.');
    }
  }

  function updateSigninStatus(isSignedIn) {
    setSigninStatus();
  }
}
'use strict';

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
function handleClientLoad() {
  // Load the API's client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load('client:auth2', initClient);
}

function initClient() {
  // Retrieve the discovery document for version 3 of Google Drive API.
  // In practice, your app can retrieve one or more discovery documents.
  var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  gapi.client.init({
    'apiKey': 'YOUR_API_KEY',
    'discoveryDocs': [discoveryUrl],
    'clientId': 'YOUR_CLIENT_ID',
    'scope': SCOPE
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(updateSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    var user = GoogleAuth.currentUser.get();
    setSigninStatus();

    // Call handleAuthClick function when user clicks on
    //      "Sign In/Authorize" button.
    $('#sign-in-or-out-button').click(function () {
      handleAuthClick();
    });
    $('#revoke-access-button').click(function () {
      revokeAccess();
    });
  });
}

function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    // User is authorized and has clicked 'Sign out' button.
    GoogleAuth.signOut();
  } else {
    // User is not signed in. Start Google auth flow.
    GoogleAuth.signIn();
  }
}

function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus(isSignedIn) {
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    $('#sign-in-or-out-button').html('Sign out');
    $('#revoke-access-button').css('display', 'inline-block');
    $('#auth-status').html('You are currently signed in and have granted ' + 'access to this app.');
  } else {
    $('#sign-in-or-out-button').html('Sign In/Authorize');
    $('#revoke-access-button').css('display', 'none');
    $('#auth-status').html('You have not authorized this app or you are ' + 'signed out.');
  }
}

function updateSigninStatus(isSignedIn) {
  setSigninStatus();
}
"use strict";
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus);GoogleAuth.currentUser.get();setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly";
"use strict";
function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus);GoogleAuth.currentUser.get();setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly";
"use strict";

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(t) {
      t.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus);GoogleAuth.currentUser.get();setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(t) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(t) {
  setSigninStatus();
}!function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  t.extend(t.fn, { validate: function validate(e) {
      if (this.length) {
        var i = t.data(this[0], "validator");return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
          i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0);
        }), this.on("submit.validate", function (e) {
          function n() {
            var n, s;return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (s = i.settings.submitHandler.call(i, i.currentForm, e), n && n.remove(), void 0 !== s && s);
          }return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1);
        })), i);
      }e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var e, i, n;return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function () {
        (e = i.element(this) && e) || (n = n.concat(i.errorList));
      }), i.errorList = n), e;
    }, rules: function rules(e, i) {
      var n,
          s,
          a,
          r,
          o,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (e) switch (n = t.data(l.form, "validator").settings, s = n.rules, a = t.validator.staticRules(l), e) {case "add":
            t.extend(a, t.validator.normalizeRule(i)), delete a.messages, s[l.name] = a, i.messages && (n.messages[l.name] = t.extend(n.messages[l.name], i.messages));break;case "remove":
            return i ? (u = {}, t.each(i.split(/\s/), function (t, e) {
              u[e] = a[e], delete a[e];
            }), u) : (delete s[l.name], a);}return (r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(l), t.validator.attributeRules(l), t.validator.dataRules(l), t.validator.staticRules(l)), l)).required && (o = r.required, delete r.required, r = t.extend({ required: o }, r)), r.remote && (o = r.remote, delete r.remote, r = t.extend(r, { remote: o })), r;
      }
    } }), t.extend(t.expr.pseudos || t.expr[":"], { blank: function blank(e) {
      return !t.trim("" + t(e).val());
    }, filled: function filled(e) {
      var i = t(e).val();return null !== i && !!t.trim("" + i);
    }, unchecked: function unchecked(e) {
      return !t(e).prop("checked");
    } }), t.validator = function (e, i) {
    this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
  }, t.validator.format = function (e, i) {
    return 1 === arguments.length ? function () {
      var i = t.makeArray(arguments);return i.unshift(e), t.validator.format.apply(this, i);
    } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
      e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
        return i;
      });
    }), e);
  }, t.extend(t.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(t) {
        this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)));
      }, onfocusout: function onfocusout(t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
      }, onkeyup: function onkeyup(e, i) {
        var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, n) || (e.name in this.submitted || e.name in this.invalid) && this.element(e);
      }, onclick: function onclick(t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
      }, highlight: function highlight(e, i, n) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n);
      }, unhighlight: function unhighlight(e, i, n) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n);
      } }, setDefaults: function setDefaults(e) {
      t.extend(t.validator.defaults, e);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}."), step: t.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function e(e) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name"));var i = t.data(this.form, "validator"),
              n = "on" + e.type.replace(/^validate/, ""),
              s = i.settings;s[n] && !t(this).is(s.ignore) && s[n].call(i, this, e);
        }this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var i,
            n = this.groups = {};t.each(this.settings.groups, function (e, i) {
          "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
            n[i] = e;
          });
        }), i = this.settings.rules, t.each(i, function (e, n) {
          i[e] = t.validator.normalizeRule(n);
        }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) {
          this.check(e[t]);
        }return this.valid();
      }, element: function element(e) {
        var i,
            n,
            s = this.clean(e),
            a = this.validationTargetFor(s),
            r = this,
            o = !0;return void 0 === a ? delete this.invalid[s.name] : (this.prepareElement(a), this.currentElements = t(a), (n = this.groups[a.name]) && t.each(this.groups, function (t, e) {
          e === n && t !== a.name && (s = r.validationTargetFor(r.clean(r.findByName(t)))) && s.name in r.invalid && (r.currentElements.push(s), o = r.check(s) && o);
        }), i = !1 !== this.check(a), o = o && i, this.invalid[a.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o;
      }, showErrors: function showErrors(e) {
        if (e) {
          var i = this;t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function (t, e) {
            return { message: t, element: i.findByName(e)[0] };
          }), this.successList = t.grep(this.successList, function (t) {
            return !(t.name in e);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(e);
      }, resetElements: function resetElements(t) {
        var e;if (this.settings.unhighlight) for (e = 0; t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
        } else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(t) {
        var e,
            i = 0;for (e in t) {
          void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
        }return i;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(t) {
        t.not(this.containers).text(""), this.addWrapper(t).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (t) {}
      }, findLastActive: function findLastActive() {
        var e = this.lastActive;return e && 1 === t.grep(this.errorList, function (t) {
          return t.element.name === e.name;
        }).length && e;
      }, elements: function elements() {
        var e = this,
            i = {};return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var n = this.name || t(this).attr("name");return !n && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0], this.name = n), !(n in i || !e.objectLength(t(this).rules()) || (i[n] = !0, 0));
        });
      }, clean: function clean(e) {
        return t(e)[0];
      }, errors: function errors() {
        var e = this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement + "." + e, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = t([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(t) {
        this.reset(), this.toHide = this.errorsFor(t);
      }, elementValue: function elementValue(e) {
        var i,
            n,
            s = t(e),
            a = e.type;return "radio" === a || "checkbox" === a ? this.findByName(e.name).filter(":checked").val() : "number" === a && void 0 !== e.validity ? e.validity.badInput ? "NaN" : s.val() : (i = e.hasAttribute("contenteditable") ? s.text() : s.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i);
      }, check: function check(e) {
        e = this.validationTargetFor(this.clean(e));var i,
            n,
            s,
            a,
            r = t(e).rules(),
            o = t.map(r, function (t, e) {
          return e;
        }).length,
            u = !1,
            l = this.elementValue(e);if ("function" == typeof r.normalizer ? a = r.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a) {
          if ("string" != typeof (l = a.call(e, l))) throw new TypeError("The normalizer should return a string value.");delete r.normalizer;
        }for (n in r) {
          s = { method: n, parameters: r[n] };try {
            if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, l, e, s.parameters)) && 1 === o) {
              u = !0;continue;
            }if (u = !1, "pending" === i) return void (this.toHide = this.toHide.not(this.errorsFor(e)));if (!i) return this.formatAndAdd(e, s), !1;
          } catch (t) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method."), t;
          }
        }if (!u) return this.objectLength(r) && this.successList.push(e), !0;
      }, customDataMessage: function customDataMessage(e, i) {
        return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg");
      }, customMessage: function customMessage(t, e) {
        var i = this.settings.messages[t];return i && (i.constructor === String ? i : i[e]);
      }, findDefined: function findDefined() {
        for (var t = 0; t < arguments.length; t++) {
          if (void 0 !== arguments[t]) return arguments[t];
        }
      }, defaultMessage: function defaultMessage(e, i) {
        "string" == typeof i && (i = { method: i });var n = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
            s = /\$?\{(\d+)\}/g;return "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), n;
      }, formatAndAdd: function formatAndAdd(t, e) {
        var i = this.defaultMessage(t, e);this.errorList.push({ message: i, element: t, method: e.method }), this.errorMap[t.name] = i, this.submitted[t.name] = i;
      }, addWrapper: function addWrapper(t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
      }, defaultShowErrors: function defaultShowErrors() {
        var t, e, i;for (t = 0; this.errorList[t]; t++) {
          i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) {
          this.showLabel(this.successList[t]);
        }if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return t(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(e, i) {
        var n,
            s,
            a,
            r,
            o = this.errorsFor(e),
            u = this.idOrName(e),
            l = t(e).attr("aria-describedby");o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = t("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, t(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", u) : 0 === o.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (a = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (l += " " + a) : l = a, t(e).attr("aria-describedby", l), (s = this.groups[e.name]) && (r = this, t.each(r.groups, function (e, i) {
          i === s && t("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", o.attr("id"));
        })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o);
      }, errorsFor: function errorsFor(e) {
        var i = this.escapeCssMeta(this.idOrName(e)),
            n = t(e).attr("aria-describedby"),
            s = "label[for='" + i + "'], label[for='" + i + "'] *";return n && (s = s + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(s);
      }, escapeCssMeta: function escapeCssMeta(t) {
        return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
      }, validationTargetFor: function validationTargetFor(e) {
        return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0];
      }, checkable: function checkable(t) {
        return (/radio|checkbox/i.test(t.type)
        );
      }, findByName: function findByName(e) {
        return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
      }, getLength: function getLength(e, i) {
        switch (i.nodeName.toLowerCase()) {case "select":
            return t("option:selected", i).length;case "input":
            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;}return e.length;
      }, depend: function depend(t, e) {
        return !this.dependTypes[typeof t === "undefined" ? "undefined" : _typeof(t)] || this.dependTypes[typeof t === "undefined" ? "undefined" : _typeof(t)](t, e);
      }, dependTypes: { boolean: function boolean(t) {
          return t;
        }, string: function string(e, i) {
          return !!t(e, i.form).length;
        }, function: function _function(t, e) {
          return t(e);
        } }, optional: function optional(e) {
        var i = this.elementValue(e);return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
      }, startRequest: function startRequest(e) {
        this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0);
      }, stopRequest: function stopRequest(e, i) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(e, i) {
        return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, { method: i }) });
      }, destroy: function destroy() {
        this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(e, i) {
      e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
    }, classRules: function classRules(e) {
      var i = {},
          n = t(e).attr("class");return n && t.each(n.split(" "), function () {
        this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
      }), i;
    }, normalizeAttributeRule: function normalizeAttributeRule(t, e, i, n) {
      /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0);
    }, attributeRules: function attributeRules(e) {
      var i,
          n,
          s = {},
          a = t(e),
          r = e.getAttribute("type");for (i in t.validator.methods) {
        "required" === i ? ("" === (n = e.getAttribute(i)) && (n = !0), n = !!n) : n = a.attr(i), this.normalizeAttributeRule(s, r, i, n);
      }return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s;
    }, dataRules: function dataRules(e) {
      var i,
          n,
          s = {},
          a = t(e),
          r = e.getAttribute("type");for (i in t.validator.methods) {
        n = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(s, r, i, n);
      }return s;
    }, staticRules: function staticRules(e) {
      var i = {},
          n = t.data(e.form, "validator");return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i;
    }, normalizeRules: function normalizeRules(e, i) {
      return t.each(e, function (n, s) {
        if (!1 !== s) {
          if (s.param || s.depends) {
            var a = !0;switch (_typeof(s.depends)) {case "string":
                a = !!t(s.depends, i.form).length;break;case "function":
                a = s.depends.call(i, i);}a ? e[n] = void 0 === s.param || s.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[n]);
          }
        } else delete e[n];
      }), t.each(e, function (n, s) {
        e[n] = t.isFunction(s) && "normalizer" !== n ? s(i) : s;
      }), t.each(["minlength", "maxlength"], function () {
        e[this] && (e[this] = Number(e[this]));
      }), t.each(["rangelength", "range"], function () {
        var i;e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]));
      }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e;
    }, normalizeRule: function normalizeRule(e) {
      if ("string" == typeof e) {
        var i = {};t.each(e.split(/\s/), function () {
          i[this] = !0;
        }), e = i;
      }return e;
    }, addMethod: function addMethod(e, i, n) {
      t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e));
    }, methods: { required: function required(e, i, n) {
        if (!this.depend(n, i)) return "dependency-mismatch";if ("select" === i.nodeName.toLowerCase()) {
          var s = t(i).val();return s && s.length > 0;
        }return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0;
      }, email: function email(t, e) {
        return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t);
      }, url: function url(t, e) {
        return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t);
      }, date: function date(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString());
      }, dateISO: function dateISO(t, e) {
        return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t);
      }, number: function number(t, e) {
        return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
      }, digits: function digits(t, e) {
        return this.optional(e) || /^\d+$/.test(t);
      }, minlength: function minlength(e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(e, i);return this.optional(i) || s >= n;
      }, maxlength: function maxlength(e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(e, i);return this.optional(i) || s <= n;
      }, rangelength: function rangelength(e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(e, i);return this.optional(i) || s >= n[0] && s <= n[1];
      }, min: function min(t, e, i) {
        return this.optional(e) || t >= i;
      }, max: function max(t, e, i) {
        return this.optional(e) || t <= i;
      }, range: function range(t, e, i) {
        return this.optional(e) || t >= i[0] && t <= i[1];
      }, step: function step(e, i, n) {
        var s,
            a = t(i).attr("type"),
            r = "Step attribute on input type " + a + " is not supported.",
            o = ["text", "number", "range"],
            u = new RegExp("\\b" + a + "\\b"),
            l = function l(t) {
          var e = ("" + t).match(/(?:\.(\d+))?$/);return e && e[1] ? e[1].length : 0;
        },
            h = function h(t) {
          return Math.round(t * Math.pow(10, s));
        },
            d = !0;if (a && !u.test(o.join())) throw new Error(r);return s = l(n), (l(e) > s || h(e) % h(n) != 0) && (d = !1), this.optional(i) || d;
      }, equalTo: function equalTo(e, i, n) {
        var s = t(n);return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          t(i).valid();
        }), e === s.val();
      }, remote: function remote(e, i, n, s) {
        if (this.optional(i)) return "dependency-mismatch";s = "string" == typeof s && s || "remote";var a,
            r,
            o,
            u = this.previousValue(i, s);return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[i.name][s], this.settings.messages[i.name][s] = u.message, n = "string" == typeof n && { url: n } || n, o = t.param(t.extend({ data: e }, n.data)), u.old === o ? u.valid : (u.old = o, a = this, this.startRequest(i), r = {}, r[i.name] = e, t.ajax(t.extend(!0, { mode: "abort", port: "validate" + i.name, dataType: "json", data: r, context: a.currentForm, success: function success(t) {
            var n,
                r,
                o,
                l = !0 === t || "true" === t;a.settings.messages[i.name][s] = u.originalMessage, l ? (o = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = o, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (n = {}, r = t || a.defaultMessage(i, { method: s, parameters: e }), n[i.name] = u.message = r, a.invalid[i.name] = !0, a.showErrors(n)), u.valid = l, a.stopRequest(i, l);
          } }, n)), "pending");
      } } });var e,
      i = {};return t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, n) {
    var s = t.port;"abort" === t.mode && (i[s] && i[s].abort(), i[s] = n);
  }) : (e = t.ajax, t.ajax = function (n) {
    var s = ("mode" in n ? n : t.ajaxSettings).mode,
        a = ("port" in n ? n : t.ajaxSettings).port;return "abort" === s ? (i[a] && i[a].abort(), i[a] = e.apply(this, arguments), i[a]) : e.apply(this, arguments);
  }), t;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly";
"use strict";

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
};

function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus);GoogleAuth.currentUser.get();setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && "object" == _typeof2(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";

  function n(e, t) {
    var n = (t = t || te).createElement("script");n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
  }function i(e) {
    var t = !!e && "length" in e && e.length,
        n = pe.type(e);return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }function s(e, t, n) {
    return pe.isFunction(t) ? pe.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? pe.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? pe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n;
    }) : Ae.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function a(e) {
    var t = {};return pe.each(e.match(Ne) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function u(e) {
    return e;
  }function l(e) {
    throw e;
  }function c(e, t, n, i) {
    var r;try {
      e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }function d() {
    te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), pe.ready();
  }function h() {
    this.expando = pe.expando + h.uid++;
  }function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e);
  }function p(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = f(n);
      } catch (e) {}Fe.set(e, t, n);
    } else n = void 0;return n;
  }function g(e, t, n, i) {
    var r,
        s = 1,
        o = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return pe.css(e, t, "");
    },
        u = a(),
        l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
        c = (pe.cssNumber[t] || "px" !== l && +u) && He.exec(pe.css(e, t));if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;do {
        s = s || ".5", c /= s, pe.style(e, t, c + l);
      } while (s !== (s = a() / u) && 1 !== s && --o);
    }return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r;
  }function m(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = Be[i];return r || (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Be[i] = r, r);
  }function v(e, t) {
    for (var n, i, r = [], s = 0, o = e.length; s < o; s++) {
      (i = e[s]).style && (n = i.style.display, t ? ("none" === n && (r[s] = Ie.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && ze(i) && (r[s] = m(i))) : "none" !== n && (r[s] = "none", Ie.set(i, "display", n)));
    }for (s = 0; s < o; s++) {
      null != r[s] && (e[s].style.display = r[s]);
    }return e;
  }function y(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? pe.merge([e], n) : n;
  }function b(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"));
    }
  }function x(e, t, n, i, r) {
    for (var s, o, a, u, l, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((s = e[f]) || 0 === s) if ("object" === pe.type(s)) pe.merge(h, s.nodeType ? [s] : s);else if (Ve.test(s)) {
        for (o = o || d.appendChild(t.createElement("div")), a = (We.exec(s) || ["", ""])[1].toLowerCase(), u = Ye[a] || Ye._default, o.innerHTML = u[1] + pe.htmlPrefilter(s) + u[2], c = u[0]; c--;) {
          o = o.lastChild;
        }pe.merge(h, o.childNodes), (o = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(s));
    }for (d.textContent = "", f = 0; s = h[f++];) {
      if (i && pe.inArray(s, i) > -1) r && r.push(s);else if (l = pe.contains(s.ownerDocument, s), o = y(d.appendChild(s), "script"), l && b(o), n) for (c = 0; s = o[c++];) {
        Ue.test(s.type || "") && n.push(s);
      }
    }return d;
  }function w() {
    return !0;
  }function C() {
    return !1;
  }function S() {
    try {
      return te.activeElement;
    } catch (e) {}
  }function A(e, t, n, i, r, s) {
    var o, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof2(t))) {
      "string" != typeof n && (i = i || n, n = void 0);for (a in t) {
        A(e, a, n, i, t[a], s);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = C;else if (!r) return e;return 1 === s && (o = r, r = function r(e) {
      return pe().off(e), o.apply(this, arguments);
    }, r.guid = o.guid || (o.guid = pe.guid++)), e.each(function () {
      pe.event.add(this, t, r, i, n);
    });
  }function k(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? pe(">tbody", e)[0] || e : e;
  }function T(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function E(e) {
    var t = nt.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function L(e, t) {
    var n, i, r, s, o, a, u, l;if (1 === t.nodeType) {
      if (Ie.hasData(e) && (s = Ie.access(e), o = Ie.set(t, s), l = s.events)) {
        delete o.handle, o.events = {};for (r in l) {
          for (n = 0, i = l[r].length; n < i; n++) {
            pe.event.add(t, r, l[r][n]);
          }
        }
      }Fe.hasData(e) && (a = Fe.access(e), u = pe.extend({}, a), Fe.set(t, u));
    }
  }function N(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function q(e, t, i, r) {
    t = re.apply([], t);var s,
        o,
        a,
        u,
        l,
        c,
        d = 0,
        h = e.length,
        f = h - 1,
        p = t[0],
        g = pe.isFunction(p);if (g || h > 1 && "string" == typeof p && !he.checkClone && tt.test(p)) return e.each(function (n) {
      var s = e.eq(n);g && (t[0] = p.call(this, n, s.html())), q(s, t, i, r);
    });if (h && (s = x(t, e[0].ownerDocument, !1, e, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
      for (u = (a = pe.map(y(s, "script"), T)).length; d < h; d++) {
        l = s, d !== f && (l = pe.clone(l, !0, !0), u && pe.merge(a, y(l, "script"))), i.call(e[d], l, d);
      }if (u) for (c = a[a.length - 1].ownerDocument, pe.map(a, E), d = 0; d < u; d++) {
        l = a[d], Ue.test(l.type || "") && !Ie.access(l, "globalEval") && pe.contains(c, l) && (l.src ? pe._evalUrl && pe._evalUrl(l.src) : n(l.textContent.replace(it, ""), c));
      }
    }return e;
  }function j(e, t, n) {
    for (var i, r = t ? pe.filter(t, e) : e, s = 0; null != (i = r[s]); s++) {
      n || 1 !== i.nodeType || pe.cleanData(y(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }function D(e, t, n) {
    var i,
        r,
        s,
        o,
        a = e.style;return (n = n || ot(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), !he.pixelMarginRight() && st.test(o) && rt.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o;
  }function R(e, t) {
    return { get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function I(e) {
    if (e in ht) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;) {
      if ((e = dt[n] + t) in ht) return e;
    }
  }function F(e) {
    var t = pe.cssProps[e];return t || (t = pe.cssProps[e] = I(e) || e), t;
  }function O(e, t, n) {
    var i = He.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function P(e, t, n, i, r) {
    var s,
        o = 0;for (s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) {
      "margin" === n && (o += pe.css(e, n + Me[s], !0, r)), i ? ("content" === n && (o -= pe.css(e, "padding" + Me[s], !0, r)), "margin" !== n && (o -= pe.css(e, "border" + Me[s] + "Width", !0, r))) : (o += pe.css(e, "padding" + Me[s], !0, r), "padding" !== n && (o += pe.css(e, "border" + Me[s] + "Width", !0, r)));
    }return o;
  }function $(e, t, n) {
    var i,
        r = ot(e),
        s = D(e, t, r),
        o = "border-box" === pe.css(e, "boxSizing", !1, r);return st.test(s) ? s : (i = o && (he.boxSizingReliable() || s === e.style[t]), "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = parseFloat(s) || 0) + P(e, t, n || (o ? "border" : "content"), i, r) + "px");
  }function H(e, t, n, i, r) {
    return new H.prototype.init(e, t, n, i, r);
  }function M() {
    pt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setTimeout(M, pe.fx.interval), pe.fx.tick());
  }function z() {
    return e.setTimeout(function () {
      ft = void 0;
    }), ft = pe.now();
  }function G(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = Me[i], r["margin" + n] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function B(e, t, n) {
    for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++) {
      if (i = r[s].call(n, t, e)) return i;
    }
  }function _(e, t) {
    var n, i, r, s, o;for (n in e) {
      if (i = pe.camelCase(n), r = t[i], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = pe.cssHooks[i]) && "expand" in o) {
        s = o.expand(s), delete e[i];for (n in s) {
          n in e || (e[n] = s[n], t[n] = r);
        }
      } else t[i] = r;
    }
  }function W(e, t, n) {
    var i,
        r,
        s = 0,
        o = W.prefilters.length,
        a = pe.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (r) return !1;for (var t = ft || z(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), s = 0, o = l.tweens.length; s < o; s++) {
        l.tweens[s].run(i);
      }return a.notifyWith(e, [l, i, n]), i < 1 && o ? n : (o || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
    },
        l = a.promise({ elem: e, props: pe.extend({}, t), opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ft || z(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? l.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          l.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (_(c, l.opts.specialEasing); s < o; s++) {
      if (i = W.prefilters[s].call(l, e, c, l.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(i.stop, i)), i;
    }return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }function U(e) {
    return (e.match(Ne) || []).join(" ");
  }function Y(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function V(e, t, n, i) {
    var r;if (Array.isArray(t)) pe.each(t, function (t, r) {
      n || Tt.test(e) ? i(e, r) : V(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof2(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== pe.type(t)) i(e, t);else for (r in t) {
      V(e + "[" + r + "]", t[r], n, i);
    }
  }function X(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          s = t.toLowerCase().match(Ne) || [];if (pe.isFunction(n)) for (; i = s[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function K(e, t, n, i) {
    function r(a) {
      var u;return s[a] = !0, pe.each(e[a] || [], function (e, a) {
        var l = a(t, n, i);return "string" != typeof l || o || s[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1);
      }), u;
    }var s = {},
        o = e === $t;return r(t.dataTypes[0]) || !s["*"] && r("*");
  }function Z(e, t) {
    var n,
        i,
        r = pe.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && pe.extend(!0, e, i), e;
  }function Q(e, t, n) {
    for (var i, r, s, o, a = e.contents, u = e.dataTypes; "*" === u[0];) {
      u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (i) for (r in a) {
      if (a[r] && a[r].test(i)) {
        u.unshift(r);break;
      }
    }if (u[0] in n) s = u[0];else {
      for (r in n) {
        if (!u[0] || e.converters[r + " " + u[0]]) {
          s = r;break;
        }o || (o = r);
      }s = s || o;
    }if (s) return s !== u[0] && u.unshift(s), n[s];
  }function J(e, t, n, i) {
    var r,
        s,
        o,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (o in e.converters) {
      l[o.toLowerCase()] = e.converters[o];
    }for (s = c.shift(); s;) {
      if (e.responseFields[s] && (n[e.responseFields[s]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = s, s = c.shift()) if ("*" === s) s = u;else if ("*" !== u && u !== s) {
        if (!(o = l[u + " " + s] || l["* " + s])) for (r in l) {
          if ((a = r.split(" "))[1] === s && (o = l[u + " " + a[0]] || l["* " + a[0]])) {
            !0 === o ? o = l[r] : !0 !== l[r] && (s = a[0], c.unshift(a[1]));break;
          }
        }if (!0 !== o) if (o && e.throws) t = o(t);else try {
          t = o(t);
        } catch (e) {
          return { state: "parsererror", error: o ? e : "No conversion from " + u + " to " + s };
        }
      }
    }return { state: "success", data: t };
  }var ee = [],
      te = e.document,
      ne = Object.getPrototypeOf,
      ie = ee.slice,
      re = ee.concat,
      se = ee.push,
      oe = ee.indexOf,
      ae = {},
      ue = ae.toString,
      le = ae.hasOwnProperty,
      ce = le.toString,
      de = ce.call(Object),
      he = {},
      fe = "3.2.1",
      pe = function pe(e, t) {
    return new pe.fn.init(e, t);
  },
      ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      me = /^-ms-/,
      ve = /-([a-z])/g,
      ye = function ye(e, t) {
    return t.toUpperCase();
  };pe.fn = pe.prototype = { jquery: fe, constructor: pe, length: 0, toArray: function toArray() {
      return ie.call(this);
    }, get: function get(e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = pe.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return pe.each(this, e);
    }, map: function map(e) {
      return this.pushStack(pe.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(ie.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: se, sort: ee.sort, splice: ee.splice }, pe.extend = pe.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        s,
        o = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == (typeof o === "undefined" ? "undefined" : _typeof2(o)) || pe.isFunction(o) || (o = {}), a === u && (o = this, a--); a < u; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = o[t], i = e[t], o !== i && (l && i && (pe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, s = n && Array.isArray(n) ? n : []) : s = n && pe.isPlainObject(n) ? n : {}, o[t] = pe.extend(l, s, i)) : void 0 !== i && (o[t] = i));
      }
    }return o;
  }, pe.extend({ expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isFunction: function isFunction(e) {
      return "function" === pe.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      var t = pe.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== de));
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) || "function" == typeof e ? ae[ue.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof2(e);
    }, globalEval: function globalEval(e) {
      n(e);
    }, camelCase: function camelCase(e) {
      return e.replace(me, "ms-").replace(ve, ye);
    }, each: function each(e, t) {
      var n,
          r = 0;if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(ge, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : oe.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) {
        !t(e[r], r) !== o && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          s,
          o = 0,
          a = [];if (i(e)) for (r = e.length; o < r; o++) {
        null != (s = t(e[o], o, n)) && a.push(s);
      } else for (o in e) {
        null != (s = t(e[o], o, n)) && a.push(s);
      }return re.apply([], a);
    }, guid: 1, proxy: function proxy(e, t) {
      var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), r = function r() {
        return e.apply(t || this, i.concat(ie.call(arguments)));
      }, r.guid = e.guid = e.guid || pe.guid++, r;
    }, now: Date.now, support: he }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ae["[object " + t + "]"] = t.toLowerCase();
  });var be = function (e) {
    function t(e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c,
          h,
          f = t && t.ownerDocument,
          p = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;if (!i && ((t ? t.ownerDocument || t : H) !== j && q(t), t = t || j, R)) {
        if (11 !== p && (u = ge.exec(e))) if (r = u[1]) {
          if (9 === p) {
            if (!(o = t.getElementById(r))) return n;if (o.id === r) return n.push(o), n;
          } else if (f && (o = f.getElementById(r)) && P(t, o) && o.id === r) return n.push(o), n;
        } else {
          if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;if ((r = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n;
        }if (x.qsa && !_[e + " "] && (!I || !I.test(e))) {
          if (1 !== p) f = t, h = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = $), s = (c = A(e)).length; s--;) {
              c[s] = "#" + a + " " + d(c[s]);
            }h = c.join(","), f = me.test(e) && l(t.parentNode) || t;
          }if (h) try {
            return K.apply(n, f.querySelectorAll(h)), n;
          } catch (e) {} finally {
            a === $ && t.removeAttribute("id");
          }
        }
      }return T(e.replace(se, "$1"), t, n, i);
    }function n() {
      function e(n, i) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }var t = [];return e;
    }function i(e) {
      return e[$] = !0, e;
    }function r(e) {
      var t = j.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        w.attrHandle[n[i]] = t;
      }
    }function o(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function a(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function u(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var r, s = e([], n.length, t), o = s.length; o--;) {
            n[r = s[o]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }function c() {}function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function h(e, t, n) {
      var i = t.dir,
          r = t.next,
          s = r || i,
          o = n && "parentNode" === s,
          a = z++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || o) return e(t, n, r);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            d,
            h = [M, a];if (u) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || o) && e(t, n, u)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || o) if (d = t[$] || (t[$] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((l = c[s]) && l[0] === M && l[1] === a) return h[2] = l[2];if (c[s] = h, h[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function p(e, n, i) {
      for (var r = 0, s = n.length; r < s; r++) {
        t(e, n[r], i);
      }return i;
    }function g(e, t, n, i, r) {
      for (var s, o = [], a = 0, u = e.length, l = null != t; a < u; a++) {
        (s = e[a]) && (n && !n(s, i, r) || (o.push(s), l && t.push(a)));
      }return o;
    }function m(e, t, n, r, s, o) {
      return r && !r[$] && (r = m(r)), s && !s[$] && (s = m(s, o)), i(function (i, o, a, u) {
        var l,
            c,
            d,
            h = [],
            f = [],
            m = o.length,
            v = i || p(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? v : g(v, h, e, a, u),
            b = n ? s || (i ? e : m || r) ? [] : o : y;if (n && n(y, b, a, u), r) for (l = g(b, f), r(l, [], a, u), c = l.length; c--;) {
          (d = l[c]) && (b[f[c]] = !(y[f[c]] = d));
        }if (i) {
          if (s || e) {
            if (s) {
              for (l = [], c = b.length; c--;) {
                (d = b[c]) && l.push(y[c] = d);
              }s(null, b = [], l, u);
            }for (c = b.length; c--;) {
              (d = b[c]) && (l = s ? Q(i, d) : h[c]) > -1 && (i[l] = !(o[l] = d));
            }
          }
        } else b = g(b === o ? b.splice(m, b.length) : b), s ? s(null, o, b, u) : K.apply(o, b);
      });
    }function v(e) {
      for (var t, n, i, r = e.length, s = w.relative[e[0].type], o = s || w.relative[" "], a = s ? 1 : 0, u = h(function (e) {
        return e === t;
      }, o, !0), l = h(function (e) {
        return Q(t, e) > -1;
      }, o, !0), c = [function (e, n, i) {
        var r = !s && (i || n !== E) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));return t = null, r;
      }]; a < r; a++) {
        if (n = w.relative[e[a].type]) c = [h(f(c), n)];else {
          if ((n = w.filter[e[a].type].apply(null, e[a].matches))[$]) {
            for (i = ++a; i < r && !w.relative[e[i].type]; i++) {}return m(a > 1 && f(c), a > 1 && d(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && d(e));
          }c.push(n);
        }
      }return f(c);
    }function y(e, n) {
      var r = n.length > 0,
          s = e.length > 0,
          o = function o(i, _o, a, u, l) {
        var c,
            d,
            h,
            f = 0,
            p = "0",
            m = i && [],
            v = [],
            y = E,
            b = i || s && w.find.TAG("*", l),
            x = M += null == y ? 1 : Math.random() || .1,
            C = b.length;for (l && (E = _o === j || _o || l); p !== C && null != (c = b[p]); p++) {
          if (s && c) {
            for (d = 0, _o || c.ownerDocument === j || (q(c), a = !R); h = e[d++];) {
              if (h(c, _o || j, a)) {
                u.push(c);break;
              }
            }l && (M = x);
          }r && ((c = !h && c) && f--, i && m.push(c));
        }if (f += p, r && p !== f) {
          for (d = 0; h = n[d++];) {
            h(m, v, _o, a);
          }if (i) {
            if (f > 0) for (; p--;) {
              m[p] || v[p] || (v[p] = V.call(u));
            }v = g(v);
          }K.apply(u, v), l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(u);
        }return l && (M = x, E = y), m;
      };return r ? i(o) : o;
    }var b,
        x,
        w,
        C,
        S,
        A,
        k,
        T,
        E,
        L,
        N,
        q,
        j,
        D,
        R,
        I,
        F,
        O,
        P,
        $ = "sizzle" + 1 * new Date(),
        H = e.document,
        M = 0,
        z = 0,
        G = n(),
        B = n(),
        _ = n(),
        W = function W(e, t) {
      return e === t && (N = !0), 0;
    },
        U = {}.hasOwnProperty,
        Y = [],
        V = Y.pop,
        X = Y.push,
        K = Y.push,
        Z = Y.slice,
        Q = function Q(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        oe = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        le = new RegExp(ie),
        ce = new RegExp("^" + te + "$"),
        de = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
        he = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        pe = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        ye = function ye(e, t, n) {
      var i = "0x" + t - 65536;return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        xe = function xe(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        we = function we() {
      q();
    },
        Ce = h(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      K.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType;
    } catch (e) {
      K = { apply: Y.length ? function (e, t) {
          X.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }x = t.support = {}, S = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, q = t.setDocument = function (e) {
      var t,
          n,
          i = e ? e.ownerDocument || e : H;return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, D = j.documentElement, R = !S(j), H !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), x.getElementsByTagName = r(function (e) {
        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
      }), x.getElementsByClassName = pe.test(j.getElementsByClassName), x.getById = r(function (e) {
        return D.appendChild(e).id = $, !j.getElementsByName || !j.getElementsByName($).length;
      }), x.getById ? (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n,
              i,
              r,
              s = t.getElementById(e);if (s) {
            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];for (r = t.getElementsByName(e), i = 0; s = r[i++];) {
              if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
            }
          }return [];
        }
      }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            s = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = s[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return s;
      }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && R) return t.getElementsByClassName(e);
      }, F = [], I = [], (x.qsa = pe.test(j.querySelectorAll)) && (r(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || I.push(".#.+[+~]");
      }), r(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = j.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:");
      })), (x.matchesSelector = pe.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
        x.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), F.push("!=", ie);
      }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = pe.test(D.compareDocumentPosition), P = t || pe.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, W = t ? function (e, t) {
        if (e === t) return N = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === H && P(H, e) ? -1 : t === j || t.ownerDocument === H && P(H, t) ? 1 : L ? Q(L, e) - Q(L, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return N = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            s = t.parentNode,
            a = [e],
            u = [t];if (!r || !s) return e === j ? -1 : t === j ? 1 : r ? -1 : s ? 1 : L ? Q(L, e) - Q(L, t) : 0;if (r === s) return o(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          u.unshift(n);
        }for (; a[i] === u[i];) {
          i++;
        }return i ? o(a[i], u[i]) : a[i] === H ? -1 : u[i] === H ? 1 : 0;
      }, j) : j;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== j && q(e), n = n.replace(ue, "='$1']"), x.matchesSelector && R && !_[n + " "] && (!F || !F.test(n)) && (!I || !I.test(n))) try {
        var i = O.call(e, n);if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return t(n, j, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== j && q(e), P(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== j && q(e);var n = w.attrHandle[t.toLowerCase()],
          i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;return void 0 !== i ? i : x.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.escape = function (e) {
      return (e + "").replace(be, xe);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          r = 0;if (N = !x.detectDuplicates, L = !x.sortStable && e.slice(0), e.sort(W), N) {
        for (; t = e[r++];) {
          t === e[r] && (i = n.push(r));
        }for (; i--;) {
          e.splice(n[i], 1);
        }
      }return L = null, e;
    }, C = t.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += C(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += C(t);
      }return n;
    }, (w = t.selectors = { cacheLength: 50, createPseudo: i, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ve, ye).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = G[e + " "];return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && G(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, i) {
          return function (r) {
            var s = t.attr(r, e);return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var s = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                d,
                h,
                f,
                p,
                g = s !== o ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                b = !1;if (m) {
              if (s) {
                for (; g;) {
                  for (h = t; h = h[g];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = g = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [o ? m.firstChild : m.lastChild], o && y) {
                for (b = (f = (l = (c = (d = (h = m)[$] || (h[$] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === M && l[1]) && l[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    c[e] = [M, f, b];break;
                  }
                }
              } else if (y && (h = t, d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), l = c[e] || [], f = l[0] === M && l[1], b = f), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [M, b]), h !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var r,
              s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return s[$] ? s(n) : s.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, r = s(e, n), o = r.length; o--;) {
              i = Q(e, r[o]), e[i] = !(t[i] = r[o]);
            }
          }) : function (e) {
            return s(e, 0, r);
          }) : s;
        } }, pseudos: { not: i(function (e) {
          var t = [],
              n = [],
              r = k(e.replace(se, "$1"));return r[$] ? i(function (e, t, n, i) {
            for (var s, o = r(e, null, i, []), a = e.length; a--;) {
              (s = o[a]) && (e[a] = !(t[a] = s));
            }
          }) : function (e, i, s) {
            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop();
          };
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), contains: i(function (e) {
          return e = e.replace(ve, ye), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }), lang: i(function (e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
            var n;do {
              if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === D;
        }, focus: function focus(e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: a(!1), disabled: a(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !w.pseudos.empty(e);
        }, header: function header(e) {
          return fe.test(e.nodeName);
        }, input: function input(e) {
          return he.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: u(function () {
          return [0];
        }), last: u(function (e, t) {
          return [t - 1];
        }), eq: u(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: u(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: u(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = w.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }(b);
    }for (b in { submit: !0, reset: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }(b);
    }return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), A = t.tokenize = function (e, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c = B[e + " "];if (c) return n ? 0 : c.slice(0);for (a = e, u = [], l = w.preFilter; a;) {
        i && !(r = oe.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(s = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), s.push({ value: i, type: r[0].replace(se, " ") }), a = a.slice(i.length));for (o in w.filter) {
          !(r = de[o].exec(a)) || l[o] && !(r = l[o](r)) || (i = r.shift(), s.push({ value: i, type: o, matches: r }), a = a.slice(i.length));
        }if (!i) break;
      }return n ? a.length : a ? t.error(e) : B(e, u).slice(0);
    }, k = t.compile = function (e, t) {
      var n,
          i = [],
          r = [],
          s = _[e + " "];if (!s) {
        for (t || (t = A(e)), n = t.length; n--;) {
          (s = v(t[n]))[$] ? i.push(s) : r.push(s);
        }(s = _(e, y(r, i))).selector = e;
      }return s;
    }, T = t.select = function (e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c = "function" == typeof e && e,
          h = !i && A(e = c.selector || e);if (n = n || [], 1 === h.length) {
        if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (o = s[0]).type && 9 === t.nodeType && R && w.relative[s[1].type]) {
          if (!(t = (w.find.ID(o.matches[0].replace(ve, ye), t) || [])[0])) return n;c && (t = t.parentNode), e = e.slice(s.shift().value.length);
        }for (r = de.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);) {
          if ((u = w.find[a]) && (i = u(o.matches[0].replace(ve, ye), me.test(s[0].type) && l(t.parentNode) || t))) {
            if (s.splice(r, 1), !(e = i.length && d(s))) return K.apply(n, i), n;break;
          }
        }
      }return (c || k(e, h))(i, t, !R, n, !t || me.test(e) && l(t.parentNode) || t), n;
    }, x.sortStable = $.split("").sort(W).join("") === $, x.detectDuplicates = !!N, q(), x.sortDetached = r(function (e) {
      return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
    }), r(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || s("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), x.attributes && r(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || s("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), r(function (e) {
      return null == e.getAttribute("disabled");
    }) || s(J, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), t;
  }(e);pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains, pe.escapeSelector = be.escape;var xe = function xe(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && pe(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      we = function we(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      Ce = pe.expr.match.needsContext,
      Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ae = /^.[^:#\[\.,]*$/;pe.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, pe.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (pe.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        pe.find(e, r[t], n);
      }return i > 1 ? pe.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(s(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(s(this, e || [], !0));
    }, is: function is(e) {
      return !!s(this, "string" == typeof e && Ce.test(e) ? pe(e) : e || [], !1).length;
    } });var ke,
      Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(pe.fn.init = function (e, t, n) {
    var i, r;if (!e) return this;if (n = n || ke, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Se.test(i[1]) && pe.isPlainObject(t)) for (i in t) {
          pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this);
  }).prototype = pe.fn, ke = pe(te);var Ee = /^(?:parents|prev(?:Until|All))/,
      Le = { children: !0, contents: !0, next: !0, prev: !0 };pe.fn.extend({ has: function has(e) {
      var t = pe(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (pe.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          s = [],
          o = "string" != typeof e && pe(e);if (!Ce.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
            s.push(n);break;
          }
        }
      }return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s);
    }, index: function index(e) {
      return e ? "string" == typeof e ? oe.call(pe(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), pe.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return xe(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return xe(e, "parentNode", n);
    }, next: function next(e) {
      return o(e, "nextSibling");
    }, prev: function prev(e) {
      return o(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return xe(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return xe(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return xe(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return xe(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return we((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return we(e.firstChild);
    }, contents: function contents(e) {
      return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), pe.merge([], e.childNodes));
    } }, function (e, t) {
    pe.fn[e] = function (n, i) {
      var r = pe.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Le[e] || pe.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r);
    };
  });var Ne = /[^\x20\t\r\n\f]+/g;pe.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : pe.extend({}, e);var t,
        n,
        i,
        r,
        s = [],
        o = [],
        u = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; o.length; u = -1) {
        for (n = o.shift(); ++u < s.length;) {
          !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (s = n ? [] : "");
    },
        c = { add: function add() {
        return s && (n && !t && (u = s.length - 1, o.push(n)), function t(n) {
          pe.each(n, function (n, i) {
            pe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== pe.type(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return pe.each(arguments, function (e, t) {
          for (var n; (n = pe.inArray(t, s, n)) > -1;) {
            s.splice(n, 1), n <= u && u--;
          }
        }), this;
      }, has: function has(e) {
        return e ? pe.inArray(e, s) > -1 : s.length > 0;
      }, empty: function empty() {
        return s && (s = []), this;
      }, disable: function disable() {
        return r = o = [], s = n = "", this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return r = o = [], n || t || (s = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, pe.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2], ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return s.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return pe.Deferred(function (t) {
            pe.each(n, function (n, i) {
              var r = pe.isFunction(e[i[4]]) && e[i[4]];s[i[1]](function () {
                var e = r && r.apply(this, arguments);e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          function s(t, n, i, r) {
            return function () {
              var a = this,
                  c = arguments,
                  d = function d() {
                var e, d;if (!(t < o)) {
                  if ((e = i.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");d = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) || "function" == typeof e) && e.then, pe.isFunction(d) ? r ? d.call(e, s(o, n, u, r), s(o, n, l, r)) : (o++, d.call(e, s(o, n, u, r), s(o, n, l, r), s(o, n, u, n.notifyWith))) : (i !== u && (a = void 0, c = [e]), (r || n.resolveWith)(a, c));
                }
              },
                  h = r ? d : function () {
                try {
                  d();
                } catch (e) {
                  pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= o && (i !== l && (a = void 0, c = [e]), n.rejectWith(a, c));
                }
              };t ? h() : (pe.Deferred.getStackHook && (h.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(h));
            };
          }var o = 0;return pe.Deferred(function (e) {
            n[0][3].add(s(0, e, pe.isFunction(r) ? r : u, e.notifyWith)), n[1][3].add(s(0, e, pe.isFunction(t) ? t : u)), n[2][3].add(s(0, e, pe.isFunction(i) ? i : l));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? pe.extend(e, r) : r;
        } },
          s = {};return pe.each(n, function (e, t) {
        var o = t[2],
            a = t[5];r[t[1]] = o.add, a && o.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = o.fireWith;
      }), r.promise(s), t && t.call(s, s), s;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = ie.call(arguments),
          s = pe.Deferred(),
          o = function o(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (c(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || pe.isFunction(r[n] && r[n].then))) return s.then();for (; n--;) {
        c(r[n], o(n), s.reject);
      }return s.promise();
    } });var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;pe.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, pe.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var je = pe.Deferred();pe.fn.ready = function (e) {
    return je.then(e).catch(function (e) {
      pe.readyException(e);
    }), this;
  }, pe.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || je.resolveWith(te, [pe]));
    } }), pe.ready.then = je.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));var De = function De(e, t, n, i, r, s, o) {
    var a = 0,
        u = e.length,
        l = null == n;if ("object" === pe.type(n)) {
      r = !0;for (a in n) {
        De(e, t, a, n[a], !0, s, o);
      }
    } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(pe(e), n);
    })), t)) for (; a < u; a++) {
      t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : l ? t.call(e) : u ? t(e[0], n) : s;
  },
      Re = function Re(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };h.uid = 1, h.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[pe.camelCase(t)] = n;else for (i in t) {
        r[pe.camelCase(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !pe.isEmptyObject(t);
    } };var Ie = new h(),
      Fe = new h(),
      Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Pe = /[A-Z]/g;pe.extend({ hasData: function hasData(e) {
      return Fe.hasData(e) || Ie.hasData(e);
    }, data: function data(e, t, n) {
      return Fe.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Fe.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Ie.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Ie.remove(e, t);
    } }), pe.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          s = this[0],
          o = s && s.attributes;if (void 0 === e) {
        if (this.length && (r = Fe.get(s), 1 === s.nodeType && !Ie.get(s, "hasDataAttrs"))) {
          for (n = o.length; n--;) {
            o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(s, i, r[i]));
          }Ie.set(s, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? this.each(function () {
        Fe.set(this, e);
      }) : De(this, function (t) {
        var n;if (s && void 0 === t) {
          if (void 0 !== (n = Fe.get(s, e))) return n;if (void 0 !== (n = p(s, e))) return n;
        } else this.each(function () {
          Fe.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Fe.remove(this, e);
      });
    } }), pe.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, pe.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = pe.queue(e, t),
          i = n.length,
          r = n.shift(),
          s = pe._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function () {
        pe.dequeue(e, t);
      }, s)), !i && s && s.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Ie.get(e, n) || Ie.access(e, n, { empty: pe.Callbacks("once memory").add(function () {
          Ie.remove(e, [t + "queue", n]);
        }) });
    } }), pe.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = pe.queue(this, e, t);pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        pe.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = pe.Deferred(),
          s = this,
          o = this.length,
          a = function a() {
        --i || r.resolveWith(s, [s]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
        (n = Ie.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      He = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
      Me = ["Top", "Right", "Bottom", "Left"],
      ze = function ze(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display");
  },
      Ge = function Ge(e, t, n, i) {
    var r,
        s,
        o = {};for (s in t) {
      o[s] = e.style[s], e.style[s] = t[s];
    }r = n.apply(e, i || []);for (s in t) {
      e.style[s] = o[s];
    }return r;
  },
      Be = {};pe.fn.extend({ show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ze(this) ? pe(this).show() : pe(this).hide();
      });
    } });var _e = /^(?:checkbox|radio)$/i,
      We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ue = /^$|\/(?:java|ecma)script/i,
      Ye = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;var Ve = /<|&#?\w+;/;!function () {
    var e = te.createDocumentFragment().appendChild(te.createElement("div")),
        t = te.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var Xe = te.documentElement,
      Ke = /^key/,
      Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Qe = /^([^.]*)(?:\.(.+)|)/;pe.event = { global: {}, add: function add(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Ie.get(e);if (m) for (n.handler && (s = n, n = s.handler, r = s.selector), r && pe.find.matchesSelector(Xe, r), n.guid || (n.guid = pe.guid++), (u = m.events) || (u = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
        return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0;
      }), l = (t = (t || "").match(Ne) || [""]).length; l--;) {
        a = Qe.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (d = pe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = pe.event.special[f] || {}, c = pe.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && pe.expr.match.needsContext.test(r), namespace: p.join(".") }, s), (h = u[f]) || (h = u[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), pe.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Ie.hasData(e) && Ie.get(e);if (m && (u = m.events)) {
        for (l = (t = (t || "").match(Ne) || [""]).length; l--;) {
          if (a = Qe.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = pe.event.special[f] || {}, h = u[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) {
              c = h[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
            }o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || pe.removeEvent(e, f, m.handle), delete u[f]);
          } else for (f in u) {
            pe.event.remove(e, f + t[l], n, i, !0);
          }
        }pe.isEmptyObject(u) && Ie.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a = pe.event.fix(e),
          u = new Array(arguments.length),
          l = (Ie.get(this, "events") || {})[a.type] || [],
          c = pe.event.special[a.type] || {};for (u[0] = a, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (o = pe.event.handlers.call(this, a, l), t = 0; (r = o[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          s,
          o,
          a = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (s = [], o = {}, n = 0; n < u; n++) {
            i = t[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), o[r] && s.push(i);
          }s.length && a.push({ elem: l, handlers: s });
        }
      }return l = this, u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(pe.Event.prototype, e, { enumerable: !0, configurable: !0, get: pe.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[pe.expando] ? e : new pe.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== S() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === S() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return r(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, pe.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, pe.Event = function (e, t) {
    return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void (this[pe.expando] = !0)) : new pe.Event(e, t);
  }, pe.Event.prototype = { constructor: pe.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, pe.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, pe.event.addProp), pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    pe.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = this,
            r = e.relatedTarget,
            s = e.handleObj;return r && (r === i || pe.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n;
      } };
  }), pe.fn.extend({ on: function on(e, t, n, i) {
      return A(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return A(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof2(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {
        pe.event.remove(this, e, n, t);
      });
    } });var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      et = /<script|<style|<link/i,
      tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      nt = /^true\/(.*)/,
      it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;pe.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Je, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          s,
          o,
          a = e.cloneNode(!0),
          u = pe.contains(e.ownerDocument, e);if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (o = y(a), s = y(e), i = 0, r = s.length; i < r; i++) {
        N(s[i], o[i]);
      }if (t) if (n) for (s = s || y(e), o = o || y(a), i = 0, r = s.length; i < r; i++) {
        L(s[i], o[i]);
      } else L(e, a);return (o = y(a, "script")).length > 0 && b(o, !u && y(e, "script")), a;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = pe.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (Re(n)) {
          if (t = n[Ie.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
            }n[Ie.expando] = void 0;
          }n[Fe.expando] && (n[Fe.expando] = void 0);
        }
      }
    } }), pe.fn.extend({ detach: function detach(e) {
      return j(this, e, !0);
    }, remove: function remove(e) {
      return j(this, e);
    }, text: function text(e) {
      return De(this, function (e) {
        return void 0 === e ? pe.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return q(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return q(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (pe.cleanData(y(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return pe.clone(this, e, t);
      });
    }, html: function html(e) {
      return De(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !et.test(e) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = pe.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return q(this, arguments, function (t) {
        var n = this.parentNode;pe.inArray(this, e) < 0 && (pe.cleanData(y(this)), n && n.replaceChild(t, this));
      }, e);
    } }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    pe.fn[e] = function (e) {
      for (var n, i = [], r = pe(e), s = r.length - 1, o = 0; o <= s; o++) {
        n = o === s ? this : this.clone(!0), pe(r[o])[t](n), se.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var rt = /^margin/,
      st = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
      ot = function ot(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  };!function () {
    function t() {
      if (a) {
        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xe.appendChild(o);var t = e.getComputedStyle(a);n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Xe.removeChild(o), a = null;
      }
    }var n,
        i,
        r,
        s,
        o = te.createElement("div"),
        a = te.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), pe.extend(he, { pixelPosition: function pixelPosition() {
        return t(), n;
      }, boxSizingReliable: function boxSizingReliable() {
        return t(), i;
      }, pixelMarginRight: function pixelMarginRight() {
        return t(), r;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), s;
      } }));
  }();var at = /^(none|table(?!-c[ea]).+)/,
      ut = /^--/,
      lt = { position: "absolute", visibility: "hidden", display: "block" },
      ct = { letterSpacing: "0", fontWeight: "400" },
      dt = ["Webkit", "Moz", "ms"],
      ht = te.createElement("div").style;pe.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = D(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            s,
            o,
            a = pe.camelCase(t),
            u = ut.test(t),
            l = e.style;return u || (t = F(a)), o = pe.cssHooks[t] || pe.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : ("string" === (s = typeof n === "undefined" ? "undefined" : _typeof2(n)) && (r = He.exec(n)) && r[1] && (n = g(e, t, r), s = "number"), void (null != n && n === n && ("number" === s && (n += r && r[3] || (pe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))));
      }
    }, css: function css(e, t, n, i) {
      var r,
          s,
          o,
          a = pe.camelCase(t);return ut.test(t) || (t = F(a)), (o = pe.cssHooks[t] || pe.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = D(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r;
    } }), pe.each(["height", "width"], function (e, t) {
    pe.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, i) : Ge(e, lt, function () {
          return $(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            s = i && ot(e),
            o = i && P(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, s), s);return o && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), O(0, n, o);
      } };
  }), pe.cssHooks.marginLeft = R(he.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    pe.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + Me[i] + t] = s[i] || s[i - 2] || s[0];
        }return r;
      } }, rt.test(e) || (pe.cssHooks[e + t].set = O);
  }), pe.fn.extend({ css: function css(e, t) {
      return De(this, function (e, t, n) {
        var i,
            r,
            s = {},
            o = 0;if (Array.isArray(t)) {
          for (i = ot(e), r = t.length; o < r; o++) {
            s[t[o]] = pe.css(e, t[o], !1, i);
          }return s;
        }return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
      }, e, t, arguments.length > 1);
    } }), pe.Tween = H, H.prototype = { constructor: H, init: function init(e, t, n, i, r, s) {
      this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (pe.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = H.propHooks[this.prop];return e && e.get ? e.get(this) : H.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = H.propHooks[this.prop];return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
    } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit);
      } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, pe.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, pe.fx = H.prototype.init, pe.fx.step = {};var ft,
      pt,
      gt = /^(?:toggle|show|hide)$/,
      mt = /queueHooks$/;pe.Animation = pe.extend(W, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return g(n.elem, e, He.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c,
          d = "width" in t || "height" in t,
          h = this,
          f = {},
          p = e.style,
          g = e.nodeType && ze(e),
          m = Ie.get(e, "fxshow");n.queue || (null == (o = pe._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
        o.unqueued || a();
      }), o.unqueued++, h.always(function () {
        h.always(function () {
          o.unqueued--, pe.queue(e, "fx").length || o.empty.fire();
        });
      }));for (i in t) {
        if (r = t[i], gt.test(r)) {
          if (delete t[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;g = !0;
          }f[i] = m && m[i] || pe.style(e, i);
        }
      }if ((u = !pe.isEmptyObject(t)) || !pe.isEmptyObject(f)) {
        d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = m && m.display) && (l = Ie.get(e, "display")), "none" === (c = pe.css(e, "display")) && (l ? c = l : (v([e], !0), l = e.style.display || l, c = pe.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === pe.css(e, "float") && (u || (h.done(function () {
          p.display = l;
        }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), u = !1;for (i in f) {
          u || (m ? "hidden" in m && (g = m.hidden) : m = Ie.access(e, "fxshow", { display: l }), s && (m.hidden = !g), g && v([e], !0), h.done(function () {
            g || v([e]), Ie.remove(e, "fxshow");for (i in f) {
              pe.style(e, i, f[i]);
            }
          })), u = B(g ? m[i] : 0, i, h), i in m || (m[i] = u.start, g && (u.end = u.start, u.start = 0));
        }
      }
    }], prefilter: function prefilter(e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e);
    } }), pe.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t };return pe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue);
    }, i;
  }, pe.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ze).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = pe.isEmptyObject(e),
          s = pe.speed(t, n, i),
          o = function o() {
        var t = W(this, pe.extend({}, e), s);(r || Ie.get(this, "finish")) && t.stop(!0);
      };return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            s = pe.timers,
            o = Ie.get(this);if (r) o[r] && o[r].stop && i(o[r]);else for (r in o) {
          o[r] && o[r].stop && mt.test(r) && i(o[r]);
        }for (r = s.length; r--;) {
          s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
        }!t && n || pe.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Ie.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            s = pe.timers,
            o = i ? i.length : 0;for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) {
          s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
        }for (t = 0; t < o; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), pe.each(["toggle", "show", "hide"], function (e, t) {
    var n = pe.fn[t];pe.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, i, r);
    };
  }), pe.each({ slideDown: G("show"), slideUp: G("hide"), slideToggle: G("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    pe.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), pe.timers = [], pe.fx.tick = function () {
    var e,
        t = 0,
        n = pe.timers;for (ft = pe.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || pe.fx.stop(), ft = void 0;
  }, pe.fx.timer = function (e) {
    pe.timers.push(e), pe.fx.start();
  }, pe.fx.interval = 13, pe.fx.start = function () {
    pt || (pt = !0, M());
  }, pe.fx.stop = function () {
    pt = null;
  }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function (t, n) {
    return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = te.createElement("input"),
        t = te.createElement("select").appendChild(te.createElement("option"));e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", he.radioValue = "t" === e.value;
  }();var vt,
      yt = pe.expr.attrHandle;pe.fn.extend({ attr: function attr(e, t) {
      return De(this, pe.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    } }), pe.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!he.radioValue && "radio" === t && r(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(Ne);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), vt = { set: function set(e, t, n) {
      return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = yt[t] || pe.find.attr;yt[t] = function (e, t, i) {
      var r,
          s,
          o = t.toLowerCase();return i || (s = yt[o], yt[o] = r, r = null != n(e, t, i) ? o : null, yt[o] = s), r;
    };
  });var bt = /^(?:input|select|textarea|button)$/i,
      xt = /^(?:a|area)$/i;pe.fn.extend({ prop: function prop(e, t) {
      return De(this, pe.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[pe.propFix[e] || e];
      });
    } }), pe.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = pe.find.attr(e, "tabindex");return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), he.optSelected || (pe.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    pe.propFix[this.toLowerCase()] = this;
  }), pe.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).addClass(e.call(this, t, Y(this)));
      });if ("string" == typeof e && e) for (t = e.match(Ne) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).removeClass(e.call(this, t, Y(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(Ne) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            for (; i.indexOf(" " + s + " ") > -1;) {
              i = i.replace(" " + s + " ", " ");
            }
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof2(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
        pe(this).toggleClass(e.call(this, n, Y(this), t), t);
      }) : this.each(function () {
        var t, i, r, s;if ("string" === n) for (i = 0, r = pe(this), s = e.match(Ne) || []; t = s[i++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = Y(this)) && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + U(Y(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var wt = /\r/g;pe.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = pe.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0;
    } }), pe.extend({ valHooks: { option: { get: function get(e) {
          var t = pe.find.attr(e, "value");return null != t ? t : U(pe.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              s = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              u = a ? null : [],
              l = a ? o + 1 : s.length;for (i = o < 0 ? l : a ? o : 0; i < l; i++) {
            if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
              if (t = pe(n).val(), a) return t;u.push(t);
            }
          }return u;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, s = pe.makeArray(t), o = r.length; o--;) {
            i = r[o], (i.selected = pe.inArray(pe.valHooks.option.get(i), s) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), s;
        } } } }), pe.each(["radio", "checkbox"], function () {
    pe.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
      } }, he.checkOn || (pe.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Ct = /^(?:focusinfocus|focusoutblur)$/;pe.extend(pe.event, { trigger: function trigger(t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h = [i || te],
          f = le.call(t, "type") ? t.type : t,
          p = le.call(t, "namespace") ? t.namespace.split(".") : [];if (o = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!r && !d.noBubble && !pe.isWindow(i)) {
          for (u = d.delegateType || f, Ct.test(u + f) || (o = o.parentNode); o; o = o.parentNode) {
            h.push(o), a = o;
          }a === (i.ownerDocument || te) && h.push(a.defaultView || a.parentWindow || e);
        }for (s = 0; (o = h[s++]) && !t.isPropagationStopped();) {
          t.type = s > 1 ? u : d.bindType || f, (c = (Ie.get(o, "events") || {})[t.type] && Ie.get(o, "handle")) && c.apply(o, n), (c = l && o[l]) && c.apply && Re(o) && (t.result = c.apply(o, n), !1 === t.result && t.preventDefault());
        }return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !Re(i) || l && pe.isFunction(i[f]) && !pe.isWindow(i) && ((a = i[l]) && (i[l] = null), pe.event.triggered = f, i[f](), pe.event.triggered = void 0, a && (i[l] = a)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });pe.event.trigger(i, null, t);
    } }), pe.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        pe.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return pe.event.trigger(e, t, n, !0);
    } }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    pe.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), pe.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), he.focusin = "onfocusin" in e, he.focusin || pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      pe.event.simulate(t, e.target, pe.event.fix(e));
    };pe.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = Ie.access(i, t);r || i.addEventListener(e, n, !0), Ie.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = Ie.access(i, t) - 1;r ? Ie.access(i, t, r) : (i.removeEventListener(e, n, !0), Ie.remove(i, t));
      } };
  });var St = e.location,
      At = pe.now(),
      kt = /\?/;pe.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n;
  };var Tt = /\[\]$/,
      Et = /\r?\n/g,
      Lt = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;pe.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = pe.isFunction(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      V(n, e[n], t, r);
    }return i.join("&");
  }, pe.fn.extend({ serialize: function serialize() {
      return pe.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = pe.prop(this, "elements");return e ? pe.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !pe(this).is(":disabled") && Nt.test(this.nodeName) && !Lt.test(e) && (this.checked || !_e.test(e));
      }).map(function (e, t) {
        var n = pe(this).val();return null == n ? null : Array.isArray(n) ? pe.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ft = /^(?:GET|HEAD)$/,
      Ot = /^\/\//,
      Pt = {},
      $t = {},
      Ht = "*/".concat("*"),
      Mt = te.createElement("a");Mt.href = St.href, pe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: St.href, type: "GET", isLocal: It.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Z(Z(e, pe.ajaxSettings), t) : Z(pe.ajaxSettings, e);
    }, ajaxPrefilter: X(Pt), ajaxTransport: X($t), ajax: function ajax(t, n) {
      function i(t, n, i, a) {
        var l,
            h,
            f,
            x,
            w,
            C = n;c || (c = !0, u && e.clearTimeout(u), r = void 0, o = a || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = Q(p, S, i)), x = J(p, x, S, l), l ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (pe.lastModified[s] = w), (w = S.getResponseHeader("etag")) && (pe.etag[s] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, h = x.data, f = x.error, l = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", l ? v.resolveWith(g, [h, C, S]) : v.rejectWith(g, [S, C, f]), S.statusCode(b), b = void 0, d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, p, l ? h : f]), y.fireWith(g, [S, C]), d && (m.trigger("ajaxComplete", [S, p]), --pe.active || pe.event.trigger("ajaxStop")));
      }"object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && (n = t, t = void 0), n = n || {};var r,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p = pe.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
          v = pe.Deferred(),
          y = pe.Callbacks("once memory"),
          b = p.statusCode || {},
          x = {},
          w = {},
          C = "canceled",
          S = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!a) for (a = {}; t = Rt.exec(o);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? o : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) S.always(e[S.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return r && r.abort(t), i(0, t), this;
        } };if (v.promise(S), p.url = ((t || p.url || St.href) + "").replace(Ot, St.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain) {
        l = te.createElement("a");try {
          l.href = p.url, l.href = l.href, p.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), K(Pt, p, n, S), c) return S;(d = pe.event && p.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ft.test(p.type), s = p.url.replace(jt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(qt, "+")) : (f = p.url.slice(s.length), p.data && (s += (kt.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Dt, "$1"), f = (kt.test(s) ? "&" : "?") + "_=" + At++ + f), p.url = s + f), p.ifModified && (pe.lastModified[s] && S.setRequestHeader("If-Modified-Since", pe.lastModified[s]), pe.etag[s] && S.setRequestHeader("If-None-Match", pe.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]);for (h in p.headers) {
        S.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = K($t, p, n, S)) {
        if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), c) return S;p.async && p.timeout > 0 && (u = e.setTimeout(function () {
          S.abort("timeout");
        }, p.timeout));try {
          c = !1, r.send(x, i);
        } catch (e) {
          if (c) throw e;i(-1, e);
        }
      } else i(-1, "No Transport");return S;
    }, getJSON: function getJSON(e, t, n) {
      return pe.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return pe.get(e, void 0, t, "script");
    } }), pe.each(["get", "post"], function (e, t) {
    pe[t] = function (e, n, i, r) {
      return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({ url: e, type: t, dataType: r, data: n, success: i }, pe.isPlainObject(e) && e));
    };
  }), pe._evalUrl = function (e) {
    return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, pe.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return pe.isFunction(e) ? this.each(function (t) {
        pe(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = pe(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = pe.isFunction(e);return this.each(function (n) {
        pe(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        pe(this).replaceWith(this.childNodes);
      }), this;
    } }), pe.expr.pseudos.hidden = function (e) {
    return !pe.expr.pseudos.visible(e);
  }, pe.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, pe.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var zt = { 0: 200, 1223: 204 },
      Gt = pe.ajaxSettings.xhr();he.cors = !!Gt && "withCredentials" in Gt, he.ajax = Gt = !!Gt, pe.ajaxTransport(function (t) {
    var _n, i;if (he.cors || Gt && !t.crossDomain) return { send: function send(r, s) {
        var o,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) {
          a[o] = t.xhrFields[o];
        }t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");for (o in r) {
          a.setRequestHeader(o, r[o]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), pe.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return pe.globalEval(e), e;
      } } }), pe.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), pe.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, r) {
          t = pe("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
          }), te.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Bt = [],
      _t = /(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Bt.pop() || pe.expando + "_" + At++;return this[e] = !0, e;
    } }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        s,
        o,
        a = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(_t, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return o || pe.error(r + " was not called"), o[0];
    }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
      o = arguments;
    }, i.always(function () {
      void 0 === s ? pe(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), o && pe.isFunction(s) && s(o[0]), o = s = void 0;
    }), "script";
  }), he.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), pe.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, r, s;return t || (he.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Se.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, s), s && s.length && pe(s).remove(), pe.merge([], r.childNodes));
  }, pe.fn.load = function (e, t, n) {
    var i,
        r,
        s,
        o = this,
        a = e.indexOf(" ");return a > -1 && (i = U(e.slice(a)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) && (r = "POST"), o.length > 0 && pe.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      s = arguments, o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      o.each(function () {
        n.apply(this, s || [e.responseText, t, e]);
      });
    }), this;
  }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    pe.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), pe.expr.pseudos.animated = function (e) {
    return pe.grep(pe.timers, function (t) {
      return e === t.elem;
    }).length;
  }, pe.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = pe.css(e, "position"),
          c = pe(e),
          d = {};"static" === l && (e.style.position = "relative"), a = c.offset(), s = pe.css(e, "top"), u = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && (s + u).indexOf("auto") > -1 ? (i = c.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d);
    } }, pe.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        pe.offset.setOffset(this, e, t);
      });var t,
          n,
          i,
          r,
          s = this[0];return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), t = s.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + pe.css(e[0], "borderTopWidth", !0), left: i.left + pe.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - pe.css(n, "marginTop", !0), left: t.left - i.left - pe.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) {
          e = e.offsetParent;
        }return e || Xe;
      });
    } }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;pe.fn[e] = function (i) {
      return De(this, function (e, i, r) {
        var s;return pe.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r ? s ? s[t] : e[i] : void (s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r);
      }, e, i, arguments.length);
    };
  }), pe.each(["top", "left"], function (e, t) {
    pe.cssHooks[t] = R(he.pixelPosition, function (e, n) {
      if (n) return n = D(e, t), st.test(n) ? pe(e).position()[t] + "px" : n;
    });
  }), pe.each({ Height: "height", Width: "width" }, function (e, t) {
    pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      pe.fn[i] = function (r, s) {
        var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === s ? "margin" : "border");return De(this, function (t, n, r) {
          var s;return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a);
        }, t, o ? r : void 0, o);
      };
    });
  }), pe.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), pe.holdReady = function (e) {
    e ? pe.readyWait++ : pe.ready(!0);
  }, pe.isArray = Array.isArray, pe.parseJSON = JSON.parse, pe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
    return pe;
  });var Wt = e.jQuery,
      Ut = e.$;return pe.noConflict = function (t) {
    return e.$ === pe && (e.$ = Ut), t && e.jQuery === pe && (e.jQuery = Wt), pe;
  }, t || (e.jQuery = e.$ = pe), pe;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[typeof e === "undefined" ? "undefined" : _typeof2(e)] || this.dependTypes[typeof e === "undefined" ? "undefined" : _typeof2(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof2(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[void 0 === e ? "undefined" : _typeof(e)] || this.dependTypes[void 0 === e ? "undefined" : _typeof(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly";
"use strict";

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function authGoogle() {}function authLinkedin() {}function authLocal() {}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus);GoogleAuth.currentUser.get();setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function authLinkedin() {}function authLocal() {
  $("form[name='registration']").validate({ rules: { username: "required", password: "required" }, messages: { username: "Please enter your firstname", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function authGoogle() {}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}function initClient() {
  gapi.client.init({ apiKey: "YOUR_API_KEY", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"], clientId: "YOUR_CLIENT_ID", scope: SCOPE }).then(function () {
    (GoogleAuth = gapi.auth2.getAuthInstance()).isSignedIn.listen(updateSigninStatus), GoogleAuth.currentUser.get(), setSigninStatus(), $("#sign-in-or-out-button").click(function () {
      handleAuthClick();
    }), $("#revoke-access-button").click(function () {
      revokeAccess();
    });
  });
}function handleAuthClick() {
  GoogleAuth.isSignedIn.get() ? GoogleAuth.signOut() : GoogleAuth.signIn();
}function revokeAccess() {
  GoogleAuth.disconnect();
}function setSigninStatus(e) {
  GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE) ? ($("#sign-in-or-out-button").html("Sign out"), $("#revoke-access-button").css("display", "inline-block"), $("#auth-status").html("You are currently signed in and have granted access to this app.")) : ($("#sign-in-or-out-button").html("Sign In/Authorize"), $("#revoke-access-button").css("display", "none"), $("#auth-status").html("You have not authorized this app or you are signed out."));
}function updateSigninStatus(e) {
  setSigninStatus();
}!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof3(module)) && "object" == _typeof3(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";
  function n(e, t) {
    var n = (t = t || te).createElement("script");n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
  }function i(e) {
    var t = !!e && "length" in e && e.length,
        n = pe.type(e);return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }function s(e, t, n) {
    return pe.isFunction(t) ? pe.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? pe.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? pe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n;
    }) : Ae.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function a(e) {
    var t = {};return pe.each(e.match(Ne) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function u(e) {
    return e;
  }function l(e) {
    throw e;
  }function c(e, t, n, i) {
    var r;try {
      e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }function d() {
    te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), pe.ready();
  }function h() {
    this.expando = pe.expando + h.uid++;
  }function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e);
  }function p(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = f(n);
      } catch (e) {}Fe.set(e, t, n);
    } else n = void 0;return n;
  }function g(e, t, n, i) {
    var r,
        s = 1,
        o = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return pe.css(e, t, "");
    },
        u = a(),
        l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
        c = (pe.cssNumber[t] || "px" !== l && +u) && He.exec(pe.css(e, t));if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;do {
        s = s || ".5", c /= s, pe.style(e, t, c + l);
      } while (s !== (s = a() / u) && 1 !== s && --o);
    }return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r;
  }function m(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = _e[i];return r || (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), _e[i] = r, r);
  }function v(e, t) {
    for (var n, i, r = [], s = 0, o = e.length; s < o; s++) {
      (i = e[s]).style && (n = i.style.display, t ? ("none" === n && (r[s] = Ie.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && ze(i) && (r[s] = m(i))) : "none" !== n && (r[s] = "none", Ie.set(i, "display", n)));
    }for (s = 0; s < o; s++) {
      null != r[s] && (e[s].style.display = r[s]);
    }return e;
  }function y(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? pe.merge([e], n) : n;
  }function b(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"));
    }
  }function x(e, t, n, i, r) {
    for (var s, o, a, u, l, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((s = e[f]) || 0 === s) if ("object" === pe.type(s)) pe.merge(h, s.nodeType ? [s] : s);else if (Ve.test(s)) {
        for (o = o || d.appendChild(t.createElement("div")), a = (We.exec(s) || ["", ""])[1].toLowerCase(), u = Ye[a] || Ye._default, o.innerHTML = u[1] + pe.htmlPrefilter(s) + u[2], c = u[0]; c--;) {
          o = o.lastChild;
        }pe.merge(h, o.childNodes), (o = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(s));
    }for (d.textContent = "", f = 0; s = h[f++];) {
      if (i && pe.inArray(s, i) > -1) r && r.push(s);else if (l = pe.contains(s.ownerDocument, s), o = y(d.appendChild(s), "script"), l && b(o), n) for (c = 0; s = o[c++];) {
        Ue.test(s.type || "") && n.push(s);
      }
    }return d;
  }function w() {
    return !0;
  }function C() {
    return !1;
  }function S() {
    try {
      return te.activeElement;
    } catch (e) {}
  }function A(e, t, n, i, r, s) {
    var o, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof3(t))) {
      "string" != typeof n && (i = i || n, n = void 0);for (a in t) {
        A(e, a, n, i, t[a], s);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = C;else if (!r) return e;return 1 === s && (o = r, r = function r(e) {
      return pe().off(e), o.apply(this, arguments);
    }, r.guid = o.guid || (o.guid = pe.guid++)), e.each(function () {
      pe.event.add(this, t, r, i, n);
    });
  }function k(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? pe(">tbody", e)[0] || e : e;
  }function T(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function E(e) {
    var t = nt.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function L(e, t) {
    var n, i, r, s, o, a, u, l;if (1 === t.nodeType) {
      if (Ie.hasData(e) && (s = Ie.access(e), o = Ie.set(t, s), l = s.events)) {
        delete o.handle, o.events = {};for (r in l) {
          for (n = 0, i = l[r].length; n < i; n++) {
            pe.event.add(t, r, l[r][n]);
          }
        }
      }Fe.hasData(e) && (a = Fe.access(e), u = pe.extend({}, a), Fe.set(t, u));
    }
  }function N(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function q(e, t, i, r) {
    t = re.apply([], t);var s,
        o,
        a,
        u,
        l,
        c,
        d = 0,
        h = e.length,
        f = h - 1,
        p = t[0],
        g = pe.isFunction(p);if (g || h > 1 && "string" == typeof p && !he.checkClone && tt.test(p)) return e.each(function (n) {
      var s = e.eq(n);g && (t[0] = p.call(this, n, s.html())), q(s, t, i, r);
    });if (h && (s = x(t, e[0].ownerDocument, !1, e, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
      for (u = (a = pe.map(y(s, "script"), T)).length; d < h; d++) {
        l = s, d !== f && (l = pe.clone(l, !0, !0), u && pe.merge(a, y(l, "script"))), i.call(e[d], l, d);
      }if (u) for (c = a[a.length - 1].ownerDocument, pe.map(a, E), d = 0; d < u; d++) {
        l = a[d], Ue.test(l.type || "") && !Ie.access(l, "globalEval") && pe.contains(c, l) && (l.src ? pe._evalUrl && pe._evalUrl(l.src) : n(l.textContent.replace(it, ""), c));
      }
    }return e;
  }function j(e, t, n) {
    for (var i, r = t ? pe.filter(t, e) : e, s = 0; null != (i = r[s]); s++) {
      n || 1 !== i.nodeType || pe.cleanData(y(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }function D(e, t, n) {
    var i,
        r,
        s,
        o,
        a = e.style;return (n = n || ot(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), !he.pixelMarginRight() && st.test(o) && rt.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o;
  }function R(e, t) {
    return { get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function I(e) {
    if (e in ht) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;) {
      if ((e = dt[n] + t) in ht) return e;
    }
  }function F(e) {
    var t = pe.cssProps[e];return t || (t = pe.cssProps[e] = I(e) || e), t;
  }function O(e, t, n) {
    var i = He.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function P(e, t, n, i, r) {
    var s,
        o = 0;for (s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) {
      "margin" === n && (o += pe.css(e, n + Me[s], !0, r)), i ? ("content" === n && (o -= pe.css(e, "padding" + Me[s], !0, r)), "margin" !== n && (o -= pe.css(e, "border" + Me[s] + "Width", !0, r))) : (o += pe.css(e, "padding" + Me[s], !0, r), "padding" !== n && (o += pe.css(e, "border" + Me[s] + "Width", !0, r)));
    }return o;
  }function $(e, t, n) {
    var i,
        r = ot(e),
        s = D(e, t, r),
        o = "border-box" === pe.css(e, "boxSizing", !1, r);return st.test(s) ? s : (i = o && (he.boxSizingReliable() || s === e.style[t]), "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = parseFloat(s) || 0) + P(e, t, n || (o ? "border" : "content"), i, r) + "px");
  }function H(e, t, n, i, r) {
    return new H.prototype.init(e, t, n, i, r);
  }function M() {
    pt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setTimeout(M, pe.fx.interval), pe.fx.tick());
  }function z() {
    return e.setTimeout(function () {
      ft = void 0;
    }), ft = pe.now();
  }function G(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = Me[i], r["margin" + n] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function _(e, t, n) {
    for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++) {
      if (i = r[s].call(n, t, e)) return i;
    }
  }function B(e, t) {
    var n, i, r, s, o;for (n in e) {
      if (i = pe.camelCase(n), r = t[i], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = pe.cssHooks[i]) && "expand" in o) {
        s = o.expand(s), delete e[i];for (n in s) {
          n in e || (e[n] = s[n], t[n] = r);
        }
      } else t[i] = r;
    }
  }function W(e, t, n) {
    var i,
        r,
        s = 0,
        o = W.prefilters.length,
        a = pe.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (r) return !1;for (var t = ft || z(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), s = 0, o = l.tweens.length; s < o; s++) {
        l.tweens[s].run(i);
      }return a.notifyWith(e, [l, i, n]), i < 1 && o ? n : (o || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
    },
        l = a.promise({ elem: e, props: pe.extend({}, t), opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ft || z(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? l.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          l.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (B(c, l.opts.specialEasing); s < o; s++) {
      if (i = W.prefilters[s].call(l, e, c, l.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(i.stop, i)), i;
    }return pe.map(c, _, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }function U(e) {
    return (e.match(Ne) || []).join(" ");
  }function Y(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function V(e, t, n, i) {
    var r;if (Array.isArray(t)) pe.each(t, function (t, r) {
      n || Tt.test(e) ? i(e, r) : V(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof3(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== pe.type(t)) i(e, t);else for (r in t) {
      V(e + "[" + r + "]", t[r], n, i);
    }
  }function X(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          s = t.toLowerCase().match(Ne) || [];if (pe.isFunction(n)) for (; i = s[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function K(e, t, n, i) {
    function r(a) {
      var u;return s[a] = !0, pe.each(e[a] || [], function (e, a) {
        var l = a(t, n, i);return "string" != typeof l || o || s[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1);
      }), u;
    }var s = {},
        o = e === $t;return r(t.dataTypes[0]) || !s["*"] && r("*");
  }function Z(e, t) {
    var n,
        i,
        r = pe.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && pe.extend(!0, e, i), e;
  }function Q(e, t, n) {
    for (var i, r, s, o, a = e.contents, u = e.dataTypes; "*" === u[0];) {
      u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (i) for (r in a) {
      if (a[r] && a[r].test(i)) {
        u.unshift(r);break;
      }
    }if (u[0] in n) s = u[0];else {
      for (r in n) {
        if (!u[0] || e.converters[r + " " + u[0]]) {
          s = r;break;
        }o || (o = r);
      }s = s || o;
    }if (s) return s !== u[0] && u.unshift(s), n[s];
  }function J(e, t, n, i) {
    var r,
        s,
        o,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (o in e.converters) {
      l[o.toLowerCase()] = e.converters[o];
    }for (s = c.shift(); s;) {
      if (e.responseFields[s] && (n[e.responseFields[s]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = s, s = c.shift()) if ("*" === s) s = u;else if ("*" !== u && u !== s) {
        if (!(o = l[u + " " + s] || l["* " + s])) for (r in l) {
          if ((a = r.split(" "))[1] === s && (o = l[u + " " + a[0]] || l["* " + a[0]])) {
            !0 === o ? o = l[r] : !0 !== l[r] && (s = a[0], c.unshift(a[1]));break;
          }
        }if (!0 !== o) if (o && e.throws) t = o(t);else try {
          t = o(t);
        } catch (e) {
          return { state: "parsererror", error: o ? e : "No conversion from " + u + " to " + s };
        }
      }
    }return { state: "success", data: t };
  }var ee = [],
      te = e.document,
      ne = Object.getPrototypeOf,
      ie = ee.slice,
      re = ee.concat,
      se = ee.push,
      oe = ee.indexOf,
      ae = {},
      ue = ae.toString,
      le = ae.hasOwnProperty,
      ce = le.toString,
      de = ce.call(Object),
      he = {},
      fe = "3.2.1",
      pe = function pe(e, t) {
    return new pe.fn.init(e, t);
  },
      ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      me = /^-ms-/,
      ve = /-([a-z])/g,
      ye = function ye(e, t) {
    return t.toUpperCase();
  };pe.fn = pe.prototype = { jquery: fe, constructor: pe, length: 0, toArray: function toArray() {
      return ie.call(this);
    }, get: function get(e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = pe.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return pe.each(this, e);
    }, map: function map(e) {
      return this.pushStack(pe.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(ie.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: se, sort: ee.sort, splice: ee.splice }, pe.extend = pe.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        s,
        o = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == (typeof o === "undefined" ? "undefined" : _typeof3(o)) || pe.isFunction(o) || (o = {}), a === u && (o = this, a--); a < u; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = o[t], i = e[t], o !== i && (l && i && (pe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, s = n && Array.isArray(n) ? n : []) : s = n && pe.isPlainObject(n) ? n : {}, o[t] = pe.extend(l, s, i)) : void 0 !== i && (o[t] = i));
      }
    }return o;
  }, pe.extend({ expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isFunction: function isFunction(e) {
      return "function" === pe.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      var t = pe.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== de));
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof3(e)) || "function" == typeof e ? ae[ue.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof3(e);
    }, globalEval: function globalEval(e) {
      n(e);
    }, camelCase: function camelCase(e) {
      return e.replace(me, "ms-").replace(ve, ye);
    }, each: function each(e, t) {
      var n,
          r = 0;if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(ge, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : oe.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) {
        !t(e[r], r) !== o && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          s,
          o = 0,
          a = [];if (i(e)) for (r = e.length; o < r; o++) {
        null != (s = t(e[o], o, n)) && a.push(s);
      } else for (o in e) {
        null != (s = t(e[o], o, n)) && a.push(s);
      }return re.apply([], a);
    }, guid: 1, proxy: function proxy(e, t) {
      var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), r = function r() {
        return e.apply(t || this, i.concat(ie.call(arguments)));
      }, r.guid = e.guid = e.guid || pe.guid++, r;
    }, now: Date.now, support: he }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ae["[object " + t + "]"] = t.toLowerCase();
  });var be = function (e) {
    function t(e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c,
          h,
          f = t && t.ownerDocument,
          p = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;if (!i && ((t ? t.ownerDocument || t : H) !== j && q(t), t = t || j, R)) {
        if (11 !== p && (u = ge.exec(e))) if (r = u[1]) {
          if (9 === p) {
            if (!(o = t.getElementById(r))) return n;if (o.id === r) return n.push(o), n;
          } else if (f && (o = f.getElementById(r)) && P(t, o) && o.id === r) return n.push(o), n;
        } else {
          if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;if ((r = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n;
        }if (x.qsa && !B[e + " "] && (!I || !I.test(e))) {
          if (1 !== p) f = t, h = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = $), s = (c = A(e)).length; s--;) {
              c[s] = "#" + a + " " + d(c[s]);
            }h = c.join(","), f = me.test(e) && l(t.parentNode) || t;
          }if (h) try {
            return K.apply(n, f.querySelectorAll(h)), n;
          } catch (e) {} finally {
            a === $ && t.removeAttribute("id");
          }
        }
      }return T(e.replace(se, "$1"), t, n, i);
    }function n() {
      function e(n, i) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }var t = [];return e;
    }function i(e) {
      return e[$] = !0, e;
    }function r(e) {
      var t = j.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        w.attrHandle[n[i]] = t;
      }
    }function o(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function a(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function u(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var r, s = e([], n.length, t), o = s.length; o--;) {
            n[r = s[o]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }function c() {}function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function h(e, t, n) {
      var i = t.dir,
          r = t.next,
          s = r || i,
          o = n && "parentNode" === s,
          a = z++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || o) return e(t, n, r);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            d,
            h = [M, a];if (u) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || o) && e(t, n, u)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || o) if (d = t[$] || (t[$] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((l = c[s]) && l[0] === M && l[1] === a) return h[2] = l[2];if (c[s] = h, h[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function p(e, n, i) {
      for (var r = 0, s = n.length; r < s; r++) {
        t(e, n[r], i);
      }return i;
    }function g(e, t, n, i, r) {
      for (var s, o = [], a = 0, u = e.length, l = null != t; a < u; a++) {
        (s = e[a]) && (n && !n(s, i, r) || (o.push(s), l && t.push(a)));
      }return o;
    }function m(e, t, n, r, s, o) {
      return r && !r[$] && (r = m(r)), s && !s[$] && (s = m(s, o)), i(function (i, o, a, u) {
        var l,
            c,
            d,
            h = [],
            f = [],
            m = o.length,
            v = i || p(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? v : g(v, h, e, a, u),
            b = n ? s || (i ? e : m || r) ? [] : o : y;if (n && n(y, b, a, u), r) for (l = g(b, f), r(l, [], a, u), c = l.length; c--;) {
          (d = l[c]) && (b[f[c]] = !(y[f[c]] = d));
        }if (i) {
          if (s || e) {
            if (s) {
              for (l = [], c = b.length; c--;) {
                (d = b[c]) && l.push(y[c] = d);
              }s(null, b = [], l, u);
            }for (c = b.length; c--;) {
              (d = b[c]) && (l = s ? Q(i, d) : h[c]) > -1 && (i[l] = !(o[l] = d));
            }
          }
        } else b = g(b === o ? b.splice(m, b.length) : b), s ? s(null, o, b, u) : K.apply(o, b);
      });
    }function v(e) {
      for (var t, n, i, r = e.length, s = w.relative[e[0].type], o = s || w.relative[" "], a = s ? 1 : 0, u = h(function (e) {
        return e === t;
      }, o, !0), l = h(function (e) {
        return Q(t, e) > -1;
      }, o, !0), c = [function (e, n, i) {
        var r = !s && (i || n !== E) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));return t = null, r;
      }]; a < r; a++) {
        if (n = w.relative[e[a].type]) c = [h(f(c), n)];else {
          if ((n = w.filter[e[a].type].apply(null, e[a].matches))[$]) {
            for (i = ++a; i < r && !w.relative[e[i].type]; i++) {}return m(a > 1 && f(c), a > 1 && d(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && d(e));
          }c.push(n);
        }
      }return f(c);
    }function y(e, n) {
      var r = n.length > 0,
          s = e.length > 0,
          o = function o(i, _o, a, u, l) {
        var c,
            d,
            h,
            f = 0,
            p = "0",
            m = i && [],
            v = [],
            y = E,
            b = i || s && w.find.TAG("*", l),
            x = M += null == y ? 1 : Math.random() || .1,
            C = b.length;for (l && (E = _o === j || _o || l); p !== C && null != (c = b[p]); p++) {
          if (s && c) {
            for (d = 0, _o || c.ownerDocument === j || (q(c), a = !R); h = e[d++];) {
              if (h(c, _o || j, a)) {
                u.push(c);break;
              }
            }l && (M = x);
          }r && ((c = !h && c) && f--, i && m.push(c));
        }if (f += p, r && p !== f) {
          for (d = 0; h = n[d++];) {
            h(m, v, _o, a);
          }if (i) {
            if (f > 0) for (; p--;) {
              m[p] || v[p] || (v[p] = V.call(u));
            }v = g(v);
          }K.apply(u, v), l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(u);
        }return l && (M = x, E = y), m;
      };return r ? i(o) : o;
    }var b,
        x,
        w,
        C,
        S,
        A,
        k,
        T,
        E,
        L,
        N,
        q,
        j,
        D,
        R,
        I,
        F,
        O,
        P,
        $ = "sizzle" + 1 * new Date(),
        H = e.document,
        M = 0,
        z = 0,
        G = n(),
        _ = n(),
        B = n(),
        W = function W(e, t) {
      return e === t && (N = !0), 0;
    },
        U = {}.hasOwnProperty,
        Y = [],
        V = Y.pop,
        X = Y.push,
        K = Y.push,
        Z = Y.slice,
        Q = function Q(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        oe = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        le = new RegExp(ie),
        ce = new RegExp("^" + te + "$"),
        de = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
        he = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        pe = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        ye = function ye(e, t, n) {
      var i = "0x" + t - 65536;return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        xe = function xe(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        we = function we() {
      q();
    },
        Ce = h(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      K.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType;
    } catch (e) {
      K = { apply: Y.length ? function (e, t) {
          X.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }x = t.support = {}, S = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, q = t.setDocument = function (e) {
      var t,
          n,
          i = e ? e.ownerDocument || e : H;return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, D = j.documentElement, R = !S(j), H !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), x.getElementsByTagName = r(function (e) {
        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
      }), x.getElementsByClassName = pe.test(j.getElementsByClassName), x.getById = r(function (e) {
        return D.appendChild(e).id = $, !j.getElementsByName || !j.getElementsByName($).length;
      }), x.getById ? (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n,
              i,
              r,
              s = t.getElementById(e);if (s) {
            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];for (r = t.getElementsByName(e), i = 0; s = r[i++];) {
              if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
            }
          }return [];
        }
      }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            s = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = s[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return s;
      }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && R) return t.getElementsByClassName(e);
      }, F = [], I = [], (x.qsa = pe.test(j.querySelectorAll)) && (r(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || I.push(".#.+[+~]");
      }), r(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = j.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:");
      })), (x.matchesSelector = pe.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
        x.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), F.push("!=", ie);
      }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = pe.test(D.compareDocumentPosition), P = t || pe.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, W = t ? function (e, t) {
        if (e === t) return N = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === H && P(H, e) ? -1 : t === j || t.ownerDocument === H && P(H, t) ? 1 : L ? Q(L, e) - Q(L, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return N = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            s = t.parentNode,
            a = [e],
            u = [t];if (!r || !s) return e === j ? -1 : t === j ? 1 : r ? -1 : s ? 1 : L ? Q(L, e) - Q(L, t) : 0;if (r === s) return o(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          u.unshift(n);
        }for (; a[i] === u[i];) {
          i++;
        }return i ? o(a[i], u[i]) : a[i] === H ? -1 : u[i] === H ? 1 : 0;
      }, j) : j;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== j && q(e), n = n.replace(ue, "='$1']"), x.matchesSelector && R && !B[n + " "] && (!F || !F.test(n)) && (!I || !I.test(n))) try {
        var i = O.call(e, n);if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return t(n, j, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== j && q(e), P(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== j && q(e);var n = w.attrHandle[t.toLowerCase()],
          i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;return void 0 !== i ? i : x.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.escape = function (e) {
      return (e + "").replace(be, xe);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          r = 0;if (N = !x.detectDuplicates, L = !x.sortStable && e.slice(0), e.sort(W), N) {
        for (; t = e[r++];) {
          t === e[r] && (i = n.push(r));
        }for (; i--;) {
          e.splice(n[i], 1);
        }
      }return L = null, e;
    }, C = t.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += C(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += C(t);
      }return n;
    }, (w = t.selectors = { cacheLength: 50, createPseudo: i, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ve, ye).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = G[e + " "];return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && G(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, i) {
          return function (r) {
            var s = t.attr(r, e);return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var s = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                d,
                h,
                f,
                p,
                g = s !== o ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                b = !1;if (m) {
              if (s) {
                for (; g;) {
                  for (h = t; h = h[g];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = g = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [o ? m.firstChild : m.lastChild], o && y) {
                for (b = (f = (l = (c = (d = (h = m)[$] || (h[$] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === M && l[1]) && l[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    c[e] = [M, f, b];break;
                  }
                }
              } else if (y && (h = t, d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), l = c[e] || [], f = l[0] === M && l[1], b = f), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [M, b]), h !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var r,
              s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return s[$] ? s(n) : s.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, r = s(e, n), o = r.length; o--;) {
              i = Q(e, r[o]), e[i] = !(t[i] = r[o]);
            }
          }) : function (e) {
            return s(e, 0, r);
          }) : s;
        } }, pseudos: { not: i(function (e) {
          var t = [],
              n = [],
              r = k(e.replace(se, "$1"));return r[$] ? i(function (e, t, n, i) {
            for (var s, o = r(e, null, i, []), a = e.length; a--;) {
              (s = o[a]) && (e[a] = !(t[a] = s));
            }
          }) : function (e, i, s) {
            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop();
          };
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), contains: i(function (e) {
          return e = e.replace(ve, ye), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }), lang: i(function (e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
            var n;do {
              if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === D;
        }, focus: function focus(e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: a(!1), disabled: a(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !w.pseudos.empty(e);
        }, header: function header(e) {
          return fe.test(e.nodeName);
        }, input: function input(e) {
          return he.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: u(function () {
          return [0];
        }), last: u(function (e, t) {
          return [t - 1];
        }), eq: u(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: u(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: u(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = w.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }(b);
    }for (b in { submit: !0, reset: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }(b);
    }return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), A = t.tokenize = function (e, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c = _[e + " "];if (c) return n ? 0 : c.slice(0);for (a = e, u = [], l = w.preFilter; a;) {
        i && !(r = oe.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(s = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), s.push({ value: i, type: r[0].replace(se, " ") }), a = a.slice(i.length));for (o in w.filter) {
          !(r = de[o].exec(a)) || l[o] && !(r = l[o](r)) || (i = r.shift(), s.push({ value: i, type: o, matches: r }), a = a.slice(i.length));
        }if (!i) break;
      }return n ? a.length : a ? t.error(e) : _(e, u).slice(0);
    }, k = t.compile = function (e, t) {
      var n,
          i = [],
          r = [],
          s = B[e + " "];if (!s) {
        for (t || (t = A(e)), n = t.length; n--;) {
          (s = v(t[n]))[$] ? i.push(s) : r.push(s);
        }(s = B(e, y(r, i))).selector = e;
      }return s;
    }, T = t.select = function (e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c = "function" == typeof e && e,
          h = !i && A(e = c.selector || e);if (n = n || [], 1 === h.length) {
        if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (o = s[0]).type && 9 === t.nodeType && R && w.relative[s[1].type]) {
          if (!(t = (w.find.ID(o.matches[0].replace(ve, ye), t) || [])[0])) return n;c && (t = t.parentNode), e = e.slice(s.shift().value.length);
        }for (r = de.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);) {
          if ((u = w.find[a]) && (i = u(o.matches[0].replace(ve, ye), me.test(s[0].type) && l(t.parentNode) || t))) {
            if (s.splice(r, 1), !(e = i.length && d(s))) return K.apply(n, i), n;break;
          }
        }
      }return (c || k(e, h))(i, t, !R, n, !t || me.test(e) && l(t.parentNode) || t), n;
    }, x.sortStable = $.split("").sort(W).join("") === $, x.detectDuplicates = !!N, q(), x.sortDetached = r(function (e) {
      return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
    }), r(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || s("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), x.attributes && r(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || s("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), r(function (e) {
      return null == e.getAttribute("disabled");
    }) || s(J, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), t;
  }(e);pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains, pe.escapeSelector = be.escape;var xe = function xe(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && pe(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      we = function we(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      Ce = pe.expr.match.needsContext,
      Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ae = /^.[^:#\[\.,]*$/;pe.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, pe.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (pe.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        pe.find(e, r[t], n);
      }return i > 1 ? pe.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(s(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(s(this, e || [], !0));
    }, is: function is(e) {
      return !!s(this, "string" == typeof e && Ce.test(e) ? pe(e) : e || [], !1).length;
    } });var ke,
      Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(pe.fn.init = function (e, t, n) {
    var i, r;if (!e) return this;if (n = n || ke, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Se.test(i[1]) && pe.isPlainObject(t)) for (i in t) {
          pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this);
  }).prototype = pe.fn, ke = pe(te);var Ee = /^(?:parents|prev(?:Until|All))/,
      Le = { children: !0, contents: !0, next: !0, prev: !0 };pe.fn.extend({ has: function has(e) {
      var t = pe(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (pe.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          s = [],
          o = "string" != typeof e && pe(e);if (!Ce.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
            s.push(n);break;
          }
        }
      }return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s);
    }, index: function index(e) {
      return e ? "string" == typeof e ? oe.call(pe(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), pe.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return xe(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return xe(e, "parentNode", n);
    }, next: function next(e) {
      return o(e, "nextSibling");
    }, prev: function prev(e) {
      return o(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return xe(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return xe(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return xe(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return xe(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return we((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return we(e.firstChild);
    }, contents: function contents(e) {
      return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), pe.merge([], e.childNodes));
    } }, function (e, t) {
    pe.fn[e] = function (n, i) {
      var r = pe.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Le[e] || pe.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r);
    };
  });var Ne = /[^\x20\t\r\n\f]+/g;pe.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : pe.extend({}, e);var t,
        n,
        i,
        r,
        s = [],
        o = [],
        u = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; o.length; u = -1) {
        for (n = o.shift(); ++u < s.length;) {
          !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (s = n ? [] : "");
    },
        c = { add: function add() {
        return s && (n && !t && (u = s.length - 1, o.push(n)), function t(n) {
          pe.each(n, function (n, i) {
            pe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== pe.type(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return pe.each(arguments, function (e, t) {
          for (var n; (n = pe.inArray(t, s, n)) > -1;) {
            s.splice(n, 1), n <= u && u--;
          }
        }), this;
      }, has: function has(e) {
        return e ? pe.inArray(e, s) > -1 : s.length > 0;
      }, empty: function empty() {
        return s && (s = []), this;
      }, disable: function disable() {
        return r = o = [], s = n = "", this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return r = o = [], n || t || (s = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, pe.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2], ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return s.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return pe.Deferred(function (t) {
            pe.each(n, function (n, i) {
              var r = pe.isFunction(e[i[4]]) && e[i[4]];s[i[1]](function () {
                var e = r && r.apply(this, arguments);e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          function s(t, n, i, r) {
            return function () {
              var a = this,
                  c = arguments,
                  d = function d() {
                var e, d;if (!(t < o)) {
                  if ((e = i.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");d = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof3(e)) || "function" == typeof e) && e.then, pe.isFunction(d) ? r ? d.call(e, s(o, n, u, r), s(o, n, l, r)) : (o++, d.call(e, s(o, n, u, r), s(o, n, l, r), s(o, n, u, n.notifyWith))) : (i !== u && (a = void 0, c = [e]), (r || n.resolveWith)(a, c));
                }
              },
                  h = r ? d : function () {
                try {
                  d();
                } catch (e) {
                  pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= o && (i !== l && (a = void 0, c = [e]), n.rejectWith(a, c));
                }
              };t ? h() : (pe.Deferred.getStackHook && (h.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(h));
            };
          }var o = 0;return pe.Deferred(function (e) {
            n[0][3].add(s(0, e, pe.isFunction(r) ? r : u, e.notifyWith)), n[1][3].add(s(0, e, pe.isFunction(t) ? t : u)), n[2][3].add(s(0, e, pe.isFunction(i) ? i : l));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? pe.extend(e, r) : r;
        } },
          s = {};return pe.each(n, function (e, t) {
        var o = t[2],
            a = t[5];r[t[1]] = o.add, a && o.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = o.fireWith;
      }), r.promise(s), t && t.call(s, s), s;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = ie.call(arguments),
          s = pe.Deferred(),
          o = function o(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (c(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || pe.isFunction(r[n] && r[n].then))) return s.then();for (; n--;) {
        c(r[n], o(n), s.reject);
      }return s.promise();
    } });var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;pe.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, pe.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var je = pe.Deferred();pe.fn.ready = function (e) {
    return je.then(e).catch(function (e) {
      pe.readyException(e);
    }), this;
  }, pe.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || je.resolveWith(te, [pe]));
    } }), pe.ready.then = je.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));var De = function De(e, t, n, i, r, s, o) {
    var a = 0,
        u = e.length,
        l = null == n;if ("object" === pe.type(n)) {
      r = !0;for (a in n) {
        De(e, t, a, n[a], !0, s, o);
      }
    } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(pe(e), n);
    })), t)) for (; a < u; a++) {
      t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
    }return r ? e : l ? t.call(e) : u ? t(e[0], n) : s;
  },
      Re = function Re(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };h.uid = 1, h.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[pe.camelCase(t)] = n;else for (i in t) {
        r[pe.camelCase(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !pe.isEmptyObject(t);
    } };var Ie = new h(),
      Fe = new h(),
      Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Pe = /[A-Z]/g;pe.extend({ hasData: function hasData(e) {
      return Fe.hasData(e) || Ie.hasData(e);
    }, data: function data(e, t, n) {
      return Fe.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Fe.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Ie.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Ie.remove(e, t);
    } }), pe.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          s = this[0],
          o = s && s.attributes;if (void 0 === e) {
        if (this.length && (r = Fe.get(s), 1 === s.nodeType && !Ie.get(s, "hasDataAttrs"))) {
          for (n = o.length; n--;) {
            o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(s, i, r[i]));
          }Ie.set(s, "hasDataAttrs", !0);
        }return r;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof3(e)) ? this.each(function () {
        Fe.set(this, e);
      }) : De(this, function (t) {
        var n;if (s && void 0 === t) {
          if (void 0 !== (n = Fe.get(s, e))) return n;if (void 0 !== (n = p(s, e))) return n;
        } else this.each(function () {
          Fe.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Fe.remove(this, e);
      });
    } }), pe.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, pe.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = pe.queue(e, t),
          i = n.length,
          r = n.shift(),
          s = pe._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function () {
        pe.dequeue(e, t);
      }, s)), !i && s && s.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Ie.get(e, n) || Ie.access(e, n, { empty: pe.Callbacks("once memory").add(function () {
          Ie.remove(e, [t + "queue", n]);
        }) });
    } }), pe.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = pe.queue(this, e, t);pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        pe.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = pe.Deferred(),
          s = this,
          o = this.length,
          a = function a() {
        --i || r.resolveWith(s, [s]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
        (n = Ie.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      He = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
      Me = ["Top", "Right", "Bottom", "Left"],
      ze = function ze(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display");
  },
      Ge = function Ge(e, t, n, i) {
    var r,
        s,
        o = {};for (s in t) {
      o[s] = e.style[s], e.style[s] = t[s];
    }r = n.apply(e, i || []);for (s in t) {
      e.style[s] = o[s];
    }return r;
  },
      _e = {};pe.fn.extend({ show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ze(this) ? pe(this).show() : pe(this).hide();
      });
    } });var Be = /^(?:checkbox|radio)$/i,
      We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ue = /^$|\/(?:java|ecma)script/i,
      Ye = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;var Ve = /<|&#?\w+;/;!function () {
    var e = te.createDocumentFragment().appendChild(te.createElement("div")),
        t = te.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var Xe = te.documentElement,
      Ke = /^key/,
      Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Qe = /^([^.]*)(?:\.(.+)|)/;pe.event = { global: {}, add: function add(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Ie.get(e);if (m) for (n.handler && (s = n, n = s.handler, r = s.selector), r && pe.find.matchesSelector(Xe, r), n.guid || (n.guid = pe.guid++), (u = m.events) || (u = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
        return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0;
      }), l = (t = (t || "").match(Ne) || [""]).length; l--;) {
        a = Qe.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (d = pe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = pe.event.special[f] || {}, c = pe.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && pe.expr.match.needsContext.test(r), namespace: p.join(".") }, s), (h = u[f]) || (h = u[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), pe.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Ie.hasData(e) && Ie.get(e);if (m && (u = m.events)) {
        for (l = (t = (t || "").match(Ne) || [""]).length; l--;) {
          if (a = Qe.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = pe.event.special[f] || {}, h = u[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) {
              c = h[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
            }o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || pe.removeEvent(e, f, m.handle), delete u[f]);
          } else for (f in u) {
            pe.event.remove(e, f + t[l], n, i, !0);
          }
        }pe.isEmptyObject(u) && Ie.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a = pe.event.fix(e),
          u = new Array(arguments.length),
          l = (Ie.get(this, "events") || {})[a.type] || [],
          c = pe.event.special[a.type] || {};for (u[0] = a, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (o = pe.event.handlers.call(this, a, l), t = 0; (r = o[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          s,
          o,
          a = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (s = [], o = {}, n = 0; n < u; n++) {
            i = t[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), o[r] && s.push(i);
          }s.length && a.push({ elem: l, handlers: s });
        }
      }return l = this, u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(pe.Event.prototype, e, { enumerable: !0, configurable: !0, get: pe.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[pe.expando] ? e : new pe.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== S() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === S() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return r(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, pe.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, pe.Event = function (e, t) {
    return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void (this[pe.expando] = !0)) : new pe.Event(e, t);
  }, pe.Event.prototype = { constructor: pe.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, pe.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, pe.event.addProp), pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    pe.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = this,
            r = e.relatedTarget,
            s = e.handleObj;return r && (r === i || pe.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n;
      } };
  }), pe.fn.extend({ on: function on(e, t, n, i) {
      return A(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return A(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof3(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {
        pe.event.remove(this, e, n, t);
      });
    } });var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      et = /<script|<style|<link/i,
      tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      nt = /^true\/(.*)/,
      it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;pe.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Je, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          s,
          o,
          a = e.cloneNode(!0),
          u = pe.contains(e.ownerDocument, e);if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (o = y(a), s = y(e), i = 0, r = s.length; i < r; i++) {
        N(s[i], o[i]);
      }if (t) if (n) for (s = s || y(e), o = o || y(a), i = 0, r = s.length; i < r; i++) {
        L(s[i], o[i]);
      } else L(e, a);return (o = y(a, "script")).length > 0 && b(o, !u && y(e, "script")), a;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = pe.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (Re(n)) {
          if (t = n[Ie.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
            }n[Ie.expando] = void 0;
          }n[Fe.expando] && (n[Fe.expando] = void 0);
        }
      }
    } }), pe.fn.extend({ detach: function detach(e) {
      return j(this, e, !0);
    }, remove: function remove(e) {
      return j(this, e);
    }, text: function text(e) {
      return De(this, function (e) {
        return void 0 === e ? pe.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return q(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return q(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (pe.cleanData(y(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return pe.clone(this, e, t);
      });
    }, html: function html(e) {
      return De(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !et.test(e) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = pe.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return q(this, arguments, function (t) {
        var n = this.parentNode;pe.inArray(this, e) < 0 && (pe.cleanData(y(this)), n && n.replaceChild(t, this));
      }, e);
    } }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    pe.fn[e] = function (e) {
      for (var n, i = [], r = pe(e), s = r.length - 1, o = 0; o <= s; o++) {
        n = o === s ? this : this.clone(!0), pe(r[o])[t](n), se.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var rt = /^margin/,
      st = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
      ot = function ot(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  };!function () {
    function t() {
      if (a) {
        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xe.appendChild(o);var t = e.getComputedStyle(a);n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Xe.removeChild(o), a = null;
      }
    }var n,
        i,
        r,
        s,
        o = te.createElement("div"),
        a = te.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), pe.extend(he, { pixelPosition: function pixelPosition() {
        return t(), n;
      }, boxSizingReliable: function boxSizingReliable() {
        return t(), i;
      }, pixelMarginRight: function pixelMarginRight() {
        return t(), r;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), s;
      } }));
  }();var at = /^(none|table(?!-c[ea]).+)/,
      ut = /^--/,
      lt = { position: "absolute", visibility: "hidden", display: "block" },
      ct = { letterSpacing: "0", fontWeight: "400" },
      dt = ["Webkit", "Moz", "ms"],
      ht = te.createElement("div").style;pe.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = D(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            s,
            o,
            a = pe.camelCase(t),
            u = ut.test(t),
            l = e.style;return u || (t = F(a)), o = pe.cssHooks[t] || pe.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : ("string" === (s = typeof n === "undefined" ? "undefined" : _typeof3(n)) && (r = He.exec(n)) && r[1] && (n = g(e, t, r), s = "number"), void (null != n && n === n && ("number" === s && (n += r && r[3] || (pe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))));
      }
    }, css: function css(e, t, n, i) {
      var r,
          s,
          o,
          a = pe.camelCase(t);return ut.test(t) || (t = F(a)), (o = pe.cssHooks[t] || pe.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = D(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r;
    } }), pe.each(["height", "width"], function (e, t) {
    pe.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, i) : Ge(e, lt, function () {
          return $(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            s = i && ot(e),
            o = i && P(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, s), s);return o && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), O(0, n, o);
      } };
  }), pe.cssHooks.marginLeft = R(he.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    pe.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + Me[i] + t] = s[i] || s[i - 2] || s[0];
        }return r;
      } }, rt.test(e) || (pe.cssHooks[e + t].set = O);
  }), pe.fn.extend({ css: function css(e, t) {
      return De(this, function (e, t, n) {
        var i,
            r,
            s = {},
            o = 0;if (Array.isArray(t)) {
          for (i = ot(e), r = t.length; o < r; o++) {
            s[t[o]] = pe.css(e, t[o], !1, i);
          }return s;
        }return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
      }, e, t, arguments.length > 1);
    } }), pe.Tween = H, H.prototype = { constructor: H, init: function init(e, t, n, i, r, s) {
      this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (pe.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = H.propHooks[this.prop];return e && e.get ? e.get(this) : H.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = H.propHooks[this.prop];return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
    } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit);
      } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, pe.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, pe.fx = H.prototype.init, pe.fx.step = {};var ft,
      pt,
      gt = /^(?:toggle|show|hide)$/,
      mt = /queueHooks$/;pe.Animation = pe.extend(W, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return g(n.elem, e, He.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c,
          d = "width" in t || "height" in t,
          h = this,
          f = {},
          p = e.style,
          g = e.nodeType && ze(e),
          m = Ie.get(e, "fxshow");n.queue || (null == (o = pe._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
        o.unqueued || a();
      }), o.unqueued++, h.always(function () {
        h.always(function () {
          o.unqueued--, pe.queue(e, "fx").length || o.empty.fire();
        });
      }));for (i in t) {
        if (r = t[i], gt.test(r)) {
          if (delete t[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;g = !0;
          }f[i] = m && m[i] || pe.style(e, i);
        }
      }if ((u = !pe.isEmptyObject(t)) || !pe.isEmptyObject(f)) {
        d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = m && m.display) && (l = Ie.get(e, "display")), "none" === (c = pe.css(e, "display")) && (l ? c = l : (v([e], !0), l = e.style.display || l, c = pe.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === pe.css(e, "float") && (u || (h.done(function () {
          p.display = l;
        }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), u = !1;for (i in f) {
          u || (m ? "hidden" in m && (g = m.hidden) : m = Ie.access(e, "fxshow", { display: l }), s && (m.hidden = !g), g && v([e], !0), h.done(function () {
            g || v([e]), Ie.remove(e, "fxshow");for (i in f) {
              pe.style(e, i, f[i]);
            }
          })), u = _(g ? m[i] : 0, i, h), i in m || (m[i] = u.start, g && (u.end = u.start, u.start = 0));
        }
      }
    }], prefilter: function prefilter(e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e);
    } }), pe.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof3(e)) ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t };return pe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue);
    }, i;
  }, pe.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ze).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = pe.isEmptyObject(e),
          s = pe.speed(t, n, i),
          o = function o() {
        var t = W(this, pe.extend({}, e), s);(r || Ie.get(this, "finish")) && t.stop(!0);
      };return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            s = pe.timers,
            o = Ie.get(this);if (r) o[r] && o[r].stop && i(o[r]);else for (r in o) {
          o[r] && o[r].stop && mt.test(r) && i(o[r]);
        }for (r = s.length; r--;) {
          s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
        }!t && n || pe.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Ie.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            s = pe.timers,
            o = i ? i.length : 0;for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) {
          s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
        }for (t = 0; t < o; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), pe.each(["toggle", "show", "hide"], function (e, t) {
    var n = pe.fn[t];pe.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, i, r);
    };
  }), pe.each({ slideDown: G("show"), slideUp: G("hide"), slideToggle: G("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    pe.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), pe.timers = [], pe.fx.tick = function () {
    var e,
        t = 0,
        n = pe.timers;for (ft = pe.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || pe.fx.stop(), ft = void 0;
  }, pe.fx.timer = function (e) {
    pe.timers.push(e), pe.fx.start();
  }, pe.fx.interval = 13, pe.fx.start = function () {
    pt || (pt = !0, M());
  }, pe.fx.stop = function () {
    pt = null;
  }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function (t, n) {
    return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = te.createElement("input"),
        t = te.createElement("select").appendChild(te.createElement("option"));e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", he.radioValue = "t" === e.value;
  }();var vt,
      yt = pe.expr.attrHandle;pe.fn.extend({ attr: function attr(e, t) {
      return De(this, pe.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    } }), pe.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!he.radioValue && "radio" === t && r(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(Ne);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), vt = { set: function set(e, t, n) {
      return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = yt[t] || pe.find.attr;yt[t] = function (e, t, i) {
      var r,
          s,
          o = t.toLowerCase();return i || (s = yt[o], yt[o] = r, r = null != n(e, t, i) ? o : null, yt[o] = s), r;
    };
  });var bt = /^(?:input|select|textarea|button)$/i,
      xt = /^(?:a|area)$/i;pe.fn.extend({ prop: function prop(e, t) {
      return De(this, pe.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[pe.propFix[e] || e];
      });
    } }), pe.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = pe.find.attr(e, "tabindex");return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), he.optSelected || (pe.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    pe.propFix[this.toLowerCase()] = this;
  }), pe.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).addClass(e.call(this, t, Y(this)));
      });if ("string" == typeof e && e) for (t = e.match(Ne) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (pe.isFunction(e)) return this.each(function (t) {
        pe(this).removeClass(e.call(this, t, Y(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(Ne) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            for (; i.indexOf(" " + s + " ") > -1;) {
              i = i.replace(" " + s + " ", " ");
            }
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof3(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
        pe(this).toggleClass(e.call(this, n, Y(this), t), t);
      }) : this.each(function () {
        var t, i, r, s;if ("string" === n) for (i = 0, r = pe(this), s = e.match(Ne) || []; t = s[i++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = Y(this)) && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + U(Y(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var wt = /\r/g;pe.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = pe.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0;
    } }), pe.extend({ valHooks: { option: { get: function get(e) {
          var t = pe.find.attr(e, "value");return null != t ? t : U(pe.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              s = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              u = a ? null : [],
              l = a ? o + 1 : s.length;for (i = o < 0 ? l : a ? o : 0; i < l; i++) {
            if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
              if (t = pe(n).val(), a) return t;u.push(t);
            }
          }return u;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, s = pe.makeArray(t), o = r.length; o--;) {
            i = r[o], (i.selected = pe.inArray(pe.valHooks.option.get(i), s) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), s;
        } } } }), pe.each(["radio", "checkbox"], function () {
    pe.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
      } }, he.checkOn || (pe.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Ct = /^(?:focusinfocus|focusoutblur)$/;pe.extend(pe.event, { trigger: function trigger(t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h = [i || te],
          f = le.call(t, "type") ? t.type : t,
          p = le.call(t, "namespace") ? t.namespace.split(".") : [];if (o = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" == (typeof t === "undefined" ? "undefined" : _typeof3(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!r && !d.noBubble && !pe.isWindow(i)) {
          for (u = d.delegateType || f, Ct.test(u + f) || (o = o.parentNode); o; o = o.parentNode) {
            h.push(o), a = o;
          }a === (i.ownerDocument || te) && h.push(a.defaultView || a.parentWindow || e);
        }for (s = 0; (o = h[s++]) && !t.isPropagationStopped();) {
          t.type = s > 1 ? u : d.bindType || f, (c = (Ie.get(o, "events") || {})[t.type] && Ie.get(o, "handle")) && c.apply(o, n), (c = l && o[l]) && c.apply && Re(o) && (t.result = c.apply(o, n), !1 === t.result && t.preventDefault());
        }return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !Re(i) || l && pe.isFunction(i[f]) && !pe.isWindow(i) && ((a = i[l]) && (i[l] = null), pe.event.triggered = f, i[f](), pe.event.triggered = void 0, a && (i[l] = a)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });pe.event.trigger(i, null, t);
    } }), pe.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        pe.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return pe.event.trigger(e, t, n, !0);
    } }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    pe.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), pe.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), he.focusin = "onfocusin" in e, he.focusin || pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      pe.event.simulate(t, e.target, pe.event.fix(e));
    };pe.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = Ie.access(i, t);r || i.addEventListener(e, n, !0), Ie.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = Ie.access(i, t) - 1;r ? Ie.access(i, t, r) : (i.removeEventListener(e, n, !0), Ie.remove(i, t));
      } };
  });var St = e.location,
      At = pe.now(),
      kt = /\?/;pe.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n;
  };var Tt = /\[\]$/,
      Et = /\r?\n/g,
      Lt = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;pe.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = pe.isFunction(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      V(n, e[n], t, r);
    }return i.join("&");
  }, pe.fn.extend({ serialize: function serialize() {
      return pe.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = pe.prop(this, "elements");return e ? pe.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !pe(this).is(":disabled") && Nt.test(this.nodeName) && !Lt.test(e) && (this.checked || !Be.test(e));
      }).map(function (e, t) {
        var n = pe(this).val();return null == n ? null : Array.isArray(n) ? pe.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") };
        }) : { name: t.name, value: n.replace(Et, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ft = /^(?:GET|HEAD)$/,
      Ot = /^\/\//,
      Pt = {},
      $t = {},
      Ht = "*/".concat("*"),
      Mt = te.createElement("a");Mt.href = St.href, pe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: St.href, type: "GET", isLocal: It.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Z(Z(e, pe.ajaxSettings), t) : Z(pe.ajaxSettings, e);
    }, ajaxPrefilter: X(Pt), ajaxTransport: X($t), ajax: function ajax(t, n) {
      function i(t, n, i, a) {
        var l,
            h,
            f,
            x,
            w,
            C = n;c || (c = !0, u && e.clearTimeout(u), r = void 0, o = a || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = Q(p, S, i)), x = J(p, x, S, l), l ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (pe.lastModified[s] = w), (w = S.getResponseHeader("etag")) && (pe.etag[s] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, h = x.data, f = x.error, l = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", l ? v.resolveWith(g, [h, C, S]) : v.rejectWith(g, [S, C, f]), S.statusCode(b), b = void 0, d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, p, l ? h : f]), y.fireWith(g, [S, C]), d && (m.trigger("ajaxComplete", [S, p]), --pe.active || pe.event.trigger("ajaxStop")));
      }"object" == (typeof t === "undefined" ? "undefined" : _typeof3(t)) && (n = t, t = void 0), n = n || {};var r,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p = pe.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
          v = pe.Deferred(),
          y = pe.Callbacks("once memory"),
          b = p.statusCode || {},
          x = {},
          w = {},
          C = "canceled",
          S = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!a) for (a = {}; t = Rt.exec(o);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? o : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) S.always(e[S.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return r && r.abort(t), i(0, t), this;
        } };if (v.promise(S), p.url = ((t || p.url || St.href) + "").replace(Ot, St.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain) {
        l = te.createElement("a");try {
          l.href = p.url, l.href = l.href, p.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), K(Pt, p, n, S), c) return S;(d = pe.event && p.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ft.test(p.type), s = p.url.replace(jt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(qt, "+")) : (f = p.url.slice(s.length), p.data && (s += (kt.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Dt, "$1"), f = (kt.test(s) ? "&" : "?") + "_=" + At++ + f), p.url = s + f), p.ifModified && (pe.lastModified[s] && S.setRequestHeader("If-Modified-Since", pe.lastModified[s]), pe.etag[s] && S.setRequestHeader("If-None-Match", pe.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]);for (h in p.headers) {
        S.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = K($t, p, n, S)) {
        if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), c) return S;p.async && p.timeout > 0 && (u = e.setTimeout(function () {
          S.abort("timeout");
        }, p.timeout));try {
          c = !1, r.send(x, i);
        } catch (e) {
          if (c) throw e;i(-1, e);
        }
      } else i(-1, "No Transport");return S;
    }, getJSON: function getJSON(e, t, n) {
      return pe.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return pe.get(e, void 0, t, "script");
    } }), pe.each(["get", "post"], function (e, t) {
    pe[t] = function (e, n, i, r) {
      return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({ url: e, type: t, dataType: r, data: n, success: i }, pe.isPlainObject(e) && e));
    };
  }), pe._evalUrl = function (e) {
    return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, pe.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return pe.isFunction(e) ? this.each(function (t) {
        pe(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = pe(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = pe.isFunction(e);return this.each(function (n) {
        pe(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        pe(this).replaceWith(this.childNodes);
      }), this;
    } }), pe.expr.pseudos.hidden = function (e) {
    return !pe.expr.pseudos.visible(e);
  }, pe.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, pe.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var zt = { 0: 200, 1223: 204 },
      Gt = pe.ajaxSettings.xhr();he.cors = !!Gt && "withCredentials" in Gt, he.ajax = Gt = !!Gt, pe.ajaxTransport(function (t) {
    var _n, i;if (he.cors || Gt && !t.crossDomain) return { send: function send(r, s) {
        var o,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) {
          a[o] = t.xhrFields[o];
        }t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");for (o in r) {
          a.setRequestHeader(o, r[o]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), pe.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return pe.globalEval(e), e;
      } } }), pe.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), pe.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, r) {
          t = pe("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
          }), te.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var _t = [],
      Bt = /(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = _t.pop() || pe.expando + "_" + At++;return this[e] = !0, e;
    } }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        s,
        o,
        a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return o || pe.error(r + " was not called"), o[0];
    }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
      o = arguments;
    }, i.always(function () {
      void 0 === s ? pe(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, _t.push(r)), o && pe.isFunction(s) && s(o[0]), o = s = void 0;
    }), "script";
  }), he.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), pe.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, r, s;return t || (he.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Se.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, s), s && s.length && pe(s).remove(), pe.merge([], r.childNodes));
  }, pe.fn.load = function (e, t, n) {
    var i,
        r,
        s,
        o = this,
        a = e.indexOf(" ");return a > -1 && (i = U(e.slice(a)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof3(t)) && (r = "POST"), o.length > 0 && pe.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      s = arguments, o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      o.each(function () {
        n.apply(this, s || [e.responseText, t, e]);
      });
    }), this;
  }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    pe.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), pe.expr.pseudos.animated = function (e) {
    return pe.grep(pe.timers, function (t) {
      return e === t.elem;
    }).length;
  }, pe.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = pe.css(e, "position"),
          c = pe(e),
          d = {};"static" === l && (e.style.position = "relative"), a = c.offset(), s = pe.css(e, "top"), u = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && (s + u).indexOf("auto") > -1 ? (i = c.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d);
    } }, pe.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        pe.offset.setOffset(this, e, t);
      });var t,
          n,
          i,
          r,
          s = this[0];return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), t = s.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + pe.css(e[0], "borderTopWidth", !0), left: i.left + pe.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - pe.css(n, "marginTop", !0), left: t.left - i.left - pe.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) {
          e = e.offsetParent;
        }return e || Xe;
      });
    } }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;pe.fn[e] = function (i) {
      return De(this, function (e, i, r) {
        var s;return pe.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r ? s ? s[t] : e[i] : void (s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r);
      }, e, i, arguments.length);
    };
  }), pe.each(["top", "left"], function (e, t) {
    pe.cssHooks[t] = R(he.pixelPosition, function (e, n) {
      if (n) return n = D(e, t), st.test(n) ? pe(e).position()[t] + "px" : n;
    });
  }), pe.each({ Height: "height", Width: "width" }, function (e, t) {
    pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      pe.fn[i] = function (r, s) {
        var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === s ? "margin" : "border");return De(this, function (t, n, r) {
          var s;return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a);
        }, t, o ? r : void 0, o);
      };
    });
  }), pe.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), pe.holdReady = function (e) {
    e ? pe.readyWait++ : pe.ready(!0);
  }, pe.isArray = Array.isArray, pe.parseJSON = JSON.parse, pe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
    return pe;
  });var Wt = e.jQuery,
      Ut = e.$;return pe.noConflict = function (t) {
    return e.$ === pe && (e.$ = Ut), t && e.jQuery === pe && (e.jQuery = Wt), pe;
  }, t || (e.jQuery = e.$ = pe), pe;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof3(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[typeof e === "undefined" ? "undefined" : _typeof3(e)] || this.dependTypes[typeof e === "undefined" ? "undefined" : _typeof3(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof3(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
}), $(function () {
  $("form[name=login']").validate({ rules: { username: "required", password: { required: !0, password: !0 } }, messages: { username: "Please enter your username", password: "Please provide a password" }, submitHandler: function submitHandler(e) {
      e.submit();
    } });
});var _typeof2 = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof3(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof3(e);
},
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (e) {
  return void 0 === e ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e);
};!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[void 0 === e ? "undefined" : _typeof(e)] || this.dependTypes[void 0 === e ? "undefined" : _typeof(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    _typeof2 = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof3(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof3(e);
};!function (e, t) {
  "use strict";
  "object" == ("undefined" == typeof module ? "undefined" : _typeof2(module)) && "object" == _typeof2(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";
  function n(e, t) {
    var n = (t = t || te).createElement("script");n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
  }function i(e) {
    var t = !!e && "length" in e && e.length,
        n = fe.type(e);return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }function s(e, t, n) {
    return fe.isFunction(t) ? fe.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? fe.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? fe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n;
    }) : Se.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function (e) {
      return oe.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function a(e) {
    var t = {};return fe.each(e.match(Le) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function u(e) {
    return e;
  }function l(e) {
    throw e;
  }function c(e, t, n, i) {
    var r;try {
      e && fe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && fe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }function d() {
    te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), fe.ready();
  }function h() {
    this.expando = fe.expando + h.uid++;
  }function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e);
  }function p(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Oe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = f(n);
      } catch (e) {}Ie.set(e, t, n);
    } else n = void 0;return n;
  }function g(e, t, n, i) {
    var r,
        s = 1,
        o = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return fe.css(e, t, "");
    },
        u = a(),
        l = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
        c = (fe.cssNumber[t] || "px" !== l && +u) && $e.exec(fe.css(e, t));if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;do {
        c /= s = s || ".5", fe.style(e, t, c + l);
      } while (s !== (s = a() / u) && 1 !== s && --o);
    }return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r;
  }function m(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = Ge[i];return r || (t = n.body.appendChild(n.createElement(i)), r = fe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ge[i] = r, r);
  }function v(e, t) {
    for (var n, i, r = [], s = 0, o = e.length; s < o; s++) {
      (i = e[s]).style && (n = i.style.display, t ? ("none" === n && (r[s] = Re.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && Me(i) && (r[s] = m(i))) : "none" !== n && (r[s] = "none", Re.set(i, "display", n)));
    }for (s = 0; s < o; s++) {
      null != r[s] && (e[s].style.display = r[s]);
    }return e;
  }function y(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? fe.merge([e], n) : n;
  }function b(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"));
    }
  }function x(e, t, n, i, r) {
    for (var s, o, a, u, l, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
      if ((s = e[f]) || 0 === s) if ("object" === fe.type(s)) fe.merge(h, s.nodeType ? [s] : s);else if (Ye.test(s)) {
        for (o = o || d.appendChild(t.createElement("div")), a = (Be.exec(s) || ["", ""])[1].toLowerCase(), u = Ue[a] || Ue._default, o.innerHTML = u[1] + fe.htmlPrefilter(s) + u[2], c = u[0]; c--;) {
          o = o.lastChild;
        }fe.merge(h, o.childNodes), (o = d.firstChild).textContent = "";
      } else h.push(t.createTextNode(s));
    }for (d.textContent = "", f = 0; s = h[f++];) {
      if (i && fe.inArray(s, i) > -1) r && r.push(s);else if (l = fe.contains(s.ownerDocument, s), o = y(d.appendChild(s), "script"), l && b(o), n) for (c = 0; s = o[c++];) {
        We.test(s.type || "") && n.push(s);
      }
    }return d;
  }function w() {
    return !0;
  }function C() {
    return !1;
  }function S() {
    try {
      return te.activeElement;
    } catch (e) {}
  }function A(e, t, n, i, r, s) {
    var o, a;if ("object" == (void 0 === t ? "undefined" : _typeof2(t))) {
      "string" != typeof n && (i = i || n, n = void 0);for (a in t) {
        A(e, a, n, i, t[a], s);
      }return e;
    }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = C;else if (!r) return e;return 1 === s && (o = r, r = function r(e) {
      return fe().off(e), o.apply(this, arguments);
    }, r.guid = o.guid || (o.guid = fe.guid++)), e.each(function () {
      fe.event.add(this, t, r, i, n);
    });
  }function k(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? fe(">tbody", e)[0] || e : e;
  }function T(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function E(e) {
    var t = tt.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function L(e, t) {
    var n, i, r, s, o, a, u, l;if (1 === t.nodeType) {
      if (Re.hasData(e) && (s = Re.access(e), o = Re.set(t, s), l = s.events)) {
        delete o.handle, o.events = {};for (r in l) {
          for (n = 0, i = l[r].length; n < i; n++) {
            fe.event.add(t, r, l[r][n]);
          }
        }
      }Ie.hasData(e) && (a = Ie.access(e), u = fe.extend({}, a), Ie.set(t, u));
    }
  }function N(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function q(e, t, i, r) {
    t = re.apply([], t);var s,
        o,
        a,
        u,
        l,
        c,
        d = 0,
        h = e.length,
        f = h - 1,
        p = t[0],
        g = fe.isFunction(p);if (g || h > 1 && "string" == typeof p && !he.checkClone && et.test(p)) return e.each(function (n) {
      var s = e.eq(n);g && (t[0] = p.call(this, n, s.html())), q(s, t, i, r);
    });if (h && (s = x(t, e[0].ownerDocument, !1, e, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
      for (u = (a = fe.map(y(s, "script"), T)).length; d < h; d++) {
        l = s, d !== f && (l = fe.clone(l, !0, !0), u && fe.merge(a, y(l, "script"))), i.call(e[d], l, d);
      }if (u) for (c = a[a.length - 1].ownerDocument, fe.map(a, E), d = 0; d < u; d++) {
        l = a[d], We.test(l.type || "") && !Re.access(l, "globalEval") && fe.contains(c, l) && (l.src ? fe._evalUrl && fe._evalUrl(l.src) : n(l.textContent.replace(nt, ""), c));
      }
    }return e;
  }function j(e, t, n) {
    for (var i, r = t ? fe.filter(t, e) : e, s = 0; null != (i = r[s]); s++) {
      n || 1 !== i.nodeType || fe.cleanData(y(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }function D(e, t, n) {
    var i,
        r,
        s,
        o,
        a = e.style;return (n = n || st(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (o = fe.style(e, t)), !he.pixelMarginRight() && rt.test(o) && it.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o;
  }function R(e, t) {
    return { get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function I(e) {
    if (e in dt) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;) {
      if ((e = ct[n] + t) in dt) return e;
    }
  }function F(e) {
    var t = fe.cssProps[e];return t || (t = fe.cssProps[e] = I(e) || e), t;
  }function O(e, t, n) {
    var i = $e.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function P(e, t, n, i, r) {
    var s,
        o = 0;for (s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) {
      "margin" === n && (o += fe.css(e, n + He[s], !0, r)), i ? ("content" === n && (o -= fe.css(e, "padding" + He[s], !0, r)), "margin" !== n && (o -= fe.css(e, "border" + He[s] + "Width", !0, r))) : (o += fe.css(e, "padding" + He[s], !0, r), "padding" !== n && (o += fe.css(e, "border" + He[s] + "Width", !0, r)));
    }return o;
  }function $(e, t, n) {
    var i,
        r = st(e),
        s = D(e, t, r),
        o = "border-box" === fe.css(e, "boxSizing", !1, r);return rt.test(s) ? s : (i = o && (he.boxSizingReliable() || s === e.style[t]), "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = parseFloat(s) || 0) + P(e, t, n || (o ? "border" : "content"), i, r) + "px");
  }function H(e, t, n, i, r) {
    return new H.prototype.init(e, t, n, i, r);
  }function M() {
    ft && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setTimeout(M, fe.fx.interval), fe.fx.tick());
  }function z() {
    return e.setTimeout(function () {
      ht = void 0;
    }), ht = fe.now();
  }function G(e, t) {
    var n,
        i = 0,
        r = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      r["margin" + (n = He[i])] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }function _(e, t, n) {
    for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++) {
      if (i = r[s].call(n, t, e)) return i;
    }
  }function B(e, t) {
    var n, i, r, s, o;for (n in e) {
      if (i = fe.camelCase(n), r = t[i], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = fe.cssHooks[i]) && "expand" in o) {
        s = o.expand(s), delete e[i];for (n in s) {
          n in e || (e[n] = s[n], t[n] = r);
        }
      } else t[i] = r;
    }
  }function W(e, t, n) {
    var i,
        r,
        s = 0,
        o = W.prefilters.length,
        a = fe.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (r) return !1;for (var t = ht || z(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), s = 0, o = l.tweens.length; s < o; s++) {
        l.tweens[s].run(i);
      }return a.notifyWith(e, [l, i, n]), i < 1 && o ? n : (o || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
    },
        l = a.promise({ elem: e, props: fe.extend({}, t), opts: fe.extend(!0, { specialEasing: {}, easing: fe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ht || z(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = fe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? l.tweens.length : 0;if (r) return this;for (r = !0; n < i; n++) {
          l.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (B(c, l.opts.specialEasing); s < o; s++) {
      if (i = W.prefilters[s].call(l, e, c, l.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(l.elem, l.opts.queue).stop = fe.proxy(i.stop, i)), i;
    }return fe.map(c, _, l), fe.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), fe.fx.timer(fe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }function U(e) {
    return (e.match(Le) || []).join(" ");
  }function Y(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function V(e, t, n, i) {
    var r;if (Array.isArray(t)) fe.each(t, function (t, r) {
      n || kt.test(e) ? i(e, r) : V(e + "[" + ("object" == (void 0 === r ? "undefined" : _typeof2(r)) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== fe.type(t)) i(e, t);else for (r in t) {
      V(e + "[" + r + "]", t[r], n, i);
    }
  }function X(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          r = 0,
          s = t.toLowerCase().match(Le) || [];if (fe.isFunction(n)) for (; i = s[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function K(e, t, n, i) {
    function r(a) {
      var u;return s[a] = !0, fe.each(e[a] || [], function (e, a) {
        var l = a(t, n, i);return "string" != typeof l || o || s[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1);
      }), u;
    }var s = {},
        o = e === Pt;return r(t.dataTypes[0]) || !s["*"] && r("*");
  }function Z(e, t) {
    var n,
        i,
        r = fe.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && fe.extend(!0, e, i), e;
  }function Q(e, t, n) {
    for (var i, r, s, o, a = e.contents, u = e.dataTypes; "*" === u[0];) {
      u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (i) for (r in a) {
      if (a[r] && a[r].test(i)) {
        u.unshift(r);break;
      }
    }if (u[0] in n) s = u[0];else {
      for (r in n) {
        if (!u[0] || e.converters[r + " " + u[0]]) {
          s = r;break;
        }o || (o = r);
      }s = s || o;
    }if (s) return s !== u[0] && u.unshift(s), n[s];
  }function J(e, t, n, i) {
    var r,
        s,
        o,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (o in e.converters) {
      l[o.toLowerCase()] = e.converters[o];
    }for (s = c.shift(); s;) {
      if (e.responseFields[s] && (n[e.responseFields[s]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = s, s = c.shift()) if ("*" === s) s = u;else if ("*" !== u && u !== s) {
        if (!(o = l[u + " " + s] || l["* " + s])) for (r in l) {
          if ((a = r.split(" "))[1] === s && (o = l[u + " " + a[0]] || l["* " + a[0]])) {
            !0 === o ? o = l[r] : !0 !== l[r] && (s = a[0], c.unshift(a[1]));break;
          }
        }if (!0 !== o) if (o && e.throws) t = o(t);else try {
          t = o(t);
        } catch (e) {
          return { state: "parsererror", error: o ? e : "No conversion from " + u + " to " + s };
        }
      }
    }return { state: "success", data: t };
  }var ee = [],
      te = e.document,
      ne = Object.getPrototypeOf,
      ie = ee.slice,
      re = ee.concat,
      se = ee.push,
      oe = ee.indexOf,
      ae = {},
      ue = ae.toString,
      le = ae.hasOwnProperty,
      ce = le.toString,
      de = ce.call(Object),
      he = {},
      fe = function e(t, n) {
    return new e.fn.init(t, n);
  },
      pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ge = /^-ms-/,
      me = /-([a-z])/g,
      ve = function ve(e, t) {
    return t.toUpperCase();
  };fe.fn = fe.prototype = { jquery: "3.2.1", constructor: fe, length: 0, toArray: function toArray() {
      return ie.call(this);
    }, get: function get(e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = fe.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return fe.each(this, e);
    }, map: function map(e) {
      return this.pushStack(fe.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(ie.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: se, sort: ee.sort, splice: ee.splice }, fe.extend = fe.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        s,
        o = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == (void 0 === o ? "undefined" : _typeof2(o)) || fe.isFunction(o) || (o = {}), a === u && (o = this, a--); a < u; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = o[t], o !== (i = e[t]) && (l && i && (fe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, s = n && Array.isArray(n) ? n : []) : s = n && fe.isPlainObject(n) ? n : {}, o[t] = fe.extend(l, s, i)) : void 0 !== i && (o[t] = i));
      }
    }return o;
  }, fe.extend({ expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isFunction: function isFunction(e) {
      return "function" === fe.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      var t = fe.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== de));
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof2(e)) || "function" == typeof e ? ae[ue.call(e)] || "object" : void 0 === e ? "undefined" : _typeof2(e);
    }, globalEval: function globalEval(e) {
      n(e);
    }, camelCase: function camelCase(e) {
      return e.replace(ge, "ms-").replace(me, ve);
    }, each: function each(e, t) {
      var n,
          r = 0;if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(pe, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (i(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : oe.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
        e[r++] = t[i];
      }return e.length = r, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) {
        !t(e[r], r) !== o && i.push(e[r]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          s,
          o = 0,
          a = [];if (i(e)) for (r = e.length; o < r; o++) {
        null != (s = t(e[o], o, n)) && a.push(s);
      } else for (o in e) {
        null != (s = t(e[o], o, n)) && a.push(s);
      }return re.apply([], a);
    }, guid: 1, proxy: function proxy(e, t) {
      var n, i, r;if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return i = ie.call(arguments, 2), r = function r() {
        return e.apply(t || this, i.concat(ie.call(arguments)));
      }, r.guid = e.guid = e.guid || fe.guid++, r;
    }, now: Date.now, support: he }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ee[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    ae["[object " + t + "]"] = t.toLowerCase();
  });var ye = function (e) {
    function t(e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c,
          h,
          f = t && t.ownerDocument,
          p = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;if (!i && ((t ? t.ownerDocument || t : H) !== j && q(t), t = t || j, R)) {
        if (11 !== p && (u = ge.exec(e))) if (r = u[1]) {
          if (9 === p) {
            if (!(o = t.getElementById(r))) return n;if (o.id === r) return n.push(o), n;
          } else if (f && (o = f.getElementById(r)) && P(t, o) && o.id === r) return n.push(o), n;
        } else {
          if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;if ((r = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n;
        }if (x.qsa && !B[e + " "] && (!I || !I.test(e))) {
          if (1 !== p) f = t, h = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = $), s = (c = A(e)).length; s--;) {
              c[s] = "#" + a + " " + d(c[s]);
            }h = c.join(","), f = me.test(e) && l(t.parentNode) || t;
          }if (h) try {
            return K.apply(n, f.querySelectorAll(h)), n;
          } catch (e) {} finally {
            a === $ && t.removeAttribute("id");
          }
        }
      }return T(e.replace(se, "$1"), t, n, i);
    }function n() {
      function e(n, i) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }var t = [];return e;
    }function i(e) {
      return e[$] = !0, e;
    }function r(e) {
      var t = j.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) {
        w.attrHandle[n[i]] = t;
      }
    }function o(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function a(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function u(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var r, s = e([], n.length, t), o = s.length; o--;) {
            n[r = s[o]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }function c() {}function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function h(e, t, n) {
      var i = t.dir,
          r = t.next,
          s = r || i,
          o = n && "parentNode" === s,
          a = z++;return t.first ? function (t, n, r) {
        for (; t = t[i];) {
          if (1 === t.nodeType || o) return e(t, n, r);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            d,
            h = [M, a];if (u) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || o) && e(t, n, u)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || o) if (d = t[$] || (t[$] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((l = c[s]) && l[0] === M && l[1] === a) return h[2] = l[2];if (c[s] = h, h[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function p(e, n, i) {
      for (var r = 0, s = n.length; r < s; r++) {
        t(e, n[r], i);
      }return i;
    }function g(e, t, n, i, r) {
      for (var s, o = [], a = 0, u = e.length, l = null != t; a < u; a++) {
        (s = e[a]) && (n && !n(s, i, r) || (o.push(s), l && t.push(a)));
      }return o;
    }function m(e, t, n, r, s, o) {
      return r && !r[$] && (r = m(r)), s && !s[$] && (s = m(s, o)), i(function (i, o, a, u) {
        var l,
            c,
            d,
            h = [],
            f = [],
            m = o.length,
            v = i || p(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? v : g(v, h, e, a, u),
            b = n ? s || (i ? e : m || r) ? [] : o : y;if (n && n(y, b, a, u), r) for (l = g(b, f), r(l, [], a, u), c = l.length; c--;) {
          (d = l[c]) && (b[f[c]] = !(y[f[c]] = d));
        }if (i) {
          if (s || e) {
            if (s) {
              for (l = [], c = b.length; c--;) {
                (d = b[c]) && l.push(y[c] = d);
              }s(null, b = [], l, u);
            }for (c = b.length; c--;) {
              (d = b[c]) && (l = s ? Q(i, d) : h[c]) > -1 && (i[l] = !(o[l] = d));
            }
          }
        } else b = g(b === o ? b.splice(m, b.length) : b), s ? s(null, o, b, u) : K.apply(o, b);
      });
    }function v(e) {
      for (var t, n, i, r = e.length, s = w.relative[e[0].type], o = s || w.relative[" "], a = s ? 1 : 0, u = h(function (e) {
        return e === t;
      }, o, !0), l = h(function (e) {
        return Q(t, e) > -1;
      }, o, !0), c = [function (e, n, i) {
        var r = !s && (i || n !== E) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));return t = null, r;
      }]; a < r; a++) {
        if (n = w.relative[e[a].type]) c = [h(f(c), n)];else {
          if ((n = w.filter[e[a].type].apply(null, e[a].matches))[$]) {
            for (i = ++a; i < r && !w.relative[e[i].type]; i++) {}return m(a > 1 && f(c), a > 1 && d(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && d(e));
          }c.push(n);
        }
      }return f(c);
    }function y(e, n) {
      var r = n.length > 0,
          s = e.length > 0,
          o = function o(i, _o2, a, u, l) {
        var c,
            d,
            h,
            f = 0,
            p = "0",
            m = i && [],
            v = [],
            y = E,
            b = i || s && w.find.TAG("*", l),
            x = M += null == y ? 1 : Math.random() || .1,
            C = b.length;for (l && (E = _o2 === j || _o2 || l); p !== C && null != (c = b[p]); p++) {
          if (s && c) {
            for (d = 0, _o2 || c.ownerDocument === j || (q(c), a = !R); h = e[d++];) {
              if (h(c, _o2 || j, a)) {
                u.push(c);break;
              }
            }l && (M = x);
          }r && ((c = !h && c) && f--, i && m.push(c));
        }if (f += p, r && p !== f) {
          for (d = 0; h = n[d++];) {
            h(m, v, _o2, a);
          }if (i) {
            if (f > 0) for (; p--;) {
              m[p] || v[p] || (v[p] = V.call(u));
            }v = g(v);
          }K.apply(u, v), l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(u);
        }return l && (M = x, E = y), m;
      };return r ? i(o) : o;
    }var b,
        x,
        w,
        C,
        S,
        A,
        k,
        T,
        E,
        L,
        N,
        q,
        j,
        D,
        R,
        I,
        F,
        O,
        P,
        $ = "sizzle" + 1 * new Date(),
        H = e.document,
        M = 0,
        z = 0,
        G = n(),
        _ = n(),
        B = n(),
        W = function W(e, t) {
      return e === t && (N = !0), 0;
    },
        U = {}.hasOwnProperty,
        Y = [],
        V = Y.pop,
        X = Y.push,
        K = Y.push,
        Z = Y.slice,
        Q = function Q(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        oe = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        le = new RegExp(ie),
        ce = new RegExp("^" + te + "$"),
        de = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
        he = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        pe = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        ye = function ye(e, t, n) {
      var i = "0x" + t - 65536;return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        xe = function xe(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        we = function we() {
      q();
    },
        Ce = h(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      K.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType;
    } catch (e) {
      K = { apply: Y.length ? function (e, t) {
          X.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }x = t.support = {}, S = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, q = t.setDocument = function (e) {
      var t,
          n,
          i = e ? e.ownerDocument || e : H;return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, D = j.documentElement, R = !S(j), H !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), x.getElementsByTagName = r(function (e) {
        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
      }), x.getElementsByClassName = pe.test(j.getElementsByClassName), x.getById = r(function (e) {
        return D.appendChild(e).id = $, !j.getElementsByName || !j.getElementsByName($).length;
      }), x.getById ? (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && R) {
          var n,
              i,
              r,
              s = t.getElementById(e);if (s) {
            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];for (r = t.getElementsByName(e), i = 0; s = r[i++];) {
              if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
            }
          }return [];
        }
      }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            s = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = s[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return s;
      }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && R) return t.getElementsByClassName(e);
      }, F = [], I = [], (x.qsa = pe.test(j.querySelectorAll)) && (r(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || I.push(".#.+[+~]");
      }), r(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = j.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:");
      })), (x.matchesSelector = pe.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
        x.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), F.push("!=", ie);
      }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = pe.test(D.compareDocumentPosition), P = t || pe.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, W = t ? function (e, t) {
        if (e === t) return N = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === H && P(H, e) ? -1 : t === j || t.ownerDocument === H && P(H, t) ? 1 : L ? Q(L, e) - Q(L, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return N = !0, 0;var n,
            i = 0,
            r = e.parentNode,
            s = t.parentNode,
            a = [e],
            u = [t];if (!r || !s) return e === j ? -1 : t === j ? 1 : r ? -1 : s ? 1 : L ? Q(L, e) - Q(L, t) : 0;if (r === s) return o(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          u.unshift(n);
        }for (; a[i] === u[i];) {
          i++;
        }return i ? o(a[i], u[i]) : a[i] === H ? -1 : u[i] === H ? 1 : 0;
      }, j) : j;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== j && q(e), n = n.replace(ue, "='$1']"), x.matchesSelector && R && !B[n + " "] && (!F || !F.test(n)) && (!I || !I.test(n))) try {
        var i = O.call(e, n);if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return t(n, j, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== j && q(e), P(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== j && q(e);var n = w.attrHandle[t.toLowerCase()],
          i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;return void 0 !== i ? i : x.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.escape = function (e) {
      return (e + "").replace(be, xe);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          r = 0;if (N = !x.detectDuplicates, L = !x.sortStable && e.slice(0), e.sort(W), N) {
        for (; t = e[r++];) {
          t === e[r] && (i = n.push(r));
        }for (; i--;) {
          e.splice(n[i], 1);
        }
      }return L = null, e;
    }, C = t.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += C(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += C(t);
      }return n;
    }, (w = t.selectors = { cacheLength: 50, createPseudo: i, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ve, ye).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = G[e + " "];return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && G(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, i) {
          return function (r) {
            var s = t.attr(r, e);return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, r) {
          var s = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                d,
                h,
                f,
                p,
                g = s !== o ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                b = !1;if (m) {
              if (s) {
                for (; g;) {
                  for (h = t; h = h[g];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }p = g = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [o ? m.firstChild : m.lastChild], o && y) {
                for (b = (f = (l = (c = (d = (h = m)[$] || (h[$] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === M && l[1]) && l[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) {
                  if (1 === h.nodeType && ++b && h === t) {
                    c[e] = [M, f, b];break;
                  }
                }
              } else if (y && (h = t, d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), l = c[e] || [], f = l[0] === M && l[1], b = f), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[$] || (h[$] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [M, b]), h !== t));) {}return (b -= r) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var r,
              s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return s[$] ? s(n) : s.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, r = s(e, n), o = r.length; o--;) {
              e[i = Q(e, r[o])] = !(t[i] = r[o]);
            }
          }) : function (e) {
            return s(e, 0, r);
          }) : s;
        } }, pseudos: { not: i(function (e) {
          var t = [],
              n = [],
              r = k(e.replace(se, "$1"));return r[$] ? i(function (e, t, n, i) {
            for (var s, o = r(e, null, i, []), a = e.length; a--;) {
              (s = o[a]) && (e[a] = !(t[a] = s));
            }
          }) : function (e, i, s) {
            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop();
          };
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), contains: i(function (e) {
          return e = e.replace(ve, ye), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
          };
        }), lang: i(function (e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
            var n;do {
              if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === D;
        }, focus: function focus(e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: a(!1), disabled: a(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !w.pseudos.empty(e);
        }, header: function header(e) {
          return fe.test(e.nodeName);
        }, input: function input(e) {
          return he.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: u(function () {
          return [0];
        }), last: u(function (e, t) {
          return [t - 1];
        }), eq: u(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: u(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: u(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: u(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = w.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }(b);
    }for (b in { submit: !0, reset: !0 }) {
      w.pseudos[b] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }(b);
    }return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), A = t.tokenize = function (e, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c = _[e + " "];if (c) return n ? 0 : c.slice(0);for (a = e, u = [], l = w.preFilter; a;) {
        i && !(r = oe.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(s = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), s.push({ value: i, type: r[0].replace(se, " ") }), a = a.slice(i.length));for (o in w.filter) {
          !(r = de[o].exec(a)) || l[o] && !(r = l[o](r)) || (i = r.shift(), s.push({ value: i, type: o, matches: r }), a = a.slice(i.length));
        }if (!i) break;
      }return n ? a.length : a ? t.error(e) : _(e, u).slice(0);
    }, k = t.compile = function (e, t) {
      var n,
          i = [],
          r = [],
          s = B[e + " "];if (!s) {
        for (t || (t = A(e)), n = t.length; n--;) {
          (s = v(t[n]))[$] ? i.push(s) : r.push(s);
        }(s = B(e, y(r, i))).selector = e;
      }return s;
    }, T = t.select = function (e, t, n, i) {
      var r,
          s,
          o,
          a,
          u,
          c = "function" == typeof e && e,
          h = !i && A(e = c.selector || e);if (n = n || [], 1 === h.length) {
        if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (o = s[0]).type && 9 === t.nodeType && R && w.relative[s[1].type]) {
          if (!(t = (w.find.ID(o.matches[0].replace(ve, ye), t) || [])[0])) return n;c && (t = t.parentNode), e = e.slice(s.shift().value.length);
        }for (r = de.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);) {
          if ((u = w.find[a]) && (i = u(o.matches[0].replace(ve, ye), me.test(s[0].type) && l(t.parentNode) || t))) {
            if (s.splice(r, 1), !(e = i.length && d(s))) return K.apply(n, i), n;break;
          }
        }
      }return (c || k(e, h))(i, t, !R, n, !t || me.test(e) && l(t.parentNode) || t), n;
    }, x.sortStable = $.split("").sort(W).join("") === $, x.detectDuplicates = !!N, q(), x.sortDetached = r(function (e) {
      return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
    }), r(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || s("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), x.attributes && r(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || s("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), r(function (e) {
      return null == e.getAttribute("disabled");
    }) || s(J, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), t;
  }(e);fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains, fe.escapeSelector = ye.escape;var be = function be(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && fe(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      xe = function xe(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      we = fe.expr.match.needsContext,
      Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Se = /^.[^:#\[\.,]*$/;fe.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, fe.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          r = this;if ("string" != typeof e) return this.pushStack(fe(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (fe.contains(r[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        fe.find(e, r[t], n);
      }return i > 1 ? fe.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(s(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(s(this, e || [], !0));
    }, is: function is(e) {
      return !!s(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length;
    } });var Ae,
      ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(fe.fn.init = function (e, t, n) {
    var i, r;if (!e) return this;if (n = n || Ae, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && fe.isPlainObject(t)) for (i in t) {
          fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this);
  }).prototype = fe.fn, Ae = fe(te);var Te = /^(?:parents|prev(?:Until|All))/,
      Ee = { children: !0, contents: !0, next: !0, prev: !0 };fe.fn.extend({ has: function has(e) {
      var t = fe(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (fe.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          r = this.length,
          s = [],
          o = "string" != typeof e && fe(e);if (!we.test(e)) for (; i < r; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
            s.push(n);break;
          }
        }
      }return this.pushStack(s.length > 1 ? fe.uniqueSort(s) : s);
    }, index: function index(e) {
      return e ? "string" == typeof e ? oe.call(fe(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), fe.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return be(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return be(e, "parentNode", n);
    }, next: function next(e) {
      return o(e, "nextSibling");
    }, prev: function prev(e) {
      return o(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return be(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return be(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return be(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return be(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return xe((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return xe(e.firstChild);
    }, contents: function contents(e) {
      return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), fe.merge([], e.childNodes));
    } }, function (e, t) {
    fe.fn[e] = function (n, i) {
      var r = fe.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Ee[e] || fe.uniqueSort(r), Te.test(e) && r.reverse()), this.pushStack(r);
    };
  });var Le = /[^\x20\t\r\n\f]+/g;fe.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : fe.extend({}, e);var t,
        n,
        i,
        r,
        s = [],
        o = [],
        u = -1,
        l = function l() {
      for (r = r || e.once, i = t = !0; o.length; u = -1) {
        for (n = o.shift(); ++u < s.length;) {
          !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, r && (s = n ? [] : "");
    },
        c = { add: function add() {
        return s && (n && !t && (u = s.length - 1, o.push(n)), function t(n) {
          fe.each(n, function (n, i) {
            fe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== fe.type(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return fe.each(arguments, function (e, t) {
          for (var n; (n = fe.inArray(t, s, n)) > -1;) {
            s.splice(n, 1), n <= u && u--;
          }
        }), this;
      }, has: function has(e) {
        return e ? fe.inArray(e, s) > -1 : s.length > 0;
      }, empty: function empty() {
        return s && (s = []), this;
      }, disable: function disable() {
        return r = o = [], s = n = "", this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return r = o = [], n || t || (s = n = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(e, n) {
        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, fe.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2], ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = { state: function state() {
          return i;
        }, always: function always() {
          return s.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return r.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return fe.Deferred(function (t) {
            fe.each(n, function (n, i) {
              var r = fe.isFunction(e[i[4]]) && e[i[4]];s[i[1]](function () {
                var e = r && r.apply(this, arguments);e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, r) {
          function s(t, n, i, r) {
            return function () {
              var a = this,
                  c = arguments,
                  d = function d() {
                var e, d;if (!(t < o)) {
                  if ((e = i.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");d = e && ("object" == (void 0 === e ? "undefined" : _typeof2(e)) || "function" == typeof e) && e.then, fe.isFunction(d) ? r ? d.call(e, s(o, n, u, r), s(o, n, l, r)) : (o++, d.call(e, s(o, n, u, r), s(o, n, l, r), s(o, n, u, n.notifyWith))) : (i !== u && (a = void 0, c = [e]), (r || n.resolveWith)(a, c));
                }
              },
                  h = r ? d : function () {
                try {
                  d();
                } catch (e) {
                  fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= o && (i !== l && (a = void 0, c = [e]), n.rejectWith(a, c));
                }
              };t ? h() : (fe.Deferred.getStackHook && (h.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(h));
            };
          }var o = 0;return fe.Deferred(function (e) {
            n[0][3].add(s(0, e, fe.isFunction(r) ? r : u, e.notifyWith)), n[1][3].add(s(0, e, fe.isFunction(t) ? t : u)), n[2][3].add(s(0, e, fe.isFunction(i) ? i : l));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? fe.extend(e, r) : r;
        } },
          s = {};return fe.each(n, function (e, t) {
        var o = t[2],
            a = t[5];r[t[1]] = o.add, a && o.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = o.fireWith;
      }), r.promise(s), t && t.call(s, s), s;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          r = ie.call(arguments),
          s = fe.Deferred(),
          o = function o(e) {
        return function (n) {
          i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || s.resolveWith(i, r);
        };
      };if (t <= 1 && (c(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || fe.isFunction(r[n] && r[n].then))) return s.then();for (; n--;) {
        c(r[n], o(n), s.reject);
      }return s.promise();
    } });var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;fe.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, fe.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var qe = fe.Deferred();fe.fn.ready = function (e) {
    return qe.then(e).catch(function (e) {
      fe.readyException(e);
    }), this;
  }, fe.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || qe.resolveWith(te, [fe]));
    } }), fe.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(fe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));var je = function e(t, n, i, r, s, o, a) {
    var u = 0,
        l = t.length,
        c = null == i;if ("object" === fe.type(i)) {
      s = !0;for (u in i) {
        e(t, n, u, i[u], !0, o, a);
      }
    } else if (void 0 !== r && (s = !0, fe.isFunction(r) || (a = !0), c && (a ? (n.call(t, r), n = null) : (c = n, n = function n(e, t, _n3) {
      return c.call(fe(e), _n3);
    })), n)) for (; u < l; u++) {
      n(t[u], i, a ? r : r.call(t[u], u, n(t[u], i)));
    }return s ? t : c ? n.call(t) : l ? n(t[0], i) : o;
  },
      De = function De(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };h.uid = 1, h.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          r = this.cache(e);if ("string" == typeof t) r[fe.camelCase(t)] = n;else for (i in t) {
        r[fe.camelCase(i)] = t[i];
      }return r;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t), t = t in i ? [t] : t.match(Le) || []), n = t.length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !fe.isEmptyObject(t);
    } };var Re = new h(),
      Ie = new h(),
      Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Oe = /[A-Z]/g;fe.extend({ hasData: function hasData(e) {
      return Ie.hasData(e) || Re.hasData(e);
    }, data: function data(e, t, n) {
      return Ie.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Ie.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Re.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Re.remove(e, t);
    } }), fe.fn.extend({ data: function data(e, t) {
      var n,
          i,
          r,
          s = this[0],
          o = s && s.attributes;if (void 0 === e) {
        if (this.length && (r = Ie.get(s), 1 === s.nodeType && !Re.get(s, "hasDataAttrs"))) {
          for (n = o.length; n--;) {
            o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = fe.camelCase(i.slice(5)), p(s, i, r[i]));
          }Re.set(s, "hasDataAttrs", !0);
        }return r;
      }return "object" == (void 0 === e ? "undefined" : _typeof2(e)) ? this.each(function () {
        Ie.set(this, e);
      }) : je(this, function (t) {
        var n;if (s && void 0 === t) {
          if (void 0 !== (n = Ie.get(s, e))) return n;if (void 0 !== (n = p(s, e))) return n;
        } else this.each(function () {
          Ie.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Ie.remove(this, e);
      });
    } }), fe.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || Array.isArray(n) ? i = Re.access(e, t, fe.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = fe.queue(e, t),
          i = n.length,
          r = n.shift(),
          s = fe._queueHooks(e, t);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function () {
        fe.dequeue(e, t);
      }, s)), !i && s && s.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Re.get(e, n) || Re.access(e, n, { empty: fe.Callbacks("once memory").add(function () {
          Re.remove(e, [t + "queue", n]);
        }) });
    } }), fe.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = fe.queue(this, e, t);fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        fe.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          r = fe.Deferred(),
          s = this,
          o = this.length,
          a = function a() {
        --i || r.resolveWith(s, [s]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
        (n = Re.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), r.promise(t);
    } });var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      $e = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
      He = ["Top", "Right", "Bottom", "Left"],
      Me = function Me(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display");
  },
      ze = function ze(e, t, n, i) {
    var r,
        s,
        o = {};for (s in t) {
      o[s] = e.style[s], e.style[s] = t[s];
    }r = n.apply(e, i || []);for (s in t) {
      e.style[s] = o[s];
    }return r;
  },
      Ge = {};fe.fn.extend({ show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Me(this) ? fe(this).show() : fe(this).hide();
      });
    } });var _e = /^(?:checkbox|radio)$/i,
      Be = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      We = /^$|\/(?:java|ecma)script/i,
      Ue = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;var Ye = /<|&#?\w+;/;!function () {
    var e = te.createDocumentFragment().appendChild(te.createElement("div")),
        t = te.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var Ve = te.documentElement,
      Xe = /^key/,
      Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;fe.event = { global: {}, add: function add(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Re.get(e);if (m) for (n.handler && (s = n, n = s.handler, r = s.selector), r && fe.find.matchesSelector(Ve, r), n.guid || (n.guid = fe.guid++), (u = m.events) || (u = m.events = {}), (o = m.handle) || (o = m.handle = function (t) {
        return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0;
      }), l = (t = (t || "").match(Le) || [""]).length; l--;) {
        f = g = (a = Ze.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = fe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = fe.event.special[f] || {}, c = fe.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && fe.expr.match.needsContext.test(r), namespace: p.join(".") }, s), (h = u[f]) || (h = u[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), fe.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          g,
          m = Re.hasData(e) && Re.get(e);if (m && (u = m.events)) {
        for (l = (t = (t || "").match(Le) || [""]).length; l--;) {
          if (a = Ze.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
            for (d = fe.event.special[f] || {}, h = u[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) {
              c = h[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
            }o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || fe.removeEvent(e, f, m.handle), delete u[f]);
          } else for (f in u) {
            fe.event.remove(e, f + t[l], n, i, !0);
          }
        }fe.isEmptyObject(u) && Re.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a = fe.event.fix(e),
          u = new Array(arguments.length),
          l = (Re.get(this, "events") || {})[a.type] || [],
          c = fe.event.special[a.type] || {};for (u[0] = a, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (o = fe.event.handlers.call(this, a, l), t = 0; (r = o[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((fe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          r,
          s,
          o,
          a = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (s = [], o = {}, n = 0; n < u; n++) {
            void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? fe(r, this).index(l) > -1 : fe.find(r, this, null, [l]).length), o[r] && s.push(i);
          }s.length && a.push({ elem: l, handlers: s });
        }
      }return l = this, u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(fe.Event.prototype, e, { enumerable: !0, configurable: !0, get: fe.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[fe.expando] ? e : new fe.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== S() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === S() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return r(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, fe.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, fe.Event = function (e, t) {
    return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void (this[fe.expando] = !0)) : new fe.Event(e, t);
  }, fe.Event.prototype = { constructor: fe.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, fe.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && Xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, fe.event.addProp), fe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    fe.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = this,
            r = e.relatedTarget,
            s = e.handleObj;return r && (r === i || fe.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n;
      } };
  }), fe.fn.extend({ on: function on(e, t, n, i) {
      return A(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return A(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (void 0 === e ? "undefined" : _typeof2(e))) {
        for (r in e) {
          this.off(r, t, e[r]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {
        fe.event.remove(this, e, n, t);
      });
    } });var Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Je = /<script|<style|<link/i,
      et = /checked\s*(?:[^=]|=\s*.checked.)/i,
      tt = /^true\/(.*)/,
      nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;fe.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Qe, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          r,
          s,
          o,
          a = e.cloneNode(!0),
          u = fe.contains(e.ownerDocument, e);if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e))) for (o = y(a), s = y(e), i = 0, r = s.length; i < r; i++) {
        N(s[i], o[i]);
      }if (t) if (n) for (s = s || y(e), o = o || y(a), i = 0, r = s.length; i < r; i++) {
        L(s[i], o[i]);
      } else L(e, a);return (o = y(a, "script")).length > 0 && b(o, !u && y(e, "script")), a;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, r = fe.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (De(n)) {
          if (t = n[Re.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
            }n[Re.expando] = void 0;
          }n[Ie.expando] && (n[Ie.expando] = void 0);
        }
      }
    } }), fe.fn.extend({ detach: function detach(e) {
      return j(this, e, !0);
    }, remove: function remove(e) {
      return j(this, e);
    }, text: function text(e) {
      return je(this, function (e) {
        return void 0 === e ? fe.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return q(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return q(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return q(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (fe.cleanData(y(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return fe.clone(this, e, t);
      });
    }, html: function html(e) {
      return je(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Je.test(e) && !Ue[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = fe.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (fe.cleanData(y(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return q(this, arguments, function (t) {
        var n = this.parentNode;fe.inArray(this, e) < 0 && (fe.cleanData(y(this)), n && n.replaceChild(t, this));
      }, e);
    } }), fe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    fe.fn[e] = function (e) {
      for (var n, i = [], r = fe(e), s = r.length - 1, o = 0; o <= s; o++) {
        n = o === s ? this : this.clone(!0), fe(r[o])[t](n), se.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var it = /^margin/,
      rt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
      st = function st(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  };!function () {
    function t() {
      if (a) {
        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ve.appendChild(o);var t = e.getComputedStyle(a);n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Ve.removeChild(o), a = null;
      }
    }var n,
        i,
        r,
        s,
        o = te.createElement("div"),
        a = te.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), fe.extend(he, { pixelPosition: function pixelPosition() {
        return t(), n;
      }, boxSizingReliable: function boxSizingReliable() {
        return t(), i;
      }, pixelMarginRight: function pixelMarginRight() {
        return t(), r;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), s;
      } }));
  }();var ot = /^(none|table(?!-c[ea]).+)/,
      at = /^--/,
      ut = { position: "absolute", visibility: "hidden", display: "block" },
      lt = { letterSpacing: "0", fontWeight: "400" },
      ct = ["Webkit", "Moz", "ms"],
      dt = te.createElement("div").style;fe.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = D(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            s,
            o,
            a = fe.camelCase(t),
            u = at.test(t),
            l = e.style;return u || (t = F(a)), o = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : ("string" === (s = void 0 === n ? "undefined" : _typeof2(n)) && (r = $e.exec(n)) && r[1] && (n = g(e, t, r), s = "number"), void (null != n && n === n && ("number" === s && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))));
      }
    }, css: function css(e, t, n, i) {
      var r,
          s,
          o,
          a = fe.camelCase(t);return at.test(t) || (t = F(a)), (o = fe.cssHooks[t] || fe.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = D(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r;
    } }), fe.each(["height", "width"], function (e, t) {
    fe.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !ot.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, i) : ze(e, ut, function () {
          return $(e, t, i);
        });
      }, set: function set(e, n, i) {
        var r,
            s = i && st(e),
            o = i && P(e, t, i, "border-box" === fe.css(e, "boxSizing", !1, s), s);return o && (r = $e.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), O(0, n, o);
      } };
  }), fe.cssHooks.marginLeft = R(he.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), fe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    fe.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          r[e + He[i] + t] = s[i] || s[i - 2] || s[0];
        }return r;
      } }, it.test(e) || (fe.cssHooks[e + t].set = O);
  }), fe.fn.extend({ css: function css(e, t) {
      return je(this, function (e, t, n) {
        var i,
            r,
            s = {},
            o = 0;if (Array.isArray(t)) {
          for (i = st(e), r = t.length; o < r; o++) {
            s[t[o]] = fe.css(e, t[o], !1, i);
          }return s;
        }return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t);
      }, e, t, arguments.length > 1);
    } }), fe.Tween = H, H.prototype = { constructor: H, init: function init(e, t, n, i, r, s) {
      this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (fe.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = H.propHooks[this.prop];return e && e.get ? e.get(this) : H.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = H.propHooks[this.prop];return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
    } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit);
      } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, fe.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, fe.fx = H.prototype.init, fe.fx.step = {};var ht,
      ft,
      pt = /^(?:toggle|show|hide)$/,
      gt = /queueHooks$/;fe.Animation = fe.extend(W, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return g(n.elem, e, $e.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);for (var n, i = 0, r = e.length; i < r; i++) {
        n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l,
          c,
          d = "width" in t || "height" in t,
          h = this,
          f = {},
          p = e.style,
          g = e.nodeType && Me(e),
          m = Re.get(e, "fxshow");n.queue || (null == (o = fe._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
        o.unqueued || a();
      }), o.unqueued++, h.always(function () {
        h.always(function () {
          o.unqueued--, fe.queue(e, "fx").length || o.empty.fire();
        });
      }));for (i in t) {
        if (r = t[i], pt.test(r)) {
          if (delete t[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;g = !0;
          }f[i] = m && m[i] || fe.style(e, i);
        }
      }if ((u = !fe.isEmptyObject(t)) || !fe.isEmptyObject(f)) {
        d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = m && m.display) && (l = Re.get(e, "display")), "none" === (c = fe.css(e, "display")) && (l ? c = l : (v([e], !0), l = e.style.display || l, c = fe.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === fe.css(e, "float") && (u || (h.done(function () {
          p.display = l;
        }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), u = !1;for (i in f) {
          u || (m ? "hidden" in m && (g = m.hidden) : m = Re.access(e, "fxshow", { display: l }), s && (m.hidden = !g), g && v([e], !0), h.done(function () {
            g || v([e]), Re.remove(e, "fxshow");for (i in f) {
              fe.style(e, i, f[i]);
            }
          })), u = _(g ? m[i] : 0, i, h), i in m || (m[i] = u.start, g && (u.end = u.start, u.start = 0));
        }
      }
    }], prefilter: function prefilter(e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e);
    } }), fe.speed = function (e, t, n) {
    var i = e && "object" == (void 0 === e ? "undefined" : _typeof2(e)) ? fe.extend({}, e) : { complete: n || !n && t || fe.isFunction(e) && e, duration: e, easing: n && t || t && !fe.isFunction(t) && t };return fe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue);
    }, i;
  }, fe.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(Me).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var r = fe.isEmptyObject(e),
          s = fe.speed(t, n, i),
          o = function o() {
        var t = W(this, fe.extend({}, e), s);(r || Re.get(this, "finish")) && t.stop(!0);
      };return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            s = fe.timers,
            o = Re.get(this);if (r) o[r] && o[r].stop && i(o[r]);else for (r in o) {
          o[r] && o[r].stop && gt.test(r) && i(o[r]);
        }for (r = s.length; r--;) {
          s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
        }!t && n || fe.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Re.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            s = fe.timers,
            o = i ? i.length : 0;for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) {
          s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
        }for (t = 0; t < o; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), fe.each(["toggle", "show", "hide"], function (e, t) {
    var n = fe.fn[t];fe.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, i, r);
    };
  }), fe.each({ slideDown: G("show"), slideUp: G("hide"), slideToggle: G("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    fe.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), fe.timers = [], fe.fx.tick = function () {
    var e,
        t = 0,
        n = fe.timers;for (ht = fe.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || fe.fx.stop(), ht = void 0;
  }, fe.fx.timer = function (e) {
    fe.timers.push(e), fe.fx.start();
  }, fe.fx.interval = 13, fe.fx.start = function () {
    ft || (ft = !0, M());
  }, fe.fx.stop = function () {
    ft = null;
  }, fe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, fe.fn.delay = function (t, n) {
    return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = te.createElement("input"),
        t = te.createElement("select").appendChild(te.createElement("option"));e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", he.radioValue = "t" === e.value;
  }();var mt,
      vt = fe.expr.attrHandle;fe.fn.extend({ attr: function attr(e, t) {
      return je(this, fe.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        fe.removeAttr(this, e);
      });
    } }), fe.extend({ attr: function attr(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === s && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!he.radioValue && "radio" === t && r(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          r = t && t.match(Le);if (r && 1 === e.nodeType) for (; n = r[i++];) {
        e.removeAttribute(n);
      }
    } }), mt = { set: function set(e, t, n) {
      return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = vt[t] || fe.find.attr;vt[t] = function (e, t, i) {
      var r,
          s,
          o = t.toLowerCase();return i || (s = vt[o], vt[o] = r, r = null != n(e, t, i) ? o : null, vt[o] = s), r;
    };
  });var yt = /^(?:input|select|textarea|button)$/i,
      bt = /^(?:a|area)$/i;fe.fn.extend({ prop: function prop(e, t) {
      return je(this, fe.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[fe.propFix[e] || e];
      });
    } }), fe.extend({ prop: function prop(e, t, n) {
      var i,
          r,
          s = e.nodeType;if (3 !== s && 8 !== s && 2 !== s) return 1 === s && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = fe.find.attr(e, "tabindex");return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), he.optSelected || (fe.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    fe.propFix[this.toLowerCase()] = this;
  }), fe.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (fe.isFunction(e)) return this.each(function (t) {
        fe(this).addClass(e.call(this, t, Y(this)));
      });if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          s,
          o,
          a,
          u = 0;if (fe.isFunction(e)) return this.each(function (t) {
        fe(this).removeClass(e.call(this, t, Y(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++];) {
        if (r = Y(n), i = 1 === n.nodeType && " " + U(r) + " ") {
          for (o = 0; s = t[o++];) {
            for (; i.indexOf(" " + s + " ") > -1;) {
              i = i.replace(" " + s + " ", " ");
            }
          }r !== (a = U(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = void 0 === e ? "undefined" : _typeof2(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function (n) {
        fe(this).toggleClass(e.call(this, n, Y(this), t), t);
      }) : this.each(function () {
        var t, i, r, s;if ("string" === n) for (i = 0, r = fe(this), s = e.match(Le) || []; t = s[i++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = Y(this)) && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Re.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + U(Y(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var xt = /\r/g;fe.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          r = this[0];return arguments.length ? (i = fe.isFunction(e), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? e.call(this, n, fe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = fe.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xt, "") : null == n ? "" : n : void 0;
    } }), fe.extend({ valHooks: { option: { get: function get(e) {
          var t = fe.find.attr(e, "value");return null != t ? t : U(fe.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              s = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              u = a ? null : [],
              l = a ? o + 1 : s.length;for (i = o < 0 ? l : a ? o : 0; i < l; i++) {
            if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
              if (t = fe(n).val(), a) return t;u.push(t);
            }
          }return u;
        }, set: function set(e, t) {
          for (var n, i, r = e.options, s = fe.makeArray(t), o = r.length; o--;) {
            ((i = r[o]).selected = fe.inArray(fe.valHooks.option.get(i), s) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), s;
        } } } }), fe.each(["radio", "checkbox"], function () {
    fe.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1;
      } }, he.checkOn || (fe.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var wt = /^(?:focusinfocus|focusoutblur)$/;fe.extend(fe.event, { trigger: function trigger(t, n, i, r) {
      var s,
          o,
          a,
          u,
          l,
          c,
          d,
          h = [i || te],
          f = le.call(t, "type") ? t.type : t,
          p = le.call(t, "namespace") ? t.namespace.split(".") : [];if (o = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == (void 0 === t ? "undefined" : _typeof2(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), d = fe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!r && !d.noBubble && !fe.isWindow(i)) {
          for (u = d.delegateType || f, wt.test(u + f) || (o = o.parentNode); o; o = o.parentNode) {
            h.push(o), a = o;
          }a === (i.ownerDocument || te) && h.push(a.defaultView || a.parentWindow || e);
        }for (s = 0; (o = h[s++]) && !t.isPropagationStopped();) {
          t.type = s > 1 ? u : d.bindType || f, (c = (Re.get(o, "events") || {})[t.type] && Re.get(o, "handle")) && c.apply(o, n), (c = l && o[l]) && c.apply && De(o) && (t.result = c.apply(o, n), !1 === t.result && t.preventDefault());
        }return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !De(i) || l && fe.isFunction(i[f]) && !fe.isWindow(i) && ((a = i[l]) && (i[l] = null), fe.event.triggered = f, i[f](), fe.event.triggered = void 0, a && (i[l] = a)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = fe.extend(new fe.Event(), n, { type: e, isSimulated: !0 });fe.event.trigger(i, null, t);
    } }), fe.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        fe.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return fe.event.trigger(e, t, n, !0);
    } }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    fe.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), fe.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), he.focusin = "onfocusin" in e, he.focusin || fe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      fe.event.simulate(t, e.target, fe.event.fix(e));
    };fe.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = Re.access(i, t);r || i.addEventListener(e, n, !0), Re.access(i, t, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = Re.access(i, t) - 1;r ? Re.access(i, t, r) : (i.removeEventListener(e, n, !0), Re.remove(i, t));
      } };
  });var Ct = e.location,
      St = fe.now(),
      At = /\?/;fe.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n;
  };var kt = /\[\]$/,
      Tt = /\r?\n/g,
      Et = /^(?:submit|button|image|reset|file)$/i,
      Lt = /^(?:input|select|textarea|keygen)/i;fe.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      var n = fe.isFunction(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      V(n, e[n], t, r);
    }return i.join("&");
  }, fe.fn.extend({ serialize: function serialize() {
      return fe.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = fe.prop(this, "elements");return e ? fe.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !fe(this).is(":disabled") && Lt.test(this.nodeName) && !Et.test(e) && (this.checked || !_e.test(e));
      }).map(function (e, t) {
        var n = fe(this).val();return null == n ? null : Array.isArray(n) ? fe.map(n, function (e) {
          return { name: t.name, value: e.replace(Tt, "\r\n") };
        }) : { name: t.name, value: n.replace(Tt, "\r\n") };
      }).get();
    } });var Nt = /%20/g,
      qt = /#.*$/,
      jt = /([?&])_=[^&]*/,
      Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      It = /^(?:GET|HEAD)$/,
      Ft = /^\/\//,
      Ot = {},
      Pt = {},
      $t = "*/".concat("*"),
      Ht = te.createElement("a");Ht.href = Ct.href, fe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Rt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": fe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Z(Z(e, fe.ajaxSettings), t) : Z(fe.ajaxSettings, e);
    }, ajaxPrefilter: X(Ot), ajaxTransport: X(Pt), ajax: function ajax(t, n) {
      function i(t, n, i, a) {
        var l,
            h,
            f,
            x,
            w,
            C = n;c || (c = !0, u && e.clearTimeout(u), r = void 0, o = a || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = Q(p, S, i)), x = J(p, x, S, l), l ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (fe.lastModified[s] = w), (w = S.getResponseHeader("etag")) && (fe.etag[s] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, h = x.data, f = x.error, l = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", l ? v.resolveWith(g, [h, C, S]) : v.rejectWith(g, [S, C, f]), S.statusCode(b), b = void 0, d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, p, l ? h : f]), y.fireWith(g, [S, C]), d && (m.trigger("ajaxComplete", [S, p]), --fe.active || fe.event.trigger("ajaxStop")));
      }"object" == (void 0 === t ? "undefined" : _typeof2(t)) && (n = t, t = void 0), n = n || {};var r,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f,
          p = fe.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? fe(g) : fe.event,
          v = fe.Deferred(),
          y = fe.Callbacks("once memory"),
          b = p.statusCode || {},
          x = {},
          w = {},
          C = "canceled",
          S = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!a) for (a = {}; t = Dt.exec(o);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? o : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) S.always(e[S.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return r && r.abort(t), i(0, t), this;
        } };if (v.promise(S), p.url = ((t || p.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Le) || [""], null == p.crossDomain) {
        l = te.createElement("a");try {
          l.href = p.url, l.href = l.href, p.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), K(Ot, p, n, S), c) return S;(d = fe.event && p.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), s = p.url.replace(qt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (f = p.url.slice(s.length), p.data && (s += (At.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(jt, "$1"), f = (At.test(s) ? "&" : "?") + "_=" + St++ + f), p.url = s + f), p.ifModified && (fe.lastModified[s] && S.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && S.setRequestHeader("If-None-Match", fe.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);for (h in p.headers) {
        S.setRequestHeader(h, p.headers[h]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = K(Pt, p, n, S)) {
        if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), c) return S;p.async && p.timeout > 0 && (u = e.setTimeout(function () {
          S.abort("timeout");
        }, p.timeout));try {
          c = !1, r.send(x, i);
        } catch (e) {
          if (c) throw e;i(-1, e);
        }
      } else i(-1, "No Transport");return S;
    }, getJSON: function getJSON(e, t, n) {
      return fe.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return fe.get(e, void 0, t, "script");
    } }), fe.each(["get", "post"], function (e, t) {
    fe[t] = function (e, n, i, r) {
      return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({ url: e, type: t, dataType: r, data: n, success: i }, fe.isPlainObject(e) && e));
    };
  }), fe._evalUrl = function (e) {
    return fe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, fe.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return fe.isFunction(e) ? this.each(function (t) {
        fe(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = fe(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = fe.isFunction(e);return this.each(function (n) {
        fe(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        fe(this).replaceWith(this.childNodes);
      }), this;
    } }), fe.expr.pseudos.hidden = function (e) {
    return !fe.expr.pseudos.visible(e);
  }, fe.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, fe.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Mt = { 0: 200, 1223: 204 },
      zt = fe.ajaxSettings.xhr();he.cors = !!zt && "withCredentials" in zt, he.ajax = zt = !!zt, fe.ajaxTransport(function (t) {
    var _n4, i;if (he.cors || zt && !t.crossDomain) return { send: function send(r, s) {
        var o,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) {
          a[o] = t.xhrFields[o];
        }t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");for (o in r) {
          a.setRequestHeader(o, r[o]);
        }_n4 = function n(e) {
          return function () {
            _n4 && (_n4 = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n4(), i = a.onerror = _n4("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n4 && i();
          });
        }, _n4 = _n4("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n4) throw e;
        }
      }, abort: function abort() {
        _n4 && _n4();
      } };
  }), fe.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), fe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return fe.globalEval(e), e;
      } } }), fe.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), fe.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n5;return { send: function send(i, r) {
          t = fe("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n5 = function n(e) {
            t.remove(), _n5 = null, e && r("error" === e.type ? 404 : 200, e.type);
          }), te.head.appendChild(t[0]);
        }, abort: function abort() {
          _n5 && _n5();
        } };
    }
  });var Gt = [],
      _t = /(=)\?(?=&|$)|\?\?/;fe.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || fe.expando + "_" + St++;return this[e] = !0, e;
    } }), fe.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        s,
        o,
        a = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(_t, "$1" + r) : !1 !== t.jsonp && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return o || fe.error(r + " was not called"), o[0];
    }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
      o = arguments;
    }, i.always(function () {
      void 0 === s ? fe(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, Gt.push(r)), o && fe.isFunction(s) && s(o[0]), o = s = void 0;
    }), "script";
  }), he.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), fe.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, r, s;return t || (he.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ce.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, s), s && s.length && fe(s).remove(), fe.merge([], r.childNodes));
  }, fe.fn.load = function (e, t, n) {
    var i,
        r,
        s,
        o = this,
        a = e.indexOf(" ");return a > -1 && (i = U(e.slice(a)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof2(t)) && (r = "POST"), o.length > 0 && fe.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
      s = arguments, o.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      o.each(function () {
        n.apply(this, s || [e.responseText, t, e]);
      });
    }), this;
  }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    fe.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), fe.expr.pseudos.animated = function (e) {
    return fe.grep(fe.timers, function (t) {
      return e === t.elem;
    }).length;
  }, fe.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = fe.css(e, "position"),
          c = fe(e),
          d = {};"static" === l && (e.style.position = "relative"), a = c.offset(), s = fe.css(e, "top"), u = fe.css(e, "left"), ("absolute" === l || "fixed" === l) && (s + u).indexOf("auto") > -1 ? (i = c.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(u) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d);
    } }, fe.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        fe.offset.setOffset(this, e, t);
      });var t,
          n,
          i,
          r,
          s = this[0];return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), t = s.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + fe.css(e[0], "borderTopWidth", !0), left: i.left + fe.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - fe.css(n, "marginTop", !0), left: t.left - i.left - fe.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) {
          e = e.offsetParent;
        }return e || Ve;
      });
    } }), fe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;fe.fn[e] = function (i) {
      return je(this, function (e, i, r) {
        var s;return fe.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r ? s ? s[t] : e[i] : void (s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r);
      }, e, i, arguments.length);
    };
  }), fe.each(["top", "left"], function (e, t) {
    fe.cssHooks[t] = R(he.pixelPosition, function (e, n) {
      if (n) return n = D(e, t), rt.test(n) ? fe(e).position()[t] + "px" : n;
    });
  }), fe.each({ Height: "height", Width: "width" }, function (e, t) {
    fe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      fe.fn[i] = function (r, s) {
        var o = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === s ? "margin" : "border");return je(this, function (t, n, r) {
          var s;return fe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? fe.css(t, n, a) : fe.style(t, n, r, a);
        }, t, o ? r : void 0, o);
      };
    });
  }), fe.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), fe.holdReady = function (e) {
    e ? fe.readyWait++ : fe.ready(!0);
  }, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
    return fe;
  });var Bt = e.jQuery,
      Wt = e.$;return fe.noConflict = function (t) {
    return e.$ === fe && (e.$ = Wt), t && e.jQuery === fe && (e.jQuery = Bt), fe;
  }, t || (e.jQuery = e.$ = fe), fe;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof2(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[void 0 === e ? "undefined" : _typeof2(e)] || this.dependTypes[void 0 === e ? "undefined" : _typeof2(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof2(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return void 0 === e ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e);
};!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  e.extend(e.fn, { validate: function validate(t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
          n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
        }), this.on("submit.validate", function (t) {
          function i() {
            var i, r;return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r);
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    }, valid: function valid() {
      var t, n, i;return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
        (t = n.element(this) && t) || (i = i.concat(n.errorList));
      }), n.errorList = i), t;
    }, rules: function rules(t, n) {
      var i,
          r,
          s,
          o,
          a,
          u,
          l = this[0];if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, s = e.validator.staticRules(l), t) {case "add":
            e.extend(s, e.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages));break;case "remove":
            return n ? (u = {}, e.each(n.split(/\s/), function (e, t) {
              u[t] = s[t], delete s[t];
            }), u) : (delete r[l.name], s);}return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (a = o.required, delete o.required, o = e.extend({ required: a }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, { remote: a })), o;
      }
    } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function blank(t) {
      return !e.trim("" + e(t).val());
    }, filled: function filled(t) {
      var n = e(t).val();return null !== n && !!e.trim("" + n);
    }, unchecked: function unchecked(t) {
      return !e(t).prop("checked");
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 === arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return n;
      });
    }), t);
  }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      }, onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function onkeyup(t, n) {
        var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
      }, onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function highlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
      }, unhighlight: function unhighlight(t, n, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
      } }, setDefaults: function setDefaults(t) {
      e.extend(e.validator.defaults, t);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function t(t) {
          !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));var n = e.data(this.form, "validator"),
              i = "on" + t.type.replace(/^validate/, ""),
              r = n.settings;r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n,
            i = this.groups = {};e.each(this.settings.groups, function (t, n) {
          "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
            i[n] = t;
          });
        }), n = this.settings.rules, e.each(n, function (t, i) {
          n[t] = e.validator.normalizeRule(i);
        }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }return this.valid();
      }, element: function element(t) {
        var n,
            i,
            r = this.clean(t),
            s = this.validationTargetFor(r),
            o = this,
            a = !0;return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (i = this.groups[s.name]) && e.each(this.groups, function (e, t) {
          t === i && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
        }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a;
      }, showErrors: function showErrors(t) {
        if (t) {
          var n = this;e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
            return { message: e, element: n.findByName(t)[0] };
          }), this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t);
      }, resetElements: function resetElements(e) {
        var t;if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(e) {
        var t,
            n = 0;for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
        }return n;
      }, hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      }, hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var t = this.lastActive;return t && 1 === e.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      }, elements: function elements() {
        var t = this,
            n = {};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var i = this.name || e(this).attr("name");return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0));
        });
      }, clean: function clean(t) {
        return e(t)[0];
      }, errors: function errors() {
        var t = this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement + "." + t, this.errorContext);
      }, resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
      }, reset: function reset() {
        this.resetInternals(), this.currentElements = e([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, elementValue: function elementValue(t) {
        var n,
            i,
            r = e(t),
            s = t.type;return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n);
      }, check: function check(t) {
        t = this.validationTargetFor(this.clean(t));var n,
            i,
            r,
            s,
            o = e(t).rules(),
            a = e.map(o, function (e, t) {
          return t;
        }).length,
            u = !1,
            l = this.elementValue(t);if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
          if ("string" != typeof (l = s.call(t, l))) throw new TypeError("The normalizer should return a string value.");delete o.normalizer;
        }for (i in o) {
          r = { method: i, parameters: o[i] };try {
            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === a) {
              u = !0;continue;
            }if (u = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!n) return this.formatAndAdd(t, r), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
          }
        }if (!u) return this.objectLength(o) && this.successList.push(t), !0;
      }, customDataMessage: function customDataMessage(t, n) {
        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
      }, customMessage: function customMessage(e, t) {
        var n = this.settings.messages[e];return n && (n.constructor === String ? n : n[t]);
      }, findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      }, defaultMessage: function defaultMessage(t, n) {
        "string" == typeof n && (n = { method: n });var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
            r = /\$?\{(\d+)\}/g;return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i;
      }, formatAndAdd: function formatAndAdd(e, t) {
        var n = this.defaultMessage(e, t);this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function defaultShowErrors() {
        var e, t, n;for (e = 0; this.errorList[e]; e++) {
          n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
          this.showLabel(this.successList[e]);
        }if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
          this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        }this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(t, n) {
        var i,
            r,
            s,
            o,
            a = this.errorsFor(t),
            u = this.idOrName(t),
            l = e(t).attr("aria-describedby");a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", u) : 0 === a.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, n) {
          n === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
        })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(t) {
        var n = this.escapeCssMeta(this.idOrName(t)),
            i = e(t).attr("aria-describedby"),
            r = "label[for='" + n + "'], label[for='" + n + "'] *";return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
      }, escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      }, idOrName: function idOrName(e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
      }, checkable: function checkable(e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function findByName(t) {
        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
      }, getLength: function getLength(t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function depend(e, t) {
        return !this.dependTypes[void 0 === e ? "undefined" : _typeof(e)] || this.dependTypes[void 0 === e ? "undefined" : _typeof(e)](e, t);
      }, dependTypes: { boolean: function boolean(e) {
          return e;
        }, string: function string(t, n) {
          return !!e(t, n.form).length;
        }, function: function _function(e, t) {
          return e(t);
        } }, optional: function optional(t) {
        var n = this.elementValue(t);return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(t, n) {
        --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(t, n) {
        return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
      }, destroy: function destroy() {
        this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(t, n) {
      t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function classRules(t) {
      var n = {},
          i = e(t).attr("class");return i && e.each(i.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, normalizeAttributeRule: function normalizeAttributeRule(e, t, n, i) {
      /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0);
    }, attributeRules: function attributeRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(t) {
      var n,
          i,
          r = {},
          s = e(t),
          o = t.getAttribute("type");for (n in e.validator.methods) {
        i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, n, i);
      }return r;
    }, staticRules: function staticRules(t) {
      var n = {},
          i = e.data(t.form, "validator");return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function normalizeRules(t, n) {
      return e.each(t, function (i, r) {
        if (!1 !== r) {
          if (r.param || r.depends) {
            var s = !0;switch (_typeof(r.depends)) {case "string":
                s = !!e(r.depends, n.form).length;break;case "function":
                s = r.depends.call(n, n);}s ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
          }
        } else delete t[i];
      }), e.each(t, function (i, r) {
        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
      }), e.each(["minlength", "maxlength"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        var n;t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]));
      }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
    }, normalizeRule: function normalizeRule(t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function addMethod(t, n, i) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function required(t, n, i) {
        if (!this.depend(i, n)) return "dependency-mismatch";if ("select" === n.nodeName.toLowerCase()) {
          var r = e(n).val();return r && r.length > 0;
        }return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0;
      }, email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
      }, date: function date(e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }, dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      }, number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      }, digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, minlength: function minlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i;
      }, maxlength: function maxlength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r <= i;
      }, rangelength: function rangelength(t, n, i) {
        var r = e.isArray(t) ? t.length : this.getLength(t, n);return this.optional(n) || r >= i[0] && r <= i[1];
      }, min: function min(e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function max(e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function range(e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, step: function step(t, n, i) {
        var r,
            s = e(n).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            a = ["text", "number", "range"],
            u = new RegExp("\\b" + s + "\\b"),
            l = function l(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);return t && t[1] ? t[1].length : 0;
        },
            c = function c(e) {
          return Math.round(e * Math.pow(10, r));
        },
            d = !0;if (s && !u.test(a.join())) throw new Error(o);return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d;
      }, equalTo: function equalTo(t, n, i) {
        var r = e(i);return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          e(n).valid();
        }), t === r.val();
      }, remote: function remote(t, n, i, r) {
        if (this.optional(n)) return "dependency-mismatch";r = "string" == typeof r && r || "remote";var s,
            o,
            a,
            u = this.previousValue(n, r);return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && { url: i } || i, a = e.param(e.extend({ data: t }, i.data)), u.old === a ? u.valid : (u.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: o, context: s.currentForm, success: function success(e) {
            var i,
                o,
                a,
                l = !0 === e || "true" === e;s.settings.messages[n.name][r] = u.originalMessage, l ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = e || s.defaultMessage(n, { method: r, parameters: t }), i[n.name] = u.message = o, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l);
          } }, i)), "pending");
      } } });var t,
      n = {};return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
    var r = e.port;"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
  }) : (t = e.ajax, e.ajax = function (i) {
    var r = ("mode" in i ? i : e.ajaxSettings).mode,
        s = ("port" in i ? i : e.ajaxSettings).port;return "abort" === r ? (n[s] && n[s].abort(), n[s] = t.apply(this, arguments), n[s]) : t.apply(this, arguments);
  }), e;
});var GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly",
    GoogleAuth,
    SCOPE = "https://www.googleapis.com/auth/drive.metadata.readonly";