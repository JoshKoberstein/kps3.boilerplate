!function(a,b){"use strict";function c(a){if("undefined"==typeof f[a]||!f[a])throw new Error('Module "'+a+'" has not been defined.');if("undefined"!=typeof g[a])return g[a];var d=[],e=f[a].deps,h=e.length;if(h)for(var i=0;h>i;i++)d.push(c(e[i]));var j=f[a].fn.apply(b,d);return g[a]=j,j}function d(a,c){return"undefined"==typeof g[a]?!1:("function"==typeof g[a].destroy&&g[a].destroy.call(b),g[a]=null,void("function"==typeof c&&c.call(b)))}function e(a,b,c){"undefined"==typeof c&&(c=b,b=[]),f[a]={"module":a,"deps":b,"fn":c||function(){return c}}}var f={},g={},h={"define":e,"require":c,"unload":d};"undefined"!=typeof a.namespace?a.namespace.module=h:a.module=h}(window);