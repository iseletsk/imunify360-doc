(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{182:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[a("span",{staticClass:"notranslate"},[a("a",{attrs:{href:"https://www.configserver.com/cp/csf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigServer Security & Firewall (CSF)"),a("OutboundLink")],1)]),t._v(" integration is intended to allow to use "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" along with Imunify360.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("If "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" is "),a("strong",[t._v("enabled")]),t._v(" Imunify360 uses "),a("span",{staticClass:"notranslate"},[t._v("Login Failure Daemon (LFD)")]),t._v(" as source for security events instead of "),a("span",{staticClass:"notranslate"},[a("a",{attrs:{href:"https://www.ossec.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSSEC"),a("OutboundLink")],1)]),t._v(". "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" integration is enabled automatically when Imunify360 detects that "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" is running. No additional configuration is needed.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[a("span",{staticClass:"notranslate"},[a("a",{attrs:{href:"https://configserver.com/cp/cxs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigServer eXploit Scanner"),a("OutboundLink")],1),t._v(" (CXS)")]),t._v(" has different types of malware scanning, which affects "),a("span",{staticClass:"notranslate"},[t._v("Imunify360 Malware Scanner")]),t._v(" functionality. Below we describe how to make "),a("span",{staticClass:"notranslate"},[t._v("Imunify360 Malware Scanner")]),t._v(" work properly. These functionalities can be configured at "),a("span",{staticClass:"notranslate"},[a("router-link",{attrs:{to:"/dashboard/#settings"}},[t._v("Malware Scanner settings")])],1),t._v(" page, but "),a("span",{staticClass:"notranslate"},[t._v("CXS")]),t._v(" itself must be configured  as follows:")]),t._v(" "),a("ol",[t._m(14),t._v(" "),t._m(15),t._v(" "),a("li",[t._m(16),t._v(" "),a("p",[t._v("Imunify360 supports only "),a("span",{staticClass:"notranslate"},[a("a",{attrs:{href:"https://www.pureftpd.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pure-FTPd"),a("OutboundLink")],1)]),t._v(". For "),a("span",{staticClass:"notranslate"},[t._v("Pure-FTPd CXS")]),t._v(" launches pure-uploadscript for the scan. Any pure-uploadscript used by "),a("span",{staticClass:"notranslate"},[t._v("CXS")]),t._v(" must be disabled.")])]),t._v(" "),t._m(17)]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ids-integrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ids-integrations","aria-hidden":"true"}},[this._v("#")]),this._v(" IDS Integrations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"csf-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csf-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" CSF Integration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If "),s("span",{staticClass:"notranslate"},[this._v("CSF")]),this._v(" is "),s("strong",[this._v("disabled")]),this._v(" then Imunify360 becomes a primary "),s("span",{staticClass:"notranslate"},[this._v("IDS")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("span",{staticClass:"notranslate"},[t._v("White List")]),t._v(" is loaded from "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(". Imunify360 and "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" work without any additional actions.")]),t._v(" "),a("li",[a("span",{staticClass:"notranslate"},[t._v("Gray List")]),t._v(" is not imported from "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" but it is possible to view and manage "),a("span",{staticClass:"notranslate"},[t._v("Gray List")]),t._v(" in Imunify360 interface. All changes "),a("strong",[t._v("will not")]),t._v(" be automatically exported to "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(".")]),t._v(" "),a("li",[a("span",{staticClass:"notranslate"},[t._v("Black List")]),t._v(" is not imported from "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" but it is possible to view and manage "),a("span",{staticClass:"notranslate"},[t._v("Black List")]),t._v(" in Imunify360 interface. All changes "),a("strong",[t._v("will not")]),t._v(" be automatically exported to "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(".")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("span",{staticClass:"notranslate"},[t._v("Black List, Gray List")]),t._v(", and "),a("span",{staticClass:"notranslate"},[t._v("White List")]),t._v(" can be managed in Imunify360 regardless of "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(".")]),t._v(" "),a("li",[a("span",{staticClass:"notranslate"},[t._v("CSF Allow, Deny")]),t._v(" and "),a("span",{staticClass:"notranslate"},[t._v("Ignore Lists")]),t._v(" are not automatically imported from "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(". They can still be managed using "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" interface.")]),t._v(" "),a("li",[t._v("Imunify360 will not block addresses from "),a("span",{staticClass:"notranslate"},[t._v("CSF Allow")]),t._v(" and "),a("span",{staticClass:"notranslate"},[t._v("Ignore Lists")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/firewallblacklistwarning_zoom70.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("It is possible to enable "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" when Imunify360 is already running. All IP addresses from "),a("span",{staticClass:"notranslate"},[t._v("Imunify360 White List")]),t._v(" will be exported to "),a("span",{staticClass:"notranslate"},[t._v("CSF ignore list")]),t._v(". In about 30 seconds after "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" started, Imunify360 switches to "),a("span",{staticClass:"notranslate"},[t._v("CSF Integration")]),t._v(" mode.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("To check if "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" integration is enabled go to "),a("span",{staticClass:"notranslate"},[t._v("Imunify360 → Firewall tab → White List")]),t._v(" section and check if there is a warning message "),a("span",{staticClass:"notranslate"},[t._v('"'),a("em",[t._v("CSF is enabled. Please manage IPs whitelisted in CSF using CSF user interface or config file")]),t._v('"')]),t._v(". It means that "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" and Imunify360 integration processed successfully.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("To get events from "),a("span",{staticClass:"notranslate"},[t._v("Login Failure Daemon (LFD)")]),t._v(", Imunify360 automatically replaces "),a("span",{staticClass:"notranslate"},[a("code",[t._v("BLOCK_REPORT")])]),t._v(" variable to the file path of Imunify360 script.\nIn "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" integration mode, when some IP address is blocked by "),a("span",{staticClass:"notranslate"},[t._v("LFD, Imunify360,")]),t._v(" add this IP address to its "),a("span",{staticClass:"notranslate"},[t._v("Graylist")]),t._v(" and then "),a("strong",[t._v("remove it from "),a("span",{staticClass:"notranslate"},[t._v("CSF deny/tempdeny lists")])]),t._v(". The latter is done to allow IP to have access to the Captcha and to store all automatically blocked IP addresses in a single place. Thus, no IP automatically added to "),a("span",{staticClass:"notranslate"},[t._v("CSF deny/tempdeny lists")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("span",{staticClass:"notranslate"},[this._v("Mod_security")]),this._v(" recommendations")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("When "),a("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(" is configured with "),a("span",{staticClass:"notranslate"},[t._v("SecRuleEngine On")]),t._v(" (blocking mode), "),a("span",{staticClass:"notranslate"},[t._v("CSF")]),t._v(" blocks IP addresses by "),a("span",{staticClass:"notranslate"},[t._v("mod_security")]),t._v(" events. The number of events to block IP address is defined by "),a("span",{staticClass:"notranslate"},[a("code",[t._v("LF_MODSEC")])]),t._v(" variable in "),a("span",{staticClass:"notranslate"},[a("code",[t._v("csf.conf")])]),t._v(". This can lead to a large number of false positives.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We recommend to set "),s("span",{staticClass:"notranslate"},[s("code",[this._v("LF_MODSEC")])]),this._v(" variable to 0.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In this case, Imunify360 will block IPs only by "),s("span",{staticClass:"notranslate"},[this._v("mod_security")]),this._v(" events with high severity.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cxs-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cxs-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" CXS Integration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[this._v("Automatically scan all modified files")])])]),this._v(" "),s("p",[s("span",{staticClass:"notranslate"},[this._v("CXS Watch")]),this._v(" daemon must be disabled.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[this._v("Automatically scan any files uploaded using web")])])]),this._v(" "),s("p",[s("span",{staticClass:"notranslate"},[this._v("CXS ModSecurity")]),this._v(" vendor should be disabled.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"notranslate"},[s("em",[this._v("Automatically scan any file uploaded using ftp")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("em",[this._v("On-Demand scanning")])])]),this._v(" "),s("p",[this._v("This type of scanning can be always run by Imunify360 and "),s("span",{staticClass:"notranslate"},[this._v("CXS")]),this._v(" separately. No special actions required.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("Imunify360 doesn’t make any imports from "),s("span",{staticClass:"notranslate"},[this._v("CXS")]),this._v(".")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);