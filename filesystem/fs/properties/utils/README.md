# utils

### Subfunctions, etc.

| Name                                             | Type    | Definition |
| ------------------------------------------------ | ------- | ---------- |
| [find](properties/find.md)                       |         |            |
| [resolvePath](properties/resolvepath.md)         |         |            |
| [getMenuOpenWith](properties/getmenuopenwith.md) |         |            |
| [getFileMenu](properties/getfilemenu.md)         |         |            |
| [replaceExt](properties/replaceext.md)           |         |            |
| [isFolder](properties/isfolder.md)               | Boolean |            |
| [isFolderEmpty](properties/isfolderempty.md)     |         |            |
| [isShortcut](properties/isshortcut.md)           |         |            |
| [isDownloadable](properties/isdownloadable.md)   |         |            |
| [getName](properties/getname.md)                 |         |            |
| [getFileName](properties/getfilename.md)         |         |            |
| [getFolderName](properties/getfoldername.md)     |         |            |
| [getFolderPath](properties/getfolderpath.md)     |         |            |
| [getExt](properties/getext.md)                   |         |            |
| [getMime](properties/getmime.md)                 |         |            |
| [getIcon](properties/geticon.md)                 |         |            |
| [normalizeIcon](properties/normalizeicon.md)     |         |            |
| [getInfo](properties/getinfo.md)                 |         |            |
| [getOpeners](properties/getopeners.md)           |         |            |
| [parseAccept](properties/parseaccept.md)         |         |            |
| [getPathObj](properties/getpathobj.md)           |         |            |
| [exist](properties/exist.md)                     |         |            |
| [getFolderObj](properties/getfolderobj.md)       |         |            |
| [iteratePath](properties/iteratepath.md)         |         |            |

### Return

