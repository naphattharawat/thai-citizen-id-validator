(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.validateThaiID=e())})(this,function(){"use strict";function t(e){if(!/^\d{13}$/.test(e))return!1;let i=0;for(let n=0;n<12;n++)i+=Number(e[n])*(13-n);return(11-i%11)%10===Number(e[12])}return t});