```javascript
{
  "find": "function(e, t) {\n        return $io.find(e, t, le._files, \"/\", [\".\", \"..\"])\n    }",
  "resolvePath": "function(e) {\n        return e = (e = (e = (e = e.replace(/^~|\\$HOME/g, le._path.home)).replace(/~|\\$HOME/g, le._path.home.replace(/^\\//, \"\"))).replace(/\\$SKIN/g, le._path.skin)).replace(/\\/\\//g, \"/\")\n    }",
  "getMenuOpenWith": "function(i) {\n        i || (i = []), \"string\" == typeof i && (i = [i]);\n        var n = [],\n            s = [];\n        return $io.arr.all(i, function(e) {\n            1 === e.nodeType && (e = e.getAttribute(\"data-path\"));\n            var t = r.utils.getOpeners(e);\n            (t = t.concat(\"hexed\", \"code\", \"iframe\")) && $io.arr.all(t, function(t) {\n                if (-1 === s.indexOf(t)) {\n                    s.push(t);\n                    var e = le._apps[t].icon ? r.utils.normalizeIcon(le._apps[t].icon) : \"/c/sys/skins/\" + le._settings.skin + \"/programs.png\";\n                    n.push({\n                        name: le._apps[t].name || $io.str.capitalise(t),\n                        icon: e,\n                        action: function(e) {\n                            $io.arr.all(i, function(e) {\n                                1 === e.nodeType && (e = e.getAttribute(\"data-path\")), setTimeout(function() {\n                                    $exe(t + ' \"' + e + '\"')\n                                }, 0)\n                            })\n                        }\n                    })\n                }\n            })\n        }), n.length ? n : [{\n            name: \"No programs found...\",\n            disabled: !0\n        }]\n    }",
  "getFileMenu": "function(e, s, l) {\n        \"function\" == typeof s && (l = s, s = !1);\n        var t = $io.obj.getPath(le._files, e, \"/\"),\n            r = [],\n            o = {};\n        return $io.obj.all(t, function(e, i) {\n            if (\".\" !== i && \"..\" !== i) {\n                var n = [];\n                o[i] = [], $io.obj.all(e, function(e, t) {\n                    \".\" !== t && \"..\" !== t && (o[i].push(t), n.push({\n                        name: t,\n                        radio: s,\n                        folder: i,\n                        action: l\n                    }))\n                }), o[i] = o[i].sort(function(e, t) {\n                    return e.localeCompare(t)\n                }), n = n.sort(function(e, t) {\n                    return e.name.localeCompare(t.name)\n                }), r.push({\n                    name: i,\n                    items: n\n                })\n            }\n        }), r = r.sort(function(e, t) {\n            return e.name.localeCompare(t.name)\n        }), {\n            path: e,\n            foldersList: Object.keys(o),\n            folders: o,\n            menu: r\n        }\n    }",
  "replaceExt": "function(e, t) {\n        return r.utils.getExt(e) ? e.replace(/\\.[0-9a-z]+$/, t ? \".\" + t : \"\") : e + (t ? \".\" + t : \"\")\n    }",
  "isFolder": "function(e) {\n        return \"/\" === e.slice(-1)\n    }",
  "isFolderEmpty": "function(e, t) {\n        var i = !0;\n        $file.iterateFolder(e, function(e) {\n            r.utils.isFolder(e) || (i = !1)\n        }).done(function() {\n            t(i)\n        })\n    }",
  "isShortcut": "function(e) {\n        return /\\.lnk42$/.test(e)\n    }",
  "isDownloadable": "function(e) {\n        if (e) {\n            var t = e.dataset.url || e.href;\n            return !(t && \"/\" !== t.slice(-1))\n        }\n        var n = !1;\n        return $file.eachSelection(function(e, t) {\n            var i = t.dataset.url || t.href;\n            if (!i || \"/\" === i.slice(-1)) return n = !1;\n            n = !0\n        }), n\n    }",
  "getName": "function(e) {\n        var t = (\"string\" == typeof e ? e : \"\").split(\"/\");\n        return \"/\" === e.slice(-1) ? t[t.length - 2] : t.pop()\n    }",
  "getFileName": "function(e) {\n        return (\"string\" == typeof e ? e : \"\").split(\"/\").pop()\n    }",
  "getFolderName": "function(e) {\n        var t = (\"string\" == typeof e ? e : \"\").split(\"/\");\n        return \"/\" === e.slice(-1) ? t[t.length - 2] : \"\"\n    }",
  "getFolderPath": "function(e) {\n        return (\"string\" == typeof e ? e : \"\").split(\"/\").slice(0, -1).join(\"/\") + \"/\"\n    }",
  "getExt": "function(e) {\n        var t = (e || \"\").match(/(?:\\.)([0-9a-z]+)(?:[!?].+)?$/i);\n        return t && t[1] ? t[1].toLowerCase() : \"\"\n    }",
  "getMime": "function(e) {\n        return s(e, r.utils.getExt(e))\n    }",
  "getIcon": "function(e) {\n        if (r.utils.isFolder(e)) return o(e);\n        var t = r.utils.getExt(e);\n        return l(0, t, s(e, t))\n    }",
  "normalizeIcon": "function(e) {\n        return 0 === e.indexOf(\"/\") || 0 === e.indexOf(\"http\") ? e : \"/c/sys/skins/\" + le._settings.skin + \"/\" + e\n    }",
  "getInfo": "function(e) {\n        if (r.utils.isFolder(e)) {\n            var t = \"\";\n            return \"/a/\" === e ? t = \"Storage (A:)\" : \"/c/\" === e && (t = \"System (C:)\"), {\n                icon: o(e),\n                name: t\n            }\n        }\n        var i = r.utils.getExt(e),\n            n = s(e, i);\n        return {\n            ext: i,\n            mime: n,\n            icon: l(0, i, n),\n            name: t = r.utils.getName(e)\n        }\n    }",
  "getOpeners": "function(e) {\n        var t = r.utils.getExt(e),\n            i = s(e, t),\n            n = [];\n        return le._settings.defaultApp[t] && (n = n.concat(le._settings.defaultApp[t])), le._get.ext.apps[t] && (n = n.concat(le._get.ext.apps[t])), i && $io.arr.all(le._get.mime.apps, function(e) {\n            e[0].test(i) && (n ? -1 == n.indexOf(e[1]) && n.push(e[1]) : n = [e[1]])\n        }), n\n    }",
  "parseAccept": "function(e) {\n        var t = [],\n            i = {};\n        return $io.arr.all(e.split(\",\"), function(e) {\n            0 === e.indexOf(\".\") ? (i.ext || (i.ext = []), i.ext.push(e.replace(/^\\./, \"\"))) : t.push($io.reg.escape(e.replace(\"*\", \"_4_²_\")))\n        }), t.length && (i.mimetype = new RegExp(t.join(\"|\").replace(/_4_²_/g, \".*\"))), i\n    }",
  "getPathObj": "function(e, t) {\n        e || (e = le._path.home), 1 < (e = r.utils.resolvePath(e)).length && \"/\" === e.slice(-1) && (e = e.slice(0, -1)), \"/\" !== (t = t || \"\").slice(-1) && (t += \"/\"), e = 0 === e.indexOf(\"/\") ? e : t + e;\n        var i = $io.obj.getPath(le._files, e, \"/\");\n        if (void 0 !== i && \"number\" != typeof i) {\n            var n = \"/\" + $file.getTruePath(i);\n            return 1 < n.length && \"/\" === n.slice(-1) && (n = n.slice(0, -1)), {\n                cwd: n,\n                obj: i\n            }\n        }\n    }",
  "exist": "function(e, t) {\n        e || (e = le._path.home), 1 < (e = r.utils.resolvePath(e)).length && \"/\" === e.slice(-1) && (e = e.slice(0, -1)), \"/\" !== (t = t || \"\").slice(-1) && (t += \"/\"), e = 0 === e.indexOf(\"/\") ? e : t + e;\n        var i = $io.obj.getPath(le._files, e, \"/\");\n        return void 0 !== i && i\n    }",
  "getFolderObj": "function(e, t) {\n        var i = r.utils.getFolderPath(e);\n        return r.utils.getPathObj(i, t)\n    }",
  "iteratePath": "function(e, t) {\n        var i = r.utils.getPathObj(e, t),\n            n = [],\n            s = [],\n            l = [];\n        if (i) return $io.obj.all(i.obj, function(e, t) {\n            \".\" !== t && \"..\" !== t && (r.utils.isShortcut(t) ? l.push(t) : \"object\" == typeof e ? n.push(t) : s.push(t))\n        }), {\n            tree: i,\n            obj: i.obj,\n            cwd: i.cwd,\n            dirs: n,\n            files: s,\n            lnks: l\n        }\n    }"
}
```
